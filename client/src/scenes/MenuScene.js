function _0x8072(_0x21309c, _0x1e5cc8) {
  const _0x3a126e = _0x3a12();
  return (
    (_0x8072 = function (_0x807259, _0x4a8f71) {
      _0x807259 = _0x807259 - 0x1c1;
      let _0x113732 = _0x3a126e[_0x807259];
      return _0x113732;
    }),
    _0x8072(_0x21309c, _0x1e5cc8)
  );
}
const _0x760d48 = _0x8072;
(function (_0x46a4d2, _0x586b71) {
  const _0x3fceac = _0x8072,
    _0x5994e1 = _0x46a4d2();
  while (!![]) {
    try {
      const _0xb95eec =
        (-parseInt(_0x3fceac(0x1d1)) / 0x1) *
          (parseInt(_0x3fceac(0x1da)) / 0x2) +
        parseInt(_0x3fceac(0x1f2)) / 0x3 +
        (-parseInt(_0x3fceac(0x1ea)) / 0x4) *
          (parseInt(_0x3fceac(0x1e2)) / 0x5) +
        (parseInt(_0x3fceac(0x1d0)) / 0x6) *
          (-parseInt(_0x3fceac(0x1e6)) / 0x7) +
        (-parseInt(_0x3fceac(0x1e5)) / 0x8) *
          (-parseInt(_0x3fceac(0x1e4)) / 0x9) +
        parseInt(_0x3fceac(0x1d8)) / 0xa +
        (-parseInt(_0x3fceac(0x1d2)) / 0xb) *
          (parseInt(_0x3fceac(0x1eb)) / 0xc);
      if (_0xb95eec === _0x586b71) break;
      else _0x5994e1["push"](_0x5994e1["shift"]());
    } catch (_0x36faa5) {
      _0x5994e1["push"](_0x5994e1["shift"]());
    }
  }
})(_0x3a12, 0xe7b17);
class MenuScene extends Phaser[_0x760d48(0x1cb)] {
  constructor() {
    const _0x384147 = _0x760d48;
    super(_0x384147(0x1dc));
  }
  ["create"]() {
    const _0x458e03 = _0x760d48;
    (this["gw"] = gameWidth),
      (this["gh"] = gameHeight),
      (this["halfW"] = halfGameWidth),
      (this[_0x458e03(0x1d3)] = halfGameHeight),
      (this["audio"] = this["game"][_0x458e03(0x1c2)]),
      this[_0x458e03(0x1c2)][_0x458e03(0x203)][_0x458e03(0x1ef)](),
      this[_0x458e03(0x1f5)](),
      this[_0x458e03(0x1c5)](),
      this["addRiskyJumperText"](),
      this[_0x458e03(0x1e7)](),
      this[_0x458e03(0x1c8)](),
      this[_0x458e03(0x1fa)](),
      this[_0x458e03(0x1fd)](),
      this[_0x458e03(0x1d5)]();
  }
  [_0x760d48(0x1f5)]() {
    const _0x4ac764 = _0x760d48;
    this[_0x4ac764(0x1ee)]
      [_0x4ac764(0x1f8)](0x0, 0x0, "menuBg")
      [_0x4ac764(0x1c7)](0x0, 0x0)
      ["setDisplaySize"](this["gw"], this["gh"]);
  }
  ["addRiskyJumperText"]() {
    const _0x2d9e0f = _0x760d48;
    this[_0x2d9e0f(0x1ee)][_0x2d9e0f(0x1f8)](
      this[_0x2d9e0f(0x1e3)],
      this["gh"] / 0x7,
      _0x2d9e0f(0x1e9)
    );
  }
  [_0x760d48(0x1c8)]() {
    const _0x4a4ee4 = _0x760d48;
    new Button(
      this,
      this[_0x4a4ee4(0x1e3)] - this["gw"] / 0x3,
      this["gh"] - this["gh"] / 0x3 + 0xfa,
      _0x4a4ee4(0x200)
    )[_0x4a4ee4(0x1fc)](() => {
      const _0x5df582 = _0x4a4ee4;
      this[_0x5df582(0x1c2)]["click"][_0x5df582(0x1ef)](),
        this[_0x5df582(0x1ec)][_0x5df582(0x1f3)]("SettingsScene"),
        this[_0x5df582(0x1ec)][_0x5df582(0x1c6)](!![], _0x5df582(0x1f4)),
        this["scene"][_0x5df582(0x1e1)]("SettingsScene"),
        !this[_0x5df582(0x1ec)][_0x5df582(0x1cf)](_0x5df582(0x1f4)) &&
          this[_0x5df582(0x1ec)][_0x5df582(0x1dd)](_0x5df582(0x1f4));
    });
  }
  [_0x760d48(0x1fa)]() {
    const _0x475d2c = _0x760d48;
    new Button(
      this,
      this["halfW"],
      this["gh"] - this["gh"] / 0x3 + 0xfa,
      "rankingButton"
    )[_0x475d2c(0x1fc)](() => {
      const _0x5d71ca = _0x475d2c;
      this["audio"][_0x5d71ca(0x1c4)][_0x5d71ca(0x1ef)](),
        this[_0x5d71ca(0x1f9)]("RankingScene", _0x5d71ca(0x1dc));
    });
  }
  [_0x760d48(0x1fd)]() {
    const _0x4174a4 = _0x760d48;
    new Button(
      this,
      this[_0x4174a4(0x1e3)] + this["gw"] / 0x3,
      this["gh"] - this["gh"] / 0x3 + 0xfa,
      _0x4174a4(0x1f6)
    )[_0x4174a4(0x1fc)](() => {
      const _0x555744 = _0x4174a4;
      this[_0x555744(0x1c2)][_0x555744(0x1c4)]["play"](),
        this[_0x555744(0x1f9)](_0x555744(0x1e0), _0x555744(0x1dc));
    });
  }
  ["changeScene"](_0x146f55, _0x2ef7f6) {
    const _0x1f97a7 = _0x760d48;
    if (!this[_0x1f97a7(0x1ec)][_0x1f97a7(0x1cf)](_0x146f55)) {
      this["scene"][_0x1f97a7(0x1dd)](_0x146f55, { currentScene: _0x2ef7f6 }),
        this[_0x1f97a7(0x1ec)][_0x1f97a7(0x1f3)](_0x146f55);
      return;
    }
    const _0x50f80c = this[_0x1f97a7(0x1ec)]["get"](_0x146f55);
    this[_0x1f97a7(0x1ec)][_0x1f97a7(0x1df)](),
      this[_0x1f97a7(0x1ec)][_0x1f97a7(0x1c6)](![], _0x2ef7f6),
      this["scene"][_0x1f97a7(0x1c6)](!![], _0x146f55),
      _0x50f80c[_0x1f97a7(0x1ec)][_0x1f97a7(0x1de)]({
        currentScene: _0x2ef7f6,
      }),
      this[_0x1f97a7(0x1ec)][_0x1f97a7(0x1f3)](_0x146f55);
  }
  [_0x760d48(0x1c5)]() {
    const _0xe1e53c = _0x760d48;
    this[_0xe1e53c(0x1fb)](this[_0xe1e53c(0x1e3)], this["gh"]),
      this[_0xe1e53c(0x1fe)](this["halfW"], this["gh"] / 0x4),
      this[_0xe1e53c(0x1d4)](
        this[_0xe1e53c(0x1e3)] - 0x96,
        this["gh"] - this["gh"] / 0x3
      ),
      this["addPlatform2"](
        this["halfW"] + 0xc8,
        this["gh"] - this["gh"] / 0x3 - 0xc8
      ),
      this[_0xe1e53c(0x201)](this[_0xe1e53c(0x1e3)], this["halfH"]),
      this[_0xe1e53c(0x1ce)](this["halfW"], this["gh"]);
  }
  ["addLayer1"](_0x10f1f3, _0x1c10aa) {
    const _0x831f27 = _0x760d48;
    this["add"]
      [_0x831f27(0x1f8)](_0x10f1f3, _0x1c10aa, "menuLayer1")
      ["setOrigin"](0.5, 0x1);
  }
  [_0x760d48(0x1fe)](_0x28b7f7, _0x299542) {
    const _0x2617c1 = _0x760d48,
      _0x5ebfff = this[_0x2617c1(0x1ee)]
        [_0x2617c1(0x1f8)](_0x28b7f7, _0x299542, _0x2617c1(0x1f7))
        [_0x2617c1(0x1c7)](0.5, 0x0),
      _0x410ed8 = {
        target: _0x5ebfff,
        x: _0x5ebfff["x"] - 0x14,
        y: _0x5ebfff["y"] + 0xf,
        time: 0x834,
      };
    this["moveAnim"](_0x410ed8);
  }
  [_0x760d48(0x1d4)](_0x1a2910, _0x4471a2) {
    const _0x1734b6 = _0x760d48,
      _0x381e32 = this["add"]
        [_0x1734b6(0x1f8)](_0x1a2910, _0x4471a2, _0x1734b6(0x1d6))
        [_0x1734b6(0x1c7)](0.5, 0x0),
      _0x535f24 = {
        target: _0x381e32,
        x: _0x381e32["x"] - 0x14,
        y: _0x381e32["y"] + 0xf,
        time: 0x7d0,
      };
    this[_0x1734b6(0x1ff)](_0x535f24);
  }
  ["addPlatform2"](_0x3a867e, _0x43fbd0) {
    const _0x38b280 = _0x760d48,
      _0x15e030 = this[_0x38b280(0x1ee)]
        [_0x38b280(0x1f8)](_0x3a867e, _0x43fbd0, _0x38b280(0x1d7))
        [_0x38b280(0x1c7)](0.5, 0x0),
      _0x1a0900 = {
        target: _0x15e030,
        x: _0x15e030["x"] - 0x14,
        y: _0x15e030["y"] + 0xf,
        time: 0x9c4,
      };
    this[_0x38b280(0x1ff)](_0x1a0900);
  }
  [_0x760d48(0x201)](_0x133e22, _0x584e82) {
    const _0xc8d39a = _0x760d48,
      _0x220a58 = this["add"]
        [_0xc8d39a(0x1f8)](_0x133e22, _0x584e82, "heroMenuIcon")
        [_0xc8d39a(0x1c7)](0.5, 0.5),
      _0x21aa49 = {
        target: _0x220a58,
        x: _0x220a58["x"] - 0x14,
        y: _0x220a58["y"] + 0xf,
        time: 0x898,
      };
    this["moveAnim"](_0x21aa49);
  }
  [_0x760d48(0x1ce)](_0x246ffe, _0x5f3501) {
    const _0x5eeb4a = _0x760d48;
    this[_0x5eeb4a(0x1ee)]
      ["image"](_0x246ffe, _0x5f3501, _0x5eeb4a(0x1db))
      [_0x5eeb4a(0x1c7)](0.5, 0x1);
  }
  [_0x760d48(0x1ff)]({
    target: _0x5152ff,
    x: _0x34c8f3,
    y: _0xf33c8c,
    time: _0x51e369,
    ease: ease = "Sine.easeInOut",
  }) {
    this["tweens"]["add"]({
      targets: _0x5152ff,
      x: _0x34c8f3,
      y: _0xf33c8c,
      ease: ease,
      duration: _0x51e369,
      yoyo: !![],
      repeat: -0x1,
    });
  }
  [_0x760d48(0x1e7)]() {
    const _0x5d4d58 = _0x760d48,
      _0x127a77 = new Button(
        this,
        this[_0x5d4d58(0x1e3)],
        this["gh"] - this["gh"] / 0x3,
        _0x5d4d58(0x1f0)
      )[_0x5d4d58(0x1fc)](() => {
        const _0x1563f8 = _0x5d4d58;
        this[_0x1563f8(0x1c2)]["mainMenu"][_0x1563f8(0x1ed)](),
          this[_0x1563f8(0x1c2)][_0x1563f8(0x1c4)][_0x1563f8(0x1ef)](),
          this["scene"]
            ["sleep"](_0x1563f8(0x1dc))
            ["resume"](_0x1563f8(0x1f1))
            [_0x1563f8(0x1d9)](_0x1563f8(0x1dc), _0x1563f8(0x1f1)),
          this["scene"][_0x1563f8(0x1c6)](![], _0x1563f8(0x1dc));
      });
    this[_0x5d4d58(0x1ca)][_0x5d4d58(0x1ee)]({
      targets: _0x127a77,
      ease: "Power2",
      scaleX: 1.1,
      scaleY: 1.1,
      duration: 0x1f4,
      yoyo: !![],
      repeat: -0x1,
    });
  }
  [_0x760d48(0x1c1)](_0x3e7ca1, _0x5a0d74) {
    const _0x56bd62 = _0x760d48,
      _0x3049ff = _0x56bd62(0x1cd);
    this[_0x56bd62(0x1e8)] = this[_0x56bd62(0x1ee)]
      [_0x56bd62(0x1c3)](_0x3e7ca1, _0x5a0d74, _0x3049ff, {
        fontFamily: _0x56bd62(0x202),
        fontSize: _0x56bd62(0x1c9),
        color: "#FF0000",
        stroke: "#FF0000",
        strokeThickness: 0x3,
        shadow: { blur: 0x0, stroke: ![], fill: ![] },
      })
      [_0x56bd62(0x1c7)](0.5, 0.5);
  }
  [_0x760d48(0x1d5)]() {
    const _0x4102ce = _0x760d48;
    if (localStorage[_0x4102ce(0x1cc)]("nickname")) return;
    this[_0x4102ce(0x1c1)](this[_0x4102ce(0x1e3)], this["halfH"]);
  }
}
function _0x3a12() {
  const _0x4ba3bc = [
    "settingsButton",
    "addHeroIcon",
    "Arial",
    "mainMenu",
    "addConnectionProblemText",
    "audio",
    "text",
    "click",
    "addBackgroundComponents",
    "setVisible",
    "setOrigin",
    "addSettingsButton",
    "50px",
    "tweens",
    "Scene",
    "getItem",
    "Nick\x20couldn\x27t\x20be\x20saved\x0adue\x20to\x20a\x20connection\x20problem",
    "addGround",
    "isPaused",
    "558gEdPsy",
    "6nbqRZM",
    "55puyldz",
    "halfH",
    "addPlatform1",
    "checkConnectionStatus",
    "menuPlatform1",
    "menuPlatform2",
    "6558530dtFgLP",
    "swapPosition",
    "89514vUcrju",
    "menuGround",
    "MenuScene",
    "launch",
    "restart",
    "pause",
    "RankScene",
    "resume",
    "10CXmMZs",
    "halfW",
    "81bRLPjo",
    "1306360JABrUJ",
    "4305sXKhfh",
    "addPlayButton",
    "connectionStatus",
    "riskyJumperText",
    "3000376DcCmnZ",
    "948348iRWrDV",
    "scene",
    "stop",
    "add",
    "play",
    "playButton",
    "PlayScene",
    "3133731MklUZq",
    "bringToTop",
    "SettingsScene",
    "addBackground",
    "achivButton",
    "menuClouds",
    "image",
    "changeScene",
    "addRankingButton",
    "addLayer1",
    "onClick",
    "addAchievementsButton",
    "addClouds",
    "moveAnim",
  ];
  _0x3a12 = function () {
    return _0x4ba3bc;
  };
  return _0x3a12();
}
