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
function dictionaryDefs(dicNum, dicVal, AT) {
  if (location.origin.slice(0, 4) === "http" && location.port !== "5500")
    return;
  console.time();
  AT = ". At " + (AT || dicVal) + ".";
  if (typeof dicNum != "object")
    throw new Error("Numbered dictionary isn't object" + AT);
  if (typeof dicNum.length != "number")
    throw new Error("Numbered dictionary misses length property" + AT);
  var l = dicNum.length, max = 0, ar = [], val;
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
    throw new Error("Dictionary (number by value keys) isn't object" + AT);
  for (var p in dicNum)
    if (OP.call(dicNum, p))
      if (isNaN(l = Number(p)))
        p !== "length" && console.error("Property: \"" + p + "\" foun" +
          "d in numbered dictionary else than \"length\" or number" + AT);
      else if (!OP.call(dicVal, val = dicNum[p]))
        throw new Error("Dictonaries mismatch at numbered: \"" + p +
          "\" and (number by value keys): " + dicVal[val]);
      else if (dicVal[val] !== l)
        throw new Error(dicVal[val] === UDF ?
          "Dictionary (number by value keys) misses key: " + val + AT :
          "Dictionary (number by value keys) at: \"" + val +
            "\" doesn't contain: " + l + AT);
      else if (l > max)
        max = l;
  for (p in dicVal)
    if (OP.call(dicVal, p) && !OP.call(dicNum, dicVal[p]))
      throw new Error("Property: \"" + dicVal[p] + "\", value: " +
        JSON.stringify(p) + " is not present in numbered directory" + AT);
  if (++max !== dicNum.length)
    throw new Error("Length property of numbered dictionary should be: " +
      max + AT);
  console.timeEnd();
}

/** block names in dbv are case insesitve loaded by game,
 * Block name definitions require strict letter cases here */
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
  738: "Tiny Hydrogen Thruster",
  739: "Small Hydrogen Thruster",
  740: "Medium Hydrogen Thruster",
  741: "Large Hydrogen Thruster",
  742: "Tiny Ion Thruster",
  743: "Small Ion Thruster",
  744: "Medium Ion Thruster",
  745: "Large Ion Thruster",
  746: "Reaction Wheel",
  754: "Small Hydrogen Tank",
  755: "Medium Hydrogen Tank",
  756: "Large Hydrogen Tank",
  757: "Small Battery",
  758: "Medium Battery",
  759: "Large Battery",
  760: "Small Storage Rack",
  761: "Medium Storage Rack",
  762: "Large Storage Rack",
  770: "Small Hydraulic Drill",
  771: "Cannon",
  772: "Rotary Cannon",
  773: "Plasma Cannon",
  774: "Pulse Laser",
  775: "Beam Laser",
  // TNT
  776: "__placeholder776__",
  786: "Weight Block",
  787: "Armor Block",
  788: "Solar Block",
  789: "Small Solar Panel",
  790: "Hinge",
  791: "Separator",
  792: "Piston",
  793: "Camera Block",
  794: "Ghost Block",
  795: "Dock",
  // Red Magnet
  780: "__placeholder798__",
  // Inversed Dock
  781: "__placeholder799__",
  802: "Constant On Signal",
  803: "Control Block",
  804: "AND Gate",
  805: "NAND Gate",
  806: "OR Gate",
  807: "NOR Gate",
  808: "XOR Gate",
  809: "XNOR Gate",
  810: "NOT Gate",
  811: "LED",
  812: "Delay",
  813: "Constant Number",
  814: "Speed Sensor",
  815: "Tilt Sensor",
  816: "Distance Sensor",
  817: "GPS Sensor",
  818: "Numerical Inverter",
  819: "Clamp",
  820: "Abs",
  821: "Threshold Gate",
  822: "Numerical Switchbox",
  823: "Function Block",
  824: "Memory Register",
  825: "Gauge",
  826: "Dial",
  827: "Digital Display",
  // station wall 4 sides LBRU
  834: "__placeholder834__",
  // station wall 2 sides corner LB
  835: "__placeholder835__",
  // station wall 1 side B
  836: "__placeholder836__",
  // station wall 0 sides
  837: "__placeholder837__",
  // station wall 3 sides LBR
  838: "__placeholder838__",
  // station wall 2 sides opposite LR
  839: "__placeholder839__",
  // station solar block
  840: "__placeholder840__",
  // station launchpad door casing
  841: "__placeholder841__",
  // station launchpad door middle
  842: "__placeholder842__",
  // station launchpad door ending
  843: "__placeholder843__",
  // station floor 1 1x1
  844: "__placeholder844__",
  // station floor 1 2x2
  845: "__placeholder845__",
  // station floor 2 2x2
  846: "__placeholder846__",
  // station door casing
  847: "__placeholder847__",
  // station door middle
  848: "__placeholder848__",
  // station door ending
  849: "__placeholder849__",
  // station terminal
  850: "__placeholder850__",
  // station bench
  851: "__placeholder851__",
  // station wardrobe
  852: "__placeholder852__",
  // station telescope
  853: "__placeholder853__",
  length: 854
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
  "Tiny Hydrogen Thruster": 738,
  "Small Hydrogen Thruster": 739,
  "Medium Hydrogen Thruster": 740,
  "Large Hydrogen Thruster": 741,
  "Tiny Ion Thruster": 742,
  "Small Ion Thruster": 743,
  "Medium Ion Thruster": 744,
  "Large Ion Thruster": 745,
  "Reaction Wheel": 746,
  "Small Hydrogen Tank": 754,
  "Medium Hydrogen Tank": 755,
  "Large Hydrogen Tank": 756,
  "Small Battery": 757,
  "Medium Battery": 758,
  "Large Battery": 759,
  "Small Storage Rack": 760,
  "Medium Storage Rack": 761,
  "Large Storage Rack": 762,
  "Small Hydraulic Drill": 770,
  "Cannon": 771,
  "Rotary Cannon": 772,
  "Plasma Cannon": 773,
  "Pulse Laser": 774,
  "Beam Laser": 775,
  "__placeholder776__": 776,
  "__placeholder798__": 780,
  "__placeholder799__": 781,
  "Weight Block": 786,
  "Armor Block": 787,
  "Solar Block": 788,
  "Small Solar Panel": 789,
  "Hinge": 790,
  "Separator": 791,
  "Piston": 792,
  "Camera Block": 793,
  "Ghost Block": 794,
  "Dock": 795,
  "Constant On Signal": 802,
  "Control Block": 803,
  "AND Gate": 804,
  "NAND Gate": 805,
  "OR Gate": 806,
  "NOR Gate": 807,
  "XOR Gate": 808,
  "XNOR Gate": 809,
  "NOT Gate": 810,
  "LED": 811,
  "Delay": 812,
  "Constant Number": 813,
  "Speed Sensor": 814,
  "Tilt Sensor": 815,
  "Distance Sensor": 816,
  "GPS Sensor": 817,
  "Numerical Inverter": 818,
  "Clamp": 819,
  "Abs": 820,
  "Threshold Gate": 821,
  "Numerical Switchbox": 822,
  "Function Block": 823,
  "Memory Register": 824,
  "Gauge": 825,
  "Dial": 826,
  "Digital Display": 827,
  "__placeholder834__": 834,
  "__placeholder835__": 835,
  "__placeholder836__": 836,
  "__placeholder837__": 837,
  "__placeholder838__": 838,
  "__placeholder839__": 839,
  "__placeholder840__": 840,
  "__placeholder841__": 841,
  "__placeholder842__": 842,
  "__placeholder843__": 843,
  "__placeholder844__": 844,
  "__placeholder845__": 845,
  "__placeholder846__": 846,
  "__placeholder847__": 847,
  "__placeholder848__": 848,
  "__placeholder849__": 849,
  "__placeholder850__": 850,
  "__placeholder851__": 851,
  "__placeholder852__": 852,
  "__placeholder853__": 853
};
Object.freeze(Block.NAME);
Object.freeze(Block.ID);
dictionaryDefs(Block.NAME, Block.ID, "Block definitions");
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
     * eventually (not in this update I guess) */
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
Block.Size.width = 50;
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
        // Block.Size must be change as well for resing to work
        v[0] += vup * 19;
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
// not all blocks were tested properly
Block.Size.VALUE = Block.Size.genterateSizes([[0], [1], [2], [7, 1, 2], [8, 1, 4], [50], [51, 1, 1], [52], [107, 1, 2], [9, 1, 4], [53], [54], [55], [56, 1, 1], [3], [100, 2, 2], [10, 3, 4], [102, 1, 1], [152], [103, 1, 2], [13, 2, 3], [4], [5], [104, 2, 2], [15, 3, 3], [6], [18, 2, 2], [20, 2, 3], [163], [118, 2, 2], [31, 3, 3], [167], [106], [156], [164], [165], [166], [182], [170], [171], [22], [23, 1, 2], [72], [122], [181], [123], [172], [173], [130], [180], [24], [74], [124], [174], [25], [75], [125], [175], [26], [76], [126], [176], [27], [77], [127], [177], [28], [78], [128], [178], [29], [79], [129], [179], [30], [80], [40], [41], [42], [43], [44], [45], [144, 2, 2], [134, 1, 2], [135, 1, 2], [136, 1, 2], [189], [140, 2, 2], [142, 2, 2], [84], [85], [86], [34, 4, 1], [90, 2, 1], [38, 2, 3], [87]]);

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
  var blocks = [];
  for (var i = 0, e = blocks[0]; i < ship.blocks.length; i++) {
    e = ship.blocks[i];
    /__placeholder\d+__/.test(e.internalName) || blocks.push({
      n: e.internalName,
      p: [Math.floor(e.position[2]) / 2,
        Math.floor(e.position[0]) / 2],
      r: Math.floor(e.rotation[2] * 90),
      f: e.rotation[1],
      s: e.properties.color,
      c: e.properties.control,
      ni: e.properties.nodeIndex
    });
  }
  return {
    n: ship.name,
    gv: ship.gameVersion.join("."),
    dt: ship.dateTime,
    ls: (ship.prop || {}).launchpadSize || 0,
    b: blocks,
    nc: (ship.prop || {}).nodeConnections
  };
};
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
dictionaryDefs(Color.NAME, Color.ID, "Color definitions");
/** @param {string} name @return {Colors} */
Color.default = function getColor(name) {
  if (/Hydrogen Thruster/.test(name))
    return "Yellow";
  if (/Wheel|Battery|Weight|Armor|__placeholder84[456]__/.test(name))
    return "Light Gray";
  if (/Hydrogen Tank/.test(name))
    return "Fuel";
  if (/Drill|Storage Rack/.test(name))
    return "Orange";
  if (/Ion Thruster/.test(name))
    return "Lime"
  if (/__placeholder776__/.test(name))
    return "Red";
  return "White";
};

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
