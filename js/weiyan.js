// ============================================================
// weiyan.js（修复版）—— 由 build_weiyan.js 自动拼装生成
// 改动点（其余逻辑/密钥/接口与原版完全一致）：
//   1) utf8Decode：UTF-8(严格) -> GBK -> 原样 三级解码，
//      修复服务端 GBK 中文报错被误报为“响应解密失败”的问题
//   2) 新增 CODE_MSG 错误码映射表：登录报错直接显示中文原因
//   3) login/dismiss：解密或解析失败时，抛出服务器原始返回，便于排查
// ============================================================

let loginButton = document.querySelector('button[type="submit"]');
let dismissButton = document.querySelector('button[type="dismissButton"]');

// MD5（紧凑实现，已通过 node crypto 与真实服务器 sign 双重向量验证）
function md5(message) {
  // 将中文消息转换为 UTF-8 字节序列
  message = unescape(encodeURIComponent(message));
  function rl(v, s) { return ((v << s) | (v >>> (32 - s))) | 0; }
  var K = [];
  for (var i = 1; i <= 64; i++) K.push(Math.floor(Math.abs(Math.sin(i)) * 4294967296) | 0);
  var len = message.length;
  var words = [];
  for (var i = 0; i < len; i++) words[i >> 2] = (words[i >> 2] || 0) | (message.charCodeAt(i) << (8 * (i % 4)));
  words[len >> 2] = (words[len >> 2] || 0) | (0x80 << (8 * (len % 4)));
  var total = (((len + 8) >> 6) + 1) * 16;
  while (words.length < total) words.push(0);
  words[total - 2] = (len << 3) | 0;
  words[total - 1] = (len >>> 29) | 0;
  function F(x, y, z) { return (x & y) | ((~x) & z); }
  function G(x, y, z) { return (x & z) | (y & (~z)); }
  function H(x, y, z) { return (x ^ y ^ z); }
  function I(x, y, z) { return (y ^ (x | (~z))); }
  var Fs = [F, G, H, I];
  var Ss = [[7, 12, 17, 22], [5, 9, 14, 20], [4, 11, 16, 23], [6, 10, 15, 21]];
  var xOrd = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    [1, 6, 11, 0, 5, 10, 15, 4, 9, 14, 3, 8, 13, 2, 7, 12],
    [5, 8, 11, 14, 1, 4, 7, 10, 13, 0, 3, 6, 9, 12, 15, 2],
    [0, 7, 14, 5, 12, 3, 10, 1, 8, 15, 6, 13, 4, 11, 2, 9]
  ];
  var a = 0x67452301 | 0, b = 0xefcdab89 | 0, c = 0x98badcfe | 0, d = 0x10325476 | 0;
  for (var k = 0; k < total; k += 16) {
    var A = a, B = b, C = c, D = d;
    for (var r = 0; r < 4; r++) {
      for (var i = 0; i < 16; i++) {
        var f = Fs[r](b, c, d);
        var tmp = (a + f + words[k + xOrd[r][i]] + K[r * 16 + i]) | 0;
        var nb = (b + rl(tmp, Ss[r][i % 4])) | 0;
        a = d; d = c; c = b; b = nb;
      }
    }
    a = (a + A) | 0; b = (b + B) | 0; c = (c + C) | 0; d = (d + D) | 0;
  }
  function hex(v) {
    var out = '';
    for (var i = 0; i < 4; i++) out += ('0' + ((v >>> (i * 8)) & 255).toString(16)).slice(-2);
    return out;
  }
  return hex(a) + hex(b) + hex(c) + hex(d);
}

function rc4Encrypt(text, key) {
  text = utf8Encode(text);
  key = utf8Encode(key);
  let s = new Array(256);
  let j = 0;
  let x;
  for (let i = 0; i < 256; i++) { s[i] = i; }
  for (let i = 0; i < 256; i++) {
    j = (j + s[i] + key.charCodeAt(i % key.length)) % 256;
    x = s[i]; s[i] = s[j]; s[j] = x;
  }
  let i = 0; j = 0;
  let ciphertext = '';
  for (let n = 0; n < text.length; n++) {
    i = (i + 1) % 256;
    j = (j + s[i]) % 256;
    x = s[i]; s[i] = s[j]; s[j] = x;
    ciphertext += String.fromCharCode(text.charCodeAt(n) ^ s[(s[i] + s[j]) % 256]);
  }
  return bin2hex(ciphertext);
}

function rc4Decrypt(ciphertext, key) {
  ciphertext = hex2bin(normalizeHexCiphertext(ciphertext));
  key = utf8Encode(key);
  let s = new Array(256);
  let j = 0;
  let x;
  for (let i = 0; i < 256; i++) { s[i] = i; }
  for (let i = 0; i < 256; i++) {
    j = (j + s[i] + key.charCodeAt(i % key.length)) % 256;
    x = s[i]; s[i] = s[j]; s[j] = x;
  }
  let i = 0; j = 0;
  let plaintext = '';
  for (let n = 0; n < ciphertext.length; n++) {
    i = (i + 1) % 256;
    j = (j + s[i]) % 256;
    x = s[i]; s[i] = s[j]; s[j] = x;
    plaintext += String.fromCharCode(ciphertext.charCodeAt(n) ^ s[(s[i] + s[j]) % 256]);
  }
  return utf8Decode(plaintext);
}

function utf8Encode(str) { return unescape(encodeURIComponent(str)); }

// ★ 改动点 1：三级解码（UTF-8 严格 -> GBK -> 原样返回），绝不抛“响应解密失败”
function utf8Decode(str) {
  var bytes = new Uint8Array(str.length);
  for (var i = 0; i < str.length; i++) bytes[i] = str.charCodeAt(i) & 0xff;
  try { return new TextDecoder('utf-8', { fatal: true }).decode(bytes); } catch (e) {}
  try { return new TextDecoder('gbk').decode(bytes); } catch (e) {}
  return str;
}

function normalizeHexCiphertext(ciphertext) {
  let value = String(ciphertext == null ? "" : ciphertext).trim();
  value = value.replace(/^['"]|['"]$/g, "");
  // 部分网关会在密文前附加三位长度/状态前缀，例如“690 f45f...”。
  value = value.replace(/^\d{3}\s+/, "").replace(/\s+/g, "");
  if (value.length % 2 !== 0 && /^\d{3}/.test(value)) { value = value.slice(3); }
  if (!value || value.length % 2 !== 0 || !/^[0-9a-f]+$/i.test(value)) { throw new Error("响应格式错误"); }
  return value;
}

function hex2bin(hex) {
  let bytes = [];
  for (let i = 0; i < hex.length; i += 2) { bytes.push(parseInt(hex.substr(i, 2), 16)); }
  return String.fromCharCode.apply(String, bytes);
}

function bin2hex(bin) {
  let hex = '';
  for (let i = 0; i < bin.length; i++) { hex += ('0' + bin.charCodeAt(i).toString(16)).slice(-2); }
  return hex;
}

function wyDateTime(timestamp) {
  const date = new Date(timestamp * 1000);
  return date.toLocaleString();
}

function getDeviceId() {
  var deviceId = localStorage.getItem('deviceId');
  if (!deviceId) { deviceId = generateDeviceId(); localStorage.setItem('deviceId', deviceId); }
  return deviceId;
}

function generateDeviceId() {
  var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var deviceId = '';
  for (var i = 0; i < 16; i++) { deviceId += chars.charAt(Math.floor(Math.random() * chars.length)); }
  return deviceId;
}

function getRandomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

// 配置区
// 微验应用配置：CODE 50515 为后台标识，本协议使用 APPID/APPKEY/RC4KEY。
var appid = '64950';
var appkey = 'lk2sj9xvYLsyX4s0';
var rc4key = '20fb25ac21dae07737358ebc0b48aec8';
var wyurl = 'https://wy.llua.cn/api/';
var loginSuccessCode = 50515;
var timeToleranceSeconds = 10;

// ★ 改动点 2：错误码 -> 中文提示映射表（来源：微验接口文档）
// 遇到表里没有的 code，往这里加一行即可。
// 注：文档中 101 / 103 / 109 / 110 / 111 / 151 未在截图里给出，需要时自行补充。
var CODE_MSG = {
  200:    "成功",
  201:    "[取msg变量信息]",   // 特殊：登录逻辑遇到 201 会直接显示服务器 msg 内容
  100:    "未绑定应用ID",
  102:    "应用已关闭",
  104:    "签名为空",
  105:    "数据过期",
  106:    "签名错误",
  107:    "数据为空",
  108:    "未提交时间变量",
  112:    "未提交设备码变量",
  148:    "卡密为空",
  149:    "卡密不存在",
  150:    "卡密已使用",        // 注：本站实测 code 150 也返回过“登录设备已达上限”；msg 能正常解码时优先显示 msg
  152:    "卡密已到期",
  153:    "卡密被禁用",
  50515:  "登录成功"           // 本应用（appid 64950）的登录成功码
};

function postData(url, params) {
  let formData = new FormData();
  for (let key in params) { formData.append(key, params[key]); }
  return axios.post(url, formData, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
}

// 从返回结果挑一条“可读”提示：msg 已正确解码成中文就优先用 msg（服务器真实文案），
// 否则退回错误码映射表（防止老 WebView 不支持 GBK 解码时显示乱码）。
function wyTip(result) {
  var m = result && result.msg;
  if (typeof m === 'string' && /[\u4e00-\u9fff]/.test(m)) return m;
  return CODE_MSG[result.code] || (m != null && m !== "" ? String(m) : null);
}

// Shared login API for the Vue panel and the standalone web/index.html page.
// ★ 改动点 3：报错返回明文（真实原因 / 原始返回），不再笼统报“解密失败”
window.WeiyanAuth = {
  login: function(kami) {
    let time = Math.floor(new Date().getTime() / 1000);
    let markcode = getDeviceId();
    let value = getRandomInt(10000, 99999);
    let sign = md5("kami=" + kami + "&markcode=" + markcode + "&t=" + time + "&" + appkey);
    let data = rc4Encrypt("kami=" + kami + "&markcode=" + markcode + "&t=" + time + "&sign=" + sign + "&value=" + value, rc4key);
    return postData(wyurl, { id: 'kmlogon', app: appid, data: data, sign: sign }).then(response => {
      let result;
      try {
        result = JSON.parse(rc4Decrypt(response.data, rc4key));
      } catch (e) {
        // 解密/解析失败：把服务器原始返回直接抛出来，方便看到真实内容
        throw new Error("解析失败，原始返回: " + response.data);
      }
      if (result.check != md5(result.time + appkey + value)) { throw new Error("非法操作"); }
      if (result.code != loginSuccessCode) {
        // 201 特殊处理：直接取 msg 变量信息
        if (result.code == 201 && result.msg != null && result.msg !== "") {
          throw new Error(String(result.msg));
        }
        throw new Error(wyTip(result) || ("登录失败(错误码:" + result.code + ")"));
      }
      if (Math.abs(Number(result.time) - time) > timeToleranceSeconds) { throw new Error("非法操作"); }
      return result;
    });
  }
};

if (loginButton && !window.appVue) {
  loginButton.addEventListener('click', function() {
    //登录按钮
    let kami = document.querySelector('#card-key').value;
    window.WeiyanAuth.login(kami).then(data => {
      alert("登录成功，到期时间：" + wyDateTime(data.msg.vip));
    }).catch(error => {
      console.log('Error:', error);
      alert(error && error.message ? error.message : "登录失败");
    });
  });
}

if (dismissButton && !window.appVue) {
  dismissButton.addEventListener('click', function() {
    //解绑按钮
    let time = Math.floor(new Date().getTime() / 1000);
    let kami = document.querySelector('#card-key').value;
    let markcode = getDeviceId();
    let sign = md5("kami=" + kami + "&markcode=" + markcode + "&t=" + time + "&" + appkey);
    let data = rc4Encrypt("kami=" + kami + "&markcode=" + markcode + "&t=" + time + "&sign=" + sign, rc4key);
    postData(wyurl, { id: 'kmdismiss', app: appid, data: data, sign: sign }).then(response => {
      let data;
      try {
        data = JSON.parse(rc4Decrypt(response.data, rc4key));
      } catch (e) {
        alert("解析失败，原始返回: " + response.data);
        return;
      }
      if (data.code == 200) {
        alert("解绑成功\n剩余解绑次数" + data.msg.num);
      } else {
        alert(wyTip(data) || data.msg);
      }
    }).catch(error => {
      console.log('Error:', error);
      alert(error && error.message ? error.message : "解绑失败");
    });
  });
}
