/// <reference path="ship.ts" />

interface rotate {
  (selection: BlockSelection, rx: number): void;
  (selection: BlockSelection, rx: number, ry: number, rz: number): void;
}

// huh? A concept for undo redo history implementation
class Edit {
  static VER = "v.0.1.64T11";

  history: [];
  edited: Ship;

  constructor() {
    this.history = [];
    this.edited = new Ship("", [], "", []);
  }

  static listeners: (((ship?: Ship) => void) & {
    id?: string
  } | undefined)[] = [];

  /** @TODO Fix rotating tiny blocks */
  /** rotates Dr ships as well as db vehicles */
  static rotate(selection: BlockSelection, rx: number): void;
  static rotate(
    selection: BlockSelection,
    rx: number,
    ry: number,
    rz:number
  ): void;
  static rotate(
    selection: BlockSelection,
    rx: number,
    ry?: number,
    rz?: number
  ) {
    if (typeof ry != "number") {
      var applyRotation = function (rot: Rotation) {
        rot[2] = (rot[2] + rx & 3) as Rot;
      };
      ry = rz = 0;
    } else
      applyRotation = function (rot: Rotation) {
        Block.rotate(rot, rx, ry || 0, rz || 0);
      };
    rz = rz || 0;
    rx >= 0 && rx < 4 ? rx |= 0 : rx = Math.round(rx / 90) % 4 + 4 & 3;
    ry >= 0 && ry < 4 ? ry |= 0 : ry = Math.round(ry / 90) % 4 + 4 & 3;
    rz >= 0 && rz < 4 ? rz |= 0 : rz = Math.round(rz / 90) % 4 + 4 & 3;
    var i = 0, n = 0, edtA = [0, 1, 2], newA = [0];
    function prcsAxis(ax: number) {
      if (ax) {
        var a = i > 1 ? 0 : i + 1, b = i < 1 ? 2 : i - 1;
        if (ax === 2)
          var m = edtA[a], n = edtA[b];
        else
          var m = edtA[b], n = edtA[a];
        edtA[a] = ax < 3 ? m & 4 ? m & 3 : m | 4 : m;
        edtA[b] = ax > 1 ? n & 4 ? n & 3 : n | 4 : n;
      }
      edtA[i++ | 4] = ax * 90;
    }
    prcsAxis(rx);
    prcsAxis(ry);
    prcsAxis(rz);
    for (i = 0; i < selection.length;) {
      var pos = selection[i].position;
      for (n = 3, newA = [0, 0, 0]; n-- > 0;) {
        newA[n] = edtA[n] & 4 ? -pos[edtA[n] & 3] : pos[edtA[n] & 3];
      }
      applyRotation(selection[i].rotation);
      selection[i++].position = newA as XYZPosition;
    }
    Edit.eventFire(selection.parentShip);
  };
  static move(selection: BlockSelection, x: number, y: number, z: number) {
    for (var i = selection.length; i-- > 0;) {
      var pos = selection[i].position;
      pos[0] += x;
      pos[1] += y;
      pos[2] += z;
    }
    Edit.eventFire(selection.parentShip);
  };
  static eventFire(ship?: Ship): void {
    for (var i = this.listeners.length; i-- > 0;)
      (this.listeners[i] || F)(ship);
  };
  // TODO: appended at the end of methods, might be more logical to be earlier
  // for (var i = 1, seed = 35589; i < 0xfff; i++)
  //   (seed = seedRand(seed));
  // var matcher = seed, i = 0;
  // for (seed = seedRand(seed); seed !== matcher && i < 0xffffff; i++)
  //   seed = seedRand(seed);
  // taken from: https://stackoverflow.com/a/47593316
  static randSFC32 = function (seed: number) {
    var a = seed, b = seed, c = seed, d = seed;
    return function() {
      a |= 0; b |= 0; c |= 0; d |= 0;
      var t = (a + b | 0) + d | 0;
      d = d + 1 | 0;
      a = b ^ b >>> 9;
      b = c + (c << 3) | 0;
      c = (c << 21 | c >>> 11);
      c = c + t | 0;
      return (t >>> 0) / 4294967296;
    }
  };
  // end of taken
}
