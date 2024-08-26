function _0x1972() {
  const _0x1acd7f = [
    "332428KbFcUc",
    "505948ppmgKZ",
    "Scale",
    "div",
    "CENTER_BOTH",
    "5159133yhMlCF",
    "FIT",
    "2892900KQkhug",
    "innerHeight",
    "Game",
    "139836ySptLn",
    "2927535lYhnId",
    "AUTO",
    "2051352kGEQio",
  ];
  _0x1972 = function () {
    return _0x1acd7f;
  };
  return _0x1972();
}
const _0x3c0a01 = _0x5a9a;
(function (_0x469cf3, _0x31c108) {
  const _0x4a3fde = _0x5a9a,
    _0x4923a4 = _0x469cf3();
  while (!![]) {
    try {
      const _0x2e7d9b =
        parseInt(_0x4a3fde(0x71)) / 0x1 +
        parseInt(_0x4a3fde(0x70)) / 0x2 +
        parseInt(_0x4a3fde(0x7a)) / 0x3 +
        parseInt(_0x4a3fde(0x6f)) / 0x4 +
        -parseInt(_0x4a3fde(0x6d)) / 0x5 +
        parseInt(_0x4a3fde(0x77)) / 0x6 +
        -parseInt(_0x4a3fde(0x75)) / 0x7;
      if (_0x2e7d9b === _0x31c108) break;
      else _0x4923a4["push"](_0x4923a4["shift"]());
    } catch (_0x5bca02) {
      _0x4923a4["push"](_0x4923a4["shift"]());
    }
  }
})(_0x1972, 0x5f844);
function _0x5a9a(_0x1eabc3, _0x1e3cdf) {
  const _0x197219 = _0x1972();
  return (
    (_0x5a9a = function (_0x5a9ae6, _0x25a67e) {
      _0x5a9ae6 = _0x5a9ae6 - 0x6d;
      let _0x5c606a = _0x197219[_0x5a9ae6];
      return _0x5c606a;
    }),
    _0x5a9a(_0x1eabc3, _0x1e3cdf)
  );
}
const targetWidth = 0x2d0,
  targetHeight = 0x500,
  statusbarHeight = 0x1e,
  deviceRatio = window[_0x3c0a01(0x78)] / window["innerWidth"],
  newRatio = (targetWidth / targetHeight) * deviceRatio,
  gameWidth = targetWidth,
  gameHeight = targetHeight * newRatio,
  halfGameWidth = gameWidth / 0x2,
  halfGameHeight = gameHeight / 0x2,
  config = {
    type: Phaser[_0x3c0a01(0x6e)],
    parent: _0x3c0a01(0x73),
    physics: {
      default: "arcade",
      arcade: { debug: ![], gravity: { y: 0x3e8 } },
    },
    scale: {
      mode: Phaser[_0x3c0a01(0x72)][_0x3c0a01(0x76)],
      width: gameWidth,
      height: gameHeight,
      autoCenter: Phaser[_0x3c0a01(0x72)][_0x3c0a01(0x74)],
    },
    dom: { createContainer: !![] },
    scene: [
      PreloadScene,
      LoginScene,
      MenuScene,
      PlayScene,
      RankScene,
      PauseScene,
      SettingsScene,
      RankingScene,
    ],
  },
  game = new Phaser[_0x3c0a01(0x79)](config);
