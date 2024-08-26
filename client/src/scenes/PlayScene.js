function _0x44d6(_0x4412b1, _0x1bed83) {
  const _0xaf03d5 = _0xaf03();
  return (
    (_0x44d6 = function (_0x44d6f3, _0x1c7b05) {
      _0x44d6f3 = _0x44d6f3 - 0x1e4;
      let _0x22dcd5 = _0xaf03d5[_0x44d6f3];
      return _0x22dcd5;
    }),
    _0x44d6(_0x4412b1, _0x1bed83)
  );
}
const _0x1ecea0 = _0x44d6;
(function (_0x51fbb6, _0x2cf129) {
  const _0x50ef2b = _0x44d6,
    _0x523fc0 = _0x51fbb6();
  while (!![]) {
    try {
      const _0x58307b =
        parseInt(_0x50ef2b(0x24e)) / 0x1 +
        -parseInt(_0x50ef2b(0x24b)) / 0x2 +
        (parseInt(_0x50ef2b(0x269)) / 0x3) *
          (parseInt(_0x50ef2b(0x207)) / 0x4) +
        (-parseInt(_0x50ef2b(0x245)) / 0x5) *
          (-parseInt(_0x50ef2b(0x257)) / 0x6) +
        -parseInt(_0x50ef2b(0x24a)) / 0x7 +
        (-parseInt(_0x50ef2b(0x25a)) / 0x8) *
          (parseInt(_0x50ef2b(0x228)) / 0x9) +
        (-parseInt(_0x50ef2b(0x1e8)) / 0xa) *
          (-parseInt(_0x50ef2b(0x20c)) / 0xb);
      if (_0x58307b === _0x2cf129) break;
      else _0x523fc0["push"](_0x523fc0["shift"]());
    } catch (_0x1aa240) {
      _0x523fc0["push"](_0x523fc0["shift"]());
    }
  }
})(_0xaf03, 0x71d47);
class PlayScene extends Phaser["Scene"] {
  constructor() {
    const _0x3fcdb1 = _0x44d6;
    super(_0x3fcdb1(0x217));
  }
  [_0x1ecea0(0x1e5)]() {
    const _0x5b8dab = _0x1ecea0;
    (this["gw"] = gameWidth),
      (this["gh"] = gameHeight),
      (this[_0x5b8dab(0x231)] = halfGameWidth),
      (this[_0x5b8dab(0x25e)] = halfGameHeight),
      (this[_0x5b8dab(0x252)] = this[_0x5b8dab(0x25e)]),
      (this[_0x5b8dab(0x238)] = this[_0x5b8dab(0x24d)][_0x5b8dab(0x238)]),
      (this[_0x5b8dab(0x204)] = []),
      (this[_0x5b8dab(0x230)] = !![]),
      (this["isPlayerCollidePlatform"] = ![]),
      (this[_0x5b8dab(0x23e)] =
        this["getItemFromLocalStorage"](_0x5b8dab(0x23e)) || 0x0),
      (this[_0x5b8dab(0x225)] = 0x0),
      (this["platformThemes"] = platformThemes),
      (this[_0x5b8dab(0x1f8)] = 0x14),
      (this["bgElementsBackSpeed"] = this[_0x5b8dab(0x1f8)] / 0x4),
      (this[_0x5b8dab(0x260)] = 0xa),
      (this[_0x5b8dab(0x1fd)] = 0x0),
      (this[_0x5b8dab(0x221)] = 0x0),
      (this["platformThemeIndex"] = 0x0),
      this[_0x5b8dab(0x254)](),
      this[_0x5b8dab(0x1f2)](),
      this[_0x5b8dab(0x201)](),
      this[_0x5b8dab(0x236)](),
      this["addScore"](),
      this[_0x5b8dab(0x22b)](),
      this[_0x5b8dab(0x239)](),
      this[_0x5b8dab(0x259)](),
      this[_0x5b8dab(0x220)][_0x5b8dab(0x20b)](() => {
        const _0x14b87b = _0x5b8dab;
        this[_0x14b87b(0x230)] = ![];
      });
  }
  [_0x1ecea0(0x20f)]() {
    const _0x54c537 = _0x1ecea0;
    this["moveClouds"]();
    if (this[_0x54c537(0x230)]) return;
    this["updateGame"]();
    if (this[_0x54c537(0x220)][_0x54c537(0x262)]())
      this[_0x54c537(0x220)][_0x54c537(0x265)]("right");
    if (this["player"][_0x54c537(0x267)]()) this["player"][_0x54c537(0x211)]();
  }
  [_0x1ecea0(0x254)]() {
    const _0x225c07 = _0x1ecea0;
    (this["bg"] = this[_0x225c07(0x255)]
      [_0x225c07(0x22f)](0x0, 0x0, _0x225c07(0x258))
      ["setOrigin"](0x0, 0x0)
      ["setDisplaySize"](this["gw"], this["gh"])
      [_0x225c07(0x20a)](
        this[_0x225c07(0x243)][this[_0x225c07(0x221)]]["bg_color"]
      )),
      this[_0x225c07(0x226)](),
      (this["bg2"] = this["add"]
        ["image"](0x0, 0x0, _0x225c07(0x258))
        [_0x225c07(0x214)](0x0, 0x0)
        [_0x225c07(0x256)](this["gw"], this["gh"])
        ["setTint"](this[_0x225c07(0x243)][this[_0x225c07(0x221)]]["bg_color"])
        [_0x225c07(0x1fe)](0x0)),
      (this[_0x225c07(0x210)] = this[_0x225c07(0x255)]
        [_0x225c07(0x22f)](0x0, gameHeight - 0x37, "layer0")
        [_0x225c07(0x214)](0x0, 0x1)),
      (this[_0x225c07(0x210)][_0x225c07(0x241)] = this["gw"]),
      (this[_0x225c07(0x240)] = this[_0x225c07(0x255)]
        [_0x225c07(0x251)](0x0, gameHeight - 0x15c, 0x2d0, 0x72f, "layer1")
        [_0x225c07(0x214)](0x0, 0x1)),
      (this[_0x225c07(0x1f6)] = this["add"]
        ["tileSprite"](0x0, gameHeight / 0x8, 0x2d0, 0x15a, _0x225c07(0x1f6))
        [_0x225c07(0x214)](0x0, 0x0));
  }
  ["addTileSprite"](_0x2e78f2, _0x400cb7, _0x149378, _0x25747d, _0x2a9e1f) {
    const _0x41316b = _0x1ecea0,
      _0x1cf802 = this["gw"] / _0x149378;
    this[_0x41316b(0x244)] = [];
    for (let _0x2de917 = 0x0; _0x2de917 <= _0x1cf802; _0x2de917++) {
      const _0x18bd76 = this[_0x41316b(0x255)]
        [_0x41316b(0x22f)](_0x2e78f2, _0x400cb7, _0x2a9e1f)
        [_0x41316b(0x214)](0x0, 0x1);
      this[_0x41316b(0x244)][_0x41316b(0x23c)](_0x18bd76);
    }
  }
  [_0x1ecea0(0x26a)](_0x52d85f) {
    const _0x41afa2 = _0x1ecea0;
    return Number(localStorage[_0x41afa2(0x23d)](_0x52d85f));
  }
  [_0x1ecea0(0x25b)]() {
    const _0x42d752 = _0x1ecea0;
    let _0x40cfd4 = [];
    for (let _0x51f9a2 = 0x1; _0x51f9a2 <= 0x7; _0x51f9a2++) {
      _0x40cfd4["push"](_0x42d752(0x248) + _0x51f9a2);
    }
    return _0x40cfd4;
  }
  [_0x1ecea0(0x1fb)]() {
    const _0x21fb47 = _0x1ecea0;
    this[_0x21fb47(0x1f6)]["tilePositionX"] += 0x1;
  }
  [_0x1ecea0(0x226)]() {
    const _0x1c3bc9 = _0x1ecea0;
    this["bgColorIndex"] += 0x1;
    if (this["bgColorIndex"] === this["platformThemes"][_0x1c3bc9(0x1f7)])
      this["bgColorIndex"] = 0x0;
  }
  [_0x1ecea0(0x212)]() {
    const _0xf0ac1b = _0x1ecea0;
    this[_0xf0ac1b(0x215)] += 0x1;
    if (this[_0xf0ac1b(0x215)] === this[_0xf0ac1b(0x243)][_0xf0ac1b(0x1f7)])
      this[_0xf0ac1b(0x215)] = 0x0;
  }
  [_0x1ecea0(0x202)]() {
    const _0x283859 = _0x1ecea0,
      _0x16d576 = this[_0x283859(0x260)];
    if (this[_0x283859(0x1fd)] % _0x16d576 === 0x0) this[_0x283859(0x212)]();
    if (this[_0x283859(0x225)] % _0x16d576 || !this[_0x283859(0x225)]) return;
    this["updateColorIndex"]();
    const _0x2e0faa =
        this[_0x283859(0x205)][_0x283859(0x237)] === 0x0
          ? this["bg"]
          : this[_0x283859(0x205)],
      _0x2468a7 = _0x2e0faa === this["bg"] ? 0x1 : 0x0;
    this[_0x283859(0x1f0)][_0x283859(0x255)]({
      targets: this[_0x283859(0x205)],
      alpha: _0x2468a7,
      duration: 0x3e8,
      ease: _0x283859(0x218),
      onComplete: () =>
        _0x2e0faa[_0x283859(0x20a)](
          this[_0x283859(0x243)][this[_0x283859(0x221)]][_0x283859(0x242)]
        ),
    });
  }
  [_0x1ecea0(0x1f2)]() {
    const _0x108afc = _0x1ecea0;
    this["player"] = new Player(
      this,
      -0x46,
      this["gh"] - this[_0x108afc(0x252)],
      _0x108afc(0x220)
    );
  }
  ["addPlatform"](_0x23168e) {
    const _0x20b80a = _0x1ecea0,
      _0xfcafb1 = {
        x: 0x1c2 * _0x23168e + 0x15e,
        y: this[_0x20b80a(0x22c)](
          this[_0x20b80a(0x252)] - 0xa0,
          this[_0x20b80a(0x252)] + 0xa0
        ),
        w: 0x12c - this["allNumberOfPlatformsInGame"] * 0x3,
        h: this["gh"] - 0x37,
        theme: this["platformThemes"][this[_0x20b80a(0x215)]],
      };
    let _0x635c41 = new Platform(this, _0xfcafb1);
    this[_0x20b80a(0x204)]["push"](_0x635c41),
      this["physics"][_0x20b80a(0x255)][_0x20b80a(0x1f1)](
        this["player"],
        _0x635c41[_0x20b80a(0x20d)],
        (_0x4e835b, _0x4fa937) => {
          const _0x2167a1 = _0x20b80a;
          _0x4e835b[_0x2167a1(0x227)][_0x2167a1(0x21d)]() &&
            this[_0x2167a1(0x249)] &&
            ((this[_0x2167a1(0x249)] = ![]), _0x4e835b["idle"]());
        }
      );
  }
  [_0x1ecea0(0x201)]() {
    const _0x6b9709 = _0x1ecea0;
    this["addFirstPlatform"](), this["increaseNumberOfPlatforms"]();
    for (let _0x3ba2b5 = 0x0; _0x3ba2b5 <= 0x1; _0x3ba2b5++) {
      this["addPlatform"](_0x3ba2b5), this[_0x6b9709(0x232)]();
    }
  }
  ["addFirstPlatform"]() {
    const _0x532a41 = _0x1ecea0,
      _0x54361e = {
        x: -0x64,
        y: this[_0x532a41(0x252)],
        w: 0x12c,
        h: this["gh"] - 0x37,
        theme: this[_0x532a41(0x243)][this["platformThemeIndex"]],
      },
      _0x1220f7 = new Platform(this, _0x54361e);
    this[_0x532a41(0x23b)][_0x532a41(0x255)][_0x532a41(0x1f1)](
      this["player"],
      _0x1220f7[_0x532a41(0x20d)],
      (_0x3ee4f4, _0x4d5269) => {
        const _0x47f5c = _0x532a41;
        _0x3ee4f4[_0x47f5c(0x227)][_0x47f5c(0x21d)]() &&
          this["isPlayerCollidePlatform"] &&
          ((this[_0x47f5c(0x249)] = ![]), _0x3ee4f4[_0x47f5c(0x264)]());
      }
    ),
      this[_0x532a41(0x204)][_0x532a41(0x23c)](_0x1220f7);
  }
  [_0x1ecea0(0x232)]() {
    const _0x1bbc6f = _0x1ecea0;
    this[_0x1bbc6f(0x1fd)] += 0x1;
  }
  [_0x1ecea0(0x236)]() {
    const _0x1c62b2 = _0x1ecea0;
    (this[_0x1c62b2(0x1f5)] = this["add"]
      [_0x1c62b2(0x251)](0x0, this["gh"], 0x44c, 0x37, _0x1c62b2(0x1f5))
      [_0x1c62b2(0x214)](0x0, 0x1)
      ["setDepth"](0x1)),
      this[_0x1c62b2(0x23b)][_0x1c62b2(0x266)][_0x1c62b2(0x21b)](
        this[_0x1c62b2(0x1f5)]
      ),
      (this["ground"][_0x1c62b2(0x227)][_0x1c62b2(0x1ec)] = ![]),
      this[_0x1c62b2(0x1f5)]["body"][_0x1c62b2(0x247)](!![]),
      this["physics"][_0x1c62b2(0x255)][_0x1c62b2(0x1f1)](
        this[_0x1c62b2(0x220)],
        this["ground"],
        null,
        () => {
          if (this["isGameOver"]) return;
          this["initLostGame"]();
        }
      );
  }
  [_0x1ecea0(0x233)]() {
    const _0x133955 = _0x1ecea0;
    this["ground"]["tilePositionX"] += this[_0x133955(0x1f8)];
  }
  [_0x1ecea0(0x22b)]() {
    const _0x3bf37f = _0x1ecea0;
    this[_0x3bf37f(0x209)]
      ["on"](
        _0x3bf37f(0x203),
        function () {
          const _0x1039c1 = _0x3bf37f;
          this[_0x1039c1(0x220)]["preparing"]();
        },
        this
      )
      ["on"](
        "pointerup",
        function () {
          const _0x5b3501 = _0x3bf37f;
          (this[_0x5b3501(0x249)] = !![]), this["player"][_0x5b3501(0x1ef)]();
        },
        this
      );
  }
  [_0x1ecea0(0x222)]() {
    const _0x29ca50 = _0x1ecea0;
    let _0x1a6993 = [];
    for (let _0x14b7a8 = 0x0; _0x14b7a8 < 0xa; _0x14b7a8++) {
      _0x1a6993[_0x29ca50(0x23c)](
        Math[_0x29ca50(0x216)](Math["random"]() * 0x64)
      );
    }
    const _0x1bc02 = _0x1a6993[_0x29ca50(0x200)]("");
    return localStorage[_0x29ca50(0x1e6)]("id", _0x1bc02), _0x1bc02;
  }
  [_0x1ecea0(0x21a)]() {
    const _0x3476dd = _0x1ecea0;
    (this[_0x3476dd(0x230)] = !![]),
      this[_0x3476dd(0x220)]["dead"](),
      this[_0x3476dd(0x234)]();
  }
  [_0x1ecea0(0x234)]() {
    const _0xf97258 = _0x1ecea0;
    (this[_0xf97258(0x21e)] = new LostScreen(
      this,
      this[_0xf97258(0x225)],
      this["bestScore"]
    )),
      this[_0xf97258(0x1f5)]["setDepth"](0x0),
      this[_0xf97258(0x1ee)]["setVisible"](![]),
      this[_0xf97258(0x21e)][_0xf97258(0x223)][_0xf97258(0x22b)](() => {
        const _0x19d80f = _0xf97258;
        this[_0x19d80f(0x238)][_0x19d80f(0x213)][_0x19d80f(0x24f)](),
          this[_0x19d80f(0x1e7)]["restart"]();
      }),
      this[_0xf97258(0x21e)][_0xf97258(0x22e)]["onClick"](() => {
        const _0x2dffa4 = _0xf97258;
        this["audio"][_0x2dffa4(0x213)][_0x2dffa4(0x24f)](),
          this[_0x2dffa4(0x1e7)][_0x2dffa4(0x206)](!![], _0x2dffa4(0x1ea)),
          this[_0x2dffa4(0x261)](_0x2dffa4(0x1ea), _0x2dffa4(0x217));
      }),
      this[_0xf97258(0x21e)][_0xf97258(0x219)][_0xf97258(0x22b)](() => {
        const _0x5d06c9 = _0xf97258;
        this[_0x5d06c9(0x238)][_0x5d06c9(0x213)][_0x5d06c9(0x24f)](),
          this[_0x5d06c9(0x1e7)][_0x5d06c9(0x206)](!![], _0x5d06c9(0x1f4)),
          this[_0x5d06c9(0x261)](_0x5d06c9(0x1f4), _0x5d06c9(0x217));
      }),
      this[_0xf97258(0x21e)]["shareButton"][_0xf97258(0x22b)](() => {
        const _0x5f5dcb = _0xf97258;
        this["audio"]["click"][_0x5f5dcb(0x24f)](),
          this["sendRequestUpdateScore"]();
      });
  }
  async [_0x1ecea0(0x1fc)]() {
    const _0x3d3197 = _0x1ecea0,
      _0x3b0e98 = {
        score: this["getItemFromLocalStorage"]("bestScore"),
        nick: localStorage[_0x3d3197(0x23d)]("nickname"),
        id: this[_0x3d3197(0x26a)]("id"),
      };
    try {
      const _0x3fef24 = await (
        await UPDATE_SCORE(_0x3b0e98)
      )[_0x3d3197(0x268)]();
      _0x3fef24
        ? this[_0x3d3197(0x21e)]["changeResponseText"](!![])
        : this[_0x3d3197(0x21e)][_0x3d3197(0x23f)](![]);
    } catch (_0x35abc8) {
      this["lostScreen"]["changeResponseText"](![]);
    }
  }
  [_0x1ecea0(0x246)]() {
    const _0x4c953d = _0x1ecea0;
    (this[_0x4c953d(0x225)] += 0x1),
      this["scoreText"][_0x4c953d(0x1ff)](this[_0x4c953d(0x225)]);
  }
  [_0x1ecea0(0x208)]() {
    const _0x5eaf7a = _0x1ecea0;
    (this["layer1"][_0x5eaf7a(0x25f)] += this[_0x5eaf7a(0x235)]),
      (this[_0x5eaf7a(0x1f6)][_0x5eaf7a(0x25f)] += this["bgElementsBackSpeed"]);
  }
  [_0x1ecea0(0x250)]() {
    const _0x20623f = _0x1ecea0;
    this["platforms"][_0x20623f(0x1eb)]((_0x21d6dd) => {
      const _0x4c9351 = _0x20623f;
      _0x21d6dd[_0x4c9351(0x263)](-this[_0x4c9351(0x1f8)]);
    });
  }
  [_0x1ecea0(0x1ed)]() {
    const _0x407539 = _0x1ecea0;
    this[_0x407539(0x220)][_0x407539(0x263)](-this[_0x407539(0x1f8)]);
  }
  [_0x1ecea0(0x23a)]() {
    const _0x2daa22 = _0x1ecea0;
    this["movePlatforms"](),
      this["movePlayer"](),
      this[_0x2daa22(0x208)](),
      this[_0x2daa22(0x233)]();
  }
  [_0x1ecea0(0x1f3)]() {
    const _0x5b805d = _0x1ecea0;
    this["player"]["isTouchingDown"]() &&
      this[_0x5b805d(0x220)]["getPosition"]() >=
        this["platforms"][0x1][_0x5b805d(0x1e4)]["x"] &&
      this[_0x5b805d(0x23a)](),
      this["platforms"][0x1][_0x5b805d(0x1e4)]["x"] <= 0x0 &&
        (this["updatePlatforms"](),
        this[_0x5b805d(0x246)](),
        this[_0x5b805d(0x202)]());
  }
  [_0x1ecea0(0x22c)](_0x19b1bf, _0x34d11d) {
    const _0x34bf22 = _0x1ecea0;
    return Math[_0x34bf22(0x216)](
      Phaser[_0x34bf22(0x21c)][_0x34bf22(0x22a)](_0x19b1bf, _0x34d11d)
    );
  }
  ["updatePlatforms"]() {
    const _0xa5e925 = _0x1ecea0,
      _0x3bcc03 = 0x384,
      _0x93e57a = this[_0xa5e925(0x22c)](
        this[_0xa5e925(0x252)] - 0xa0,
        this[_0xa5e925(0x252)] + 0xa0
      ),
      _0xc86940 = 0x12c - this[_0xa5e925(0x1fd)] * 0x3,
      _0x330d95 = this["gh"] - 0x37,
      _0xb95495 = this[_0xa5e925(0x243)][this["platformThemeIndex"]];
    let _0x9a5ace = this["platforms"][_0xa5e925(0x229)]();
    this[_0xa5e925(0x204)][_0xa5e925(0x23c)](_0x9a5ace),
      _0x9a5ace[_0xa5e925(0x1f9)](
        _0x3bcc03,
        _0x93e57a,
        _0xc86940,
        _0x330d95,
        _0xb95495
      ),
      this[_0xa5e925(0x232)]();
    if (this["allNumberOfPlatformsInGame"] === 0x5) {
    }
  }
  [_0x1ecea0(0x21f)]() {
    const _0x334e84 = _0x1ecea0;
    this[_0x334e84(0x1ee)] = this[_0x334e84(0x255)]
      [_0x334e84(0x22d)](
        this[_0x334e84(0x231)],
        this["gh"] / 0xa,
        this[_0x334e84(0x225)],
        {
          fontFamily: "Arial",
          fontSize: "90px",
          color: _0x334e84(0x25d),
          stroke: _0x334e84(0x224),
          strokeThickness: 0xa,
          shadow: { blur: 0x0, stroke: ![], fill: ![] },
        }
      )
      ["setOrigin"](0.5, 0.5);
  }
  ["changeScene"](_0xfafcb3, _0x172a5a) {
    const _0x4be8c3 = _0x1ecea0;
    if (!this[_0x4be8c3(0x1e7)][_0x4be8c3(0x253)](_0xfafcb3)) {
      this[_0x4be8c3(0x1e7)]["launch"](_0xfafcb3, { currentScene: _0x172a5a }),
        this[_0x4be8c3(0x1e7)]["bringToTop"](_0xfafcb3);
      return;
    }
    const _0x1d62dd = this[_0x4be8c3(0x1e7)][_0x4be8c3(0x1fa)](_0xfafcb3);
    this[_0x4be8c3(0x1e7)]["pause"](),
      this[_0x4be8c3(0x1e7)][_0x4be8c3(0x206)](![], _0x172a5a),
      this[_0x4be8c3(0x1e7)][_0x4be8c3(0x206)](!![], _0xfafcb3),
      _0x1d62dd[_0x4be8c3(0x1e7)][_0x4be8c3(0x24c)]({
        currentScene: _0x172a5a,
      }),
      this[_0x4be8c3(0x1e7)][_0x4be8c3(0x1e9)](_0xfafcb3);
  }
  [_0x1ecea0(0x259)]() {
    const _0x502f70 = _0x1ecea0;
    if (this[_0x502f70(0x23e)] !== 0x0) return;
    this[_0x502f70(0x25c)] = new Tutorial(
      this,
      this[_0x502f70(0x231)],
      this[_0x502f70(0x252)]
    );
  }
  [_0x1ecea0(0x239)]() {
    const _0x107ae5 = _0x1ecea0;
    new Button(this, this["gw"] - 0x32, this["gh"] / 0xa, _0x107ae5(0x20e))[
      "on"
    ](
      _0x107ae5(0x203),
      function (_0x4cd4ad) {
        const _0x1a3dbb = _0x107ae5;
        this[_0x1a3dbb(0x238)]["click"][_0x1a3dbb(0x24f)](),
          this[_0x1a3dbb(0x1e7)][_0x1a3dbb(0x206)](![], _0x1a3dbb(0x217)),
          this[_0x1a3dbb(0x261)]("PauseScene", _0x1a3dbb(0x217)),
          _0x4cd4ad["stopPropagation"]();
      },
      this
    );
  }
}
function _0xaf03() {
  const _0x2f7228 = [
    "player",
    "bgColorIndex",
    "generateId",
    "replayButton",
    "#000000",
    "score",
    "updateColorIndex",
    "body",
    "4756743RzQtsA",
    "shift",
    "Between",
    "onClick",
    "randomNumber",
    "text",
    "achievementsButton",
    "image",
    "isGameOver",
    "halfW",
    "increaseNumberOfPlatforms",
    "moveGround",
    "addLostScreen",
    "bgElementsBackSpeed",
    "addGround",
    "alpha",
    "audio",
    "addPauseButton",
    "setupGame",
    "physics",
    "push",
    "getItem",
    "bestScore",
    "changeResponseText",
    "layer1",
    "displayWidth",
    "bg_color",
    "platformThemes",
    "layer1Array",
    "3487595aBBoNA",
    "updateScore",
    "setImmovable",
    "floor_",
    "isPlayerCollidePlatform",
    "5476870MvBgDJ",
    "1608482Gdwqws",
    "restart",
    "game",
    "42606edyfqy",
    "play",
    "movePlatforms",
    "tileSprite",
    "halfHeightScreen",
    "isPaused",
    "addBackground",
    "add",
    "setDisplaySize",
    "6jdezhk",
    "bg1",
    "addTutorial",
    "8CWnlAL",
    "addPlatformTextures",
    "tutorial",
    "#FFFFFF",
    "halfH",
    "tilePositionX",
    "numberOfPlatformsForChangeTheme",
    "changeScene",
    "isTouchingRight",
    "move",
    "idle",
    "bounce",
    "world",
    "isFallingDown",
    "json",
    "3CFKEFw",
    "getItemFromLocalStorage",
    "container",
    "create",
    "setItem",
    "scene",
    "5475850hukuWi",
    "bringToTop",
    "RankScene",
    "forEach",
    "allowGravity",
    "movePlayer",
    "scoreText",
    "jump",
    "tweens",
    "collider",
    "addPlayer",
    "updateGame",
    "RankingScene",
    "ground",
    "layer2",
    "length",
    "gameObjectsMoveBackSpeed",
    "setup",
    "get",
    "moveClouds",
    "sendRequestUpdateScore",
    "allNumberOfPlatformsInGame",
    "setAlpha",
    "setText",
    "join",
    "addPlatforms",
    "updateGameTheme",
    "pointerdown",
    "platforms",
    "bg2",
    "setVisible",
    "794180TUWemq",
    "moveBackground",
    "input",
    "setTint",
    "startEntryGameAim",
    "33yikLqc",
    "skeleton",
    "pauseButton",
    "update",
    "layer0",
    "fall",
    "useNextPlatformTheme",
    "click",
    "setOrigin",
    "platformThemeIndex",
    "floor",
    "PlayScene",
    "Linear",
    "rankingButton",
    "initLostGame",
    "enableBody",
    "Math",
    "onFloor",
    "lostScreen",
    "addScore",
  ];
  _0xaf03 = function () {
    return _0x2f7228;
  };
  return _0xaf03();
}
