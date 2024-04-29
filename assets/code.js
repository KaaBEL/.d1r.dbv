//@ts-check
"use strict";
// v.0.1.24
/** @TODO ask E.A about Beer Phonk */
/** @TODO check significantVersion */
var OP = Object.prototype.hasOwnProperty,
  /** @type {()=>any} */
  OC = function () {
    return {};
  };

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

/** object is sealed
 * @template {number} T
 * @param {T} type @param {number} x @param {number} y */
function Logic(type, x, y) {
  /** 0|1 = input, has only index reference to source, 2|3 = output */
  this.type = type;
  this.x = x;
  this.y = y;
  /** @type {T extends 0|1?number:number[]} *///@ts-ignore
  this.pairs = type > 1 ? [] : -1;
  /** @type {Block|null} */
  this.owner = null;
  Object.seal(this);
}
/** @param {...{k:number,x:number,y:number}[]|string|number} args */
Logic.generateLogic = function () {
  /** @type {{[key:number]:Logic[]|undefined}} */
  var o = {},
    /** @type {{k:number,x:number,y:number}[][]} */
    defs = [];
  /** @param {{k:number,x:number,y:number}[]|string} arg  */
  function setLogic(arg) {
    var nodesDef = typeof arg == "string" ?
      defs[Number(arg)] :
      defs[defs.length] = arg;
    for (var i = 0, nodes = o[l++] = []; i < nodesDef.length;) {
      var def = nodesDef[i++];
      nodes.push(Object.freeze(new Logic(def.k, def.x / 2, def.y / -2)));
    }
  }
  for (var i = 0, l = 690, a = arguments; i < a.length; i++)
    typeof a[i] == "number" ?
      l = a[i] :
      OP.call(o, l) ?
        console.error("Property ", l++, "already exists, at generateLogic") :
        setLogic(a[i]);
  return o;
};

/** @TODO later improve logic comments briefness+clarity */
/** entire oject is frost @type {{[key:number]:Logic[]|undefined}} */
Logic.VALUE = Logic.generateLogic(
  // def0
  738, [{k: 0, x: 0, y: 0}],
  // def1
  [{k: 0, x: 0, y: 1}, {k: 1, x: 0, y: -1}],
  // def2
  "1", "1", "0", "1", "1", "1", 746, [{k: 1, x: 0, y: 0}],
  770, "0",
  // def3
  "0", "0", "0", "0", "0", 789, [{k: 0, x: 0, y: 2}],
  "2", "0", "2",
  // def4
  795, "0", 798, "0", "0", 802, [{k: 2, x: 0, y: 0}],
  // def5
  "4", [{k: 0, x: -1, y: -1}, {k: 0, x: -1, y: 1}, {k: 2, x: 1, y: 0}],
  // def6
  "5", "5", "5", "5", "5", [{k: 0, x: -1, y: 0}, {k: 2, x: 1, y: 0}],
  // def7
  "0", "6", [{k: 3, x: 0, y: 0}],
  // def8
  "7", "7", "7", [{k: 3, x: -1, y: 0}, {k: 3, x: 1, y: 0}],
  // def9
  [{k: 1, x: -1, y: 0}, {k: 3, x: 1, y: 0}],
  // def10
  "9", "9", [{k: 1, x: -1, y: 0}, {k: 2, x: 1, y: 0}],
  // def11
  [
    {k: 0, x: -1, y: -1},
    {k: 1, x: -1, y: 1},
    {k: 1, x: 1, y: 1},
    {k: 3, x: 1, y: -1}
  ],
  // def12
  [
    {k: 1, x: -1, y: -1},
    {k: 1, x: -1, y: 1},
    {k: 1, x: 1, y: 1},
    {k: 3, x: 1, y: -1}
  ],
  // def13
  [
    {k: 0, x: -1, y: -1},
    {k: 0, x: -1, y: 1},
    {k: 1, x: 1, y: 1},
    {k: 3, x: 1, y: -1}
  ],
  "2", "2", "2");
Logic.dashOff = 0;
Object.freeze(Logic.VALUE);
/** addDefault but for Logic - if property contains nodeIndex data it
 * will use them to reassemble these connections, to reassamble them
 * properly Logic.reassemble must be used on completed blocks
 * @param {string|number} name @param {object} property
 * @param {(Logic<any>|undefined)[]} logics
 * it is the Logic.nodes or ship.prop.connections
 * @param {Block[]} blocks */
// (v.0.1.20.2) I might've accidently screw this method up so much
// this method is supposed to be the initialize default, not
// Logic(property).fromObject at the same time... BRUH --v
/** @TODO Logics rework update */
Logic.addLogic = function (name, property, logics, blocks) {
  // nodeIndex (ni) is set to index where logic node ends up in logics
  /** @type {number[]} (new) DBV property nodeIndex(es) */
  var ni = [],
    logicDef = Logic.VALUE[typeof name == "number" ?
      name :
      Block.ID[name]
    ];
  property.nodeIndex instanceof Array ||
    (property.nodeIndex = []);
  if (!logicDef)
    return property;
  // (0.1.20.2) why? logicDef = logicDef.concat([]);
  for (var i = logicDef.length, l = 1; i-- > 0; ni[i] = index) {
    // prepare not taken index
    while (logics[l])
      l++;
    var n = 0, node = new Logic(logicDef[i].type, 0, 0);
    // this works with the old savefiles logic, new is converted to it
    /** @type {number} */
    // BE AWARE nodeIndex is nor DBV property here, it's old format
    // connections references like extracted from control property
    var index = property.nodeIndex[i], item = logics[index];
    // logicDef defines what node is going to be specified/listed
    if (logicDef[i].type > 1) {
      // if it is output it will later or might already be referenced
      // by input, so it needs to be replaced to presented index
      // index is not taken
      if (!item) {
        logics[index || (index = l)] = node;
        continue;
      }
      // (0.1.20.2) huh case check (checking for unsupposed wierd case)
      if (typeof index != "number")
        console.error("logics contain property with non-number key" +
          ", at Logic.addLogic().");
      // index being already taken by another output
      if (item.pairs instanceof Array) {
        console.warn("Two output nodes with identical index" +
          ", at Logic.addLogic().");
        continue;
      }
      // index (var item) can be taken only by input now
      // move the input to not taken index
      logics[l] = item;
      // find 'owner' block to update nodeIndex reference to its node
      blocks.some(function (e) {
        var niCheck = e.properties && e.properties.nodeIndex;
        if (niCheck instanceof Array) {
          (n = niCheck.indexOf(index)) < 0 ? 0 : niCheck[n] = l;
          return n >= 0;
        }
      });
      logics[index] = node;
      continue;
    }
    node.pairs = index || -1;
    // else just take first unassigned index for input
    logics[index = l] = node;
    // there's the requirement of Logic.reassemble to be used
    // due to the lack of blocks list while blocks are uner construcion
  }
  property.nodeIndex = ni;
  return property;
};
/** @param {Block[]} blocks @param {(Logic<any>|undefined)[]} [logics] */
Logic.reassemble = function (blocks, logics) {
  if (logics && logics.length)
    for (var i = blocks.length; i-- > 0;) {
      var arr = blocks[i].properties.nodeIndex || [];
      for (var j = arr.length; j-- > 0;) {
        var n = arr[j], node = logics[n];
        if (!node)
          continue;
        // assign reference to 'owner' Block
        node.owner = blocks[i];
        // if the node of a block is input and it is connected tp output
        if (node.pairs instanceof Array || !(node = logics[node.pairs]))
          continue;
        // add reference to the paired output
        node.pairs instanceof Array ? node.pairs.indexOf(n) === -1 &&
          node.pairs.push(n) : console.error("Paired input with input," +
            " at Logic.reassemble.");
      }
    }
  return blocks;
};
//-((0.1.21)not anymore)(0.1.20.2) feature
/** @param {Block} block @param {(Logic<any>|undefined)[]} logics */
Logic.removeLogic = function (block, logics) {
  var ni = block.properties.nodeIndex || [];
  for (var i = ni.length; i-- > 0;) {
    var node = logics[ni[i]] || {pairs: -1};
    delete logics[ni[i]];
    if (typeof node.pairs == "number") {
      var pairs = logics[node.pairs];
      if (pairs) {
        pairs.pairs instanceof Array ?
          delete pairs.pairs[pairs.pairs.indexOf(ni[i])] :
          console.error("Input connected to input.");
      } else if (node.pairs !== -1)
        console.error("Connection to missing node.");
      continue;
    }
    for (var j = node.pairs.length; j-- > 0;)
      if (!(pairs = logics[node.pairs[j]]))
        console.error("Connection to missing node.");
      else
        pairs.pairs instanceof Array ?
          console.error("Output connected to output.") :
          pairs.pairs = -1;
  }
};
// Logic static properties
/** specifies when logic nodes and connections should be rendered */
Logic.rend = !1;
/** @type {(Logic|null)[]&{ownerShip:Ship}} */
Logic.nodes = OC();
if (Logic.nodes[0] && Logic.nodes[0].type === 1)
  Logic.nodes[0].type;

function Color() {
  this.prop = !1;
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
  21: "BREAD",
  length: 22
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
  "Festive Green": 20,
  "BREAD": 21
};
Object.freeze(Color.NAME);
Object.freeze(Color.ID);
dictionaryDefs(Color.NAME, Color.ID, "Color definitions");
/** @param {string} name @return {Colors} */
Color.default = function getColor(name) {
  if (/Hydrogen Thruster/.test(name))
    return "Yellow";
  if (/Wheel|Battery|__placeholder84[456]__/.test(name))
    return "Light Gray";
  if (/Weight|Armou?r|Camera Block/.test(name))
    return "Dark Gray";
  if (/Hydrogen Tank/.test(name))
    return "Fuel";
  if (/Drill|Storage Rack/.test(name))
    return "Orange";
  if (/Ion Thruster/.test(name))
    return "Lime"
  if (/__placeholder776__/.test(name))
    return "Red";
  if (Color.colorlessRegexp.test(name))
    return null;
  return "White";
};
Color.colorlessRegexp = new RegExp("Struct|Glass Block|Glass Wedge|Sol\
ar Block|Solar Panel|Hinge|Piston|Ghost Block|Gauge|Dial|Digital Displ\
ay|__placeholder(?:839|84[0-26-9]|85[0-3])__");
/** block names in dbv are case insesitve loaded by game,
 * Block name definitions require strict letter cases here */
/**
 * @typedef {[number,number,number]} XYZPosition
 * @typedef {[0|1|2,boolean,0|1|2|3]} Rotation
 * @typedef {keyof typeof Color.ID|""|null} Colors
 * @typedef {{control?:(number|string|[number,number,number,number])[],
 * nodeIndex?:number[],weldGroup?:number}} BlockProps
 * @param {string} name
 * @param {XYZPosition} pos [/: 0, x: p[0] * 2, y: p[1] * 2]
 * @param {Rotation} rot [/: 0, f: f, r: Math.floor(r / 90)]
 * @param {{[key:string]: any}|0} [prop={color:""}]
 * @param {keyof typeof Color.ID|null} [color=""] */
function Block(name, pos, rot, prop, color) {
  this.internalName = name;
  /** [not-used, x, y] */
  this.position = pos;
  /** [not-used, flipped, cunterclockwise] */
  this.rotation = rot;
  prop = prop || {};
  prop.color = color !== UDF ?
    prop.color = color :
    prop.color === null || prop.color ? prop.color : "";
  /** @type {{[key:string]:any,color:Colors}&BlockProps} */
  //@ts-ignore
  this.properties = prop;
  Object.seal(this);
}
// NOTE that blocks definitions will be version dependant over time
// there is just no need to implement it yet (allows cross version editing)
/** object is frost */
Block.NAME = {
  0: "block",
  1: "wedge",
  2: "wedge_1x2",
  3: "pyramid",
  4: "pyramid_1x2",
  5: "inverse_pyramid",
  6: "inverse_pyramid_1x2",
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
  796: "Small Rift Drive",
  // Red Magnet
  798: "__placeholder798__",
  // Inversed Dock
  799: "__placeholder799__",
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
/** object is frost */
Block.ID = {
  "block": 0,
  "wedge": 1,
  "wedge_1x2": 2,
  "pyramid": 3,
  "pyramid_1x2": 4,
  "inverse_pyramid": 5,
  "inverse_pyramid_1x2": 6,
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
  "Small Rift Drive": 796,
  "__placeholder798__": 798,
  "__placeholder799__": 799,
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
/** @type {{[key:number]:number|undefined}} */
Block.WEIGHT = {
  690: 2,
  691: 1,
  692: .5,
  693: 1,
  694: 2,
  695: .5,
  696: .5,
  697: .5,
  698: 1,
  699: 2,
  700: .5,
  701: 1,
  702: .5,
  738: .5,
  739: 2,
  740: 8,
  741: 24,
  742: .75,
  743: 3,
  744: 6,
  745: 18,
  746: 2,
  754: 2,
  755: 8,
  756: 18,
  757: 3,
  758: 12,
  759: 18,
  760: 3,
  761: 12,
  762: 27,
  770: 3,
  771: 2,
  772: 2,
  773: 2,
  774: 2,
  775: 2,
  786: 10,
  787: 5,
  788: 1,
  789: 1,
  790: 5,
  791: 1,
  792: 5,
  793: 1,
  794: 1,
  795: 1,
  796: 5,
  799: 1,
  802: .25,
  803: 1,
  804: 1,
  805: 1,
  806: 1,
  807: 1,
  808: 1,
  809: 1,
  810: .5,
  811: .25,
  812: .5,
  813: .25,
  814: 1,
  815: 1,
  816: 1,
  817: 1,
  818: .5,
  819: .5,
  820: .5,
  821: .5,
  822: 1,
  823: 1,
  824: 1,
  825: .5,
  826: .25,
  827: .5
};
/** @TODO handling ls (DBV property?) */
/**
 * @param {object[]|object} blocks
 * @param {Logic<any>[]&{nc?:any}} [logics$] */
Block.arrayFromObjects = function arrayFromObjects(blocks, logics$) {
  function extractLogic(control) {
    var j = 0, props = Block.Properties.VALUE[Block.ID[name]] || [];
    for (var i = props.length; i-- > 0; j += p instanceof Array ?
        p.length :
        1)
      var p = props[i].item.default;
    return control instanceof Array && control.slice(j);
  }
  /** @param {number[]} indexes */
  function extractConnections(indexes) {
    var logic = Logic.VALUE[Block.ID[name]] || [];
    for (var i = logic.length; i-- > 0;)
      // if node at index is input replace it with reference to output
      if (typeof logic[i].pairs == "number")
        //@ts-ignore
        indexes[i] = ncProperty[indexes[i]];
    return indexes;
  }
  var bs = blocks instanceof Array ? blocks : [blocks];
  var logics = logics$ || [],
    /** nodeIndex property of a block is number[] type:
     * + it contains inputs and outputs indexes
     * + their connections are specified in "nc" DBV savefile property
     * + each index specifies whether it's input/output, bool/numerical,
     *   display position depeding on block type
     *   @see https://github.com/KaaBEL/.d1r.dbv/blob/1392589299b68fb61c1a87bc7e4616f6d20af75d/assets/code.js#L112 */
    /** maps connection of key:input to value:output */
    ncProperty = function () {
      /** @type {{[key:number]:number|undefined}} [key:input]:output */
      var map = {}, connections = logics.nc;
      if (!(connections && connections.length))
        return UDF;
      for (var i = connections.length; i-- > 0;) {
        if (typeof connections[i] != "object")
          continue;
        var item = connections[i], nkey = item.Item1 || item[0];
        var nval = item.Item2 || item[1];
        if (typeof nkey == "number" && typeof nval == "number")
          map[nkey] = nval;
      }
      return map;
    }();
  delete (logics$ || {}).nc;
  for (var i = 0, r = []; i < bs.length; i++) {
    var block = bs[i], o = {
      name: block.internalName || block.name || block.n,
      pos: block.position || block.pos || block.p,
      rot: block.rotation || block.rot || block.r,
      prop: block.properties || block.prop || {color: ""},
      flip: block.f || block.flipped,
      weld: block.wg || block.weld
    };
    o.prop.color = block.color || block.s || o.prop.color || "";
    var name = typeof o.name == "string" ? o.name : "__unknown__",
      pos = (o.pos instanceof Array && o.pos.length !== 2 ?
        o.pos :
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
    if (Block.ID[name] === UDF) {
      o.prop.invalidName = name;
      name = "__unknown__";
    }
    if (o.pos.length === 2) {
      if (typeof o.prop.color != "string")
       o.prop.color = Color.default(name);
      if (typeof o.rot != "number")
        console.warn("incorrect array position length or wrong rota" +
          "tion? at: Block.arrayFromObjects, blocks: ", bs, " i: ", i);
      var adjX = 0, adjY = 0, size = Block.Size.VALUE[Block.ID[name]];
      if (size && ((size.w | size.h) & 16)) {
        rot[2] > 1 ? adjY = 1 : 0;
        (rot[2] + 1 & 3) > 1 ? adjX = 1 : 0;
      }
      pos = [0, o.pos[0] * 2 + adjX, o.pos[1] * 2 + adjY];
    }
    // is keeping control property not changed a good idea?
    // editor uses block.ni or properties.nodeIndex prioritizedly
    o.prop.control = block.c || o.prop.control;
    if (Logic.VALUE[Block.ID[name]]) {
      var indexes = block.ni || o.prop.nodeIndex;
      o.prop.nodeIndex = indexes instanceof Array &&
        indexes.every(function (e) {
          return typeof e == "number" && !isNaN(e);
        }) ?
          ncProperty && extractConnections(indexes) :
          extractLogic(o.prop.control);
      Logic.addLogic(name, o.prop, logics, r);
    }
    if (Block.ID[name] > 689 && Block.ID[name] < 947)
      o.prop.weldGroup = o.weld || 0;
    r[i] = new Block(name, [pos[0], pos[1], pos[2]], rot, o.prop);
  }
  // optionally correct loading if logic nodes will require
  // to finish references after all blocks are loaded
  return Logic.reassemble(r, logics);
};
/** @param {number} n @param {Logic<any>[]} [logics] */
Block.generateArray = function generateArray(n, logics) {
  if (n !== -69)
    throw new Error("Not implemented. (only arg0: n = -69 works)");
  var i = 12, idx = 0, SH = "Small Hydrogen ";
  /** @type {Block[]} */
  var blocks = [];
  function updt(j) {
    return idx = (j % 3 !== 1 ?
      [739, 754, 757, 692] :
      [-1, 691, 690, 746]
    )[j / 3 | 0];
  }
  for (updt(i - 1); i-- > 0; updt(i - 1)) {
    blocks.push(new Block((i % 3 !== 1 ?
        [SH + "Thruster", SH + "Tank", "Small Battery", "Wedge"] :
        ["", "Block", "Core", "Reaction Wheel"])[i / 3 | 0],
      [0, i * 2 % 6 - 2, (i / 3 | 0) * 2 - 4],
      [0, !1, i === 9 ? 1 : 0],
      Block.Properties.addProperty(idx, Logic.addLogic(idx, {
        color: i > 5 ?
          i & 1 ? "White" : "Light Gray" :
          i % 3 !== 1 ? i < 3 ? "Yellow" : "Fuel" : "White"
      // to be able to display logic nodes or work with them properly
      // they must be bound to the Ship, else they're not necessary
      }, logics || [], blocks))));
  }
  blocks[10] = blocks[11];
  blocks.length--;
  return blocks;
};
/** object is frost
 * @typedef {{x: number, y: number, w: number, h: number}}
 * @param {number} x @param {number} y
 * @param {number} w @param {number} h */
Block.Size = function Size(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  Object.freeze(this);
};
Block.Size.width = 50;
Block.Size.height = 4;
/**
 * @typedef {[number,number,number,number,number]} PreciseDef
 * @typedef {[number]|[number,number,number]|PreciseDef} SizeDef
 * @typedef {SizeDef|SizeDef[]} SizesArg
 * @type {(...arg: SizesArg[]) => {[key: number]: Block.Size}} */
Block.Size.genterateSizes = function () {
  var r = {690: new this(0, 0, 2, 2)},
    /** @type {{[key: number]: SizeDef|SizeDef[], length: number}} */
    a = arguments;
  for (var i = 0, j = 0, l = 690, nw = 0; l < Block.NAME.length; l++)
    if (Block.NAME[l]) {
      /** @type {[number]|[number,number,number]|PreciseDef} */
      //@ts-ignore
      var v = a[i];
      //@ts-ignore
      v instanceof Array && v[j] instanceof Array ? v = v[j++] : j = 3;
      var x = (v[0] % this.width) * 32, y = v[0] / this.width << 5;
      if (typeof nw == "object") { 
        var vup = v[0] / this.width << 0;
        console.log(Block.NAME[l], v[0] % this.width, vup, v);
        // Block.Size must be change as well for resing to work
        v[0] += vup * 0;
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
// (TODO:) blocks were still not tested properly all at once
// one more undeted bug with block or texture and adding unit test for it
Block.Size.VALUE = Block.Size.genterateSizes([[0], [1], [2], [7, 1, 2]],
  [[8, 1, 4], [50], [51, 1, 1], [52], [107, 1, 2], [9, 1, 4], [53], [54]],
  [[55], [56, .5, .5], [3], [100, 2, 2], [10, 3, 4], [102, .5, .5]],
  [[152], [103, 1, 2], [13, 2, 3], [4], [5], [104, 2, 2], [15, 3, 3]],
  [[6], [18, 2, 2], [20, 2, 3], [163], [118, 2, 2], [31, 3, 3], [167]],
  [[106], [156], [164], [165], [166], [182], [170], [171], [22]],
  [[23, 1, 2], [72], [122], [181], [123], [172], [173, 1, .5], [46]],
  [[130, 1, .5], [180, 1, .5], [24, .5, .5], [74], [124], [174], [25]],
  [[75], [125], [175], [26, 1, .5], [76, .5, .5], [126, 1, .5]],
  [[176, .5, .5], [27], [77], [127], [177], [28, 1, .5], [78, 1, .5]],
  [[128, 1, .5], [178, 1, .5], [29], [79], [129], [179, .5, 1]],
  [[30, .5, .5], [80, 1, .5], [40], [41], [42], [43], [44], [45]],
  [[144, 2, 2], [134, 1, 2], [135, 1, 2], [136, 1, 2], [189]],
  [[140, 2, 2], [142, 2, 2], [84], [85], [86], [34, 4, 1], [90, 2, 1]],
  [[38, 2, 3], [87]]);

// TODO: To be considered for resystemizing
/** @template {keyof ItemTs} T @param {T} type @param {string} name */
Block.Properties = function (type, name) {
  this.type = type;
  this.name = name;
  /** @type {ItemTs[T]} *///@ts-ignore
  this.item = new Block.Properties.Items[type]();
}
Block.Properties.Items = {
  /** @type {new()=>Slider} */
  "Slider": function Slider() {
    this.min = 0;
    this.max = 0;
    this.default = [0];
  },
  /** @type {new()=>IntegerSlider} */
  "Integer Slider": function IntegerSlider() {
    this.min = 0;
    this.max = 0;
    this.default = [0];
  },
  /** @type {new()=>Dropdown} */
  "Dropdown": function Dropdown() {
    this.options = [""];
    this.default = [0];
  },
  /** @type {new()=>NumberInputs} */
  "Number Inputs": function NumberInputs() {
    this.default = [0];
  },
  /** @type {new()=>TextInputs} */
  "Text Inputs": function TextInputs() {
    this.default = [""];
  },
  /** @type {new()=>WeldGroups} hidden property */
  "WeldGroups": function WeldGroups() {
    this.idx = 0;
    this.default = [0];
  }
};
/**
 * @typedef {["Slider", "Integer Slider", "Dropdown", "Number Inputs",
 * "Text Inputs", "WeldGroups"]} itemTypes
 */
/** @type {itemTypes} */
Block.Properties.itemTypes = ["Slider", "Integer Slider", "Dropdown",
  "Number Inputs", "Text Inputs", "WeldGroups"];
/** Arguments typedefs for Properties Items generator
 * @typedef {[0,string,number,number,number]|
 * [1,string,number,number,number]|[2,string,string[],number]|
 * [3,string,number[]]|[4,string,string[]]|[5,number|number[]]} PropsArg
 */
/** @typedef {Block.Properties<keyof ItemTs>} Props */
/**
 * @type {<T extends PropsArg[]>(argArr: T)=>Props[]}
 */
Block.Properties.justOne = function (argArr) {
  for (var j = 0, r = []; j < argArr.length; j++) {
    var p, v = argArr[j];
    switch (v[0]) {
      case 0:
        p = r[j] = new Block.Properties("Slider", v[1]);
        p.item.min = v[2];
        p.item.max = v[3];
        p.item.default = [v[4]];
        break;
      case 1:
        p = r[j] = new Block.Properties("Integer Slider", v[1]);
        p.item.min = v[2];
        p.item.max = v[3];
        p.item.default = [v[4]];
        break;
      case 2:
        p = r[j] = new Block.Properties("Dropdown", v[1]);
        p.item.options = v[2];
        p.item.default =  [v[3]];
        break;
      case 3:
        p = r[j] = new Block.Properties("Number Inputs", v[1]);
        p.item.default = v[2];
        break;
      case 4:
        p = r[j] = new Block.Properties("Text Inputs", v[1]);
        p.item.default = v[2];
        break;
      case 5:
        p = new Block.Properties("WeldGroups", "");
        p.item.idx = 0;
        r.forEach(function (e) {
          p.item.idx += e.item.default.length;
        });
        (r[j] = p).item.default =
          /** @type {number[]|number[][]} */
          ([v[1]]);
    }
  }
  //@ts-ignore
  return r;
};
/** @type {{[key: number]: Props[] | undefined}} */
Block.Properties.VALUE = Block.PROP = {
  738: Block.Properties.justOne([[0, "Force", 375, 1125, 1125]]),
  // 738: + old logical input node
  739: Block.Properties.justOne([[0, "Force", 1500, 4500, 4500]]),
  // 739: + old logical input node
  740: Block.Properties.justOne([[0, "Force", 6000, 18000, 18000]]),
  // 740: + old logical input node
  741: Block.Properties.justOne([[0, "Force", 1800, 54000, 54000]]),
  // 741: + old logical input node
  742: Block.Properties.justOne([[0, "Force", 375, 1125, 1125]]),
  // 742: + old logical input node
  743: Block.Properties.justOne([[0, "Force", 1500, 4500, 4500]]),
  // 743: + old logical input node
  744: Block.Properties.justOne([[0, "Force", 3000, 9000, 9000]]),
  // 744: + old logical input node
  745: Block.Properties.justOne([[0, "Force", 9000, 27000, 27000]]),
  // 745: + old logical input node
  746: Block.Properties.justOne([[0, "Torque", 2500, 7500, 7500]]),
  // 770, 771, 772, 773, 774, 775: old logical input node
  790: Block.Properties.justOne([[0, "Gear Ratio", 0.2, 3, 1], [5, 0]]),
  791: Block.Properties.justOne([[5, [0, 0, 0, 0]]]),
  792: Block.Properties.justOne([[0, "Gear Ratio", 0.2, 3, 1], [5, 0]]),
  803: Block.Properties.justOne([[2, "Controls", [
    "Up",
    "Down",
    "Left",
    "Right",
    "Turn Left",
    "Turn Right",
    "Action 1",
    "Action 2"
  ], 0]]),
  // 803: + old logical output node
  // 804, 805, 806, 807, 808, 809, 810: old logical output node and input nodes
  812: Block.Properties.justOne([[0, "Duraion in seconds", 0.1, 5, 1]]),
  813: Block.Properties.justOne([[3, "Number", [0]]]),
  814: Block.Properties.justOne([[2, "Mode", [
    "Absolute",
    "Directional",
    "Angular",
    "G-force"
  ], 0]]),
  821: Block.Properties.justOne([[3, "Range", [0, 1]]]),
  823: Block.Properties.justOne([[4, "Function", [""]]]),
  825: Block.Properties.justOne([[3, "Range", [-1, 1]]]),
  826: Block.Properties.justOne([[3, "Range", [-1, 1]]]),
  827: Block.Properties.justOne([[1, "Decimals amount", 1, 4, 2]])
};
// /** @type {{[key:number]:number|undefined}} */
// Block.Properties.WELDGROUPS = {790: 2, 791: 4, 792: 2};
/** @param {string|number} name @param {object} property */
Block.Properties.addProperty = function (name, property) {
  var propsDef = Block.Properties.VALUE[typeof name == "number" ?
    name :
    Block.ID[name]
  ];
  property.control = [];
  if (!(propsDef instanceof Array))
    return property;
  for (var i = 0, n = 0, p; i < propsDef.length;)
    if ((p = propsDef[i++]) instanceof Block.Properties)
      for (var j = 0, l = p.item.default.length; j < l;)
        property.control[n++] = p.item.default[j++];
  return property;
};

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
  // optional logic blocks requiring bounding to ownerShip adds complications
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
    time = typeof o.time == "string" ? o.time : dateTime(),
    /** @type {Logic<any>[]&{nc:any}} */
    logics = function () {
      /** @type {any} */
      var arr = [];
      arr.nc = o.add && o.add.logic;
      return arr;
    }(),
    blocks = o.blocks instanceof Array ?
      Block.arrayFromObjects(o.blocks, logics) :
      Block.generateArray(-69, logics),
    props = o.props;
  Logic.reassemble(blocks, logics);
  if (o.add) {
    (props = props || OC()).launchpadSize = o.add.grid;
    props.nodeConnections = o.add.logic;
  }
  if (logics.length)
    (props = props || OC()).connections = logics;
  return new Ship(name, ver, time, blocks, props);
};
/** @param {Ship} ship */
Ship.toDBV = function toDBV(ship) {
  var blocks = [];
  for (var i = 0, e = ship.blocks[0]; i < ship.blocks.length; i++) {
    e = ship.blocks[i];
    var rot = e.rotation[2], adjX = 0, adjY = 0;
    var size = Block.Size.VALUE[Block.ID[e.internalName]];
    if (size && ((size.w | size.h) & 16)) {
      rot > 1 ? adjY = .5 : 0;
      (rot + 1 & 3) > 1 ? adjX = .5 : 0;
    }
    /__placeholder\d+__/.test(e.internalName) || blocks.push({
      n: e.internalName,
      p: [Math.floor(e.position[1]) / 2 - adjX,
        Math.floor(e.position[2]) / 2 - adjY],
      r: Math.floor(e.rotation[2] * 90),
      f: e.rotation[1],
      s: e.properties.color,
      c: e.properties.control,
      ni: e.properties.nodeIndex || [],
      wg: e.properties.weldGroup || 0
    });
  }
  var shipProp = ship.prop || {}, connections = [];
  for (i = (shipProp.connections || []).length; i-- > 0;) {
    /** @type {Logic<any>|{pairs:[]}} */
    var node = shipProp.connections[i] || {pairs: []}, n = node.pairs;
    typeof n == "number" && shipProp.connections[n] &&
      connections.push({
        // node index, input type
        Item1: i,
        // referenced node 
        Item2: node.pairs
      });
  }
  return {
    n: ship.name,
    gv: ship.gameVersion.join("."),
    dt: ship.dateTime,
    ls: shipProp.launchpadSize || 0,
    b: blocks,
    nc: connections || shipProp.nodeConnections,
    significantVersion: 1
  };
};

var ship = Ship.fromObject({name: "Starter Droneboi"});
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
function uint8arrayToBase64(uint8array) {
  var string = "", buffer = 0, i = 0, p = 0, c;
  function codeChar() {
    return c < 52 ? c < 26 ? 65 : 71 : c < 62 ? -4 : c < 63 ? -19 : -16;
  }
  for (; i < uint8array.length; i++) {
    buffer = buffer << 8 | (c = uint8array[i]);
    if (p == 4) {
      c = buffer >> 6;
      string += String.fromCharCode(c + codeChar());
      c = buffer & 63;
      buffer = p = 0;
    } else {
      c = buffer >> (p += 2);
      buffer &= 15 >> (p & 2);
    }
    string += String.fromCharCode(c += codeChar());
  }
  if (p) {
    c = buffer << 6 - p;
    c += codeChar();
    string += String.fromCharCode(c) + (p & 4 ? "=" : "==");
  }
  return string;
}

/** @returns {string} */
function er(s) {
  throw new Error(s);
}
// the initial source used can be found here:
// https://github.com/KaaBEL/Deltarealm-b64-keys/blob/main/index.html#LC827
/** @param {[number, number, number]} r  @returns {Rotation} */
function rotateBlock(r) {
  /** @type {0|1|2|3} rotation, (angle → of axis) */
  var rot = 0, i = 3, angle = 0, tmp = [];
  /** @type {0|1|2} other/mirored side */
  var face = 1, order, o_side = !1;
  r.forEach(function (el) {
    el = Math.round((el % 360) / 90);
    if (el < 0)
      el += 4;
    tmp.push(el);
  });
  r = [tmp[0], tmp[1], tmp[2]];
  switch (r[0]) {
    case 1:
      //@ts-ignore
      return [2, !0, r[1] + 4 - r[2] & 3];
    case 2:
      r[0] = 0;
      r[1] = r[1] + 2 & 3;
      r[2] = r[2] + 2 & 3;
      break;
    case 3:
      //@ts-ignore
      return [2, !1, r[1] + r[2] & 3];
  }
  while (i-- > 0)
    if (r[i]) {
      angle = r[i];
      if (i === 1)
        //@ts-ignore
        rot = (rot + angle) & 3;
      else {
        order = face === +!i;
        if (angle & 1)
          face = order ? 2 : 0;
        if (angle + +order > 1 && angle + +order < 4)
          o_side = !o_side;
        switch (i) {
          case 1:
            if (angle !== 2)
              //@ts-ignore
              rot = rot + angle & 3;
          case 2:
            if (o_side === !0)
              rot = 2;
            break;
        }
      }
    }
  return [face, o_side, rot];
}
var i, j, buffer = new Uint8Array();
// sorts blocks by position x than y than z
function sortShip() {
  var i, l, n = 0, vals, refs, b = ship.blocks, _b = [];
  if ((l = ship.blocks.length) > 0x7fffffff)
    return er("too much blocks");
  vals = new Uint32Array(l);
  while (l-- > 0)
    for (i = 0; i < 3; i++) {
      n = b[l].position[i] + 511;
      if (n < 0 || n > 1023)
        return er("block too far in axis " + "xyz"[i] + ", l: " + l);
      vals[l] = (vals[l] << 10) + n;
    }
  i = 0;
  refs = [];
  for (var u, d; i < vals.length; i++) {
    u = i;
    d = 0;
    while (u !== d) {
      n = u + d >> 1;
      if (vals[refs[n]] > vals[i])
        u = n;
      else if (vals[refs[n]] < vals[i])
        d = ++n;
      else
        break;
    }
    if (u === d) {
      for (d = refs.length; d > n; d--)
        refs[d] = refs[d - 1];
      refs[d] = i;
    }
  }
  for (i = refs.length; i-- > 0;)
    _b[i] = b[refs[i]];
  ship.blocks = _b;
  return ship;
}
function wBit(b) {
  if (b)
    buffer[i] |= 1 << j;
  else
    buffer[i] &= 255 - (1 << j);
  if (++j > 7) {
    i++;
    j = 0;
  }
}
function wBitsMSBfFast(l, n) {
  buffer[i] |= n << j;
  n >>= 8 - j;
  if (l + j > 8) {
    l -= 8 - j;
    j = 0;
    i++;
    while (l > 7) {
      buffer[i++] |= n;
      n >>= 8;
      l -= 8;
    }
    buffer[i] |= n;
    n >>= l;
  }
  j += l;
  buffer[i] &= 255 >> 8 - j;
  if (j > 7) {
    i++;
    j = 0;
  }
  // value of spare bits
  return n;
}
function wMSBfirst(l, n) {
  for (var i1 = i += l; l-- > 0; n >>= 8)
    buffer[--i1] = n & 255;
  return n;
}
function wVersion(arr) {
  for (var l = 0, m = 0, n = 64; !0;) {
    while (arr[l] >= n--)
      n = 64 << (m += 6);
    buffer[i++] = arr[l] >> m;
    while (m) {
      buffer[i - 1] |= 64;
      m -= 6;
      n >>= 6;
      buffer[i++] = (arr[l] & n) >> m;
    }
    if (++l < arr.length)
      buffer[i - 1] |= 128;
    else
      break;
  }
}

/** @param {Ship} ship */
function encodeCmprsShip(ship) {
  // version 0.1.0 (midified version 0.0.3)
  var l, n, id, p_i, chunkEnd, s, propertiesStr = "";
  var propertiesRef = [], b, arr, min, max, prev, size = [], sizeB = [];
  // id length
  // changed to 10 from 4
  var IDLEN = 10;
  i = j = 0;
  buffer = new Uint8Array(1040);
  // array of pointers to arrays with kBs of file (1024 + buffer of 16 bytes)
  /** @type {number[]} */
  var rotations = [], kB = [buffer];
  // data block: compression version
  wVersion([0, 0, 4]);
  // data block: name
  buffer[i++] = l = ship.name.length;
  if (l > 255)
    console.warn("too long name (" + l + ") set to: " + (l = 255));
  for (n = 0; n < l;) {
    s = ship.name.charCodeAt(n++);
    buffer[i++] = s > 31 && s < 127 || s > 8 && s < 11 ? s : 63;
  }
  // data block: game version
  arr = ship.gameVersion;
  wVersion(arr);
  for (l = 0; l < 3 && arr.length; l++)
    if (arr[l] > [0, 1, 2][l])
      console.warn("unknown game version");
  // data block: date and time (seconds from  26.1.2022 16:48 UTC)
  wMSBfirst(4, Date.now() / 1e3 - 1643215695);
  // data block: blocks
  sortShip();
  b = ship.blocks;
  // blocks length
  wBit(n = (l = b.length) > 8191);
  wBitsMSBfFast(n ? 21 : 13, l);
  if (!l) {
    console.log("empty ship (no blocks)");
    if (j)
      i++;
    arr = new Uint8Array(i);
    while (i-- > 0)
      arr[i] = buffer[i];
    return arr;
  }
  // ID bit length (3 bits) + 4 (IDLEN)
  wBitsMSBfFast(3, IDLEN - 4);
  arr = b[--l].position;
  min = [arr[0], arr[1], arr[2]];
  max = [arr[0], arr[1], arr[2]];
  while (l-- > 0) {
    arr = b[l].position;
    for (n = 0; n < 3; n++)
      if (arr[n] > max[n])
        max[n] = arr[n];
      else if (arr[n] < min[n])
        min[n] = arr[n];
  }
  // pairs min and max blocks positions in each axis - xyz
  for (n = 0, l = 6; n < 3; ++n > 1 ? l = 8 : 0) {
    if (wBitsMSBfFast(l, min[n] + (1 << l - 1) - 1))
      return er("ship too far in axis: " + "xyz"[n]);
    if (wBitsMSBfFast(l, max[n] + (1 << l - 1) - 1))
      return er("ship too far in axis: " + "xyz"[n]);
  }
  /** @param {Block} block */
  function fixedBlock(block) {
    // ID
    wBitsMSBfFast(IDLEN, id = Block.ID[block.internalName]);
    // position
    wBitsMSBfFast(8, block.position[2] + 127);
    wBitsMSBfFast(6, block.position[1] + 31);
    wBitsMSBfFast(6, block.position[0] + 31);
    /** rotation @type {number|Rotation} */
    var r = block.rotation;
    wBitsMSBfFast(5, r = r[2] | +r[1] << 2 | r[0] << 3);
    // are properties?
    checkProperties(block.properties);
    rotations[id] = r;
    if (j) {
      i++;
      j = 0;
    }
  }
  function endings() {
    // handles chunk endings, kB borders or both
    if (i > chunkEnd) {
      prev = [i, j, 0];
      n = i = chunkEnd + 8;
      j = 0;
      // six bits after chunkending
      wBitsMSBfFast(6, (chunkEnd << 3) + 7 - p_i);
      fixedBlock(b[l]);
      n = i - n;
      i = chunkEnd + 1;
      j = i + n;
      chunkEnd += n + 512;
      while(i < j) {
        buffer[i + n] = buffer[i];
        buffer[i] = buffer[i + 7];
        buffer[i + 7] = 0;
        i++;
      }
      i = prev[0] + n;
      j = prev[1];
      for (n = 1 << IDLEN; n-- > 0;)
        rotations[n] = 8;
    }
    if (i > 1023) {
      prev = buffer;
      buffer = new Uint8Array(1040);
      p_i -= 1024;
      chunkEnd -= 1024;
      i -= 1024;
      for (n = 0; n < 16; n++)
        buffer[n] = prev[n | 1024];
      kB.push(buffer);
    }
  }
  function checkProperties(prpt) {
    var p, s = JSON.stringify(prpt);
    // Has properties
    wBit(s !== "{}");
    if (s !== "{}")
      if (p = propertiesStr.indexOf(s) + 1)
        // stores properties for later
        // debug by adding " - 1"
        propertiesRef.push(p - 1, s.length);
      else {
        propertiesRef.push(propertiesStr.length, s.length);
        propertiesStr += s;
      }
  }
  // sets up ship sizes and relative rotations
  for (n = 3; n-- > 0; sizeB[n] = l) {
    size[n] = max[n] - min[n] + 1;
    for (l = 8, s = 128; size[n] < s; --l)
      s >>= 1;
  }
  for (n = 1 << IDLEN; n-- > 0;)
    rotations[n] = 8;
  // first block (fixed)
  fixedBlock(b[0]);
  // previous i
  p_i = i << 3;
  chunkEnd = i + 511;
  // relative blocks string
  for (l = 1, arr = b[0].position; l < b.length; l++) {
    p_i = (i << 3) + j;
    // ID
    wBitsMSBfFast(IDLEN, id = Block.ID[b[l].internalName]);
    // relative position
    prev = [arr[0], arr[1], arr[2]];
    arr = b[l].position;
    n = 2;
    s = arr[n] - prev[n] - 1;
    if (s < 0) {
      s += size[n];
      prev[1]++;
    }
    wBit(s);
    if (s)
      wBitsMSBfFast(sizeB[n], s - 1);
    while (n-- > 0) {
      // relative y and x position
      if (arr[n] < prev[n]) {
        if (n < 1)
          return er("weird error");
        else
          s = arr[n] + size[n] - prev[n];
        prev[0]++;
      } else
        s = arr[n] - prev[n];
      wBit(s);
      if (s)
        wBitsMSBfFast(sizeB[n], s - 1);
    }
    // optionaly relative rotation
    var rot = b[l].rotation;
    n = rot[2] | +rot[1] << 2 | rot[0] << 3;
    wBit(s = rotations[id] !== n);
    if (s)
      wBitsMSBfFast(5, n);
    rotations[id] = n;
    checkProperties(b[l].properties);
    endings();
  }
  if (j)
    i++;
  chunkEnd = i - 1;
  // last/ending chunk
  // only if proceeding relative chunk??! unsure
  --l && endings();
  // data block: properties
  if (propertiesRef.length) {
    // just indexes and lengths of JSON strings
    s = JSON.stringify([propertiesRef, propertiesStr]);
    for (n = 0; n < s.length;) {
      buffer[i++] = s.charCodeAt(n++);
      if (i > 1023) {
        kB.push(buffer = new Uint8Array(1040));
        i = 0;
      }
    }
  }
  // joins binary data of required length to one file
  buffer = new Uint8Array((kB.length - 1 << 10) + i);
  for (j = l = 0; l < buffer.length; kB[j++] = new Uint8Array()) {
    (n = buffer.length - l) > 1023 ? n = 1024 : 0;
    arr = kB[j];
    for (i = 0; i < n;)
      buffer[l++] = arr[i++];
  }
  return buffer;
}

function gBit() {
  var b_int = (buffer[i] & 1 << j) >> j;
  if (++j > 7) {
    j = 0;
    i++;
  }
  return b_int;
}
function gMSBfirst(l) {
  var n = 0;
  while (l-- > 0)
    n = n * 256 + buffer[i++];
  return n;
}
function gBitsMSBfFast(l) {
  var mj = j, b_int = 0;
  if (l + j > 8) {
    b_int = buffer[i++] & 255 << j;
    l -= 8 - j;
    j = 8;
    while (l > 8) {
      b_int += (buffer[i++] << j);
      l -= 8;
      j += 8;
    }
    b_int += (buffer[i] & 255 >> (8 - l)) << j;
  } else
    b_int += buffer[i] & 255 >> (8 - l) << j;
  b_int >>= mj;
  if ((j = (j & 7) + l) > 7) {
    i++;
    j = 0;
  }
  return b_int;
}
function gVersion() {
  var version = [], n = 0;
  i--;
  do {
    version.push(0);
    do {
      version[n] = (version[n] << 6) + (buffer[++i] & 63);
    } while (buffer[i] & 64);
    n++;
  } while (buffer[i] & 128);
  i++;
  return version;
}
function dateTime(t) {
  if (typeof t !== "number")
    t = Math.floor(Date.now() / 1e3);
  var i = 0, n, s, months = [30, 27, 30, 29, 30, 29, 30, 30, 29, 30, 29, 30];
  n = t % 60 | 0;
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
/** @param {number} n rotation by 5 bit index @returns dr rotation */
function gBlockRotation(n) {
  if (n > 23)
    return er("invalid input");
  var arr = [0, 0, 0];
  arr[+(n < 8) << 1] = [90, 270, 0, 180, 270, 90][n >> 2];
  arr[n & 16 ? 2 : 1] = (
    n & 4 && (n & 16 ? n & 1 : !(n & 8)) ?
      n + 2 & 3 :
      n & 3
  ) * 90;
  return arr;
}
function decodeCmprsShip(cmprsShip) {
  // version 0.0.1! the existing prototype specification is for v.0.0
  var n = 0, l, pl, chunkEnd, id, IDLEN, BLEN, s = "", arr = [];
  var prev = [], b = [], min = [],  max = [], size = [], sizeB = [];
  var rot = [], properties = [], obj, ship = {}, p_i, num = 0;
  i = j = 0;
  if (cmprsShip !== UDF)
    buffer = cmprsShip;
  // data block: compression version (and check)
  arr = gVersion();
  while (n < 2)
    if (arr[n++] > 0)
      return er("unknown file vesrion");
  // data block: name
  l = buffer[i++];
  while (l-- > 0)
    s += String.fromCharCode(buffer[i++]);
  ship.name = s;
  // data block: game version
  ship.gameVersion = gVersion().join(".");
  // data block: date and time
  // ...of compression as I don't have date and time parse
  s = dateTime(gMSBfirst(4) + 1643215695);
  ship.dateTime = "compressed: " + s + " UTC";
  // data block: blocks
  // blocks length
  BLEN = gBitsMSBfFast(gBit() ? 21 : 13);
  ship.blocks = b;
  if (!BLEN) {
    if (i > buffer.length)
      return er("unexpected end of data");
    console.log("read empty ship (no blocks)");
    return ship;
  }
  // ID bit length
  IDLEN = gBitsMSBfFast(3) + 4;
  // min max positions
  for (n = 0, l = 6; n < 3; ++n > 1 ? l = 8 : 0) {
    min[n] = gBitsMSBfFast(l);
    max[n] = gBitsMSBfFast(l);
    min[n] -= (1 << l - 1) - 1;
    max[n] -= (1 << l - 1) - 1;
  }
  /** @param {boolean} [b=!0] first block */
  function fixedBlock(b) {
    if (typeof b === "undefined")
      b = !0;
    var obj = {}, num = 0;
    // ID
    obj.internalName = Block.NAME[id = gBitsMSBfFast(IDLEN)];
    // position
    obj.position = arr = [];
    arr[2] = gBitsMSBfFast(8) - 127;
    arr[1] = gBitsMSBfFast(6) - 31;
    arr[0] = gBitsMSBfFast(6) - 31;
    // rotation
    num = gBitsMSBfFast(5);
    // !!!not tested rotation index to Rotation type
    obj.rotation = [num >> 3, (num & 4) > 0, num & 3];
    obj.properties = {};
    // has properties
    if (gBit() && b)
      properties.push(0);
    if (b) {
      prev = arr;
      rot[id] = num;
    }
    if (j) {
      i++;
      j = 0;
    }
    return obj;
  }
  function relativeBlock() {
    p_i = (i << 3) + j;
    var obj = {}, num = 0;
    // ID
    obj.internalName = Block.NAME[id = gBitsMSBfFast(IDLEN)];
    // relative x position
    obj.position = arr = [prev[0], prev[1], prev[2]];
    arr[2] += gBit() ? gBitsMSBfFast(sizeB[2]) + 2 : 1;
    if (arr[n = 2] > max[2]) {
      arr[2] -= size[2];
      arr[1]++;
    }
    while (n-- > 0) {
      // relative y and z positions
      arr[n] += gBit() ? gBitsMSBfFast(sizeB[n]) + 1 : 0;
      if (arr[n] > max[n]) {
        if (n < 1)
          return er("blocks doesn't fit in box");
        arr[1] -= size[1];
        arr[0]++;
      }
    }
    // optionaly relative rotation
    num = gBit() ? gBitsMSBfFast(5) : rot[id];
    // !!!not tested rotation index to Rotation type
    obj.rotation = [num >> 3, (num & 4) > 0, num & 3];
    obj.properties = {};
    // has properties
    if (gBit() && i < chunkEnd)
      properties.push(l);
    if (i + !!j > chunkEnd)
      return;
    prev = arr;
    rot[id] = num;
    b[l] = obj;
  }
  function chunkEnding() {
  // handles chunk ends
    var n_0, n_1, buf_0;
    if (n_0 = i + !!j > chunkEnd) {
      i = chunkEnd;
      j = 0;
    }
    if ((--chunkEnd << 3) + 7 - p_i !== gBitsMSBfFast(6)) {
      b[l = b.length = ++pl] = obj = fixedBlock();
      console.warn("corrupted chunk: " + (p_i >> 13));
    } else
      obj = fixedBlock(!1);
    // is that back and forth conversion necessary?
    var r = obj.rotation;//@ts-ignore rotateBlock(obj.rotation);
    //obj.rotation = 
    gBlockRotation(r[2] | +r[1] << 2 | r[0] << 3);
    n_1 = i;
    if (n_0) {
      buf_0 = buffer;
      buffer = new Uint8Array(16);
      i = n_0 = p_i >> 3;
      j = p_i & 7;
      for (n = 0; i <= chunkEnd;)
        buffer[n++] = buf_0[i++];
      for (i = n_1; n < 8;)
        buffer[n++] = buf_0[i++];
      i = 0;
      relativeBlock();
      i += n_0 + n_1 - chunkEnd - 1;
      buffer = buf_0;
    }
    chunkEnd = n_1 + 512;
    if (JSON.stringify(obj) !== JSON.stringify(b[l])) {
      BLEN -= l - ++pl;
      b[l = b.length = pl] = obj;
      console.warn("corrupted chunk: " + (p_i >> 13));
      prev = obj.position;
    }
    for (n = 1 << IDLEN; n-- > 0;)
      rot[n] = 8;
  }
  // sets up ship sizes and relative values
  for (n = 3; n-- > 0; sizeB[n] = l) {
    size[n] = max[n] - min[n] + 1;
    for (l = 8, num = 128; size[n] < num; --l)
      num >>= 1;
  }
  for (n = 1 << IDLEN; n-- > 0;)
    rot[n] = 8;
  // first block
  b[pl = l = 0] = fixedBlock();
  p_i = i << 3;
  chunkEnd = i + 512;
  var v;
  while (++l < BLEN) {
    if ((v = relativeBlock()) && i < chunkEnd)
      return v;
    if (i >= chunkEnd)
      chunkEnding();
  }
  if (j) {
    i++;
    j = 0;
  }
  chunkEnd = i;
  l--;
  // last/ending chunk
  chunkEnding();
  // data block: properties
  if (l = properties.length) {
    if (buffer[buffer.length - 1] !== 93)
      return er("unexpected end of data");
      s = String.fromCharCode.apply(String, buffer.slice(i));
    try {
      arr = JSON.parse(s);
    } catch (err) {
      if (err) {
        console.error(err);
        return ship;
      }
    }
    if (typeof arr[2] == "string")
      "Parse the compressed properties.";
    s = arr[1];
    arr = arr[0];
    for (i = l - 1 << 1; l-- > 0; i -= 2) {
      obj = JSON.parse(s.slice(arr[i], arr[i] + arr[i | 1]));
      b[properties[l]].properties = obj;
    }
  }
  return ship;
}
/** function used for debugging encode/decode */
// just converts Uint8Array to string with binary numbers in DevTools
function binaryData($help) {
  if (typeof $help === "boolean")
    return "args: ArrayBuffer | Array (data), ?[?from, to] (slice), ?b\
ytesize, ?isMSBF=false :displays data in bits(for viewing data)";
  var i = 1, j = 0, l, bs = 0, bit = 1, s, slice = [0], a = arguments;
  if (a[1] instanceof Array && a[1].length) {
    i++;
    if (a[1].length > 1)
      slice[0] = a[1].shift();
    slice.push(a[1][0]);
  }
  if (typeof a[0].BYTES_PER_ELEMENT === "number")
    bs = a[0].BYTES_PER_ELEMENT << 3;
  else if (!(a[0] instanceof Array) || typeof a[i] !== "number")
    throw new TypeError("requires ArrayBuffer or Array and bytesize");
  if (slice.length < 2)
    slice.push(a[0].length);
  if (typeof a[i] === "number")
    bs = a[i++] << 3;
  if (typeof a[i] === "boolean" && a[i])
    for (i = slice[0], l = slice[1], s = "BigEndian " + i + ":"; 1;) {
      for (j = 0; j < bs; s += j & 7 ? "" : " ")
        s += a[0][i] & 1 << bs - ++j ? "1" : "0";
      if (++i >= l)
        return s;
      s += i + ":";
    }
  // bits are ordered as they are read be decoding
  for (i = slice[0], l = slice[1], s = "LSbitF+LE! " + i + ":"; 1;) {
    for (j = 0, bit = 1; j++ < bs; bit <<= 1)
      s += (a[0][i] & bit ? "1" : "0") + (j & 7 ? "" : " ");
    if (++i >= l)
      return s;
    s += i + ":";
  }
}
/** function for manual use to check rotations or/and rotation index
 * @param {[number, number, number]} arr */
function rotationIndex(arr) {
  var rot = rotateBlock(arr);
  var num = rot[2] | +rot[1] << 2 | rot[0] << 3;
  var r = gBlockRotation(num);
  if (typeof r == "string")
    throw new Error(r);
  return [r[0], r[1], r[2], num];
}
