if (typeof h5gg === "undefined" || !Query) {
  return false; 
}

  const AppState = {
    isProtectionEnabled: false,
    features: {}
  };

  
function pdpy(_0x593728, _0x42c250, _0x328151, _0x5cc72b) {
  if (typeof h5gg === "undefined") {
    {
      return false;
    }
  }
  const _0x2ff4b2 = h5gg.getValue(Number(_0x593728) + _0x328151, _0x5cc72b);
  return _0x2ff4b2 == _0x42c250;
}
function getpy(_0xef981e, _0x4bf9dc, _0x497fc5) {
  return h5gg.getValue(Number(_0xef981e) + _0x4bf9dc, _0x497fc5);
}
function xgx(_0x17d541, _0x29bb8b, _0x2a36d8, _0x35d6b0) {
  h5gg.setValue(Number(_0x17d541) + _0x29bb8b, _0x2a36d8, _0x35d6b0);
}
function safeMemoryOperation(_0x4ab66b, _0x51b06e, _0x3146b5, _0x18d1ef) {
  if (typeof h5gg === "undefined") {
    return true;
  }
  try {
    {
      const _0x1d0ba = Number(_0x4ab66b) + Number(_0x51b06e);
      if (_0x1d0ba < 65536 || _0x1d0ba > 64424509440) {
        return false;
      }
      h5gg.setValue(_0x1d0ba, _0x3146b5, _0x18d1ef);
      return true;
    }
  } catch (_0x49e1f0) {
    return false;
  }
}
window.jcgc = 0;
function executeDetection(_0x146e53) {
  if (!Query) {
    return false;
  }
  h5gg.clearResults();
  h5gg.searchNumber(_0x146e53.searchValue, _0x146e53.dataType, _0x146e53.shangxian, _0x146e53.xiaxian);
  const _0x1225e5 = h5gg.getResultsCount();
  if (_0x1225e5 === 0) {
    return false;
  }
  const _0x7dff4c = h5gg.getResults(_0x1225e5);
  let _0x4b02b3 = false;
  for (const _0x1f3c82 of _0x7dff4c) {
    {
      let _0x252bcc = true;
      for (const _0x243855 of _0x146e53.conditions) {
        {
          if (!pdpy(_0x1f3c82.address, ..._0x243855)) {
            {
              _0x252bcc = false;
              break;
            }
          }
        }
      }
      if (_0x252bcc) {
        {
          _0x146e53.modifications.forEach(_0x5a6ebb => {
            {
              xgx(_0x1f3c82.address, _0x5a6ebb.offset, _0x5a6ebb.value, _0x5a6ebb.type);
            }
          });
          _0x4b02b3 = true;
        }
      }
    }
  }
  if (_0x4b02b3) {
    window.jcgc++;
  }
  return _0x4b02b3;
}
function JIANCE() {
  const _0x189894 = function () {
    {
      let _0x6689a = true;
      return function (_0x5f15a0, _0x56d51e) {
        {
          const _0x5366e2 = _0x6689a ? function () {
            {
              if (_0x56d51e) {
                {
                  const _0x527a6d = _0x56d51e.apply(_0x5f15a0, arguments);
                  _0x56d51e = null;
                  return _0x527a6d;
                }
              }
            }
          } : function () {};
          _0x6689a = false;
          return _0x5366e2;
        }
      };
    }
  }();
  const _0x12e684 = _0x189894(this, function () {
    {
      let _0x740a54;
      try {
        {
          const _0x1258b6 = Function("return (function() {}.constructor(\"return this\")( ));");
          _0x740a54 = _0x1258b6();
        }
      } catch (_0x1b2603) {
        {
          _0x740a54 = window;
        }
      }
      const _0x5dd919 = new RegExp("[zfLpixgrjlSESiRoqNegWeMgSEMTKmXsXavgQGm]", "g");
      const _0x397bd7 = "1z3fLpix4.grj17l5.SE84S.52iRoqNegWeMgSEMTKmXsXavgQGm".replace(_0x5dd919, "").split(";");
      let _0x23e2d0;
      let _0x4a5e63;
      let _0x2a2f63;
      let _0x52373c;
      const _0x402500 = function (_0x442b5c, _0x52ba17, _0x4e3a19) {
        {
          if (_0x442b5c.length != _0x52ba17) {
            {
              return false;
            }
          }
          for (let _0x1982c3 = 0; _0x1982c3 < _0x52ba17; _0x1982c3++) {
            {
              for (let _0x52a7af = 0; _0x52a7af < _0x4e3a19.length; _0x52a7af += 2) {
                {
                  if (_0x1982c3 == _0x4e3a19[_0x52a7af] && _0x442b5c.charCodeAt(_0x1982c3) != _0x4e3a19[_0x52a7af + 1]) {
                    {
                      return false;
                    }
                  }
                }
              }
            }
          }
          return true;
        }
      };
      const _0x41eedb = function (_0x1b6212, _0x263bee, _0xb75b38) {
        {
          return _0x402500(_0x263bee, _0xb75b38, _0x1b6212);
        }
      };
      const _0x2af3f6 = function (_0xfb1703, _0x9cd60b, _0x443a61) {
        {
          return _0x41eedb(_0x9cd60b, _0xfb1703, _0x443a61);
        }
      };
      const _0x148ab0 = function (_0x3c5bec, _0x5dee7a, _0x7efdd9) {
        {
          return _0x2af3f6(_0x5dee7a, _0x7efdd9, _0x3c5bec);
        }
      };
      for (let _0x9dcc70 in _0x740a54) {
        {
          if (_0x402500(_0x9dcc70, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
            {
              _0x23e2d0 = _0x9dcc70;
              break;
            }
          }
        }
      }
      for (let _0x533e3e in _0x740a54[_0x23e2d0]) {
        {
          if (_0x148ab0(6, _0x533e3e, [5, 110, 0, 100])) {
            {
              _0x4a5e63 = _0x533e3e;
              break;
            }
          }
        }
      }
      for (let _0x4d83e5 in _0x740a54[_0x23e2d0]) {
        {
          if (_0x2af3f6(_0x4d83e5, [7, 110, 0, 108], 8)) {
            {
              _0x2a2f63 = _0x4d83e5;
              break;
            }
          }
        }
      }
      if (!("~" > _0x4a5e63)) {
        {
          for (let _0x4f15b1 in _0x740a54[_0x23e2d0][_0x2a2f63]) {
            {
              if (_0x41eedb([7, 101, 0, 104], _0x4f15b1, 8)) {
                {
                  _0x52373c = _0x4f15b1;
                  break;
                }
              }
            }
          }
        }
      }
      if (!_0x23e2d0 || !_0x740a54[_0x23e2d0]) {
        {
          return;
        }
      }
      const _0x3e7f66 = _0x740a54[_0x23e2d0][_0x4a5e63];
      const _0x27dc58 = !!_0x740a54[_0x23e2d0][_0x2a2f63] && _0x740a54[_0x23e2d0][_0x2a2f63][_0x52373c];
      const _0x3a4c81 = _0x3e7f66 || _0x27dc58;
      if (!_0x3a4c81) {
        {
          return;
        }
      }
      let _0x56e35a = false;
      for (let _0x318da8 = 0; _0x318da8 < _0x397bd7.length; _0x318da8++) {
        {
          const _0x40a7d0 = _0x397bd7[_0x318da8];
          const _0xb70e21 = _0x40a7d0[0] === String.fromCharCode(46) ? _0x40a7d0.slice(1) : _0x40a7d0;
          const _0x5b163f = _0x3a4c81.length - _0xb70e21.length;
          const _0x4e0382 = _0x3a4c81.indexOf(_0xb70e21, _0x5b163f);
          const _0x4c9cf6 = _0x4e0382 !== -1 && _0x4e0382 === _0x5b163f;
          if (_0x4c9cf6) {
            {
              if (_0x3a4c81.length == _0x40a7d0.length || _0x40a7d0.indexOf(".") === 0) {
                {
                  _0x56e35a = true;
                }
              }
            }
          }
        }
      }
      /*if (!_0x56e35a) {
        {
          const _0x5bc83d = new RegExp("[JZspiixAAEdhVvjLRBQiMJJEQKcjW]", "g");
          const _0x3c0e38 = "abJZspioiuxAAEdt:blanhVvkjLRBQiMJJEQKcjW".replace(_0x5bc83d, "");
          _0x740a54[_0x23e2d0][_0x2a2f63] = _0x3c0e38;
        }
      }*/
    }
  });
  _0x12e684();
  if (AppState.isProtectionEnabled) {
    return true;
  }
  if (typeof h5gg === "undefined") {
    return false;
  }
  if (!Query) {
    return false;
  }
  try {
    {
      window.jcgc = 0;
      const _0x46b33b = {
        searchValue: 1811,
        dataType: "I32",
        shangxian: "0x100000000",
        xiaxian: "0x300000000",
        conditions: [[159, -20, "I32"], [16777216, -4, "I32"], [6, -16, "I32"]],
        modifications: [{
          offset: 4,
          value: 13568,
          type: "I32"
        }, {
          offset: 8,
          value: 0,
          type: "I32"
        }, {
          offset: 12,
          value: 0,
          type: "I32"
        }, {
          offset: 16,
          value: 0,
          type: "I32"
        }, {
          offset: 40,
          value: -353750312,
          type: "I32"
        }, {
          offset: 44,
          value: 202,
          type: "I32"
        }, {
          offset: 48,
          value: 0,
          type: "I32"
        }]
      };
      const _0xe60ae4 = [_0x46b33b];
      _0xe60ae4.forEach(executeDetection);
      if (window.jcgc > 0) {
        h5gg.clearResults();
        AppState.isProtectionEnabled = true;
        return true;
      } else {
        {
          JIANCE1();
        }
      }
    }
  } catch (_0x7ded7a) {
    {
      return false;
    }
  }
}
setTimeout(JIANCE(), 3000);
function JIANCE1() {
  if (AppState.isProtectionEnabled) {
    return true;
  }
  if (typeof h5gg === "undefined") {
    return false;
  }
  if (!Query) {
    return false;
  }
  try {
    {
      window.jcgc = 0;
      const _0x3420d8 = {
        searchValue: 1811,
        dataType: "I32",
        shangxian: "0x100000000",
        xiaxian: "0x400000000",
        conditions: [[159, -20, "I32"], [16777216, -4, "I32"], [6, -16, "I32"]],
        modifications: [{
          offset: 4,
          value: 13568,
          type: "I32"
        }, {
          offset: 8,
          value: 0,
          type: "I32"
        }, {
          offset: 12,
          value: 0,
          type: "I32"
        }, {
          offset: 16,
          value: 0,
          type: "I32"
        }, {
          offset: 40,
          value: -353750312,
          type: "I32"
        }, {
          offset: 44,
          value: 202,
          type: "I32"
        }, {
          offset: 48,
          value: 0,
          type: "I32"
        }]
      };
      const _0x361878 = [_0x3420d8];
      _0x361878.forEach(executeDetection);
      if (window.jcgc > 0) {
        {
          h5gg.clearResults();
          AppState.isProtectionEnabled = true;
          return true;
        }
      } else {
        {
          return false;
        }
      }
    }
  } catch (_0x5275b5) {
    {
      return false;
    }
  }
}
function funcYIXUE() {
  if (!Query) {
    return false;
  }
  h5gg.clearResults();
  h5gg.searchNumber("3000", "I32", "0x10000000", "0x300000000");
  h5gg.searchNearby("2000", "I32", "0x15");
  h5gg.searchNumber("3000", "I32", "0x10000000", "0x300000000");
  let _0x28fe33 = h5gg.getResults(h5gg.getResultsCount());
  let _0x54bb6a = 0;
  for (let _0x5bcea0 = 0; _0x5bcea0 < _0x28fe33.length; _0x5bcea0++) {
    {
      let _0x3877bb = _0x28fe33[_0x5bcea0].address;
      if (pdpy(_0x3877bb, 2000, 16, "I32") && !pdpy(_0x3877bb, 4.5, 8, "F64") && _0x28fe33.length > 2000) {
        {
          var _0x483b34 = getpy(_0x3877bb, -208, "I32");
          let _0x32e598 = safeMemoryOperation(_0x3877bb, -144, 1, "I32");
          let _0x1ee422 = safeMemoryOperation(_0x3877bb, -128, 0, "I32");
          let _0x55d06b = safeMemoryOperation(_0x3877bb, -184, -9999, "F64");
          let _0x3c761b = safeMemoryOperation(_0x3877bb, -192, -9999, "F64");
          if (_0x483b34 == 1609) {
            {
              safeMemoryOperation(_0x3877bb, -144, 100000, "I32");
            }
          }
          _0x32e598 && _0x1ee422 && _0x55d06b && _0x3c761b && _0x54bb6a++;
        }
      }
    }
  }
  h5gg.clearResults();
  return _0x54bb6a > 2000 ? _0x54bb6a : 0;
}
function funcYIXUE1() {
  if (!Query) {
    return false;
  }
  h5gg.clearResults();
  h5gg.searchNumber("3000", "I32", "0x10000000", "0x400000000");
  h5gg.searchNearby("2000", "I32", "0x15");
  h5gg.searchNumber("3000", "I32", "0x10000000", "0x400000000");
  let _0xf8e054 = h5gg.getResults(h5gg.getResultsCount());
  let _0x20dedf = 0;
  for (let _0x2fc44e = 0; _0x2fc44e < _0xf8e054.length; _0x2fc44e++) {
    {
      let _0x495b92 = _0xf8e054[_0x2fc44e].address;
      if (pdpy(_0x495b92, 2000, 16, "I32") && !pdpy(_0x495b92, 4.5, 8, "F64") && _0xf8e054.length > 2000) {
        {
          var _0x3aa010 = getpy(_0x495b92, -208, "I32");
          let _0x3feb25 = safeMemoryOperation(_0x495b92, -144, 1, "I32");
          let _0x256465 = safeMemoryOperation(_0x495b92, -128, 0, "I32");
          let _0x3fb17c = safeMemoryOperation(_0x495b92, -184, -9999, "F64");
          let _0x15b7bb = safeMemoryOperation(_0x495b92, -192, -9999, "F64");
          if (_0x3aa010 == 1609) {
            {
              safeMemoryOperation(_0x495b92, -144, 100000, "I32");
            }
          }
          _0x3feb25 && _0x256465 && _0x3fb17c && _0x15b7bb && _0x20dedf++;
        }
      }
    }
  }
  h5gg.clearResults();
  return _0x20dedf > 2000 ? _0x20dedf : 0;
}
function funcYIXUE2() {
  h5gg.clearResults();
  h5gg.searchNumber("3000", "I32", "0x10000000", "0x300000000");
  h5gg.searchNearby("2000", "I32", "0x10");
  h5gg.searchNumber("2000", "I32", "0x10000000", "0x300000000");
  let _0xe611b4 = h5gg.getResultsCount();
  let _0x337020 = h5gg.getResults(_0xe611b4);
  try {
    {
      for (let _0x24c21 = 0; _0x24c21 < _0x337020.length; _0x24c21++) {
        {
          let _0x891ebc = Number(_0x337020[_0x24c21].address);
          let _0x3e8ca2 = h5gg.getValue(_0x891ebc - 160, "I32");
          if (targetValues.indexOf(Number(_0x3e8ca2)) == -1 || _0x3e8ca2 < 10) {
            {
              continue;
            }
          }
          h5gg.setValue(_0x891ebc - 160, "10", "I32");
        }
      }
    }
  } catch (_0x5898fd) {
    {
      return false;
    }
  }
  return true;
}
const targetValues = [210000];
function funcQUANPING() {
  if (!Query) {
    return false;
  }
  h5gg.clearResults();
  h5gg.searchNumber(1445593088, "I32", "0x0", "0x200000000");
  let _0x39f8f5 = h5gg.getResults(h5gg.getResultsCount());
  let _0x317e2c = 0;
  for (let _0x414ac4 = 0; _0x414ac4 < _0x39f8f5.length; _0x414ac4++) {
    {
      let _0x45686c = _0x39f8f5[_0x414ac4].address;
      if (pdpy(_0x45686c, 452984832, 4, "I32")) {
        {
          if (safeMemoryOperation(_0x45686c, 0, -1138098176, "I32") && safeMemoryOperation(_0x45686c, 4, 469762047, "I32") && safeMemoryOperation(_0x45686c, 32, -68, "I32") && safeMemoryOperation(_0x45686c, 60, -68, "I32") && safeMemoryOperation(_0x45686c, 88, -17374, "I32") && safeMemoryOperation(_0x45686c, 92, 3546367, "I32")) {
            _0x317e2c++;
          }
        }
      }
    }
  }
  return _0x317e2c;
}
function funcLENGQUE() {
  if (!Query) {
    return false;
  }
  h5gg.clearResults();
  h5gg.searchNumber("205588993", "I32", "0x0", "0x200000000");
  let _0x171eb3 = h5gg.getResults(h5gg.getResultsCount());
  let _0x452f01 = 0;
  for (let _0x592dc0 = 0; _0x592dc0 < _0x171eb3.length; _0x592dc0++) {
    {
      let _0x4f09ee = Number(_0x171eb3[_0x592dc0].address);
      if (pdpy(_0x4f09ee, 4, 184, "I32")) {
        continue;
      }
      h5gg.setValue(_0x4f09ee, "2561", "I32");
      h5gg.setValue(_0x4f09ee + 4, "0", "I32");
      h5gg.setValue(_0x4f09ee + 8, "0", "I32");
      h5gg.setValue(_0x4f09ee + 12, "1040187392", "I32");
      _0x452f01++;
    }
  }
  return _0x452f01;
}
function funcLANHAO() {
  if (!Query) {
    return false;
  }
  h5gg.clearResults();
  h5gg.searchNumber("-1869019875", "I32", "0x0", "0x200000000");
  let _0x2f6482 = h5gg.getResults(h5gg.getResultsCount());
  let _0x22c52b = 0;
  for (let _0x101fe0 = 0; _0x101fe0 < _0x2f6482.length; _0x101fe0++) {
    {
      let _0x2068ab = Number(_0x2f6482[_0x101fe0].address);
      if (pdpy(_0x2068ab, 4, -1865742712, "I32")) {
        continue;
      }
      h5gg.setValue(_0x2068ab, "-1869019842", "I32");
      _0x22c52b++;
    }
  }
  return _0x22c52b;
}
function funcFREENAME() {
  if (!Query) {
    return false;
  }
  h5gg.clearResults();
  h5gg.searchNumber("-1041754838", "I32", "0x100000000", "0x2500000000");
  const _0x586d6d = h5gg.getResultsCount();
  const _0x3d26ec = h5gg.getResults(_0x586d6d);
  let _0x10fd45 = 0;
  for (let _0x57fa86 = 0; _0x57fa86 < _0x586d6d; _0x57fa86++) {
    {
      const _0x1a2512 = Number(_0x3d26ec[_0x57fa86].address);
      if (pdpy(_0x1a2512, -738197504, -4, "I32") && pdpy(_0x1a2512, -491520, -120, "I32")) {
        {
          safeMemoryOperation(_0x1a2512, -116, 1, "I32") && _0x10fd45++;
        }
      }
    }
  }
  return _0x10fd45;
}
function funcLEVEL() {
  if (!Query) {
    return false;
  }
  h5gg.clearResults();
  h5gg.searchNumber("2001~2009", "I32", "0x0", "0x160000000");
  h5gg.searchNearby("1~78", "I32", "0x10");
  h5gg.searchNearby("-491520", "I32", "0x10");
  h5gg.searchNumber("1~78", "I32", "0x0", "0x160000000");
  h5gg.searchNearby("0", "I32", "0x10");
  h5gg.searchNumber("0", "I32", "0x0", "0x160000000");
  let _0x32f68f = h5gg.getResults(h5gg.getResultsCount());
  let _0x5ad4e4 = 0;
  for (let _0x202483 = 0; _0x202483 < _0x32f68f.length; _0x202483++) {
    {
      let _0x1a6fd2 = _0x32f68f[_0x202483].address;
      let _0x42cfca = getpy(_0x1a6fd2, -12, "I32");
      let _0x34623a = getpy(_0x1a6fd2, 16, "I32");
      let _0x4c69a0 = getpy(_0x1a6fd2, 36, "I32");
      if (_0x42cfca == -491520 && _0x34623a >= 700 && _0x34623a < 2000000 && _0x4c69a0 == -294912) {
        {
          if (safeMemoryOperation(_0x1a6fd2, -8, 80, "I32")) {
            _0x5ad4e4++;
          }
        }
      }
    }
  }
  return _0x5ad4e4;
}
function modifySecretRealm(_0x58ac11, _0x5ed2db, _0x52bbc8) {
  if (!AppState.isProtectionEnabled) {
    return -1;
  }
  if (!Query) {
    return false;
  }
  h5gg.clearResults();
  h5gg.searchNumber("2001~2009", "I32", "0x100000000", "0x300000000");
  let _0x77d023 = h5gg.getResults(h5gg.getResultsCount());
  let _0xbe8c9d = 0;
  for (let _0x581aef = 0; _0x581aef < _0x77d023.length; _0x581aef++) {
    {
      let _0x5be4bb = _0x77d023[_0x581aef].address;
      let _0x337d4e = getpy(_0x5be4bb, 240, "I32");
      let _0x1d71dc = getpy(_0x5be4bb, 248, "I32");
      let _0xa552c4 = getpy(_0x5be4bb, 256, "I32");
      if (_0x337d4e == _0xa552c4 && _0x337d4e === _0x1d71dc && pdpy(_0x5be4bb, -294912, 236, "I32")) {
        {
          if (safeMemoryOperation(_0x5be4bb, 240, _0x5ed2db, "I32") && safeMemoryOperation(_0x5be4bb, 248, _0x52bbc8, "I32") && safeMemoryOperation(_0x5be4bb, 256, _0x58ac11, "I32")) {
            _0xbe8c9d++;
          }
        }
      }
    }
  }
  return _0xbe8c9d;
}
let monsterBaseAddr = null;
function controlMonster(_0x54c37e, _0x5d305a, _0x16b4dd, _0xb65432, _0x449a4d) {
  if (!AppState.isProtectionEnabled) {
    return -1;
  }
  if (!Query) {
    return false;
  }
  if (monsterBaseAddr === null) {
    {
      h5gg.clearResults();
      h5gg.searchNumber("89637", "I32", "0x000000000", "0x200000000");
      let _0x5e7ced = h5gg.getResults(h5gg.getResultsCount());
      for (let _0x258895 = 0; _0x258895 < _0x5e7ced.length; _0x258895++) {
        {
          let _0x2eefc0 = Number(_0x5e7ced[_0x258895].address);
          if (h5gg.getValue(_0x2eefc0 - 8, "I32") != "19636") {
            continue;
          }
          if (h5gg.getValue(_0x2eefc0 - 16, "I32") != "9635") {
            continue;
          }
          monsterBaseAddr = _0x2eefc0;
          break;
        }
      }
    }
  }
  if (monsterBaseAddr !== null) {
    {
      h5gg.setValue(monsterBaseAddr, _0x54c37e, "I32");
      h5gg.setValue(monsterBaseAddr - 8, _0x5d305a, "I32");
      h5gg.setValue(monsterBaseAddr - 16, _0x16b4dd, "I32");
      h5gg.setValue(monsterBaseAddr + 40, _0xb65432, "I32");
      h5gg.setValue(monsterBaseAddr + 48, _0x449a4d, "I32");
      return 1;
    }
  }
  return 0;
}
function funcBUSHOU() {
  if (!Query) {
    return false;
  }
  h5gg.clearResults();
  h5gg.searchNumber(-2790, "I32", "0x0", "0x200000000");
  let _0xab3762 = h5gg.getResults(h5gg.getResultsCount());
  let _0x431a77 = 0;
  for (let _0x1893f2 = 0; _0x1893f2 < _0xab3762.length; _0x1893f2++) {
    {
      let _0x1b7967 = _0xab3762[_0x1893f2].address;
      if (pdpy(_0x1b7967, -31, -8, "I32")) {
        {
          if (safeMemoryOperation(_0x1b7967, 0, -4650, "I32") && safeMemoryOperation(_0x1b7967, 8, 0, "F64")) {
            _0x431a77++;
          }
        }
      }
    }
  }
  return _0x431a77;
}
let cachedShuxingAddrs = [];
let lastShuxingSearchTime = 0;
function getShuxingAddrs() {
  if (typeof h5gg === "undefined") {
    return [];
  }
  if (Date.now() - lastShuxingSearchTime < 5000 && cachedShuxingAddrs.length > 0) {
    {
      return cachedShuxingAddrs;
    }
  }
  h5gg.clearResults();
  h5gg.searchNumber("3000", "I32", "0x0", "0x280000000");
  const _0x179980 = h5gg.getResultsCount();
  const _0x20db29 = h5gg.getResults(_0x179980);
  let _0x57d765 = [];
  for (let _0x3ea4a1 = 0; _0x3ea4a1 < _0x179980; _0x3ea4a1++) {
    {
      const _0x14468e = Number(_0x20db29[_0x3ea4a1].address);
      pdpy(_0x14468e, 4.5, 8, "F64") && pdpy(_0x14468e, 2000, 16, "I32") && _0x57d765.push(_0x14468e);
    }
  }
  cachedShuxingAddrs = _0x57d765;
  lastShuxingSearchTime = Date.now();
  return _0x57d765;
}
function writeShuxingOffset(_0x3cfcf0, _0xc1c7fe, _0x35003f) {
  if (_0xc1c7fe == "1") {
    safeMemoryOperation(_0x3cfcf0, -152, _0x35003f, "I32");
  } else {
    if (_0xc1c7fe == "2") {
      {
        safeMemoryOperation(_0x3cfcf0, -144, _0x35003f, "I32");
      }
    } else {
      if (_0xc1c7fe == "3") {
        safeMemoryOperation(_0x3cfcf0, -136, _0x35003f, "I32");
      } else {
        if (_0xc1c7fe == "4") {
          {
            safeMemoryOperation(_0x3cfcf0, -128, _0x35003f, "I32");
          }
        } else {
          if (_0xc1c7fe == "5") {
            safeMemoryOperation(_0x3cfcf0, -120, _0x35003f, "I32");
          } else {
            if (_0xc1c7fe == "6") {
              {
                safeMemoryOperation(_0x3cfcf0, -112, _0x35003f, "I32");
                safeMemoryOperation(_0x3cfcf0, -108, -491520, "I32");
              }
            } else {
              if (_0xc1c7fe == "7") {
                {
                  safeMemoryOperation(_0x3cfcf0, -104, _0x35003f, "I32");
                  safeMemoryOperation(_0x3cfcf0, -100, -491520, "I32");
                }
              } else {
                if (_0xc1c7fe == "8") {
                  safeMemoryOperation(_0x3cfcf0, -96, _0x35003f, "I32");
                  safeMemoryOperation(_0x3cfcf0, -92, -491520, "I32");
                } else {
                  if (_0xc1c7fe == "9") {
                    {
                      safeMemoryOperation(_0x3cfcf0, -88, _0x35003f, "I32");
                      safeMemoryOperation(_0x3cfcf0, -84, -491520, "I32");
                    }
                  } else {
                    if (_0xc1c7fe == "10") {
                      {
                        safeMemoryOperation(_0x3cfcf0, -80, _0x35003f, "I32");
                        safeMemoryOperation(_0x3cfcf0, -76, -491520, "I32");
                      }
                    } else {
                      if (_0xc1c7fe == "11") {
                        {
                          safeMemoryOperation(_0x3cfcf0, -72, _0x35003f, "I32");
                          safeMemoryOperation(_0x3cfcf0, -68, -491520, "I32");
                        }
                      } else {
                        if (_0xc1c7fe == "12") {
                          {
                            safeMemoryOperation(_0x3cfcf0, -64, _0x35003f, "I32");
                            safeMemoryOperation(_0x3cfcf0, -60, -491520, "I32");
                          }
                        } else {
                          if (_0xc1c7fe == "13") {
                            {
                              safeMemoryOperation(_0x3cfcf0, -56, _0x35003f, "I32");
                              safeMemoryOperation(_0x3cfcf0, -52, -491520, "I32");
                            }
                          } else {
                            if (_0xc1c7fe == "14") {
                              {
                                safeMemoryOperation(_0x3cfcf0, -48, _0x35003f, "I32");
                                safeMemoryOperation(_0x3cfcf0, -44, -491520, "I32");
                              }
                            } else {
                              if (_0xc1c7fe == "15") {
                                {
                                  safeMemoryOperation(_0x3cfcf0, -40, _0x35003f, "I32");
                                }
                              } else {
                                if (_0xc1c7fe == "16") {
                                  {
                                    safeMemoryOperation(_0x3cfcf0, -32, _0x35003f, "I32");
                                  }
                                } else {
                                  if (_0xc1c7fe == "17") {
                                    {
                                      safeMemoryOperation(_0x3cfcf0, -24, _0x35003f, "I32");
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
window.shuxingmax = function (_0x1d5d20, _0x4e0316, _0x1b8929, _0x1e805a) {
  if (typeof h5gg === "undefined") {
    return;
  }
  if (!AppState.isProtectionEnabled) {
    {
      return _0x1e805a.$toast.fail("请先开启防封过检！");
    }
  }
  _0x4e0316 = Number(_0x4e0316);
  const _0x5add31 = getShuxingAddrs();
  if (_0x5add31.length === 0) {
    return _0x1e805a.$toast.fail("开启失败，请重启游戏后重试");
  }
  for (let _0x45ecf2 = 0; _0x45ecf2 < _0x5add31.length; _0x45ecf2++) {
    writeShuxingOffset(_0x5add31[_0x45ecf2], _0x1d5d20, _0x4e0316);
  }
  _0x1e805a.$toast.success(_0x1b8929 + " 生效成功");
};
window.shuxingmax_all = function (_0x6741b6, _0xecfff5) {
  if (typeof h5gg === "undefined") {
    return;
  }
  if (!AppState.isProtectionEnabled) {
    return _0xecfff5.$toast.fail("请先开启防封过检！");
  }
  const _0x19d081 = JSON.parse(_0x6741b6);
  const _0x3463b3 = getShuxingAddrs();
  if (_0x3463b3.length === 0) {
    return _0xecfff5.$toast.fail("开启失败，请重启游戏后重试");
  }
  for (let _0x2be27a = 0; _0x2be27a < _0x3463b3.length; _0x2be27a++) {
    {
      const _0x3a62bc = _0x3463b3[_0x2be27a];
      for (let _0x341a73 = 0; _0x341a73 < _0x19d081.length; _0x341a73++) {
        {
          const _0x360cbe = _0x19d081[_0x341a73];
          _0x360cbe.val !== "" && _0x360cbe.val !== null && writeShuxingOffset(_0x3a62bc, _0x360cbe.id, Number(_0x360cbe.val));
        }
      }
    }
  }
  _0xecfff5.$toast.success("成功生效全部属性！");
};
window.Core = {
  handleFeature: function (_0x3ee804, _0x368475, _0x5e02f9) {
    if (!Query) {
      return false;
    }
    if (!_0x368475.state) {
      {
        if (_0x3ee804 === "miaochu" || _0x3ee804 === "dingshen" || _0x3ee804 === "bagua") {
          {
            controlMonster(89637, 19636, 9635, 1, -1);
            _0x5e02f9.$toast(_0x368475.name + " 已关闭");
          }
        } else {
          {
            _0x5e02f9.$toast(_0x368475.name + " 已关闭");
          }
        }
        return;
      }
    }
    if (_0x3ee804 === "fangfeng") {
      {
        if (AppState.isProtectionEnabled) {
          {
            _0x5e02f9.$toast("防封已开启");
            return;
          }
        }
        const _0xcf80be = {
          message: "正在执行功能开启...",
          forbidClick: true,
          duration: 0
        };
        _0x5e02f9.$toast.loading(_0xcf80be);
        setTimeout(() => {
          {
            const _0x308e95 = JIANCE();
            if (_0x308e95) {
              {
                _0x5e02f9.$toast.success("防封过检开启成功");
              }
            } else {
              _0x368475.state = false;
              _0x5e02f9.$toast.fail("防封开启失败，请重启游戏");
            }
          }
        }, 1000);
        return;
      }
    }
    if (_0x3ee804 === "fangfeng1") {
      {
        if (AppState.isProtectionEnabled) {
          {
            _0x5e02f9.$toast("防封已开启");
            return;
          }
        }
        const _0x457de2 = {
          message: "正在执行功能开启...",
          forbidClick: true,
          duration: 0
        };
        _0x5e02f9.$toast.loading(_0x457de2);
        setTimeout(() => {
          {
            const _0x3a5e97 = JIANCE1();
            if (_0x3a5e97) {
              {
                _0x5e02f9.$toast.success("防封过检开启成功");
              }
            } else {
              {
                _0x368475.state = false;
                _0x5e02f9.$toast.fail("防封开启失败，请重启游戏");
              }
            }
          }
        }, 1000);
        return;
      }
    }
    if (!AppState.isProtectionEnabled) {
      {
        _0x368475.state = false;
        _0x5e02f9.$toast.fail("请先开启防封过检！");
        return;
      }
    }
    if (AppState.features[_0x3ee804] && _0x3ee804 !== "miaochu" && _0x3ee804 !== "dingshen" && _0x3ee804 !== "bagua") {
      {
        _0x5e02f9.$toast("已开启 " + _0x368475.name + "，无需重复开启");
        return;
      }
    }
    const _0x61d328 = ["miaosha", "miaosha1", "quanping", "lengque", "lanhao", "gaiming", "bushou"];
    if (_0x61d328.includes(_0x3ee804)) {
      {
        const _0x30decc = {
          message: "正在执行功能开启...",
          forbidClick: true,
          duration: 0
        };
        _0x5e02f9.$toast.loading(_0x30decc);
        setTimeout(() => {
          {
            try {
              {
                let _0x3aeb97 = 0;
                if (_0x3ee804 === "miaosha") {
                  _0x3aeb97 = funcYIXUE();
                } else {
                  if (_0x3ee804 === "miaosha1") {
                    _0x3aeb97 = funcYIXUE1();
                  } else {
                    if (_0x3ee804 === "quanping") {
                      _0x3aeb97 = funcQUANPING();
                    } else {
                      if (_0x3ee804 === "lengque") {
                        _0x3aeb97 = funcLENGQUE();
                      } else {
                        if (_0x3ee804 === "lanhao") {
                          _0x3aeb97 = funcLANHAO();
                        } else {
                          if (_0x3ee804 === "gaiming") {
                            _0x3aeb97 = funcFREENAME();
                          } else {
                            if (_0x3ee804 === "bushou") {
                              _0x3aeb97 = funcBUSHOU();
                            }
                          }
                        }
                      }
                    }
                  }
                }
                if (_0x3aeb97 > 0) {
                  {
                    AppState.features[_0x3ee804] = true;
                    _0x5e02f9.$toast.success(_0x368475.name + " 开启成功");
                  }
                } else {
                  {
                    _0x368475.state = false;
                    _0x5e02f9.$toast.fail("开启失败：-12");
                  }
                }
              }
            } catch (_0x56a6dd) {
              _0x368475.state = false;
              _0x5e02f9.$toast.fail("脚本错误");
            }
          }
        }, 500);
        return;
      }
    }
    try {
      {
        let _0x454f81 = 0;
        if (_0x3ee804 === "dengji") {
          _0x454f81 = funcLEVEL();
        } else {
          if (_0x3ee804 === "miaochu") {
            _0x454f81 = controlMonster(275, 275, 275, 275, -1);
          } else {
            if (_0x3ee804 === "dingshen" || _0x3ee804 === "bagua") {
              _0x454f81 = controlMonster(30000, 30000, 30000, 1, -1);
            }
          }
        }
        if (_0x454f81 > 0) {
          {
            AppState.features[_0x3ee804] = true;
            _0x5e02f9.$toast.success(_0x368475.name + " 开启成功");
          }
        } else {
          {
            _0x368475.state = false;
            if (_0x3ee804 === "dengji" && _0x3ee804 === "gaiming") {
              _0x5e02f9.$toast.fail("开启失败：-12");
            } else {
              _0x5e02f9.$toast.success(_0x368475.name + " 执行完成");
            }
          }
        }
      }
    } catch (_0x221961) {
      {
        _0x368475.state = false;
        _0x5e02f9.$toast.fail("脚本错误");
      }
    }
  },
  mijingAction: function (_0x35cdb0, _0x3a9b59, _0x108682, _0x12581a, _0x45f9e9) {
    if (!AppState.isProtectionEnabled) {
      return _0x45f9e9.$toast.fail("请先开启防封！");
    }
    if (!Query) {
      return false;
    }
    let _0x4ae410 = modifySecretRealm(_0x35cdb0, _0x3a9b59, _0x108682);
    if (_0x4ae410 > 0) {
      _0x45f9e9.$toast.success(_0x12581a + " 开启成功");
    } else {
      _0x45f9e9.$toast.fail("开启失败");
    }
  },
  searchMusic: async function (_0x5f15a7, _0x48662e = true) {
    if (!_0x5f15a7.musicQuery) {
      return _0x5f15a7.$toast("请输入歌名");
    }
    if (_0x48662e) {
      {
        _0x5f15a7.musicList = [];
        _0x5f15a7.searchOffset = 0;
      }
    }
    const _0x394685 = {
      message: "正在搜索(多线路)...",
      forbidClick: true,
      duration: 0
    };
    _0x5f15a7.$toast.loading(_0x394685);
    const _0xa4645f = _0x5f15a7.searchOffset || 0;
    const _0x5c5c04 = encodeURIComponent(_0x5f15a7.musicQuery);
    const _0x5c75ff = ["https://itunes.apple.com/search?term=" + _0x5c5c04 + "&limit=20&media=music&entity=song&offset=" + _0xa4645f, "https://api.allorigins.win/raw?url=" + encodeURIComponent("https://itunes.apple.com/search?term=" + _0x5c5c04 + "&limit=20&media=music&entity=song&offset=" + _0xa4645f), "https://api.codetabs.com/v1/proxy?quest=" + encodeURIComponent("https://itunes.apple.com/search?term=" + _0x5c5c04 + "&limit=20&media=music&entity=song&offset=" + _0xa4645f)];
    const _0x141cc7 = (_0x53a364, _0x2909f0 = 3000) => {
      {
        return Promise.race([fetch(_0x53a364).then(_0x4a60e7 => {
          {
            if (!_0x4a60e7.ok) {
              throw new Error("Status " + _0x4a60e7.status);
            }
            return _0x4a60e7.json();
          }
        }), new Promise((_0x3b3bf7, _0x2765a9) => setTimeout(() => _0x2765a9(new Error("Timeout")), _0x2909f0))]);
      }
    };
    try {
      let _0x56cd3f = null;
      for (let _0x1b312e = 0; _0x1b312e < _0x5c75ff.length; _0x1b312e++) {
        try {
          {
            console.log("尝试线路 " + (_0x1b312e + 1) + "...");
            _0x56cd3f = await _0x141cc7(_0x5c75ff[_0x1b312e], 4000);
            if (_0x56cd3f && _0x56cd3f.results) {
              break;
            }
          }
        } catch (_0x50a046) {
          console.warn("线路 " + (_0x1b312e + 1) + " 失败:", _0x50a046);
          if (_0x1b312e === _0x5c75ff.length - 1) {
            throw _0x50a046;
          }
        }
      }
      if (_0x56cd3f && _0x56cd3f.results && _0x56cd3f.results.length > 0) {
        const _0xaecd54 = _0x56cd3f.results.map(_0x5d01bc => ({
          id: _0x5d01bc.trackId,
          name: _0x5d01bc.trackName,
          artist: _0x5d01bc.artistName,
          pic: _0x5d01bc.artworkUrl100,
          url: _0x5d01bc.previewUrl
        }));
        _0x48662e ? _0x5f15a7.musicList = _0xaecd54 : _0x5f15a7.musicList = [..._0x5f15a7.musicList, ..._0xaecd54];
        _0x5f15a7.searchOffset = _0xa4645f + 20;
        _0x5f15a7.$toast.success("搜索成功");
      } else {
        _0x5f15a7.$toast("未找到相关歌曲");
      }
    } catch (_0xbc2b56) {
      console.error("所有线路均失败", _0xbc2b56);
      _0x5f15a7.$toast.fail("网络较差，请开启加速器");
      if (_0x48662e) {
        const _0x230160 = {
          id: 0,
          name: "搜索失败 (点击重试)",
          artist: "请尝试开启/关闭 VPN 后再搜索",
          pic: "http://yunpro.xyz/IOS/logo.png",
          url: ""
        };
        _0x5f15a7.musicList = [_0x230160];
      }
    }
  },
  setGameSpeed: function (_0x4dea05) {
    if (typeof h5gg === "undefined") {
      return;
    }
    try {
      var _0x5b8ae2 = h5gg.getRangesList("Zm4 IOS");
      if (_0x5b8ae2.length === 0) {
        return;
      }
      var _0x5c653d = Number(_0x5b8ae2[0].start) + 11227600;
      var _0x2c7b3d = [8580, 17896];
      var _0x46e08f = _0x5c653d;
      for (var _0x3233e1 = 0; _0x3233e1 < _0x2c7b3d.length; _0x3233e1++) {
        var _0x2bbabc = h5gg.getValue(_0x46e08f, "I64");
        if (!_0x2bbabc || Number(_0x2bbabc) === 0) {
          return;
        }
        _0x46e08f = Number(_0x2bbabc) + _0x2c7b3d[_0x3233e1];
      }
      h5gg.setValue(_0x46e08f, _0x4dea05, "F32");
    } catch (_0x8bd775) {
      vm.$toast.fail("加速功能需要修复: " + _0x8bd775);
    }
  }
};
window.Core.setGameSpeed(1);
if (typeof window.appVue !== "undefined") {
  const _0x4b86ec = {
    key: "fangfeng",
    name: "防封过检",
    state: false
  };
  const _0x5c46ae = {
    key: "fangfeng1",
    name: "备用过检",
    state: false
  };
  const _0x4d4014 = {
    key: "miaosha",
    name: "一血秒杀",
    state: false
  };
  const _0x2e4519 = {
    key: "miaosha1",
    name: "备用秒杀",
    state: false
  };
  const _0x50ea15 = {
    key: "quanping",
    name: "全屏攻击",
    state: false
  };
  const _0x38af9e = {
    key: "miaochu",
    name: "怪物秒出",
    state: false
  };
  const _0x2820ac = {
    key: "dingshen",
    name: "怪物定身",
    state: false
  };
  window.appVue.featureList_gongneng = [_0x4b86ec, _0x5c46ae, _0x4d4014, _0x2e4519, _0x50ea15, _0x38af9e, _0x2820ac];
  const _0x55be9a = {
    key: "lengque",
    name: "技能冷却",
    state: false
  };
  const _0x59b1ee = {
    key: "lanhao",
    name: "技能蓝耗",
    state: false
  };
  const _0x322f31 = {
    key: "gaiming",
    name: "免费改名",
    state: false
  };
  const _0x22844b = {
    key: "dengji",
    name: "人物等级",
    state: false
  };
  window.appVue.featureList_yule = [_0x55be9a, _0x59b1ee, _0x322f31, _0x22844b];
  setTimeout(() => {
    let _0x5c5b7d = false;
    if (window.appVue.TextValue) {
      let _0xe541e7 = window.appVue.TextValue.match(/(\d{4})年/);
      _0xe541e7 && parseInt(_0xe541e7[1], 10) >= 2098 && (_0x5c5b7d = true);
    }
    if (_0x5c5b7d) {
      const _0x3923d1 = {
        key: "lengque",
        name: "技能冷却",
        state: false
      };
      const _0x29ec4e = {
        key: "lanhao",
        name: "技能蓝耗",
        state: false
      };
      const _0x5827cc = {
        key: "gaiming",
        name: "免费改名",
        state: false
      };
      const _0x1d5b25 = {
        key: "dengji",
        name: "人物等级",
        state: false
      };
      window.appVue.featureList_yule = [_0x3923d1, _0x29ec4e, _0x5827cc, _0x1d5b25];
    }
  }, 200);
  (function () {
    const _0x1bf225 = {
      id: "1",
      name: "生命",
      key: "hp",
      val: 1000000
    };
    const _0x2f26cf = {
      id: "2",
      name: "法力",
      key: "mp",
      val: 1000000
    };
    const _0x460ea0 = {
      id: "3",
      name: "攻击",
      key: "atk",
      val: 1000000
    };
    const _0x21843f = {
      id: "4",
      name: "护甲",
      key: "def",
      val: 1000000
    };
    const _0x34e4c2 = {
      id: "5",
      name: "魔抗",
      key: "mdef",
      val: 1000000
    };
    const _0x443695 = {
      id: "6",
      name: "爆伤增加",
      key: "critDmgInc",
      val: 1000000
    };
    const _0x42e034 = {
      id: "7",
      name: "爆伤减免",
      key: "critDmgDec",
      val: 1000000
    };
    const _0x4610ce = {
      id: "8",
      name: "命中",
      key: "hit",
      val: 1000000
    };
    const _0x3d60c0 = {
      id: "9",
      name: "闪避",
      key: "dodge",
      val: 1000000
    };
    const _0x2a6058 = {
      id: "10",
      name: "暴击",
      key: "crit",
      val: 1000000
    };
    const _0x2790bc = {
      id: "11",
      name: "韧性",
      key: "tenacity",
      val: 1000000
    };
    const _0x524798 = {
      id: "12",
      name: "幸运",
      key: "luck",
      val: 1000000
    };
    const _0x40f1dd = {
      id: "13",
      name: "破甲",
      key: "armorPen",
      val: 1000000
    };
    const _0x58d2b1 = {
      id: "14",
      name: "破魔",
      key: "magicPen",
      val: 1000000
    };
    const _0x37c36f = {
      id: "15",
      name: "回血",
      key: "hpRegen",
      val: 1000000
    };
    const _0xb8572d = {
      id: "16",
      name: "回魔",
      key: "mpRegen",
      val: 1000000
    };
    const _0x276df0 = {
      id: "17",
      name: "抗性",
      key: "resist",
      val: 1000000
    };
    let _0x5a0e5b = [_0x1bf225, _0x2f26cf, _0x460ea0, _0x21843f, _0x34e4c2, _0x443695, _0x42e034, _0x4610ce, _0x3d60c0, _0x2a6058, _0x2790bc, _0x524798, _0x40f1dd, _0x58d2b1, _0x37c36f, _0xb8572d, _0x276df0];
    try {
      let _0x231a74 = localStorage.getItem("poseidon_saved_attrs");
      if (_0x231a74) {
        let _0x478470 = JSON.parse(_0x231a74);
        _0x5a0e5b.forEach(_0x4e25f6 => {
          _0x478470[_0x4e25f6.key] !== undefined && (_0x4e25f6.val = _0x478470[_0x4e25f6.key]);
        });
      }
    } catch (_0x1409b7) {}
    window.appVue.attrList = _0x5a0e5b;
    const _0x8884f9 = {
      deep: true
    };
    window.appVue.$watch("attrList", function (_0x135839) {
      let _0x10435d = {};
      _0x135839.forEach(_0x1bfcca => {
        if (_0x1bfcca.val !== "" && _0x1bfcca.val !== null && _0x1bfcca.val !== undefined) {
          let _0x2e6a38 = Number(_0x1bfcca.val);
          if (_0x2e6a38 > 2000000000) {
            _0x1bfcca.val = 2000000000;
          }
          if (_0x2e6a38 < -2000000000) {
            _0x1bfcca.val = -2000000000;
          }
        }
        _0x10435d[_0x1bfcca.key] = _0x1bfcca.val;
      });
      localStorage.setItem("poseidon_saved_attrs", JSON.stringify(_0x10435d));
    }, _0x8884f9);
  })();
}