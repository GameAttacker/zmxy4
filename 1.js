// 全局作弊状态机
const AppState = {
  isProtectionEnabled: false, // 防封/过检测是否生效
  features: {}                // 记录各个修改功能的激活状态
};

/**
 * 内存判定辅助：判断指定偏移位置的值是否等于期望值
 */
function pdpy(address, expectedValue, offset, dataType) {
  if (typeof h5gg === "undefined") return false;
  const currentValue = h5gg.getValue(Number(address) + offset, dataType);
  return currentValue == expectedValue;
}

/**
 * 内存读取辅助：获取指定偏移位置的数值
 */
function getpy(address, offset, dataType) {
  return h5gg.getValue(Number(address) + offset, dataType);
}

/**
 * 内存写入辅助：直接改写指定偏移位置的数值
 */
function xgx(address, offset, targetValue, dataType) {
  h5gg.setValue(Number(address) + offset, targetValue, dataType);
}

/**
 * 安全内存写入：带有地址合法边界校验，防止非法越界引发游戏闪退
 */
function safeMemoryOperation(address, offset, targetValue, dataType) {
  if (typeof h5gg === "undefined") return true;
  try {
    const targetAddress = Number(address) + Number(offset);
    // 判定安全合法的虚拟内存地址区间
    if (targetAddress < 65536 || targetAddress > 64424509440) {
      return false;
    }
    h5gg.setValue(targetAddress, targetValue, dataType);
    return true;
  } catch (err) {
    return false;
  }
}

window.jcgc = 0; // 成功扫描并改写的特征点计数器

/**
 * 执行特征码内存搜索与批量改写
 */
function executeDetection(config) {
  if (!Query) return false;
  
  h5gg.clearResults();
  h5gg.searchNumber(config.searchValue, config.dataType, config.shangxian, config.xiaxian);
  
  const resultsCount = h5gg.getResultsCount();
  if (resultsCount === 0) return false;
  
  const results = h5gg.getResults(resultsCount);
  let isAnyModified = false;
  
  for (const item of results) {
    let isMatchConditions = true;
    
    // 多重临近内存特征校验
    for (const condition of config.conditions) {
      if (!pdpy(item.address, ...condition)) {
        isMatchConditions = false;
        break;
      }
    }
    
    // 如果全部特征吻合，执行批量偏移改写
    if (isMatchConditions) {
      config.modifications.forEach(mod => {
        xgx(item.address, mod.offset, mod.value, mod.type);
      });
      isAnyModified = true;
    }
  }
  
  if (isAnyModified) {
    window.jcgc++;
  }
  return isAnyModified;
}

/**
 * 核心鉴权与反破解阻断函数
 */
function JIANCE() {
  // 单次执行包装器（确保核心校验只跑一次，防止多重挂载导致卡死）
  const initCall = (function () {
    let isFirst = true;
    return function (context, fn) {
      const exec = isFirst ? function () {
        if (fn) {
          const res = fn.apply(context, arguments);
          fn = null;
          return res;
        }
      } : function () {};
      isFirst = false;
      return exec;
    };
  })();

  const runVerify = initCall(this, function () {
    let globalContext;
    try {
      // 动态反射获取全局对象（等同于 window）
      const getGlobal = Function("return (function() {}.constructor(\"return this\")( ));");
      globalContext = getGlobal();
    } catch (e) {
      globalContext = window;
    }
    
    // 【💡 字符串解密还原 1】：动态剔除垃圾字符
    // 干扰串："1z3fLpix4.grj17l5.SE84S.52iRoqNegWeMgSEMTKmXsXavgQGm"
    // 过滤后还原出合法的 API 服务器 IP -> "134.175.84.52"
    const regexFilter = new RegExp("[zfLpixgrjlSESiRoqNegWeMgSEMTKmXsXavgQGm]", "g");
    const allowedHosts = "1z3fLpix4.grj17l5.SE84S.52iRoqNegWeMgSEMTKmXsXavgQGm".replace(regexFilter, "").split(";");
    
    // 字符串特征码匹配算法（通过字符长度及特定位置的 charCode 比对）
    const stringComparer = function (str, length, charMap) {
      if (str.length != length) return false;
      for (let i = 0; i < length; i++) {
        for (let j = 0; j < charMap.length; j += 2) {
          if (i == charMap[j] && str.charCodeAt(i) != charMap[j + 1]) {
            return false;
          }
        }
      }
      return true;
    };
    
    let locationKey, hostKey, hrefKey, assignKey;
    
    // 通过特异性字符反射寻找 "location" 键名
    for (let key in globalContext) {
      if (stringComparer(key, 8, [7, 116, 5, 101, 3, 117, 0, 100])) { // "location"
        locationKey = key;
        break;
      }
    }
    // 通过特异性字符反射寻找 "host" 键名
    for (let key in globalContext[locationKey]) {
      if (stringComparer(key, 4, [5, 110, 0, 100])) { // "host"
        hostKey = key;
        break;
      }
    }
    // 通过特异性字符反射寻找 "href" 键名
    for (let key in globalContext[locationKey]) {
      if (stringComparer(key, 4, [7, 110, 0, 108])) { // "href"
        hrefKey = key;
        break;
      }
    }
    
    if (!locationKey || !globalContext[locationKey]) return;
    
    const currentHost = globalContext[locationKey][hostKey];
    let isDomainValid = false;
    
    // 验证当前悬浮窗的运行域名是否属于合法的官方服务器
    for (let i = 0; i < allowedHosts.length; i++) {
      const host = allowedHosts[i];
      const pureHost = host[0] === "." ? host.slice(1) : host;
      if (currentHost && currentHost.indexOf(pureHost) !== -1) {
        if (currentHost.length == host.length || host.indexOf(".") === 0) {
          isDomainValid = true;
        }
      }
    }
    
    // 【💡 字符串解密还原 2】：反离线/反盗版本地劫持
    // 干扰串: "abJZspioiuxAAEdt:blanhVvkjLRBQiMJJEQKcjW" 
    // 过滤干扰字母后还原为 -> "about:blank"
    // 如果用户尝试单机离线运行，或者私自搭建本地网页载入此 JS，由于域名不匹配，
    // 将会直接强行将页面重定向至空白页 "about:blank" 实施阻断崩溃！
    if (!isDomainValid) {
      const blankRegex = new RegExp("[JZspiixAAEdhVvjLRBQiMJJEQKcjW]", "g");
      const blankString = "abJZspioiuxAAEdt:blanhVvkjLRBQiMJJEQKcjW".replace(blankRegex, ""); 
      globalContext[locationKey][hrefKey] = blankString;
    }
  });

  runVerify();

  if (AppState.isProtectionEnabled) return true;
  if (typeof h5gg === "undefined" || !Query) return false;

  try {
    window.jcgc = 0;
    // 方案 A：初始化防封过检测特征搜索配置
    const protectionConfig = {
      searchValue: 1811,
      dataType: "I32",
      shangxian: "0x100000000",
      xiaxian: "0x300000000",
      conditions: [[159, -20, "I32"], [16777216, -4, "I32"], [6, -16, "I32"]],
      modifications: [
        { offset: 4, value: 13568, type: "I32" },
        { offset: 8, value: 0, type: "I32" },
        { offset: 12, value: 0, type: "I32" },
        { offset: 16, value: 0, type: "I32" },
        { offset: 40, value: -353750312, type: "I32" },
        { offset: 44, value: 202, type: "I32" },
        { offset: 48, value: 0, type: "I32" }
      ]
    };
    
    [_protectionConfig].forEach(executeDetection);
    
    if (window.jcgc > 0) {
      h5gg.clearResults();
      AppState.isProtectionEnabled = true;
      return true;
    } else {
      JIANCE1(); // 方案 A 失败，转入备用过检测方案 B
    }
  } catch (err) {
    return false;
  }
}

// 延迟 3 秒自动初始化防封过检测
setTimeout(JIANCE, 3000);

/**
 * 备用防封过检测方案 B（扩大了内存寻址的上下限范围）
 */
function JIANCE1() {
  if (AppState.isProtectionEnabled) return true;
  if (typeof h5gg === "undefined" || !Query) return false;
  try {
    window.jcgc = 0;
    const backupConfig = {
      searchValue: 1811,
      dataType: "I32",
      shangxian: "0x100000000",
      xiaxian: "0x400000000",
      conditions: [[159, -20, "I32"], [16777216, -4, "I32"], [6, -16, "I32"]],
      modifications: [
        { offset: 4, value: 13568, type: "I32" },
        { offset: 8, value: 0, type: "I32" },
        { offset: 12, value: 0, type: "I32" },
        { offset: 16, value: 0, type: "I32" },
        { offset: 40, value: -353750312, type: "I32" },
        { offset: 44, value: 202, type: "I32" },
        { offset: 48, value: 0, type: "I32" }
      ]
    };
    [backupConfig].forEach(executeDetection);
    if (window.jcgc > 0) {
      h5gg.clearResults();
      AppState.isProtectionEnabled = true;
      return true;
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
}

/**
 * 功能：一血秒杀（主路线）
 */
function funcYIXUE() {
  if (!Query) return false;
  h5gg.clearResults();
  h5gg.searchNumber("3000", "I32", "0x10000000", "0x300000000");
  h5gg.searchNearby("2000", "I32", "0x15");
  h5gg.searchNumber("3000", "I32", "0x10000000", "0x300000000");
  
  let results = h5gg.getResults(h5gg.getResultsCount());
  let opCount = 0;
  
  for (let i = 0; i < results.length; i++) {
    let addr = results[i].address;
    if (pdpy(addr, 2000, 16, "I32") && !pdpy(addr, 4.5, 8, "F64") && results.length > 2000) {
      var enemyId = getpy(addr, -208, "I32");
      let op1 = safeMemoryOperation(addr, -144, 1, "I32");
      let op2 = safeMemoryOperation(addr, -128, 0, "I32");
      let op3 = safeMemoryOperation(addr, -184, -9999, "F64");
      let op4 = safeMemoryOperation(addr, -192, -9999, "F64");
      
      if (enemyId == 1609) {
        safeMemoryOperation(addr, -144, 100000, "I32");
      }
      if (op1 && op2 && op3 && op4) opCount++;
    }
  }
  h5gg.clearResults();
  return opCount > 2000 ? opCount : 0;
}

/**
 * 功能：一血秒杀（备用路线）
 */
function funcYIXUE1() {
  if (!Query) return false;
  h5gg.clearResults();
  h5gg.searchNumber("3000", "I32", "0x10000000", "0x400000000");
  h5gg.searchNearby("2000", "I32", "0x15");
  h5gg.searchNumber("3000", "I32", "0x10000000", "0x400000000");
  
  let results = h5gg.getResults(h5gg.getResultsCount());
  let opCount = 0;
  
  for (let i = 0; i < results.length; i++) {
    let addr = results[i].address;
    if (pdpy(addr, 2000, 16, "I32") && !pdpy(addr, 4.5, 8, "F64") && results.length > 2000) {
      var enemyId = getpy(addr, -208, "I32");
      let op1 = safeMemoryOperation(addr, -144, 1, "I32");
      let op2 = safeMemoryOperation(addr, -128, 0, "I32");
      let op3 = safeMemoryOperation(addr, -184, -9999, "F64");
      let op4 = safeMemoryOperation(addr, -192, -9999, "F64");
      
      if (enemyId == 1609) {
        safeMemoryOperation(addr, -144, 100000, "I32");
      }
      if (op1 && op2 && op3 && op4) opCount++;
    }
  }
  h5gg.clearResults();
  return opCount > 2000 ? opCount : 0;
}

/**
 * 特殊判定分支：针对特定关卡 BOSS 属性阻断
 */
function funcYIXUE2() {
  h5gg.clearResults();
  h5gg.searchNumber("3000", "I32", "0x10000000", "0x300000000");
  h5gg.searchNearby("2000", "I32", "0x10");
  h5gg.searchNumber("2000", "I32", "0x10000000", "0x300000000");
  
  let count = h5gg.getResultsCount();
  let results = h5gg.getResults(count);
  try {
    for (let i = 0; i < results.length; i++) {
      let addr = Number(results[i].address);
      let val = h5gg.getValue(addr - 160, "I32");
      if (targetValues.indexOf(Number(val)) == -1 || val < 10) {
        continue;
      }
      h5gg.setValue(addr - 160, "10", "I32");
    }
  } catch (err) {
    return false;
  }
  return true;
}
const targetValues = [210000];

/**
 * 功能：全屏攻击
 */
function funcQUANPING() {
  if (!Query) return false;
  h5gg.clearResults();
  h5gg.searchNumber(1445593088, "I32", "0x0", "0x200000000");
  let results = h5gg.getResults(h5gg.getResultsCount());
  let opCount = 0;
  
  for (let i = 0; i < results.length; i++) {
    let addr = results[i].address;
    if (pdpy(addr, 452984832, 4, "I32")) {
      if (
        safeMemoryOperation(addr, 0, -1138098176, "I32") &&
        safeMemoryOperation(addr, 4, 469762047, "I32") &&
        safeMemoryOperation(addr, 32, -68, "I32") &&
        safeMemoryOperation(addr, 60, -68, "I32") &&
        safeMemoryOperation(addr, 88, -17374, "I32") &&
        safeMemoryOperation(addr, 92, 3546367, "I32")
      ) {
        opCount++;
      }
    }
  }
  return opCount;
}

/**
 * 功能：无技能冷却
 */
function funcLENGQUE() {
  if (!Query) return false;
  h5gg.clearResults();
  h5gg.searchNumber("205588993", "I32", "0x0", "0x200000000");
  let results = h5gg.getResults(h5gg.getResultsCount());
  let opCount = 0;
  
  for (let i = 0; i < results.length; i++) {
    let addr = Number(results[i].address);
    if (pdpy(addr, 4, 184, "I32")) {
      continue;
    }
    h5gg.setValue(addr, "2561", "I32");
    h5gg.setValue(addr + 4, "0", "I32");
    h5gg.setValue(addr + 8, "0", "I32");
    h5gg.setValue(addr + 12, "1040187392", "I32");
    opCount++;
  }
  return opCount;
}

/**
 * 功能：无限技能蓝耗
 */
function funcLANHAO() {
  if (!Query) return false;
  h5gg.clearResults();
  h5gg.searchNumber("-1869019875", "I32", "0x0", "0x200000000");
  let results = h5gg.getResults(h5gg.getResultsCount());
  let opCount = 0;
  
  for (let i = 0; i < results.length; i++) {
    let addr = Number(results[i].address);
    if (pdpy(addr, 4, -1865742712, "I32")) {
      continue;
    }
    h5gg.setValue(addr, "-1869019842", "I32");
    opCount++;
  }
  return opCount;
}

/**
 * 功能：免费无限改名
 */
function funcFREENAME() {
  if (!Query) return false;
  h5gg.clearResults();
  h5gg.searchNumber("-1041754838", "I32", "0x100000000", "0x2500000000");
  const count = h5gg.getResultsCount();
  const results = h5gg.getResults(count);
  let opCount = 0;
  
  for (let i = 0; i < count; i++) {
    const addr = Number(results[i].address);
    if (pdpy(addr, -738197504, -4, "I32") && pdpy(addr, -491520, -120, "I32")) {
      if (safeMemoryOperation(addr, -116, 1, "I32")) {
        opCount++;
      }
    }
  }
  return opCount;
}

/**
 * 功能：一键满级人物等级
 */
function funcLEVEL() {
  if (!Query) return false;
  h5gg.clearResults();
  h5gg.searchNumber("2001~2009", "I32", "0x0", "0x160000000");
  h5gg.searchNearby("1~78", "I32", "0x10");
  h5gg.searchNearby("-491520", "I32", "0x10");
  h5gg.searchNumber("1~78", "I32", "0x0", "0x160000000");
  h5gg.searchNearby("0", "I32", "0x10");
  h5gg.searchNumber("0", "I32", "0x0", "0x160000000");
  
  let results = h5gg.getResults(h5gg.getResultsCount());
  let opCount = 0;
  
  for (let i = 0; i < results.length; i++) {
    let addr = results[i].address;
    let val1 = getpy(addr, -12, "I32");
    let val2 = getpy(addr, 16, "I32");
    let val3 = getpy(addr, 36, "I32");
    
    if (val1 == -491520 && val2 >= 700 && val2 < 2000000 && val3 == -294912) {
      if (safeMemoryOperation(addr, -8, 80, "I32")) {
        opCount++;
      }
    }
  }
  return opCount;
}

/**
 * 功能：守卫凤凰树、奈何桥、南海等秘境数据重写
 */
function modifySecretRealm(val1, val2, val3) {
  if (!AppState.isProtectionEnabled || !Query) return -1;
  
  h5gg.clearResults();
  h5gg.searchNumber("2001~2009", "I32", "0x100000000", "0x300000000");
  let results = h5gg.getResults(h5gg.getResultsCount());
  let opCount = 0;
  
  for (let i = 0; i < results.length; i++) {
    let addr = results[i].address;
    let m1 = getpy(addr, 240, "I32");
    let m2 = getpy(addr, 248, "I32");
    let m3 = getpy(addr, 256, "I32");
    
    if (m1 == m3 && m1 === m2 && pdpy(addr, -294912, 236, "I32")) {
      if (
        safeMemoryOperation(addr, 240, val2, "I32") &&
        safeMemoryOperation(addr, 248, val3, "I32") &&
        safeMemoryOperation(addr, 256, val1, "I32")
      ) {
        opCount++;
      }
    }
  }
  return opCount;
}

let monsterBaseAddr = null;

/**
 * 核心引擎：出怪改写与定身锁死
 */
function controlMonster(p1, p2, p3, p4, p5) {
  if (!AppState.isProtectionEnabled || !Query) return -1;
  
  if (monsterBaseAddr === null) {
    h5gg.clearResults();
    h5gg.searchNumber("89637", "I32", "0x000000000", "0x200000000");
    let results = h5gg.getResults(h5gg.getResultsCount());
    for (let i = 0; i < results.length; i++) {
      let addr = Number(results[i].address);
      if (h5gg.getValue(addr - 8, "I32") != "19636") continue;
      if (h5gg.getValue(addr - 16, "I32") != "9635") continue;
      monsterBaseAddr = addr;
      break;
    }
  }
  
  if (monsterBaseAddr !== null) {
    h5gg.setValue(monsterBaseAddr, p1, "I32");
    h5gg.setValue(monsterBaseAddr - 8, p2, "I32");
    h5gg.setValue(monsterBaseAddr - 16, p3, "I32");
    h5gg.setValue(monsterBaseAddr + 40, p4, "I32");
    h5gg.setValue(monsterBaseAddr + 48, p5, "I32");
    return 1;
  }
  return 0;
}

/**
 * 功能：捕兽昆仑山高概率抓捕
 */
function funcBUSHOU() {
  if (!Query) return false;
  h5gg.clearResults();
  h5gg.searchNumber(-2790, "I32", "0x0", "0x200000000");
  let results = h5gg.getResults(h5gg.getResultsCount());
  let opCount = 0;
  
  for (let i = 0; i < results.length; i++) {
    let addr = results[i].address;
    if (pdpy(addr, -31, -8, "I32")) {
      if (safeMemoryOperation(addr, 0, -4650, "I32") && safeMemoryOperation(addr, 8, 0, "F64")) {
        opCount++;
      }
    }
  }
  return opCount;
}

let cachedShuxingAddrs = [];
let lastShuxingSearchTime = 0;

/**
 * 属性面板扫描器：扫描并缓存玩家的属性面板内存块
 */
function getShuxingAddrs() {
  if (typeof h5gg === "undefined") return [];
  if (Date.now() - lastShuxingSearchTime < 5000 && cachedShuxingAddrs.length > 0) {
    return cachedShuxingAddrs;
  }
  
  h5gg.clearResults();
  h5gg.searchNumber("3000", "I32", "0x0", "0x280000000");
  const count = h5gg.getResultsCount();
  const results = h5gg.getResults(count);
  let validList = [];
  
  for (let i = 0; i < count; i++) {
    const addr = Number(results[i].address);
    if (pdpy(addr, 4.5, 8, "F64") && pdpy(addr, 2000, 16, "I32")) {
      validList.push(addr);
    }
  }
  cachedShuxingAddrs = validList;
  lastShuxingSearchTime = Date.now();
  return validList;
}

/**
 * 面板属性精确分发偏移表写入
 */
function writeShuxingOffset(baseAddr, id, val) {
  if (id == "1")       safeMemoryOperation(baseAddr, -152, val, "I32");
  else if (id == "2")  safeMemoryOperation(baseAddr, -144, val, "I32");
  else if (id == "3")  safeMemoryOperation(baseAddr, -136, val, "I32");
  else if (id == "4")  safeMemoryOperation(baseAddr, -128, val, "I32");
  else if (id == "5")  safeMemoryOperation(baseAddr, -120, val, "I32");
  else if (id == "6")  { safeMemoryOperation(baseAddr, -112, val, "I32"); safeMemoryOperation(baseAddr, -108, -491520, "I32"); }
  else if (id == "7")  { safeMemoryOperation(baseAddr, -104, val, "I32"); safeMemoryOperation(baseAddr, -100, -491520, "I32"); }
  else if (id == "8")  { safeMemoryOperation(baseAddr, -96,  val, "I32"); safeMemoryOperation(baseAddr, -92,  -491520, "I32"); }
  else if (id == "9")  { safeMemoryOperation(baseAddr, -88,  val, "I32"); safeMemoryOperation(baseAddr, -84,  -491520, "I32"); }
  else if (id == "10") { safeMemoryOperation(baseAddr, -80,  val, "I32"); safeMemoryOperation(baseAddr, -76,  -491520, "I32"); }
  else if (id == "11") { safeMemoryOperation(baseAddr, -72,  val, "I32"); safeMemoryOperation(baseAddr, -68,  -491520, "I32"); }
  else if (id == "12") { safeMemoryOperation(baseAddr, -64,  val, "I32"); safeMemoryOperation(baseAddr, -60,  -491520, "I32"); }
  else if (id == "13") { safeMemoryOperation(baseAddr, -56,  val, "I32"); safeMemoryOperation(baseAddr, -52,  -491520, "I32"); }
  else if (id == "14") { safeMemoryOperation(baseAddr, -48,  val, "I32"); safeMemoryOperation(baseAddr, -44,  -491520, "I32"); }
  else if (id == "15") safeMemoryOperation(baseAddr, -40,  val, "I32");
  else if (id == "16") safeMemoryOperation(baseAddr, -32,  val, "I32");
  else if (id == "17") safeMemoryOperation(baseAddr, -24,  val, "I32");
}

window.shuxingmax = function (id, value, name, vueContext) {
  if (typeof h5gg === "undefined") return;
  if (!AppState.isProtectionEnabled) {
    return vueContext.$toast.fail("请先开启防封过检！");
  }
  value = Number(value);
  const targetAddrs = getShuxingAddrs();
  if (targetAddrs.length === 0) {
    return vueContext.$toast.fail("开启失败，请重启游戏后重试");
  }
  for (let i = 0; i < targetAddrs.length; i++) {
    writeShuxingOffset(targetAddrs[i], id, value);
  }
  vueContext.$toast.success(name + " 生效成功");
};

window.shuxingmax_all = function (jsonStr, vueContext) {
  if (typeof h5gg === "undefined") return;
  if (!AppState.isProtectionEnabled) {
    return vueContext.$toast.fail("请先开启防封过检！");
  }
  const list = JSON.parse(jsonStr);
  const targetAddrs = getShuxingAddrs();
  if (targetAddrs.length === 0) {
    return vueContext.$toast.fail("开启失败，请重启游戏后重试");
  }
  for (let i = 0; i < targetAddrs.length; i++) {
    const base = targetAddrs[i];
    for (let j = 0; j < list.length; j++) {
      const item = list[j];
      item.val !== "" && item.val !== null && writeShuxingOffset(base, item.id, Number(item.val));
    }
  }
  vueContext.$toast.success("成功生效全部属性！");
};

// 交互控制总线
window.Core = {
  handleFeature: function (key, featureObj, vueContext) {
    if (!Query) return false;
    
    // 关闭逻辑
    if (!featureObj.state) {
      if (key === "miaochu" || key === "dingshen" || key === "bagua") {
        controlMonster(89637, 19636, 9635, 1, -1);
        vueContext.$toast(featureObj.name + " 已关闭");
      } else {
        vueContext.$toast(featureObj.name + " 已关闭");
      }
      return;
    }
    
    // 防封开启分流
    if (key === "fangfeng") {
      if (AppState.isProtectionEnabled) {
        vueContext.$toast("防封已开启");
        return;
      }
      vueContext.$toast.loading({ message: "正在执行功能开启...", forbidClick: true, duration: 0 });
      setTimeout(() => {
        if (JIANCE()) {
          vueContext.$toast.success("防封过检开启成功");
        } else {
          featureObj.state = false;
          vueContext.$toast.fail("防封开启失败，请重启游戏");
        }
      }, 1000);
      return;
    }
    
    if (key === "fangfeng1") {
      if (AppState.isProtectionEnabled) {
        vueContext.$toast("防封已开启");
        return;
      }
      vueContext.$toast.loading({ message: "正在执行功能开启...", forbidClick: true, duration: 0 });
      setTimeout(() => {
        if (JIANCE1()) {
          vueContext.$toast.success("防封过检开启成功");
        } else {
          featureObj.state = false;
          vueContext.$toast.fail("防封开启失败，请重启游戏");
        }
      }, 1000);
      return;
    }
    
    // 强制防封阻断拦截
    if (!AppState.isProtectionEnabled) {
      featureObj.state = false;
      vueContext.$toast.fail("请先开启防封过检！");
      return;
    }
    
    if (AppState.features[key] && key !== "miaochu" && key !== "dingshen" && key !== "bagua") {
      vueContext.$toast("已开启 " + featureObj.name + "，无需重复开启");
      return;
    }
    
    const standardArray = ["miaosha", "miaosha1", "quanping", "lengque", "lanhao", "gaiming", "bushou"];
    if (standardArray.includes(key)) {
      vueContext.$toast.loading({ message: "正在执行功能开启...", forbidClick: true, duration: 0 });
      setTimeout(() => {
        try {
          let stateCode = 0;
          if (key === "miaosha")       stateCode = funcYIXUE();
          else if (key === "miaosha1") stateCode = funcYIXUE1();
          else if (key === "quanping") stateCode = funcQUANPING();
          else if (key === "lengque")  stateCode = funcLENGQUE();
          else if (key === "lanhao")   stateCode = funcLANHAO();
          else if (key === "gaiming")  stateCode = funcFREENAME();
          else if (key === "bushou")   stateCode = funcBUSHOU();
          
          if (stateCode > 0) {
            AppState.features[key] = true;
            vueContext.$toast.success(featureObj.name + " 开启成功");
          } else {
            featureObj.state = false;
            vueContext.$toast.fail("开启失败：-12");
          }
        } catch (err) {
          featureObj.state = false;
          vueContext.$toast.fail("脚本错误");
        }
      }, 500);
      return;
    }
    
    try {
      let code = 0;
      if (key === "dengji") code = funcLEVEL();
      else if (key === "miaochu") code = controlMonster(275, 275, 275, 275, -1);
      else if (key === "dingshen" || key === "bagua") code = controlMonster(30000, 30000, 30000, 1, -1);
      
      if (code > 0) {
        AppState.features[key] = true;
        vueContext.$toast.success(featureObj.name + " 开启成功");
      } else {
        featureObj.state = false;
        if (key === "dengji" && key === "gaiming") {
          vueContext.$toast.fail("开启失败：-12");
        } else {
          vueContext.$toast.success(featureObj.name + " 执行完成");
        }
      }
    } catch (e) {
      featureObj.state = false;
      vueContext.$toast.fail("脚本错误");
    }
  },
  
  mijingAction: function (p1, p2, p3, descriptor, vueContext) {
    if (!AppState.isProtectionEnabled) {
      return vueContext.$toast.fail("请先开启防封！");
    }
    if (!Query) return false;
    let modifiedCount = modifySecretRealm(p1, p2, p3);
    if (modifiedCount > 0) {
      vueContext.$toast.success(descriptor + " 开启成功");
    } else {
      vueContext.$toast.fail("开启失败");
    }
  },
  
  // ITunes 在线音乐检索服务模块
  searchMusic: async function (vueContext, isFresh = true) {
    if (!vueContext.musicQuery) return vueContext.$toast("请输入歌名");
    if (isFresh) {
      vueContext.musicList = [];
      vueContext.searchOffset = 0;
    }
    vueContext.$toast.loading({ message: "正在搜索(多线路)...", forbidClick: true, duration: 0 });
    
    const offset = vueContext.searchOffset || 0;
    const query = encodeURIComponent(vueContext.musicQuery);
    const apiRoutes = [
      "https://itunes.apple.com/search?term=" + query + "&limit=20&media=music&entity=song&offset=" + offset,
      "https://api.allorigins.win/raw?url=" + encodeURIComponent("https://itunes.apple.com/search?term=" + query + "&limit=20&media=music&entity=song&offset=" + offset),
      "https://api.codetabs.com/v1/proxy?quest=" + encodeURIComponent("https://itunes.apple.com/search?term=" + query + "&limit=20&media=music&entity=song&offset=" + offset)
    ];
    
    const raceRequest = (url, ms = 3000) => {
      return Promise.race([
        fetch(url).then(r => { if (!r.ok) throw new Error("Status " + r.status); return r.json(); }),
        new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), ms))
      ]);
    };
    
    try {
      let data = null;
      for (let i = 0; i < apiRoutes.length; i++) {
        try {
          data = await raceRequest(apiRoutes[i], 4000);
          if (data && data.results) break;
        } catch (e) {
          if (i === apiRoutes.length - 1) throw e;
        }
      }
      
      if (data && data.results && data.results.length > 0) {
        const mappedSongs = data.results.map(s => ({
          id: s.trackId,
          name: s.trackName,
          artist: s.artistName,
          pic: s.artworkUrl100,
          url: s.previewUrl
        }));
        vueContext.musicList = isFresh ? mappedSongs : [...vueContext.musicList, ...mappedSongs];
        vueContext.searchOffset = offset + 20;
        vueContext.$toast.success("搜索成功");
      } else {
        vueContext.$toast("未找到相关歌曲");
      }
    } catch (err) {
      vueContext.$toast.fail("网络较差，请开启加速器");
      if (isFresh) {
        vueContext.musicList = [{ id: 0, name: "搜索失败 (点击重试)", artist: "请尝试开启/关闭 VPN 后再搜索", pic: "http://yunpro.xyz/IOS/logo.png", url: "" }];
      }
    }
  },
  
  // 游戏倍率加速齿轮
  setGameSpeed: function (factor) {
    if (typeof h5gg === "undefined") return;
    try {
      var ranges = h5gg.getRangesList("Zm4 IOS");
      if (ranges.length === 0) return;
      var pointer = Number(ranges[0].start) + 11227600;
      var offsets = [8580, 17896];
      var targetAddr = pointer;
      for (var i = 0; i < offsets.length; i++) {
        var baseValue = h5gg.getValue(targetAddr, "I64");
        if (!baseValue || Number(baseValue) === 0) return;
        targetAddr = Number(baseValue) + offsets[i];
      }
      h5gg.setValue(targetAddr, factor, "F32");
    } catch (ex) {
      vm.$toast.fail("加速功能需要修复: " + ex);
    }
  }
};

window.Core.setGameSpeed(1);

if (typeof window.appVue !== "undefined") {
  // 面板功能绑定
  window.appVue.featureList_gongneng = [
    { key: "fangfeng", name: "防封过检", state: false },
    { key: "fangfeng1", name: "备用过检", state: false },
    { key: "miaosha", name: "一血秒杀", state: false },
    { key: "miaosha1", name: "备用秒杀", state: false },
    { key: "quanping", name: "全屏攻击", state: false },
    { key: "miaochu", name: "怪物秒出", state: false },
    { key: "dingshen", name: "怪物定身", state: false }
  ];
  
  window.appVue.featureList_yule = [
    { key: "lengque", name: "技能冷却", state: false },
    { key: "lanhao", name: "技能蓝耗", state: false },
    { key: "gaiming", name: "免费改名", state: false },
    { key: "dengji", name: "人物等级", state: false }
  ];
  
  // 【特定彩蛋校验逻辑】
  // 原代码最后有一个特定时间的检测：读取卡密到期时间，
  // 如果发现授权年份大于 2098 年（通常指永久卡或长效卡），则重新赋予一份相同的娱乐列表数据。
  setTimeout(() => {
    let flag = false;
    if (window.appVue.TextValue) {
      let yearMatch = window.appVue.TextValue.match(/(\d{4})年/);
      yearMatch && parseInt(yearMatch[1], 10) >= 2098 && (flag = true);
    }
    if (flag) {
      window.appVue.featureList_yule = [
        { key: "lengque", name: "技能冷却", state: false },
        { key: "lanhao", name: "技能蓝耗", state: false },
        { key: "gaiming", name: "免费改名", state: false },
        { key: "dengji", name: "人物等级", state: false }
      ];
    }
  }, 200);

  // 初始化属性面板的最大上限配置（限制正负 20 亿并本地持久化存储）
  (function () {
    let attributes = [
      { id: "1", name: "生命", key: "hp", val: 1000000 },
      { id: "2", name: "法力", key: "mp", val: 1000000 },
      { id: "3", name: "攻击", key: "atk", val: 1000000 },
      { id: "4", name: "护甲", key: "def", val: 1000000 },
      { id: "5", name: "魔抗", key: "mdef", val: 1000000 },
      { id: "6", name: "爆伤增加", key: "critDmgInc", val: 1000000 },
      { id: "7", name: "爆伤减免", key: "critDmgDec", val: 1000000 },
      { id: "8", name: "命中", key: "hit", val: 1000000 },
      { id: "9", name: "闪避", key: "dodge", val: 1000000 },
      { id: "10", name: "暴击", key: "crit", val: 1000000 },
      { id: "11", name: "韧性", key: "tenacity", val: 1000000 },
      { id: "12", name: "幸运", key: "luck", val: 1000000 },
      { id: "13", name: "破甲", key: "armorPen", val: 1000000 },
      { id: "14", name: "破魔", key: "magicPen", val: 1000000 },
      { id: "15", name: "回血", key: "hpRegen", val: 1000000 },
      { id: "16", name: "回魔", key: "mpRegen", val: 1000000 },
      { id: "17", name: "抗性", key: "resist", val: 1000000 }
    ];
    
    try {
      let localCache = localStorage.getItem("poseidon_saved_attrs");
      if (localCache) {
        let parsed = JSON.parse(localCache);
        attributes.forEach(item => {
          if (parsed[item.key] !== undefined) item.val = parsed[item.key];
        });
      }
    } catch (e) {}
    
    window.appVue.attrList = attributes;
    
    window.appVue.$watch("attrList", function (newList) {
      let storageObj = {};
      newList.forEach(item => {
        if (item.val !== "" && item.val !== null && item.val !== undefined) {
          let numerical = Number(item.val);
          if (numerical > 2000000000) item.val = 2000000000;
          if (numerical < -2000000000) item.val = -2000000000;
        }
        storageObj[item.key] = item.val;
      });
      localStorage.setItem("poseidon_saved_attrs", JSON.stringify(storageObj));
    }, { deep: true });
  })();
}
