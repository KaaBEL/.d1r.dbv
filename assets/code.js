//@ts-check
"use strict";
// see version of editor.js
var UDF = void 0, OP = Object.prototype.hasOwnProperty, OBJ;
OBJ = {};

/** check dictionary definitions
 * @overload
 * @param {{[x: number]: string, length: number}} dicNum
 * @param {{[x: string]: number}} dicVal
 * @param {string} AT place of error message/dictonary name
 * @overload
 * @param {{[x: number]: string, length: number}} dicNum
 * @param {string} dicVal
 * @returns {void} */
function dicDefs(dicNum, dicVal, AT) {
  if (location.origin.slice(0, 4) === "http" && location.port !== "5500")
    return;
  console.time();
  AT = ". At " + (AT || dicVal) + ".";
  if (typeof dicNum != "object")
    throw new Error("Numbered dictionary isn't object" + AT);
  if (typeof dicNum.length != "number")
    throw new Error("Numbered dictionary misses length property" + AT);
  var l = dicNum.length, ar = [], val;
  // should be detected by max id property if (dicNum[l - 1] === UDF)
  //   throw new Error("Length property doesn't indicate last one" + AT);
  if (typeof dicVal != "object") {
    for (var p in dicNum)
      OP.call(dicNum, p) && !isNaN(Number(p)) && ar.push(Number(p));
    l = ar.sort(function (a, b) {
      return a - b;
    }).slice(-1)[0] + 1;
    if (l !== dicNum.length)
      console.error("Length property shoud be: " + l + AT);
    l = 0;
    for (p = "{"; l < ar.length; l++)
      p += "\n  " + JSON.stringify(dicNum[ar[l]]) + ": " + ar[l] + ",";
    console.log(p = p.slice(0, -1) + "\n}");
    return console.error("Generation used" + AT);
  }
  if (typeof dicVal != "object")
    throw new Error("Dictionary (number by value keys) isn't object" + AT)
  for (ar = []; l-- > 0;)
    if ((val = dicNum[l]) !== UDF && dicVal[val] !== l ? ar.push(val) : 0)
      throw new Error(dicVal[val] === UDF ?
        "Dictionary (number by value keys) misses key: " + val + AT :
        "Dictionary (number by value keys) at: " + val +
          " doesn't contain: " + l + AT);
  /** @TODO finalize block/ship/... definitions check */
  // for (val in dicVal)
  //   OP.call(dicVal, val) && 
  // for (pn in dicNum)
  //   if (OP.call(dicNum, pn) && !OP.call(dicVal, val = dicNum[pn]) ||
  //     String(dicVal[val]) !== pn)
  //     throw new Error("Dictonaries mismatch at numbered: " + pn +
  //       " and (number by value keys): " + dicVal[val]);
  console.timeEnd();
}

/**
 * @typedef {[number,number,number]} XYZPosition
 * @typedef {[0|1|2,boolean,0|1|2|3]} Rotation
 * @typedef {keyof typeof Color.ID | ""} Colors
 * @param {string} name
 * @param {XYZPosition} pos [y: p[1] * 2, /: 0, x: p[0] * 2]
 * @param {Rotation} rot [/: 0, /: !0, r: Math.floor(r / 90)]
 * @param {{[key: string]: any}|0} [prop={color:""}]
 * @param {keyof typeof Color.ID} [color=""] */
function Block(name, pos, rot, prop, color) {
  this.internalName = name;
  /**  [x, not-used, y]*/
  this.position = pos;
  /** [not-used, not-used, cunterclockwise] */
  this.rotation = rot;
  prop = prop || {};
  prop.color = prop.color || color || "";
  /** @type {{[key: string]: any, color: Colors}} */
  //@ts-ignore
  this.properties = prop;
  Object.seal(this);
}
Block.NAME = {
  0: "block",
  1: "wedge",
  2: "wedge_1x2",
  3: "pyramid",
  4: "pyramid_1x2",
  5: "inversed_pyrymid",
  6: "inversed_pyramid_1x2",
  7: "hydrogen_tank_small",
  8: "rcs_rocket_thruster_small",
  9: "rocket_thruster_small",
  10: "cockpit_fighter",
  11: "cockpit_cruiser",
  511: "__unknown__",
  690: "Core",
  691: "Block",
  692: "Wedge",
  693: "Wedge 1x2",
  694: "Wedge 1x4",
  695: "Pyramid",
  696: "Slab",
  697: "Smooth Corner",
  698: "Smooth Corner 1x2",
  699: "Smooth Corner 1x4",
  700: "Struct",
  701: "Glass Block",
  702: "Glass Wedge",
  736: "Tiny Hydrogen Thruster",
  737: "Small Hydrogen Thruster",
  738: "Medium Hydrogen Thruster",
  739: "Large Hydrogen Thruster",
  740: "Tiny Ion Thruster",
  741: "Small Ion Thruster",
  742: "Medium Ion Thruster",
  743: "Large Ion Thruster",
  744: "Reaction Wheel",
  752: "Small Hydrogen Tank",
  753: "Medium Hydrogen Tank",
  754: "Large Hydrogen Tank",
  755: "Small Battery",
  756: "Medium Battery",
  757: "Large Battery",
  758: "Small Storage Rack",
  759: "Medium Storage Rack",
  760: "Large Storage Rack",
  768: "Small Hydraulic Drill",
  769: "Cannon",
  770: "Rotary Cannon",
  771: "Plasma Cannon",
  772: "Pulse Laser",
  773: "Beam Laser",
  784: "Weight Block",
  785: "Armor Block",
  786: "Solar Block",
  787: "Small Solar Panel",
  788: "Hinge",
  789: "Separator",
  790: "Piston",
  791: "Camera Block",
  792: "Ghost Block",
  793: "Dock",
  799: "Inversed Dock",
  800: "Constant On Signal",
  801: "Control Block",
  802: "AND Gate",
  803: "NAND Gate",
  804: "OR Gate",
  805: "NOR Gate",
  806: "XOR Gate",
  807: "XNOR Gate",
  808: "NOT Gate",
  809: "LED",
  810: "Delay",
  811: "Constant Number",
  812: "Speed Sensor",
  813: "Tilt Sensor",
  814: "Distance Sensor",
  815: "GPS Sensor",
  816: "Numerical Inverter",
  817: "Clamp",
  818: "Abs",
  819: "Threshold Gate",
  820: "Numerical Switchbox",
  821: "Function Block",
  822: "Memory Register",
  823: "Gauge",
  824: "Dial",
  825: "Digital Display",
  length: 826
};
Block.ID = {
  "block": 0,
  "wedge": 1,
  "wedge_1x2": 2,
  "pyramid": 3,
  "pyramid_1x2": 4,
  "inversed_pyrymid": 5,
  "inversed_pyramid_1x2": 6,
  "hydrogen_tank_small": 7,
  "rcs_rocket_thruster_small": 8,
  "rocket_thruster_small": 9,
  "cockpit_fighter": 10,
  "cockpit_cruiser": 11,
  "__unknown__": 511,
  "Core": 690,
  "Block": 691,
  "Wedge": 692,
  "Wedge 1x2": 693,
  "Wedge 1x4": 694,
  "Pyramid": 695,
  "Slab": 696,
  "Smooth Corner": 697,
  "Smooth Corner 1x2": 698,
  "Smooth Corner 1x4": 699,
  "Struct": 700,
  "Glass Block": 701,
  "Glass Wedge": 702,
  "Tiny Hydrogen Thruster": 736,
  "Small Hydrogen Thruster": 737,
  "Medium Hydrogen Thruster": 738,
  "Large Hydrogen Thruster": 739,
  "Tiny Ion Thruster": 740,
  "Small Ion Thruster": 741,
  "Medium Ion Thruster": 742,
  "Large Ion Thruster": 743,
  "Reaction Wheel": 744,
  "Small Hydrogen Tank": 752,
  "Medium Hydrogen Tank": 753,
  "Large Hydrogen Tank": 754,
  "Small Battery": 755,
  "Medium Battery": 756,
  "Large Battery": 757,
  "Small Storage Rack": 758,
  "Medium Storage Rack": 759,
  "Large Storage Rack": 760,
  "Small Hydraulic Drill": 768,
  "Cannon": 769,
  "Rotary Cannon": 770,
  "Plasma Cannon": 771,
  "Pulse Laser": 772,
  "Beam Laser": 773,
  "Weight Block": 784,
  "Armor Block": 785,
  "Solar Block": 786,
  "Small Solar Panel": 787,
  "Hinge": 788,
  "Separator": 789,
  "Piston": 790,
  "Camera Block": 791,
  "Ghost Block": 792,
  "Dock": 793,
  "Inversed Dock": 799,
  "Constant On Signal": 800,
  "Control Block": 801,
  "AND Gate": 802,
  "NAND Gate": 803,
  "OR Gate": 804,
  "NOR Gate": 805,
  "XOR Gate": 806,
  "XNOR Gate": 807,
  "NOT Gate": 808,
  "LED": 809,
  "Delay": 810,
  "Constant Number": 811,
  "Speed Sensor": 812,
  "Tilt Sensor": 813,
  "Distance Sensor": 814,
  "GPS Sensor": 815,
  "Numerical Inverter": 816,
  "Clamp": 817,
  "Abs": 818,
  "Threshold Gate": 819,
  "Numerical Switchbox": 820,
  "Function Block": 821,
  "Memory Register": 822,
  "Gauge": 823,
  "Dial": 824,
  "Digital Display": 825
};
Object.freeze(Block.NAME);
Object.freeze(Block.ID);
dicDefs(Block.NAME, Block.ID, "Block definitions");
/** @param {object[]|object} blocks */
Block.arrayFromObjects = function arrayFromObjects(blocks) {
  var bs = blocks instanceof Array ? blocks : [blocks];
  for (var i = bs.length, r = []; i-- > 0;) {
    var block = bs[i], o = {
      name: block.internalName || block.name || block.n,
      pos: block.position || block.pos || block.p,
      rot: block.rotation || block.rot || block.r,
      prop: block.properties || block.prop || {color: "White"},
      flip: block.f || block.flipped
    };
    o.prop.color = block.color || block.s || o.prop.color || "";
    /**
     * @TODO properties control and nodeIndex will work differently
     * evntually (not in this update I guess) */
    o.prop.control = block.c || o.prop.control;
    o.prop.nodeIndex = block.ni || o.prop.nodeIndex;
    var name = typeof o.name == "string" ? o.name : "__unknown__",
      pos = (o.pos instanceof Array ?
        o.pos.length === 2 ? [o.pos[1] * 2, 0, o.pos[0] *  2] : o.pos :
        []).map(function (e) {
          return Number(e) || 0;
        }).concat([0, 0, 0]),
      flip = typeof o.flip == "boolean" ? o.flip : !1,
      /** @type {Rotation} *///@ts-ignore
      rot = o.rot instanceof Array && o.rot.length === 3 ?
        [o.rot[0] >= 0 && o.rot[0] < 3 && typeof o.rot[0] == "number" ?
          o.rot[0] : 0,
        typeof o.rot[1] == "boolean" ? o.rot[1] : !1,
        typeof o.rot[2] == "number" ? o.rot[2] & 3 : 0] :
        [0, flip, typeof o.rot == "number" && o.rot / 90 || 0 & 3];
    Block.ID[name] || (o.prop.invalidName = name);
    r[i] = new Block(name, [pos[0], pos[1], pos[2]], rot, o.prop);
  }
  return r;
};
/** @param {number} n */
Block.generateArray = function generateArray(n) {
  if (n !== -69)
    throw new Error("Not implemented. (only arg0: n = -69 works)");
  /** @type {Block[]} */
  var blocks = [];
  for (var i = 12, SH = "Small Hydrogen "; i-- > 0;)
    blocks.push(new Block((i % 3 !== 1 ?
      [SH + "Thruster", SH + "Tank", "Small Battery", "Wedge"] :
      ["", "Block", "Core", "Reaction Wheel"])[i / 3 | 0],
      [(i / 3 | 0) * 2 - 4, 0, i * 2 % 6 - 2],
      [0, !0, i === 9 ? 1 : 0],
      {color: i > 5 ?
        i & 1 ? "White" : "Light Gray" :
        i % 3 !== 1 ? i < 3 ? "Yellow" : "Fuel" : "White"}));
  blocks[10] = blocks[11];
  blocks.length--;
  // blocks.push(new Block("Wedge", [4, 0, 2], [0, !0, 2]),
  //   new Block(SH + "Thruster", [4, 0, -4], [0, !0, 1]));
  return blocks;
};
/**
 * @typedef {{x: number, y: number, w: number, h: number}}
 * @param {number} x @param {number} y
 * @param {number} w @param {number} h */
Block.Size = function Size(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
};
Block.Size.width = 31;
Block.Size.height = 4;
/**
 * @typedef {[number]|[number,number,number]} SizeDef
 * @typedef {SizeDef|SizeDef[]} SizesArg
 * @type {(...arg: SizesArg[]) => {[key: number]: Block.Size}} */
Block.Size.genterateSizes = function () {
  var r = {690: new this(0, 0, 2, 2)},
    /** @type {{[key: number]: SizeDef|SizeDef[], length: number}} */
    a = arguments;
  for (var i = 0, j = 0, l = 690, nw = 0; l < Block.NAME.length; l++)
    if (Block.NAME[l]) {
      /** @type {[number]|[number,number,number]} *///@ts-ignore
      var v = a[i];
      //@ts-ignore
      v instanceof Array && v[j] instanceof Array ? v = v[j++] : j = 3;
      var x = (v[0] % this.width) * 32, y = v[0] / this.width << 5;
      if (typeof nw == "object") { 
        var vup = v[0] / this.width << 0;
        console.log(Block.NAME[l], v[0] % this.width, vup, v);
        v[0] += vup * 1;
        //@ts-ignore
        nw.push(v);
      }
      r[l] = new this(x, y, (v[1] || 1) * 32, (v[2] || 1) * 32);
      if (j >= a[i].length)
        if (++i < a.length)
          j = 0;
        else
          break;
    }
  typeof nw == "object" &&
    console.log(JSON.stringify(nw).replace(/,/g, ", "));
  return r;
};
// missing larg cargo, piston, coloring of inversed dock in it,
// mask for separator?, [Dial, Digital Display, Red magnet, inversed
// Dock dont get displayed at all
// !default colors on older vehicles are set as nulls!
Block.Size.VALUE = Block.Size.genterateSizes([[0], [1], [2], [7, 1, 2], [8, 1, 4], [30], [32, 1, 1], [33], [69, 1, 2], [9, 1, 4], [34], [35], [36], [37, 1, 1], [3], [62, 2, 2], [10, 3, 4], [64, 1, 1], [95], [65, 1, 2], [13, 2, 3], [4], [5], [66, 2, 2], [15, 3, 3], [6], [18, 2, 2], [20, 2, 3], [106], [80, 2, 2], [50, 3, 3], [110], [68], [99], [107], [108], [109], [113], [114], [22], [23, 1, 2], [53], [84], [174], [85], [115], [116], [133], [24], [55], [86], [117], [25], [56], [87], [118], [26], [57], [88], [119], [27], [58], [89], [120], [28], [59], [90], [121], [29], [60], [91], [122], [30], [61]]);

/**
 * @param {string} name
 * @param {Array<number>} version
 * @param {string} time
 * @param {Array<Block>} blocks
 * @param {object|null} [properties=null] */
function Ship(name, version, time, blocks, properties) {
  this.name = name;
  this.gameVersion = version;
  this.dateTime = time;
  this.blocks = blocks;
  /** Ship properties (shortcut since it is db/dr non-standard) */
  this.prop = properties || null;
  Object.seal(this);
}
/** @param {object} object */
Ship.fromObject = function fromObject(object) {
  var o = {
    name: object.name || object.n,
    ver: object.gameVersion || object.version || object.gv,
    time: object.dateTime || object.time || object.dt,
    blocks: object.blocks || object.b,
    props: object.properties,
    add: object.ls || object.nc ? {
      grid: object.ls,
      logic: object.nc
    } : null
  };
  var name = typeof o.name === "string" ? o.name : "[unnamed]",
    ver = (typeof o.ver === "string" ?
      o.ver.replace(/ ,/g, ".").split(".") :
      o.ver instanceof Array ?
        o.ver:
        []).map(Number),
    time = typeof o.time === "string" ? o.time : dateTime(),
    blocks = o.blocks instanceof Array ?
      Block.arrayFromObjects(o.blocks) :
      Block.generateArray(-69),
    // something more was supposed to be done like ...?
    props = o.props;
  if (o.add) {
    (props = props || OBJ).launchpadSize = o.add.grid;
    props.nodeConnections = o.add.logic;
  }
  return new Ship(name, ver, time, blocks, props);
};
/** @param {Ship} ship */
Ship.toDBV = function toDBV(ship) {
  return {
    n: ship.name,
    gv: ship.gameVersion.join("."),
    dt: ship.dateTime,
    ls: (ship.prop || {}).launchpadSize || 0,
    b: ship.blocks.map(function (e) {
      return {
        n: e.internalName,
        p: [Math.floor(e.position[2] / 2),
          Math.floor(e.position[0] / 2)],
        r: Math.floor(e.rotation[2] * 90),
        f: e.rotation[1],
        s: e.properties.color,
        c: e.properties.control,
        ni: e.properties.nodeIndex
      };
    }),
    nc: (ship.prop || {}).nodeConnections
  };
}
function Color() {
  this.prop = "";
  throw new TypeError("Illegal constructor");
}
Color.NAME = {
  0: "White",
  1: "Light Gray",
  2: "Dark Gray",
  3: "Black",
  4: "Yellow",
  5: "Orange",
  6: "Red",
  7: "Wine",
  8: "Pink",
  9: "Purple",
  10: "Light Blue",
  11: "Dark Blue",
  12: "Navy",
  13: "Lime",
  14: "Green",
  15: "Fuel",
  16: "Yellow Hazard Stripes",
  17: "Red Hazard Stripes",
  18: "White Hazard Stripes",
  19: "Festive Red",
  20: "Festive Green",
  length: 21
};
Color.ID = {
  "White": 0,
  "Light Gray": 1,
  "Dark Gray": 2,
  "Black": 3,
  "Yellow": 4,
  "Orange": 5,
  "Red": 6,
  "Wine": 7,
  "Pink": 8,
  "Purple": 9,
  "Light Blue": 10,
  "Dark Blue": 11,
  "Navy": 12,
  "Lime": 13,
  "Green": 14,
  "Fuel": 15,
  "Yellow Hazard Stripes": 16,
  "Red Hazard Stripes": 17,
  "White Hazard Stripes": 18,
  "Festive Red": 19,
  "Festive Green": 20
};
Object.freeze(Color.NAME);
Object.freeze(Color.ID);
dicDefs(Color.NAME, Color.ID, "Color definitions");

var renderedShip = Ship.fromObject({name: "Starter Droneboi"});
// var block = new Block("Block", [0, 0, 0], [0, !0, 0]),
//   ship = new Ship("None", [0, 9], "never", [block]);

/** timeToString @param {number} [t=Date.now()] @param {number} [f=1] ?1 */
function dateTime(t, f) {
  // uses unix timestamp input
  if (typeof t !== "number")
    t = Math.floor(Date.now() / 1000);
  var i = 0, n, s, months = [30, 27, 30, 29, 30, 29, 30, 30, 29, 30, 29, 30];
  n = ((t % 60) * (f || 1) | 0) / (f || 1);
  s = ":" + (n < 10 ? "0" + n : n);
  n = (t = Math.floor(t / 60)) % 60;
  s = ":" + (n > 9 ? n : "0" + n) + s;
  s = " " + (t = Math.floor(t / 60)) % 24 + s;
  n = Math.floor(t / 24);
  t = Math.ceil(n % 365.25);
  if (t === 365 && !(n / 365.25 & 2))
    return "01.01." + Math.floor(n / 365.25 + 1971) + s;
  s = "." + (n / 365.25 + 1970 | 0) + s;
  if (n % 1461 > 788)
    t--;
  while (t > months[i])
    t -= months[i++] + 1;
  s = "." + (++i > 9 ? i : "0" + i) + s;
  t += 1 + +(n % 1461 === 789);
  return (t > 9 ? "" : "0") + t + s;
}

/** @function base64ToUint8array */
function base64ToUint8array(base64) {
  var uint8array = [], buffer = 0, i = 0, p = 0, c;
  for (; i < base64.length; i++) {
    c = base64.charCodeAt(i);
    if (c > 64)
      (c & 223) < 91 ? c -= c & 32 ? 71 : 65 : c = 128;
    else if (c < 58)
      c > 46 ? c === 47 ? c = 63 : c += 4 : c === 43 ? c = 62 : c = 128;
    else if (c === 61) {
      if (i & 2) {
        i & 1 ?
          i + 1 === base64.length ?
            p = 0 :
            c = 129 :
            i + 2 === base64.length && base64.charAt(i + 1) === "=" ?
              p = +!(i += 2) :
              c = 137;
        buffer !== 0 ? c = 145 : 0;
      } else
        c = 130;
    } else
      c = 128;
    if (c & 128)
      throw new Error(["char", "padding", "padding char"][c & 7] +
        " error " + (c >> 3 & 3 ) + " : " + buffer + " pos.: " + i);
    buffer = (buffer << 6) | c;
    if (p) {
      uint8array.push(buffer >> (p -= 2) & 255);
      buffer &= 63 >> (i << 1 & 6);
    } else
      p = 6;
  }
  return new Uint8Array(uint8array);
}
