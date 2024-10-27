//@ts-check
/// <reference path="./code.d.ts" types="./code.js" />
"use strict";
/** @TODO discord server link
 * @TODO Finish block collisions detection */
var version_code_js = "v.0.1.64T1";
/** @TODO check @see {Ship.VERSION} */
var OP = Object.prototype.hasOwnProperty,
  /** @typedef {{[key:string|number|symbol]:unknown}} safe */
  /** @type {()=>safe} should be safe with safe type */
  OC = function () {
    return {};
  };
// inheritance's gonna go brrrrrrrrrrrrrrrr
/** @param {Function} _new_class @param {Function} _super */
function __extends(_new_class, _super) {
  function __() {
    // this can be omitted
    this.constructor = _super;
  }
  __.prototype = _super.prototype;
  _new_class.prototype = new __();
}
/** @template {any} T @param {T} val @returns {()=>T} */
function __private(val) {
  return function () {
    return val;
  }
}
/** @type {typeof defaults|null} */
var settings = null;

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
// for (var i = 1, seed = 35589; i < 0xfff; i++)
//   (seed = seedRand(seed));
// var matcher = seed, i = 0;
// for (seed = seedRand(seed); seed !== matcher && i < 0xffffff; i++)
//   seed = seedRand(seed);
// taken from: https://stackoverflow.com/a/47593316
function rand_sfc32(seed) {
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
}
// end of taken
/** @returns {string} best function ever, I should use this */
function er(s) {
  throw new Error(s);
}

/** check dictionary definitions
 * @overload
 * @param {{[x: number]: string, length: number}} dicNum
 * @param {{[x: string]: number}} dicVal
 * @param {string} AT place of error message/dictonary name
 * @overload
 * @param {{[x: number]: string, length: number}} dicNum
 * @param {string} dicVal
 * @returns {void} */
function dictionaryDefs(dicNum, dicVal, closure) {
  if (location.origin.slice(0, 4) === "http" && location.port !== "5500")
    return;
  console.time(closure);
  var AT = ". At " + (closure || dicVal) + ".";
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
          "\" and (number by value keys): " + dicVal[val] + AT);
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
  console.timeEnd(closure);
}

/** @typedef {Block|LogicBlock} ShipBlock */
/** instance is sealed
 * @template {0|1|2|3} T
 * @param {T} type @param {number} x @param {number} y as definition
 * x, y is position relative to middle, else used by rendering method,
 * pairs is initialized -1 or [] depending on type, owner is null
 * for logigs documentation/data @see {Logic.VALUE} */
function Logic(type, x, y) {
  /** 0|1 = input, has only index reference to source, 2|3 = output
   * @type {T} */
  this.type = type;
  this.x = x;
  this.y = y;
  this.pairs =
    /** @type {T extends 0|1?number:number[]} reference(s) to connected */
    (type > 1 ? [] : -1);
  /** @type {ShipBlock|null} */
  this.owner = null;
  /** each output node has value, for input nodes it's undefined */
  this.value =
    /** @type {T extends 2?boolean:T extends 3?number:undefined} */
    (type & 1 ? 0 : false);
  Object.seal(this);
}
// Logic static properties
Logic.dashOff = 0;
/** specifies when logic nodes and connections should be rendered */
Logic.rend = !1;
/** global (logics) nodeList */
Logic.nodes =
  /** @type {(Logic|undefined)[]&{ownerShip:Ship}} */
  ([UDF]);
/**
 * @callback LExec @param {Logic<2|3>[]} arg
 * @param {LogicBlock} block @param {Ship} ship @returns {void} */
/** @param {...{k:number,x:number,y:number}[]|string|number|LExec} args */
Logic.generateLogic = function () {
  /** @type {{[key:number]:Logic[]&{exec:LExec|LExec&safe}|undefined}} */
  var o = {},
    /** @type {{k:0|1|2|3,x:number,y:number}[][]} */
    defs = [],
    /** @type {LExec} */
    func = function (arg, block) {},
    /** @constant */
    AT = " at Logic.generateLogic.";
  /** @param {{k:0|1|2|3,x:number,y:number}[]|string} arg */
  function setLogic(arg) {
    if (typeof arg == "function")
      return void (func = arg);
    if (typeof arg == "undefined")
      return console.warn("Found \"undefined\" type" + AT);
    var nodesDef = typeof arg == "string" ?
      defs[Number(arg)] :
      defs[defs.length] = arg,
      nodes = [];
    (o[l++] = nodes =
      /** @type {Logic[]&{exec:LExec|LExec&safe}} */
      (nodes)
    ).exec = func;
    for (var i = 0; i < nodesDef.length;) {
      var def = nodesDef[i++];
      nodes.push(Object.freeze(new Logic(def.k, def.x / 2, def.y / -2)));
    }
  }
  for (var i = 0, l = 690, a = arguments; i < a.length; i++)
    typeof a[i] == "number" ?
      l = a[i] :
      OP.call(o, l) ?
        console.error("Property ", l++, "already exists" + AT) :
        setLogic(a[i]);
  return o;
};
/** 738, 739, 740, 741, 742, 743, 744, 745 Thrusters @type {LExec} */
Logic.execThruster = function (arg, block) {
  console.log("execThruster",
    block.getPhysics().reporter = arg[0].value ? "ON" : "OFF");
};
/** 770: Drill, 771: Cannon, 772: Rotary Cannon, 773: Plasma Cannon
 * 774: Pulse Laser, 775: Beam Laser, 791, ... @type {LExec} */
Logic.execToolBlock = function (arg, block) {
  block.getPhysics().reporter = arg[0].value ? "ON" : "OFF";
};
/** 790: Hinge, 792: Piston @type {LExec} */
Logic.execPistonHinge = function (arg, block) {
  block.getPhysics().reporter = "" + arg[0].value;
};
/** 802: Constant On Signal @type {LExec} */
Logic.execConstantTrue = function (arg, block) {
  console.log("execConstantTrue", arg[0].value = true);
  block.getPhysics().reporter = "" + arg[0].value;
};
/** 803: Control Block @type {LExec} */
Logic.execControlBlock = function (arg, block) {
  var custom = block.properties.customParameter || [];
  console.log("execControlBlock", arg[0].value =
    ship.getPhysics().selectedInputs.indexOf("" + custom[0]) !== -1);
  block.getPhysics().reporter = "" + arg[0].value;
};
/** 804: AND Gate @type {LExec} */
Logic.execANDGate = function (arg, block) {
  console.log("execANDGate",
    arg[2].value = arg[0].value && arg[1].value);
  block.getPhysics().reporter = "" + arg[2].value;
};
/** 805: NAND Gate @type {LExec} */
Logic.execNANDGate = function (arg, block) {
  console.log("execNANDGate",
    arg[2].value = !(arg[0].value && arg[1].value));
  block.getPhysics().reporter = "" + arg[2].value;
};
/** 806: OR Gate @type {LExec} */
Logic.execORGate = function (arg, block) {
  console.log("execORGate",
    arg[2].value = arg[0].value || arg[1].value);
  block.getPhysics().reporter = "" + arg[2].value;
};
/** 807: NOR Gate @type {LExec} */
Logic.execNORGate = function (arg, block) {
  console.log("execNORGate",
    arg[2].value = !(arg[0].value || arg[1].value));
  block.getPhysics().reporter = "" + arg[2].value;
};
/** 808: XOR Gate @type {LExec} */
Logic.execXORGate = function (arg, block) {
  console.log("execXORGate",
    arg[2].value = arg[0].value !== arg[1].value);
  block.getPhysics().reporter = "" + arg[2].value;
};
/** 809: XNOR Gate @type {LExec} */
Logic.execXNORGate = function (arg, block) {
  console.log("execXNORGate",
    arg[2].value = arg[0].value === arg[1].value);
  block.getPhysics().reporter = "" + arg[2].value;
};
/** 810: NOT Gate @type {LExec} */
Logic.execNOTGate = function (arg, block) {
  console.log("execNOTGate",
    arg[1].value = !arg[0].value);
  block.getPhysics().reporter = "" + arg[1].value;
};
/** 813: Constant Number @type {LExec} */
Logic.execConstantNumber = function (arg, block) {
  var custom = block.properties.customParameter || [];
  console.log("execConstantNumber", arg[0].value = +custom[0]);
  block.getPhysics().reporter = "" + arg[0].value;
};
/** Unimplemented LogicBlock execution @type {LExec} */
Logic.execUnimplemented = function (arg, block) {
  block.getPhysics().reporter = "X";
};
/** 818: Numerical Inverter @type {LExec} */
Logic.execNumericalInverter = function (arg, block) {
  console.log("execNumericalInverter", arg[1].value = -arg[0].value);
  block.getPhysics().reporter = "" + arg[1].value;
};
/** 819: Clamp @type {LExec} */
Logic.execClamp = function (arg, block) {
  var val = +arg[0].value,
    custom = block.properties.customParameter || [];
  console.log("execClamp", arg[1].value = val < +custom[0] ?
    +custom[0] :
    val > +custom[1] ?
      +custom[1] :
      val);
  block.getPhysics().reporter = "" + arg[1].value;
};
/** 820: Abs @type {LExec} */
Logic.execAbs = function (arg, block) {
  console.log("execAbs", arg[1].value = Math.abs(+arg[0].value));
  block.getPhysics().reporter = "" + arg[1].value;
};
/** 821: ThresholdGate @type {LExec} */
Logic.execThresholdGate = function (arg, block) {
  var val = +arg[0].value,
    custom = block.properties.customParameter || [];
  console.log("execThresholdGate", arg[1].value = val < +custom[0] ?
    +custom[0] :
    val > +custom[1] ?
      +custom[1] :
      val);
  block.getPhysics().reporter = "" + arg[1].value;
};
/** 822: Numerical Switchbox @type {LExec} */
Logic.execNumericalSwitchbox = function (arg, block) {
  arg[3].value = arg[0].value ?
    +arg[2].value :
    +arg[1].value;
  console.log("execNumericalSwitchbox", arg[3].value);
  block.getPhysics().reporter = "" + arg[3].value;
};
/** 823: FUNCTION BLOCK @type {LExec} */
Logic.execFunctionExpensive = function (arg, block) {
  console.error("Screw you NCalcJS (for now)!");
};
/** 824: Memory Register @type {LExec} */
Logic.execMemoryRegister = function (arg, block) {
  arg[3].value = arg[1].value ?
    0 :
    arg[0].value ?
      arg[2].value :
      arg[3].value;
  console.log("execMemoryRegister", arg[3].value);
  block.getPhysics().reporter = "" + arg[3].value;
};
/** 825: Gauge, 826: Dial, 827: Digital Display @type {LExec} */
Logic.execDisplays = function (arg, block) {
  block.getPhysics().reporter = "" + arg[0].value;
};
Logic.execPushToToggle = 
  /** 828: Push To Toggle @type {LExec&{toggled?:boolean}} */
  (function (arg, block) {
    if (arg[0].value !== Logic.execPushToToggle.toggled)
      arg[1].value = !arg[1].value;
    block.getPhysics().reporter = "" + arg[1].value;
  });
Logic.execPushToToggle.toggled = false;

/** @TODO later improve logic comments briefness+clarity (in progress) */
/** Older instances of Logics comments/documenting for comparsion:
 * v.0.1.20.3 @see https://github.com/KaaBEL/.d1r.dbv/blob/1ed349b2230ddd8f3b64a6cd082d10fe7eeaeedc/assets/code.js
 * v.0.1.22 @see https://github.com/KaaBEL/.d1r.dbv/blob/1392589299b68fb61c1a87bc7e4616f6d20af75d/assets/code.js */
/** entire oject is frost */
Logic.VALUE = Logic.generateLogic(
  Logic.execThruster,
  // def0
  738, [{k: 0, x: 0, y: 0}],
  // def1
  [{k: 0, x: 0, y: 1}, {k: 1, x: 0, y: -1}],
  "1", "1", "0", "1", "1", "1",
  /** 746: Reaction Wheel */
  Logic.execUnimplemented,
  // def2
  746, [{k: 1, x: 0, y: 0}],
  Logic.execToolBlock,
  // def3
  770, "0", "0", "0", "0", "0", "0", 789, [{k: 0, x: 0, y: 2}],
  Logic.execPistonHinge,
  "2",
  Logic.execToolBlock,
  "0",
  Logic.execPistonHinge,
  "2",
  Logic.execToolBlock,
  795, "0", 798, "0", "0",
  Logic.execConstantTrue,
  // def4
  802, [{k: 2, x: 0, y: 0}],
  Logic.execControlBlock,
  "4",
  Logic.execANDGate,
  // def5
  [{k: 0, x: -1, y: -1}, {k: 0, x: -1, y: 1}, {k: 2, x: 1, y: 0}],
  Logic.execNANDGate,
  "5",
  Logic.execORGate,
  "5",
  Logic.execNORGate,
  "5",
  Logic.execXORGate,
  "5",
  Logic.execXNORGate,
  "5",
  Logic.execNOTGate,
  // def6
  [{k: 0, x: -1, y: 0}, {k: 2, x: 1, y: 0}],
  Logic.execUnimplemented,
  "0",
  "6",
  Logic.execConstantNumber,
  // def7
  [{k: 3, x: 0, y: 0}],
  Logic.execUnimplemented,
  // GPS Sensor
  // def8
  [{k: 3, x: -1, y: 0}, {k: 3, x: 1, y: 0}],
  "7", "7", "7",
  Logic.execNumericalInverter,
  // def9
  [{k: 1, x: -1, y: 0}, {k: 3, x: 1, y: 0}],
  Logic.execClamp,
  "9",
  Logic.execAbs,
  "9",
  Logic.execThresholdGate,
  // def10
  [{k: 1, x: -1, y: 0}, {k: 2, x: 1, y: 0}],
  Logic.execNumericalSwitchbox,
  // def11
  [
    {k: 0, x: -1, y: -1},
    {k: 1, x: -1, y: 1},
    {k: 1, x: 1, y: 1},
    {k: 3, x: 1, y: -1}
  ],
  Logic.execUnimplemented,
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
  "2", "2", "2", "6"
  // , 692, [{k: 1, x: -1, y: -1}, {k: 3, x: 1, y: 1}]
  );
Object.freeze(Logic.VALUE);
// (v.0.1.20.2) I might've accidently screw this method up so much
// this method is supposed to be the initialize default, not
// Logic(property).fromObject at the same time... BRUH
// (v.0.1.42) IDEA for logics system to just use references to block
// and optionally specify nth node, each block then must know its index
/** @TODO Logics rework update ^ */
/** addDefault but for Logic - if property contains nodeIndex data it
 * will use them to reassemble these connections, to reassamble them
 * properly Logic.reassemble must be used on completed blocks
 * @param {string|number} name @param {object} property
 * @param {(Logic<any>|undefined)[]} logics
 * it is the global Logic.nodes or ship.prop.nodeList
 * @param {Block[]} blocks */
Logic.addLogic = function (name, property, logics, blocks) {
  /** (new) DBV property nodeIndex(es) contains (not yet) references to
   * logic node indexes of logics (fresh nodeList) @type {number[]} */
  var ni = [],
    logicDef = Logic.VALUE[typeof name == "number" ?
      name :
      Block.ID[name]
    ];
  property.nodeIndex instanceof Array ||
    (property.nodeIndex = []);
  if (!logicDef)
    return property;
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
      // 'huh!' case check (checking for unsupposed wierd case)
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
/** removes all nodes of inputed block and removes their connections
 * @param {Block} block @param {(Logic<any>|undefined)[]} logics */
Logic.removeLogic = function (block, logics) {
  /** NOTE that nodeIndex is not checked with Logic node definition
   * and will blindly go through all nodeList indexes inside nodeIndex */
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
// removed suspiciosly useless code v.0.1.51
/** @param {Ship} ship is directly related with Logic.execs */
Logic.expensiveExec = function (ship) {
  var nodeList = ship.prop && ship.prop.nodeList || [];
  for (var i = 0, blocks = ship.blocks; i < blocks.length; i++) {
    var o = blocks[i], logic = Logic.VALUE[Block.ID[o.internalName]];
    if (!logic)
      continue;
    /** @type {Logic<2|3>[]} */
    var arg = [], block = o instanceof LogicBlock && o ||
      // #MessingWithWorkingLogics
      (blocks[i] = o = new LogicBlock(o, i, nodeList));
    // Get corresponding inputs/outputs for the operation
    for (var j = logic.length; j-- > 0;) {
      var node = nodeList[block.properties.nodeIndex[j]];
      if (!node)
        console.error("Index: " + j + " is missing from nodeList.");
      else if (node.owner !== o)
        console.error(node.owner instanceof LogicBlock ?
          "missing or wrong node.owner!?" :
          "node.owner is not LogicBlock!?");
      else if (node.pairs instanceof Array)
        // own output nodes are used as place for result logic.type: 2|3
        arg[j] = node;
      else {
        // own inputs use the value of output node they are connected with
        // since it's where the connected logic block stores its result
        var pairs = nodeList[node.pairs];
        arg[j] = pairs && (pairs.type === 2 || pairs.type === 3 ||
          +console.log("Connected node is not an output node!")) ?
          pairs :
          new Logic(
            /** @type {2|3} */
            (node.type + 2 & 3),
            0,
            0
          );
      }
    }
    logic.exec(arg, block, ship);
  }
};
// /** more confusation added to the Logic mess, OH YEAHH!!!
//  * @param {(Logic<any>|undefined)[]} logics @param {Ship} ship
//  * @param {number} i @param {Block|LogicBlock} oldOwner */
// Logic.checkNodeOwners = function (logics, ship, i, oldOwner) {
//   if (ship.prop && ship.prop.nodeList !== logics)
//     return console.error("Inputted incompatible nedoList (logics).");
//   var node = logics[i];
//   if (!node)
//     return console.error();
//   if (node.owner !== oldOwner)
// };

function Color() {
  this.prop = !1;
  throw new TypeError("Illegal constructor");
}
/** object is frost */
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
  22: "[custom color]",
  23: "Station Floor 0",
  24: "Station Floor 1",
  25: "Station Floor 2",
  26: "Wood",
  27: "Festive Duck",
  28: "Gonb",
  length: 29
};
/** object is frost */
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
  "BREAD": 21,
  "[custom color]": 22,
  "Station Floor 0": 23,
  "Station Floor 1": 24,
  "Station Floor 2": 25,
  "Wood": 26,
  "Festive Duck": 27,
  "Gonb": 28
};
Object.freeze(Color.NAME);
Object.freeze(Color.ID);
dictionaryDefs(Color.NAME, Color.ID, "Color definitions");
/** @param {string} name @return {Colors} */
Color.default = function getColor(name) {
  if (/Hydrogen Thruster/.test(name))
    return "Yellow";
  if (/Wheel|Battery|__placeholder84[456]__|Dynamo/.test(name))
    return "Light Gray";
  if (/Weight|Armou?r|Camera Block/.test(name))
    return "Dark Gray";
  if (/Hydrogen Tank/.test(name))
    return "Fuel";
  if (/Drill|Storage Rack/.test(name))
    return "Orange";
  if (/Ion Thruster/.test(name))
    return "Lime"
  if (/__placeholder776__|Afterburner/.test(name))
    return "Red";
  if (Color.colorlessRegexp.test(name))
    return null;
  return "White";
};
Color.colorlessRegexp = new RegExp("Struct|Glass Block|Glass Wedge|Sol\
ar Block|Solar Panel|Hinge|Piston|Ghost Block|Gauge|Dial|Digital Displ\
ay|__placeholder(?:84[0-26-9]|85[0-3])__");

/** class is frost Block Physics */
function Physics() {
  this.reporter = "";
  Object.seal(this);
}
// Only the Physics class initially, better classification system
// should be decided after 
// /** class is frost Block Physics */
// Physics.Block = PShip function () {
//   this.enabled = false;
// };
/** initPhysics is executed in context of Block constructor, the brackets
 * keep ts from asssiming it's PBlock property and uses its (this)context
 * @constant */
Physics.INIT = (function initBlockPhysics() {
  var blockPhysics = new Physics();
  if (this instanceof Block)
    this.getPhysics = function () {
      return blockPhysics;
    };
  return blockPhysics;
});
Physics.rend = {reporter: false};
/** Ship Physics @param {Ship} ship */
Physics.Ship = function PShip(ship) {
  /** @type {string[]} list of selected inputs (checked checkbox) */
  this.selectedInputs = [];
};
Physics.Ship.INIT = (function initShipPhysics() {
  if (!(this instanceof Ship))
    throw new TypeError("initShipPhysics used not on Ship.");
  var shipPhysics = new Physics.Ship(this);
  this.getPhysics = function () {
    return shipPhysics;
  };
  return shipPhysics;
});
Object.freeze(Physics);
Object.freeze(Physics.Ship);

/** letter case of block names doesn't matter when loaded by game,
 * Block name definitions require strict letter cases here */
/** instance is sealed
 * @typedef {[number,number,number]} XYZPosition
 * @typedef {[0|1|2,boolean,0|1|2|3]} Rotation
 * @typedef {keyof typeof Color.ID|""|null} Colors
 * @typedef {{customParameter?:(number|string|[number,number,number,
 * number])[],nodeIndex?:number[],weldGroup?:number}} BlockProps
 * @param {string} name
 * @param {XYZPosition} pos [-: 0, x: p[0] * 2, y: p[1] * 2]
 * @param {Rotation} rot [-: 0, f: f, r: Math.floor(r / 90)]
 * @param {{[key:string]:unknown}|0} [prop={color:""}]
 * @param {keyof typeof Color.ID|""|null} [color=""] */
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
  this.properties =
    /** @type {{[key:string]:unknown,color:Colors}&BlockProps} */
    (prop);
  this.getPhysics = Physics.INIT;
  Object.seal(this);
}
// NOTE that blocks definitions will be version dependant over time
// (allows cross version editing) there is just no need to implement it yet
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
  703: "Slab Wedge",
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
  828: "Push To Toggle",
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
  // station launch terminal
  850: "__placeholder850__",
  // station bench
  851: "__placeholder851__",
  // station wardrobe
  852: "__placeholder852__",
  // station telescope
  853: "__placeholder853__",
  // station market terminal
  854: "__placeholder854__",
  // station wedge
  855: "__placeholder855__",
  // station foor 2 1x1
  856: "__placeholder856__",
  // station floor 3 1x1
  857: "__placeholder857__",
  1023: "__NULL__",
  // 1024: Core, 1025: T1 Block, 1026: T2 Block, 1027: T1 Wedge,
  //  1028: T1 Wedge 1x2, 1029: T2 Wedge, 1030: Structure Block,
  //  1031: Glass Block,
  // 1032: Glass Wedge, 1033: Station Block, 1034: Simple Thruster,
  //  1035: Afterburner, 1036: Ion Thruster, 1037: Dynamo Thruster,
  //  1038: Momentum Wheel, 1039: Small Fuel Tank,
  // 1040: Medium Fuel Tank, 1041: Small Battery, 1042: Medium Battery,
  //  1043: T1 Rammer, 1044: T1 Blaster, 1045: T1 Pulse Laser,
  //  1046: T1 Gatling Gun, 1047: T1 Rocket Launcher,
  // 1048: Explosive, 1049: T1 Drill, 1050: T1 Mining Laser,
  //  1051: Small Crate, 1052: Medium Crate, 1053: Connector,
  //  1054: T1 Solar Panel, 1055: T2 Solar Panel,
  // 1056: Solar Block, 1057: Hinge, 1058: Seperator,
  //  1059: Camera Block, 1060: T1 Nano Healer
  1035: "Afterburner",
  1037: "Dynamo Thruster",
  1043: "T1 Rammer",
  1060: "T1 Nano Healer",
  length: 1061
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
  "Slab Wedge": 703,
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
  "Push To Toggle": 828,
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
  "__placeholder853__": 853,
  "__placeholder854__": 854,
  "__placeholder855__": 855,
  "__placeholder856__": 856,
  "__placeholder857__": 857,
  "__NULL__": 1023,
  "Afterburner": 1035,
  "Dynamo Thruster": 1037,
  "T1 Rammer": 1043,
  "T1 Nano Healer": 1060
};
Object.freeze(Block.NAME);
Object.freeze(Block.ID);
dictionaryDefs(Block.NAME, Block.ID, "Block definitions");
/** @type {{[key:number]:number|undefined}} (Mass) */
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
  // 799: 1, Inversed Dock?
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
  827: .5,
  828: .5,
  1035: 2,
  1037: 3,
  1043: 1,
  1060: 1
};
/** @type {{[key:number]:number|undefined}} (Integrity) */
Block.STRENGTH = {
  690: 10,
  691: 10,
  692: 5,
  693: 10,
  694: 20,
  695: 5,
  696: 5,
  697: 10,
  698: 10,
  699: 20,
  700: 5,
  701: 1,
  702: .5,
  738: 2.5,
  739: 10,
  740: 40,
  741: 120,
  742: 2.5,
  743: 10,
  744: 20,
  745: 60,
  746: 10,
  754: 10,
  755: 40,
  756: 90,
  757: 10,
  758: 40,
  759: 60,
  760: 10,
  761: 40,
  762: 90,
  770: 10,
  771: 10,
  772: 10,
  773: 10,
  774: 10,
  775: 10,
  786: 10,
  787: 50,
  788: 2,
  789: .5,
  790: 10,
  791: 1,
  792: 10,
  793: 10,
  794: 10,
  795: 10,
  796: 10,
  802: 2.5,
  803: 10,
  804: 10,
  805: 10,
  806: 10,
  807: 10,
  808: 10,
  809: 10,
  810: 5,
  811: 2.5,
  812: 5,
  813: 2.5,
  814: 10,
  815: 10,
  816: 10,
  817: 10,
  818: 5,
  819: 5,
  820: 5,
  821: 5,
  822: 10,
  823: 10,
  824: 10,
  825: 5,
  826: 2.5,
  827: 5,
  828: 5,
  1035: 10,
  1037: 15,
  1043: 20,
  1060: 10
};
/** number = Electricity Units per second
 * and in case of thruster when they are set to 1 000 000 (1M) force,
 * [number,number] = [Electricity Units, amout of seconds per use]
 * second @type {{[key:number]:number|[number,number]|undefined}}
 * (Electricity) */
Block.ENERGY_USE = {
  742: 275,
  743: 250,
  744: 225,
  745: 200,
  746: 100,
  770: 1,
  773: [10, 1.02],
  774: [2, .52],
  775: 4,
  788: -.25,
  789: -.75
};
/** number = contained units
 * @type {{[key:number]:number|undefined}} (Electricity) */
Block.ENERGY_STORE = {
  757: 20,
  758: 100,
  759: 175
};
/** number = Liters of Fuel per second
 * and in case of thruster when they are set to 1 000 000 (1M) force,
 * [number,number] = [Liters of fuel, amout of seconds per use]
 * @type {{[key:number]:number|[number,number]|undefined}} (Fuel) */
Block.FUEL_USE = {
  738: 175,
  739: 150,
  740: 125,
  741: 100
};
/** number = contained liters
 * @type {{[key:number]:number|undefined}} (Fuel) */
Block.FUEL_STORE = {
  // was 20 before fuel buff
  754: 30,
  // was 100 before fuel buff
  755: 150,
  // was 250 before fuel buff
  756: 375
};
/** number = items per second,
 * [number,number] = [Items, amout of seconds per use]
 * @type {{[key:number]:number|[number,number]|undefined}} (Cargo) */
Block.CARGO_USE = {
  770: [-1, 1.02]
};
/** number = items capacity
 * @type {{[key:number]:number|undefined}} (Cargo) */
Block.CARGO_STORE = {
  690: 5, 
  760: 20,
  761: 100,
  762: 250
};
/** positive = buy price of block, -1 = block isn't purchasable
 * @type {{[key:number]:number|undefined}} (MarketValue) */
Block.COST = {
  690: -1,
  691: 100,
  692: 100,
  693: 100,
  694: 100,
  695: 100,
  696: 100,
  697: 100,
  698: 100,
  699: 100,
  700: 100,
  701: 100,
  702: 100,
  703: 100,
  738: 100,
  739: 100,
  740: 400,
  741: 800,
  742: 100, 
  743: 100,
  744: 400,
  745: 800,
  746: 100, 
  754: 100,
  755: 400,
  756: 900,
  757: 100,
  758: 400,
  759: 600,
  760: 100,
  761: 400,
  762: 900,
  770: 100,
  771: 100,
  772: 200,
  773: 200,
  774: 200,
  775: 200,
  786: 100,
  787: 100,
  788: 100,
  789: 100,
  790: 100,
  791: 100,
  792: 100,
  793: 100,
  794: 100,
  795: 100,
  796: 500,
  802: 100,
  803: 100,
  804: 100,
  805: 100,
  806: 100,
  807: 100,
  808: 100,
  809: 100,
  810: 100,
  811: 100,
  812: 100,
  813: 100,
  814: 100,
  815: 100,
  816: 100,
  817: 100,
  818: 100,
  819: 100,
  820: 100,
  821: 100,
  822: 100,
  823: 100,
  824: 100,
  825: 100,
  826: 100,
  827: 100,
  828: 100,
  1035: 70,
  1037: 90,
  1043: 70,
  1060: 130
};
/** @TODO handling ls (DBV property?) */
/**
 * @param {object[]|object} blocks
 * @param {Logic<any>[]&{nc?:any}} [logics$] */
Block.arrayFromObjects = function arrayFromObjects(blocks, logics$) {
  var warn = 3, bs = blocks instanceof Array ? blocks : [blocks];
  /** nodeIndex (DBV "ni") property of a block is number[] type:
   * = it contains inputs and outputs indexes
   * = their connections are specified in "nc" DBV savefile property
   * = each index specifies whether it's input/output, bool/numerical,
   *   where is display position of node at that index, it is
   *   different for each block type,
   *   all are defined in @see {Logic.VALUE}
@see https://github.com/KaaBEL/.d1r.dbv/blob/1392589299b6/assets/code.js#L112
   * 1392589299b68fb61c1a87bc7e4616f6d20af75d */
  /** in DBV format inputs and output indexes reference indexes of
   * connections (new DBV "nc") property*/
  // TODO: change this variable logics to unpack the connections
  var logics = logics$ || [],
    /** maps connections to key:input, value:output map -
     * to be used in @see {extractConnections} */
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
  /** @param {any} customParameter custom parameter property actually */
  function extractLogic(customParameter) {
    var j = 0, props = Block.Properties.VALUE[Block.ID[name]] || [];
    for (var i = props.length; i-- > 0; j += p instanceof Array ?
        p.length :
        1)
      var p = props[i].item.default;
    return customParameter instanceof Array && customParameter.slice(j);
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
  /**  @type {XYZPosition[]} */
  var logicBlockPositions = [], propertyNames = new RegExp("^(internalName|n\
ame|n|position|pos|p|rotation|rot|r|properties|prop|f|flipped|wg|weld|color|\
s|c|ni|invalidName|getPhysics|logicPosition|logicBlockIndex)$");
  for (var i = 0, r = []; i < bs.length; i++) {
    var block = bs[i], o = {
      name: block.internalName || block.name || block.n,
      pos: block.position || block.pos || block.p,
      rot: block.rotation || block.rot || block.r || 0,
      prop: block.properties || block.prop || {color: ""},
      flip: block.f || block.flipped,
      weld: block.wg || block.weld,
      lpos: block.logicPosition
    };
    o.prop.color = block.color || block.s || o.prop.color || "";
    for (var p in block)
      if (warn)
        propertyNames.test(p) || warn-- && console.warn("Unknown prop" +
          "erty name: " + JSON.stringify(p) + " at: " + i);
      else
        break;
    var name = (typeof o.name == "string" ?
        o.name !== "__unknown__" ?
          o.name :
          (o.prop.invalidName || "") + "" :
        "") || "__unknown__",
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
    if (o.pos instanceof Array && o.pos.length === 2) {
      if (typeof o.prop.color != "string")
       o.prop.color = Color.default(name);
      if (typeof o.rot != "number")
        console.warn("incorrect array position length or wrong rota" +
          "tion? at: Block.arrayFromObjects, blocks: ", bs, " i: ", i);
      var adjX = 0, adjY = 0, size = Block.Size.VALUE[Block.ID[name]];
      pos = [0, o.pos[0] * 2 + adjX, o.pos[1] * 2 + adjY];
    }
    // is keeping custom parameter properties not changed a good idea?
    // block.ni or properties.nodeIndex is used prior to them anyway
    // should the prop.control stay?
    o.prop.customParameter = block.c || o.prop.control ||
      o.prop.custom || o.prop.customParameter;
    if (Logic.VALUE[Block.ID[name]]) {
      var indexes = block.ni || o.prop.nodeIndex;
      o.prop.nodeIndex = indexes instanceof Array &&
        indexes.every(function (e) {
          return typeof e == "number" && !isNaN(e);
        }) ?
          /** thanks to extractLogic and extractConnections the
          * nodeIndex property takes temporary form compatible with
          * both old and new DBV format to recreate D1R Ship format
          * = output index references nodeList index the node will
          * end up at, input index references connection to output */
          ncProperty && extractConnections(indexes) :
          extractLogic(o.prop.customParameter);
      Logic.addLogic(name, o.prop, logics, r);
    }
    if (Block.ID[name] > 689 && Block.ID[name] < 947)
      o.prop.weldGroup = o.weld || 0;
    block = new Block(name, [pos[0], pos[1], pos[2]], rot, o.prop);
    if (o.lpos && o.lpos instanceof Array)
      logicBlockPositions[i] =
        [+o.lpos[0] || 0, +o.lpos[1] || 0, +o.lpos[2] || 0];
    r[i] = block;
  }
  // optionally correct loading if logic nodes will require
  // to finish references after all blocks are loaded
  Logic.reassemble(r, logics);
  logicBlockPositions.forEach(function (e, i) {
    (r[i] = new LogicBlock(block, i, logics)).logicPosition = e;
  });
  return r;
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
/** for DBV blocks @param {number} id */
Block.isFlippable = function (id) {
  return id < 697 ? id > 691 && id < 695 : id < 700 || id === 703;
};
/** @typedef {0|1|2|3|number} RA Rotation Axis */
// not tested or debugged at all
/** manipulates inputed Rotation array, do not use returned if possible
 * @param {Rotation} rot @param {RA} x @param {RA} y @param {RA} z */
Block.rotate = function (rot, x, y, z) {
  /** @type {0|1|2} face of axis x, y, z */
  var face = rot[0],
    /** other side/face on the opposite side */
    side = rot[1],
    /** rotation of specified face (counterclockwise) */
    turn = rot[2];
  /** axis rotations are later applied with the same methd */
  var axis = [x, y, z].map(function (e) {
    if (e >= 0 && e < 4)
      return e | 0;
    return Math.round(e / 90) % 4 + 4 & 3;
  });
  /** @type {0|1|2} */
  for (var axisIndex = 0; axisIndex < 3; axisIndex++) {
    var steps = axis[axisIndex];
    if (axisIndex === 1) {
      turn =
        /** @type {0|1|2|3} */
        (turn + steps & 3);
      continue;
    }
    var n =
      /** @type {0|2} */
      (((turn << 1) ^ axisIndex ^ 2) & 2);
    if (steps & 1)
      face = n === face ? 1 : n;
    side = (side ?
      (turn >> 1) | 2 :
      (3 - axisIndex + turn & 3) >> 1) + steps > 1;
    if (axisIndex === ((face & 1) << 1)) {
      turn =
        /** @type {0|1|2|3} */
        (turn + n & 3);
    //@ts-ignore
    } else if ('I have no idea')
      throw new Error("Not implemented.")
  }
  return [rot[0] = face, rot[1] = side, rot[2] = turn];
};
/** instance is frost
 * @typedef {{x:number,y:number,w:number,h:number}}
 * @param {number} x @param {number} y
 * @param {number} w @param {number} h */
Block.Size = function Size(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  Object.freeze(this);
};
Block.Size.width = 4;
Block.Size.height = 48;
/**
 * @typedef {[number,number,number,number,number]} PreciseDef
 * @typedef {[number|string]|[number|string,number,number]} SizeDef
 * @typedef {(SizeDef|PreciseDef)|(SizeDef|PreciseDef)[]} SizesArg
 * @type {(...arg:SizesArg[])=>{[key:number]:Block.Size}} */
Block.Size.genterateSizes = function () {
  var r = {690: new this(0, 0, 2, 2)},
    /** @type {{[key:number]:SizeDef|SizeDef[],length:number}} */
    a = arguments;
  // by replacing nw = 0 with nw = [] it will log sizes and do 'reflow'
  for (var i = 0, j = 0, l = 690, nw = 0; l < Block.NAME.length; l++)
    if (Block.NAME[l]) {
      /** @type {[number]|[number,number,number]|PreciseDef} */
      //@ts-ignore
      var v = a[i];
      //@ts-ignore
      v instanceof Array && v[j] instanceof Array ? v = v[j++] : j = 3;
      if (typeof v[0] == "number")
        var x = (v[0] % this.width) * 32, y = v[0] / this.width << 5;
      else {
        x = +(v[0] + " ").split(" ")[0] >>> 5 << 5;
        y = +(v[0] + " ").split(" ")[1] >>> 5 << 5;
        v[0] = (x >>> 5) + (y >>> 5) * this.width;
      }
      if (typeof nw == "object") { 
        var vup = v[0] / this.width << 0;
        console.log(Block.NAME[l], v[0] % this.width, vup, v);
        // Block.Size must be change as well for resing to work
        v[0] += vup * 0;
        //@ts-ignore
        nw.push(v);
      }
      if (((v[1] || 1) < 0 || (v[2] || 1) < 0) && v[0] !== -1)
        throw new Error("Neither width nor height can be negative.");
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
// (TODO:) blocks were still not tested properly all at once, one more
// undetected bug with block or texture and adding unit test for it
Block.Size.VALUE = Block.Size.genterateSizes([[128], [52], [53]],
  [[54, 1, 2], [55, 1, 4], [56], [57, 1, 0.5], [60], [61, 1, 2]],
  [[71, 1, 4], [35], [150], [151], [62, 1, 0.5], [8, 0.5, 0.5], [4]],
  [[28, 2, 2], [13, 3, 4], [9, 0.5, 0.5], [0], [1, 1, 2], [2, 2, 3]],
  [[34], [89], [86, 2, 2], [92, 3, 3], [41], [44, 2, 2], [42, 2, 3]],
  [[88], [80, 2, 2], [68, 3, 3], [24], [36], [37], [38], [39], [40]],
  [[167], [172], [173], [136], [133, 1, 2], [12], [132], [31], [171]],
  [[174], [129, 1, 0.5], [175], [131, 1, 0.5], [130, 1, 0.5]],
  [[95, 0.5, 0.5], [99], [103], [104], [105], [106], [107], [108]],
  [[109, 1, 0.5], [110, 0.5, 0.5], [111, 1, 0.5], [112, 0.5, 0.5]],
  [[113], [114], [115], [116], [117, 1, 0.5], [118, 1, 0.5]],
  [[119, 1, 0.5], [120, 1, 0.5], [121], [122], [123], [124, 0.5, 1]],
  [[125, 0.5, 0.5], [126, 1, 0.5], [127, 1, 0.5], [176], [177], [178]],
  [[179], [180], [181], [134, 2, 2], [164, 1, 2], [165, 1, 2]],
  [[166, 1, 2], [183], [184, 2, 2], [186, 2, 2], [160], [161], [162]],
  [[144, 4, 1], [158, 2, 1], [148, 2, 3], [163], [140, 4, 1], [182]],
  [[155], [154], [-1, -1, -1], [16], [30], [64], [66]]);
/** object is frost
 * @template {"BLOCK"|"PYRAMID"|"WEDGE"} T @param {T} type */
Block.Mirror = function Mirror(type) {
  this.type = type;
  this.dictionary =
    /** @type {T extends "BLOCK"?undefined:Rotation[]} */
    (Block.Mirror[type] ||
    console.warn("Dictionary for \"BLOCK\" type is undefined!"));
  Object.freeze(this);
};
/** @param {string} data */
Block.Mirror.generateRotations = function (data, AT) {
  var array = JSON.parse("[" + data + "]"), mirrors = [];
  AT = ". At " + AT + " Mirror definitions.";
  if (array instanceof Array)
    for (var i = 24; i-- > 0;)
      if (i in array) {
        var num = array[i];
        mirrors[i] =
          /** @type {Rotation} */
          ([num >> 3, (num & 4) > 0, num & 3]);
      } else
        throw new Error("Mirrors data is missing index: " + i + AT);
  else
    throw new Error("Mirrors data is not instanceof Array" + AT);
  return mirrors;
};
Block.Mirror.BLOCK = null;
Block.Mirror.PYRAMID = Block.Mirror.generateRotations("8,11,10,9,12,15,14,13\
,0,3,2,1,4,7,6,5,17,16,19,18,23,22,21,20", "PYRAMID");
Block.Mirror.WEDGE = Block.Mirror.generateRotations("6,5,4,7,2,1,0,3,8,11,10\
,9,12,15,14,13,16,19,18,17,20,23,22,21", "WEDGE");
/** @type {{[key:number]:Block.Mirror<"PYRAMID"|"WEDGE">|undefined}} */
Block.Mirror.VALUE = {
  1: new Block.Mirror("WEDGE"),
  2: new Block.Mirror("WEDGE"),
  3: new Block.Mirror("PYRAMID"),
  4: new Block.Mirror("PYRAMID"),
  5: new Block.Mirror("PYRAMID"),
  6: new Block.Mirror("PYRAMID"),
  8: new Block.Mirror("PYRAMID"),
  9: new Block.Mirror("PYRAMID"),
  10: new Block.Mirror("WEDGE"),
  11: new Block.Mirror("WEDGE"),
};

// TODO: To be considered for resystemizing
/** @template {keyof ItemTs} T @param {T} type @param {string} name */
Block.Properties = function (type, name) {
  this.type = type;
  this.name = name;
  /** @type {ItemTs[T]} *///@ts-ignore
  this.item = new Block.Properties.Items[type]();
}
Block.Properties.Items = {
  // changed the integer slider from not having enterable input
  // to allow only for integer number unlike slider's multiplies of 0.1
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
 * @type {<T extends PropsArg[]>(argArr: T)=>Props[]} */
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
        p.item.default = [v[3]];
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
/**
 * @type {{[key:number]:Props[]|undefined,
 * 803:[Block.Properties<"Dropdown">]}}
 * @see {Ship.CustomInput} @see {ShipProperties} */
Block.Properties.VALUE = Block.PROP = {
  738: Block.Properties.justOne([[1, "Force", 375, 1125, 1125]]),
  // 738: + old logical input node
  739: Block.Properties.justOne([[1, "Force", 1500, 4500, 4500]]),
  // 739: + old logical input node
  740: Block.Properties.justOne([[1, "Force", 6000, 18000, 18000]]),
  // 740: + old logical input node
  741: Block.Properties.justOne([[1, "Force", 1800, 54000, 54000]]),
  // 741: + old logical input node
  742: Block.Properties.justOne([[1, "Force", 375, 1125, 1125]]),
  // 742: + old logical input node
  743: Block.Properties.justOne([[1, "Force", 1500, 4500, 4500]]),
  // 743: + old logical input node
  744: Block.Properties.justOne([[1, "Force", 3000, 9000, 9000]]),
  // 744: + old logical input node
  745: Block.Properties.justOne([[1, "Force", 9000, 27000, 27000]]),
  // 745: + old logical input node
  746: Block.Properties.justOne([[1, "Torque", 2500, 7500, 7500]]),
  // 770, 771, 772, 773, 774, 775: old logical input node
  790: Block.Properties.justOne([[1, "Gear Ratio", 0.2, 3, 1], [5, 0]]),
  791: Block.Properties.justOne([[5, [0, 0, 0, 0]]]),
  792: Block.Properties.justOne([[0, "Gear Ratio", 0.2, 3, 1], [5, 0]]),
  803:
    // custom parameter (DBV block's "c") property contains option string
    // instead of number reference to option index (as for Ship class)
    // (which's in Block.Properties<"Dropdown"> item.default[0])
    /** @type {[Block.Properties<"Dropdown">]} */
    (Block.Properties.justOne([[2, "Controls", [
      "Up",
      "Down",
      "Left",
      "Right",
      "Turn Left",
      "Turn Right",
      "Action 1",
      "Action 2"
    ], 0]])),
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
  819: Block.Properties.justOne([[3, "Range", [0, 1]]]),
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
  property.customParameter = [];
  if (!(propsDef instanceof Array))
    return property;
  for (var i = 0, n = 0, p; i < propsDef.length;)
    if ((p = propsDef[i++]) instanceof Block.Properties)
      for (var j = 0, l = p.item.default.length; j < l;)
        property.customParameter[n++] = p.name === "Controls" &&
          p.item instanceof Block.Properties.Items.Dropdown ?
            p.item.options[p.item.default[j++]] :
            p.item.default[j++];
  return property;
};
/** returns <default input optoins>.concat([custom input options])
 * @param {ShipProperties|null} prop */
Block.Properties.getInputOptions = function (prop) {
  var arrMaybe = (prop || OC()).customInputs;
  return Block.Properties.VALUE[803][0].item.options.concat(
    (arrMaybe instanceof Array ?
      arrMaybe :
      []).map(String)
  );
}
/** instance is frost
 * @param {ShipBlock} block @param {number} id @param {number} x
 * @param {number} y @param {number} w @param {number} h */
Block.Selected = function (block, id, x, y, w, h) {
  this.block = block;
  this.id = id;
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  Object.freeze(this);
};
/** class is sealed instance is frost @param {number} x @param {number} y */
Block.Box2d = function Point(x, y) {
  this.x = x;
  this.y = y;
  Object.freeze(this);
};
/** @typedef {{x:number,y:number}|[number,number]} PathArg */
/** @param {...PathArg[]|string|number} args */
Block.Box2d.generateBuildBox = function () {
  /** @type {{[key:number]:Block.Box2d[]&{range:number}|undefined}} */
  var o = {},
    /** @type {(Block.Box2d[]&{range:number})[]} */
    defs = [],
    /** @constant */
    AT = " at Block.Box2d.generateBuildBox.";
  /** @param {PathArg[]|string} arg */
  function setBuildBox(arg) {
    if (typeof arg == "undefined")
      return console.warn("Found \"undefined\" type" + AT);
    var path = typeof arg == "object" ? arg.map(function (e) {
      return e instanceof Array ?
        new Block.Box2d(e[0], e[0]) :
        new Block.Box2d(e.x, e.y);
    }) : null;
    if (path)
      var j = path.length;
    else
      return o[l++] = defs[+arg];
    for (var n = 0, max = 1; j-- > 0; n > max ? max = n : 0)
      var x = path[j].x, y = path[j].y, n = Math.sqrt(x * x + y * y);
    (o[l++] = defs[defs.length] =
      /** @type {Block.Box2d[]&{range:number}} */
      (path)
    ).range = max;
  }
  for (var i = 0, l = 690, a = arguments; i < a.length; i++)
    typeof a[i] == "number" ?
      l = a[i] :
      OP.call(o, l) ?
        console.error("Property ", l++, "already exists" + AT) :
        setBuildBox(a[i]);
  return o;
};
Block.Box2d.VALUE = Block.Box2d.generateBuildBox(
  690,
  // def<definition index>: <dimensoins> <shape> "<representative block>"
  // def0: 1x1 block "Block"
  [{x: 0, y: 0}, {x: 0, y: -2}, {x: 2, y: -2}, {x: 2, y: 0}],
  "0",
  // def1: 1x1 wedge "Wedge"
  [
    {x: 0, y: 0},
    {x: 0, y: -2},
    {x: 2, y: -2},
    {x: 2, y: -1.75},
    {x: 0.25, y: 0}
  ],
  // def2: 1x2 wedge "Wedge 1x2"
  [
    {x: 0, y: 0},
    {x: 0, y: -4},
    {x: 2, y: -4},
    {x: 2, y: -3.625},
    {x: 0.25, y: 0}
  ],
  // def3: 1x4 wedge "Wedge 1x4"
  [
    {x: 0, y: 0},
    {x: 0, y: -8},
    {x: 2, y: -8},
    {x: 2, y: -7.5},
    {x: 0.125, y: 0}
  ],
  // def4: 1x1 pyramid "Pyramid"
  [
    {x: 0.875, y: 0},
    {x: 0, y: -1.75},
    {x: 0, y: -2},
    {x: 2, y: -2},
    {x: 2, y: -1.75},
    {x: 1.125, y: 0}
  ],
  // def5: 1x.5 block "Slab"
  [{x: 0, y: -1}, {x: 0, y: -2}, {x: 2, y: -2}, {x: 2, y: -1}],
  700, "0", "0", "1",
  // def6: 1x.5 wedge "Slab Wedge"
  /** @TODO update Slab Wedge to its collision from Slab as placeholder */
  [{x: 0, y: -1}, {x: 0, y: -2}, {x: 2, y: -2}, {x: 2, y: -1}],
  738,
  // def7: .5x.5 block "LED"
  [{x: 1, y: -1}, {x: 1, y: -2}, {x: 2, y: -2}, {x: 2, y: -1}],
  "0",
  // def8: 2x2 block "Medium Hydrogen Tank"
  [{x: 0, y: 0}, {x: 0, y: -4}, {x: 4, y: -4}, {x: 4, y: 0}],
  // def9: 3x4 block "Large Hydrogen Thruster"
  [{x: 0, y: 0}, {x: 0, y: -8}, {x: 6, y: -8}, {x: 6, y: 0}],
  "7", "0",
  // def10: 1x2 block "Medium Ion Thruster"
  [{x: 0, y: 0}, {x: 0, y: -4}, {x: 2, y: -4}, {x: 2, y: 0}],
  // def11: 2x3 block "Large Battery"
  [{x: 0, y: 0}, {x: 0, y: -6}, {x: 4, y: -6}, {x: 4, y: 0}],
  "0",
  754, "0", "8",
  // def12: 3x3 block "Large Hydrogen Tank"
  [{x: 0, y: 0}, {x: 0, y: -6}, {x: 6, y: -6}, {x: 6, y: 0}],
  "0", "8", "11", "0", "8", "12",
  770,
  // def13: 1x1 drill "Small Hydraulic Drill"
  [
    {x: 0, y: -2},
    {x: 2, y: -2},
    {x: 2, y: -1.375},
    {x: 1.125, y: 0},
    {x: 0.875, y: 0},
    {x: 0, y: -1.375}
  ],
  // def14: 1x1 weapon "Cannon"
  [
    {x: 0.75, y: 0},
    {x: 0.75, y: -1.125},
    {x: 0, y: -1.125},
    {x: 0, y: -2},
    {x: 2, y: -2},
    {x: 2, y: -1.125},
    {x: 1.25, y: -1.125},
    {x: 1.25, y: 0}
  ],
  // def15: 1x1 weapon_thicc "Rotary Cannon"
  [
    {x: 0.5, y: 0},
    {x: 0.5, y: -1.125},
    {x: 0, y: -1.125},
    {x: 0, y: -2},
    {x: 2, y: -2},
    {x: 2, y: -1.125},
    {x: 1.5, y: -1.125},
    {x: 1.5, y: 0}
  ],
  "14", "14", "14", "0",
  786,
  "0", "0", "0", "10", "0", "0", "0", "0", "0", "5", "0", "5", "5",
  802,
  "7", "0", "0", "0", "0", "0", "0", "0", "5", "7", "5", "7", "0",
  "0", "0", "0", "0", "5", "5", "5", "0", "0", "0",
  // def16: .5x1 block "Gauge"
  [{x: 0, y: 0}, {x: 0, y: -2}, {x: 1, y: -2}, {x: 1, y: 0}],
  "7", "5", "5",
  697,
  // def17: 1x1 smooth_corner "Smooth Corner"
  [
    {x: 0, y: 0},
    {x: 0, y: -2},
    {x: 2, y: -2},
    {x: 2, y: -1.625},
    {x: 1.625, y: -0.75},
    {x: 1.25, y: -0.375},
    {x: 0.375, y: 0}
  ],
  // def18: 1x2 smooth_corner "Smooth Corner 1x2"
  [
    {x: 0, y: 0},
    {x: 0, y: -4},
    {x: 2, y: -4},
    {x: 2, y: -3.25},
    {x: 1.5, y: -1.25},
    {x: 0.875, y: -0.25},
    {x: 0.375, y: 0}
  ],
  // def19: 1x4 smooth_corner "Smooth Corner 1x4"
  [
    {x: 0, y: 0},
    {x: 0, y: -8},
    {x: 2, y: -8},
    {x: 2, y: -6.75},
    {x: 1.375, y: -2},
    {x: 0.875, y: -0.5},
    {x: 0.25, y: 0}
  ]
)

/** @typedef {{ax:number,by:number,c:number}} VRP */
// global test functions so it can be tested separately from its local scope
/** @param {Block.Box2d} pointA @param {Block.Box2d} pointB */
function test_someVRPshetFromSchoolMathNotes(pointA, pointB) {
  // nominal vector of A->B (a, b)
  var a = pointA.y - pointB.y, b = pointB.x - pointA.x;
  /** @see {VRP}: a*x + b*y + c = 0 */
  return {ax: a, by: b, c: -(a * pointA.x + b * pointA.y)};
  // (basically check formula for points on that line)
}
// JSON.stringify(someVRPshetFromSchoolMathNotes({x: 3, y: 7}, {x:-2, y: 1}));
// Should return {ax: 6, by: -5, c: 17}
/** @param {VRP} vrp1 @param {VRP} vrp2 */
function test_collisionOfVRPshets(vrp1, vrp2) {
  // coercion
  var n = vrp2.ax === 0 ?
    // the line is horizontal, I have no idea what to do with it
    function () {
      debugger;
      throw new Error("Debug this.");
    }() :
    vrp1.ax / -vrp2.ax;
  return vrp1.ax + vrp2.ax * n + vrp1.by + vrp2.by * n +
    vrp1.c + vrp2.c * n;
}
/** @param {ShipBlock} ofBlock @param {ShipBlock[]} within */
Block.Box2d.collisions = function (ofBlock, within) {
  function combineLines() {
    for (var j = path.length, point = path[j - 1]; j-- > 0;) {
      for (var n = ofPath.length, ofPoint = path[n - 1]; n-- > 0;) {
        var a1x = path[j].x, a1y = path[j].y
        // if (straightLineCollision(path[j], point, ofPath[n], ofPoint))
        //   return colliding.push(within[i]);
      }
    }
  }
  /** @param {ShipBlock} block @param {Block.Box2d[]} path */
  function transformPath(block, path) {
    if (!block.rotation[1] && block.rotation[2] === 0)
      throw new Error("Flipped and rotated collisions not yet implemented");
    return path;
    var rot = block.rotation[2];
    return path.map(function (e) {
      return new Block.Box2d(e.x * -1, e.y * 1);
    });
  }
  var temporary = Block.Box2d.VALUE[Block.ID[ofBlock.internalName]];
  if (!temporary) {
    console.warn("Uhm, trying to collide block without collisions?");
    return [];
  }
  /** @type {ShipBlock[]} */
  var colliding = [], ofRange = temporary.range;
  var ofPath = transformPath(ofBlock, temporary);
  var ofX = ofBlock.position[1], ofY = ofBlock.position[2];
  for (var i = within.length; i-- > 0 && within[i] !== ofBlock;) {
    temporary = Block.Box2d.VALUE[Block.ID[within[i].internalName]];
    if (!temporary)
      continue;
    var path = transformPath(within[i], temporary);
    var pos = within[i].position,
      x = Math.abs(ofX - pos[1]),
      y = Math.abs(ofY - pos[2]);
    if (Math.sqrt(x * x + y * y) >= ofRange + temporary.range)
      continue;
    colliding.push(within[i]);
  }
  return colliding;
};

/** neccesary ln Logic editing mode because of logicPosition and
 * logicBlockIndex properties, useless to be used for not logic blocks
 * @param {Block} block @param {number} index -1 for no index
 * @param {Ship|(Logic<any>|undefined)[]} ship used to get nodeList */
function LogicBlock(block, index, ship) {
  this.internalName = block.internalName;
  this.position =
    /** @type {XYZPosition} */
    (block.position.slice());
  this.rotation = block.rotation;
  this.properties =
    /** more strict block.properties makes editing logic nodes easier
     * @type {typeof block.properties&{nodeIndex:number[]}} */
    (function (prop, logicBlock) {
      var logic = Logic.VALUE[Block.ID[block.internalName]] || [];
      var ni = prop.nodeIndex instanceof Array ?
        prop.nodeIndex :
        prop.nodeIndex = [];
      if (ni.length !== logic.length)
        console.warn("Why does block id: " + index + " have " +
          (ni.length > logic.length ? "more" : "less") +
          " nodeIdentifier (nodeIndex property) slots?", block);
      /** @type {Logic<any>|undefined} */
      // #MessingWithWorkingLogics
      var node, nodeList = ship instanceof Array ?
        ship :
        ship.prop && ship.prop.nodeList || [];
      for (var j = logic.length, l = ni.length; j-- > l;) {
        node = new Logic(logic[j].type, 0, 0);
        ni[j] = nodeList.push(node) - 1;
        node.owner = logicBlock;
      }
      for (j++; j-- > 0;)
        if (!(node = nodeList[ni[j]]) || !node.owner)
          console.error("LogicBlock: node or node.owner is missing.");
        else if (node.owner !== block)
          console.error("LogicBlock: wrong owner:", node.owner, block);
        else
          node.owner = logicBlock;
      return prop;
    }(block.properties, this));
  this.getPhysics = block.getPhysics;
  this.logicPosition = block.position;
  /** while in Logic mode it stores index of the block in Ship Ship.Mode */
  this.logicBlockIndex = index;
}
__extends(LogicBlock, Block);

/**
 * @typedef {Block[]&{parentShip:Ship}} BlockSelection
 * @TODO BlockSelection can't be used for stored blueprints
 * a Blueprint with deep copied logics should be used instead */
/**
 * @typedef {{nodeList?:(Logic|undefined)[],
 * customInputs?:Ship.CustomInput[],[key:string]:unknown}} ShipProperties
 * @see {Logic} @see {Ship.CustomInput}
 * @typedef {"Ship"|"Logic"} EditMode */
/** instance is sealed
 * @param {string} name
 * @param {number[]} version
 * @param {string} time
 * @param {ShipBlock[]} blocks
 * @param {ShipProperties|null} [properties=null]
 * @param {Ship.Mode} [mode="Ship"]
 * for usuall ship creation ues @see {Ship.fromObject} */
function Ship(name, version, time, blocks, properties, mode) {
  this.name = name;
  this.gameVersion = version;
  this.dateTime = time;
  /** @type {(Block|LogicBlock)[]} */
  this.blocks = blocks;
  /** Ship properties (shortcut name since it is db/dr non-standard) */
  this.prop = properties || null;
  this.getMode = __private(mode || new Ship.Mode("Ship", this));
  this.getPhysics = Physics.Ship.INIT;
  /** to track Droneboi Vehicles editor version in its JSON savefiles */
  this.significantVersion = Ship.VERSION;
  Object.seal(this);
}
/** @constant @type {23} significantVersion: 23 (integer) */
Ship.VERSION = 23;
Ship.prototype.selectRect = (
  /**
   * @overload @returns {Block[]&{parentShip:Ship}}
   * @overload @param {number} x0 @param {number} x1 @param {number} y0
   * @param {number} y1 @param {number} z0 @param {number} z1
   * @returns {Block[]&{parentShip:Ship}} */
  function (x0, y0, z0, x1, y1, z1) {
    // n first coordinate is stored as temporary
    var x = x0, y = y0, z = z0, selected = [];
    if (typeof x == "number") {
      var all = this.blocks;
      // if the second coordinate is greater as supposed
      //   n0 will become the second coordinate
      //   else n0 already is second one, temporary is set to first
      x1 > x0 ? x0 = x1 : x = x1;
      y1 > y0 ? y0 = y1 : y = y1;
      z1 > z0 ? z0 = z1 : z = z1;
    } else
      selected = this.blocks.concat(all = []);
    for (var i = 0; i < all.length; i++) {
      var pos = all[i].position;
      if (pos[0] < x || pos[0] > x0 ||
        pos[1] < y || pos[1] > y0 || pos[2] < z || pos[2] > z0)
        continue;
      selected.push(all[i]);
    }
    (selected =
      /** @type {Block[]&{parentShip:Ship}} */
      (selected)
    ).parentShip = ship;
    return selected;
  }
);
Ship.prototype.removeRect = function (xl, yt, zr, xr, yb, zf) {
  var x = xl, y = yt, z = zr, selected = [];
  xr > xl ? xl = xr : x = xr;
  yb > yt ? yt = yb : y = yb;
  zf > zr ? zr = zf : z = zf;
  for (var all = this.blocks, i = all.length; i-- > 0;) {
    var pos = all[i].position;
    if (pos[0] < x || pos[0] > xl || pos[1] < y || pos[1] > yt ||
      pos[2] < z || pos[2] > zr)
      continue;
    Logic.removeLogic(all[i], ship.prop && ship.prop.nodeList || []);
    all[i] = all.slice(-1)[0];
    all.length--;
  }
  // var deletion = this.selectRect(xl, yt, zr, xr, yb, zf);
  // /** @TODO optimize deleting with custom logics deletion */
  // for (var i = deletion.length; i-- > 0;)
  Edit.eventFire(this);
};
/** @param {BlockSelection} select */
Ship.prototype.fillRect = function (x0, y0, z0, x1, y1, z1, select) {
  // https://stackoverflow.com/a/424445 backup random number solution
  if (!select.length)
    return;
  var x = x0, y = y0, z = z0, blocks = [], rand = rand_sfc32(0);
  // x becomes x_min and x0 becomes x_max
  x1 > x0 ? x0 = x1 : x = x1;
  y1 > y0 ? y0 = y1 : y = y1;
  z1 > z0 ? z0 = z1 : z = z1;
  /** @param {Ship} ship */
  function pushBlock(ship) {
    // console.log(x, y, z, x0, y0, z0, x1, y1, z1);
    var idx = Math.floor(rand() * select.length);
      // looking for short and suitable name of random block from selection
    var one = select[idx], name = one.internalName;
    var pos = one.position, properties = one.properties;
    return ship.blocks[ship.blocks.length] = new Block(
      name,
      // TODO: fill could defaultly adjust blocks to fit full grid
      [x + (pos[0] & 0), y + (pos[1] & 0), z + (pos[2] & 0)],
      /** @type {Rotation} */
      (one.rotation.concat([])),
      Logic.addLogic(
        name,
        {
          color: properties.color,
          customParameter: properties.customParameter,
          weldGroup: properties.weldGroup
        },
        ship.prop && ship.prop.nodeList || [],
        ship.blocks
      )
    );
  }
  if ((settings || {}).buildReplace) {
    ship.removeRect(x1 = x, y1 = y, z1 = z, x0, y0, z0);
    /** axis += 2 spacing is used temporarily
     * @TODO make block collisions blocks are being placed
     * maybe some kind of table for axis x, y, z, block index */
    for (x = x1; x <= x0; x += 2)
      for (y = y0; y >= y1; y -= 2)
        for (z = z1; z <= z0; z += 2)
          blocks.push(pushBlock(this));
    Edit.eventFire(this);
    return blocks;
  }
  // width, height, length
  var w = x - x0 + 1, h = y - y0 + 1, l = z - z0 + 1;
  var b;
};
/**
 * @param {number} x @param {number} y @param {number} z
 * @param {BlockSelection} select */
Ship.prototype.paste = function (x, y, z, select) {
  /** @type {(Logic<any>|undefined)[]} */
  var logics = ship.prop && ship.prop.nodeList || [],
    /** @type {(Logic<any>|undefined)[]} */
    oldLogics = select.parentShip.prop &&
      select.parentShip.prop.nodeList || [],
    /** @type {number[]} mapping new output nodes indexes by old ones */
    outputs = [],
    /** @type {number[]} later used to assign each to output */
    inputs = [];
  for (var i = select.length, l = 1; i-- > 0;) {
    var pos = select[i].position, rot = select[i].rotation;
    var block = new Block(
      select[i].internalName,
      [pos[0] + x, pos[1] + y, pos[2] + z],
      [rot[0], rot[1], rot[2]],
      JSON.parse(JSON.stringify(select[i].properties))
    ), logicDef = Logic.VALUE[Block.ID[block.internalName]];
    if (logicDef) {
      /** @type {number[]} nodeIndex(es) */
      var ni = [], property = block.properties;
      property.nodeIndex instanceof Array || (property.nodeIndex = []);
      // backwards iterating >:D (evil laugh)
      for (var j = logicDef.length; j-- > 0;) {
        while (logics[l])
          l++;
        /** @type {Logic<any>|safe} */
        var newNode = logics[l] = new Logic(logicDef[j].type, 0, 0),
          idx = (select[i].properties.nodeIndex || [])[j];
        newNode.owner = block;
        /** @type {Logic<any>|safe} node from nodeList of selection */
        var oldNode = oldLogics[idx] || OC();
        if (logicDef[j].type > 1) {
          // only add nodeIndex references for actual output
          (oldNode.pairs instanceof Array ?
            outputs :
            [])[idx] = ni[j] = l;
          continue;
        }
        if (typeof oldNode.pairs != "number")
          return console.error("Not old Logic input node:", oldNode);
        // old output node index is kept
        newNode.pairs = oldNode.pairs;
        inputs.push(ni[j] = l);
      }
      property.nodeIndex = ni;
    }
    this.blocks.push(block);
  }
  for (i = inputs.length; i-- > 0;) {
    newNode = logics[inputs[i]] || OC();
    if (typeof newNode.pairs != "number")
      return console.error("Not Logic input node:", newNode);
    // restoring reference to new logic output node
    var outIdx = outputs[newNode.pairs];
    if (outIdx > 0) {
      // restoring the new logic output node
      var outNode = logics[outIdx];
      if (outNode && outNode.pairs instanceof Array) {
        newNode.pairs = outIdx;
        outNode.pairs.push(inputs[i]);
      }
      else
        console.error("Missing new logic output node at: " + outIdx);
    } else if (
      ship === select.parentShip &&
      (outNode = logics[newNode.pairs]) &&
      outNode.pairs instanceof Array
    ) {
      newNode.pairs = newNode.pairs;
      outNode.pairs.push(inputs[i]);
    } else
      newNode.pairs = -1;
  };
  Edit.eventFire(this);
};
Ship.prototype.mirror = (
  /**
   * @overload @returns {void}
   * @overload @param {number} x0 @param {number} x1 @param {number} y0
   * @param {number} y1 @param {number} z0 @param {number} z1
   * @returns {void} */
  function (x0, y0, z0, x1, y1, z1) {
    // what was selected and all 
    var x = x0, y = y0, z = z0, selected = [];
    if (typeof x == "number") {
      var all = this.blocks;
      x1 > x0 ? x0 = x1 : x = x1;
      y1 > y0 ? y0 = y1 : y = y1;
      z1 > z0 ? z0 = z1 : z = z1;
    } else
      selected = this.blocks.concat(all = []);
    Edit.eventFire(this);
  }
);
Ship.prototype.mirror2d = (
  /**
   * @overload @returns {void} @this {Ship}
   * @overload @param {number} x0 @param {number} x1 @param {number} y0
   * @param {number} y1 @param {number} z0 @param {number} z1
   * @returns {void} @this {Ship} */
  function (x0, y0, z0, x1, y1, z1) {
    /** @param {Block} block @param {XYZPosition} pos */
    function pushBlock(block, pos) {
      var r = block.rotation[2], id = Block.ID[block.internalName];
      var size = Block.Size.VALUE[id];
      if (r & 1) {
        pos[1] = size ?
          // (is tiny block ? 1 : 0) -...
          ((size.w | size.h) >> 4 & 1) - pos[1] :
          -pos[1];
        // ...&& (is tiny block) ?
        pos[2] += size && ((size.w | size.h) & 16) ?
          // (has size of tiny thruster ? leave it alone : [0, 1, 2, -1][r];
          (size.w & 16 ? 0 : (r + 1) % 4 - 1) :
          // move bigger blocks to keep position of their center
          r > 1 ? -(size.w -32 >> 4) : (size.w - 32 >> 4);
        // 180deg turn
        block.rotation[2] =
          /** @type {0|1|2|3} */
          (4 - r);
      } else
        pos[1] = size ?
          (r ?
            (size.w - 32 >> 4) + ((size.w | size.h) >> 3 & 2) :
            -(size.w - 32 >> 4)) - pos[1] :
          -pos[1];
      // Wedges and Smoooofth Coorners
      if (Block.isFlippable(id))
        block.rotation[1] = !block.rotation[1];
    }
    var x = x0, y = y0, z = z0;
    /** @type {XYZPosition} */
    var pos, all = this.blocks;
    if (typeof x == "number") {
      x1 > x0 ? x0 = x1 : x = x1;
      y1 > y0 ? y0 = y1 : y = y1;
      z1 > z0 ? z0 = z1 : z = z1;
      for (var i = 0; i < all.length; i++) {
        pos = all[i].position;
        // selection is inverted TROLOLOOLOOLLOOLOLOLOOLOLOLO LOLOLOLOLOLOLOL
        if (pos[0] < x || pos[0] > x0 || pos[1] < y || pos[1] > y0 ||
          pos[2] < z || pos[2] > z0)
          pushBlock(all[i], pos);
      }
    } else
      for (var i = 0; i < all.length; i++) {
        pos = all[i].position
        pushBlock(all[i], pos);
      }
    Edit.eventFire(this);
  }
);
/** @param {number} x @param {number} y @returns null if nothing found */
Ship.prototype.blockAtPonit2d = function (x, y) {
  for (var bs = ship.blocks, i = bs.length; i-- > 0;) {
    var block = bs[i], pos = block.position;
    // calculations from expensiveRenderer
    var size = Block.Size.VALUE[Block.ID[block.internalName]] ||
      {w: 1, h: 1};
    var w = size.w >>> 4, h = size.h >>> 4;
    var cx = -pos[1], cy = pos[2], rot = 10 - block.rotation[2] & 3;
    cy -= rot === (block.rotation[1] ? 1 : 3) ?
      (w - 2) :
      rot === 0 ? (h - 2) : 0;
    cx -= rot === (block.rotation[1] ? 0 : 2) ?
      (w - 2) :
      rot === 3 ? (h - 2) : 0;
    var cw = rot & 1 ? h : w, ch = rot & 1 ? w : h;
    // if (i === 8 && block.internalName === "Large Hydrogen Tank")
    //   debugger;
    if (-x < cx || y < cy || -x > cx + cw || y > cy + ch)
      continue;
    return new Block.Selected(block, i, cx, cy, cw, ch);
  }
  return null;
};
/** used to revert position adjustment from vehicles 'infected' by it:
 * https://github.com/KaaBEL/.d1r.dbv/commit/0b8156e155383059cf1aeeb4a997818
3c92b92f8#diff-fa9a713c17c685348118b8d29bd55f10491e651ccafaf45d1044ed01ffe6e
80bL1414 
 * @param {boolean} [fixSlab] if true it also fixes wrong Slab size */
Ship.prototype.fixPositionAdjustment = function (fixSlab) {
  var slabsFix = fixSlab ? Block.Size.VALUE[696] : null;
  console.log(this.name + ".PositionAdjustment(" + fixSlab + ")");
  if (this.getMode().mode !== "Ship")
    console.warn("Fixing ship in not default Ship.Mode!");
  for (var i = 0; i < this.blocks.length; i++) {
    var e = this.blocks[i], rot = e.rotation[2],
      size = Block.Size.VALUE[Block.ID[e.internalName]];
    if (size === slabsFix)
      continue;
    if (size && ((size.w | size.h) & 16)) {
      rot > 1 ? e.position[2] -= 1 : 0;
      (rot + 1 & 3) > 1 ? e.position[1] -= 1 : 0;
    }
  }
};
/** allows using position adjustment for certain operations such as,
 * DR base64 keys prototype @param {(ship:Ship)=>void} operation */
Ship.prototype.withPositionAdjustment = function (operation) {
  var l = 0, adjusted = [], adjustment = [], block = this.blocks[0];
  for (var i = 0, n = 0; i < this.blocks.length; i++) {
    var block = adjusted[l] = this.blocks[i],
      rot = block.rotation[2],
      size = Block.Size.VALUE[Block.ID[block.internalName]];
    if (size && ((size.w | size.h) & 16)) {
      (rot + 1 & 3) > 1 ? block.position[1] += n = 1 : n = 0;
      rot > 1 ? block.position[2] += (n |= 2) >>> 1 : 0;
      adjustment[l++] = n;
    }
  }
  operation(this);
  for (i = adjusted.length; i-- > 0;) {
    adjusted[i].position[1] -= adjustment[i] & 1;
    adjusted[i].position[2] -= adjustment[i] >>> 1;
  }
};
/**
 * @param {number} x @param {number} y @param {number} z
 * @param {ShipBlock} ref template Block for the new one */
Ship.prototype.placeBlock = function (x, y, z, ref) {
  // improved old_UI from editor.js
  var logics = this.prop && this.prop.nodeList || [];
  var block = new Block(
    ref.internalName, 
    [x, y, z],
    /** @type {Rotation} */
    (ref.rotation.slice()),
    Block.Properties.addProperty(ref.internalName, Logic.addLogic(
      ref.internalName,
      JSON.parse(JSON.stringify(ref.properties)),
      logics,
      this.blocks
    ))
  );
  if (logics.length)
    (this.prop || (this.prop = OC())).nodeList = logics;
  (block.properties.nodeIndex || []).forEach(function (e) {
    var node = logics[e];
    node ? node.owner = block : console.error("no node in temp code");
  });
  this.blocks.push(this.getMode().mode === "Logic" ?
    // block added to ship.blocks is LogicBlock for Logic editing mode
    // #MessingWithWorkingLogics
    new LogicBlock(block, -1, logics) :
    block);
  Edit.eventFire();
  return block;
};
/** @param {object} object */
Ship.fromObject = function fromObject(object) {
  var o = {
    name: object.name || object.n,
    ver: object.gameVersion || object.version || object.gv,
    time: object.dateTime || object.time || object.dt,
    blocks: object.blocks || object.b,
    props: object.properties || object.prop,
    add: object.ls || object.nc || object.ci ? {
      grid: object.ls,
      logic: object.nc,
      inputs: object.ci
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
  delete logics.nc;
  Logic.reassemble(blocks, logics);
  if (o.add) {
    (props = props || OC()).launchpadSize = o.add.grid;
    props.nodeConnections = o.add.logic;
    props.customInputs = o.add.inputs;
  }
  if (logics.length)
    (props = props || OC()).nodeList = logics;
  // reassamble different from Logic.reassemble
  Ship.CustomInput.reassemble(blocks, (props = props || OC()));
  return new Ship(name, ver, time, blocks, props);
};
/** @param {Ship} ship */
Ship.toDBV = function toDBV(ship) {
  if (ship.getMode().mode !== "Ship")
    console.warn("Converting Ship that isn't Ship.Mode \"Ship\".");
  var blocks = [];
  for (var i = 0, e = ship.blocks[0]; i < ship.blocks.length; i++) {
    e = ship.blocks[i];
    var rot = e.rotation[2], adjX = 0, adjY = 0;
    var size = Block.Size.VALUE[Block.ID[e.internalName]];
    /__placeholder\d+__/.test(e.internalName) || blocks.push({
      n: e.internalName,
      p: [Math.floor(e.position[1]) / 2 - adjX,
        Math.floor(e.position[2]) / 2 - adjY],
      r: Math.floor(e.rotation[2] * 90),
      f: e.rotation[1],
      s: e.properties.color,
      c: e.properties.customParameter || [],
      ni: e.properties.nodeIndex || [],
      wg: e.properties.weldGroup || 0
    });
  }
  var shipProp = ship.prop || OC(), connections = [], custominps = [];
  var logics = shipProp.nodeList instanceof Array ?
    shipProp.nodeList :
    [];
  for (i = logics.length; i-- > 0;) {
    /** @type {Logic<any>|{pairs:[]}} */
    var node = logics[i] || {pairs: []}, n = node.pairs;
    typeof n == "number" && logics[n] &&
      connections.push({
        // node index, input type
        Item1: i,
        // referenced node 
        Item2: node.pairs
      });
  }
  var inputs = shipProp.customInputs instanceof Array ?
    shipProp.customInputs :
    [];
  for (i = 0; i < inputs.length; i++) {
    /** @type {Ship.CustomInput|{type:number,name:string}} */
    var custom = inputs[i] || OC(), s = custom.name;
    n = custom.type;
    (n === 0 || n === 1 || n === -1) && typeof s == "string" &&
      custominps.push({n: s, t: n === -1 ? 0 : n});
  }
  return {
    n: ship.name,
    gv: ship.gameVersion.join("."),
    dt: ship.dateTime,
    ls: shipProp.launchpadSize || 0,
    b: blocks,
    nc: connections || shipProp.nodeConnections,
    ci: custominps || [],
    significantVersion: Ship.VERSION
  };
};
/** @param {string} key */
Ship.fromDBKey = function (key) {
  var blocks = [], arr = key.split("|").slice(-1)[0].split(":");
  var conN = {
    "T1 Block": "Block",
    "T1 Wedge": "Wedge",
    "T2 Wedge": "Wedge",
    "T1 Wedge 1x2": "Wedge 1x2",
    "Structure Block": "Struct",
    "Simple Thruster": "Small Hydrogen Thruster",
    "Ion Thruster": "Small Ion Thruster",
    "Momentum Wheel": "Reaction Wheel",
    "Small Fuel Tank": "Small Hydrogen Tank",
    "Medium Fuel Tank": "Medium Hydrogen Tank",
    // There seems to be older "T2 Battery" name version, T1 is a guess
    "T1 Battery": "Small Battery",
    "T2 Battery": "Small Battery",
    "Small Crate": "Small Storage Rack",
    "Medium Crate": "Medium Storage Rack",
    "T1 Drill": "Small Hydraulic Drill",
    "T1 Gatling Gun": "Rotary Cannon",
    "T1 Blaster": "Plasma Cannon",
    "T1 Pulse Laser": "Pulse Laser",
    "T2 Block": "Armor Block",
    "T1 Solar Panel": "Small Solar Panel",
    "T2 Solar Panel": "Small Solar Panel",
    Seperator: "Separator",
    Connector: "Dock",
    Explosive: "__placeholder776__",
    "Station Block": "__placeholder846__"
  }, conC = [
    "White",
    "Dark Gray",
    "Light Blue",
    "Orange",
    "Red",
    "Lime",
    "Yellow",
    "Festive Red",
    "Light Gray",
    // Lololipop replacement
    "Red Hazard Stripes",
    "Yellow Hazard Stripes",
    "Fuel",
    "Wine",
    "Wood",
    // Steel replacement
    "White Hazard Stripes",
    "Purple",
    "Pink",
    "Festive Green",
    "Festive Duck"
  ];
  for (var i = arr.length - 1, logics = []; i-- > 0;) {
    var o = arr[i].split(";"), name = conN[o[0]] || o[0];
    // o[1] position, used below to replace contents of array o
    var rot = +(o[2] + "").replace(",", ".") / 90 || 0 & 3;
    // o[4] controll groups not used
    var ctrl = [+o[3] || 0],
      color = +o[5] === +o[5] ?
        conC[+o[5]] :
        Color.default(name) || "White",
    // o[6] [Use rotation, Up, Down, Left, Right]
      flip = !!+o[7];
    o = (o[1] || "").split("~");
    var x = +(o[0] || "").replace(",", ".") * 2 || 0,
      y = +(o[1] || "").replace(",", ".") * 2 || 0;
    blocks[i] = new Block(name, [0, x, y], [
        0,
        flip,
        /** @type {0|1|2|3} */
        (rot & 3)
      ], Logic.addLogic(name, {
          customParameter: [ctrl],
          color: color
        }, logics, blocks));
  }
  var obj = {nodeList: logics};
  return new Ship("[unnamed]", [], dateTime(1714557750), blocks, obj);
};
/** instance is sealed @param {string} name @param {number} type */
Ship.CustomInput = function CustomInput(name, type) {
  this.name = name;
  /** type: -1 = unknown, 0 = Button, 1 = Switch. */
  this.type = type;
  Object.seal(this);
};
Ship.CustomInput.prototype.toString = function () {
  return this.name;
};
/** @param {Block[]} blocks @param {safe} prop ShipProperties */
Ship.CustomInput.reassemble = function (blocks, prop) {
  // This Ship.CustomInput.reassemble code feels so ...loading
  /** @type {safe} custom input from savefile */
  var old, inputsOld = prop.customInputs instanceof Array ?
    prop.customInputs :
    [];
  /** @type {Ship.CustomInput[]} */
  var inputs = [], used = Block.Properties.getInputOptions(prop);
  for (var i = used.length, j = i; i-- > 0;)
    inputs[i] = new Ship.CustomInput(used[i], 0);
  for (j += i = inputsOld.length; i-- > 0;)
    if ((old = inputsOld[i]) instanceof Object) {
      inputs[--j] = new Ship.CustomInput("" + (old.n || old.name),
        typeof old.t == "number" ? old.t : +(old.type || 0));
      used[j] = inputs[j].name;
    } else
      console.warn("CustomInput check- not passed.");
  /** @param {unknown} customParam */
  function checkControlBlock(customParam) {
    if (!(customParam instanceof Array))
      return console.warn("ControlBlock check0 not passed.");
    var name = customParam[0];
    if (typeof name != "string")
      return console.warn("ControlBlock check1 not passed.");
// defs used to check for cunstomInputs not
// found in ship.prop.customInputs
    used.indexOf(name) === -1 &&
      inputs.push(new Ship.CustomInput(name, -1)) &&
      // if found then remeber to not include dplicates
      used.push(name);
  }
  for (var i = blocks.length; i-- > 0;)
    if (blocks[i].internalName === "Control Block")
      checkControlBlock(blocks[i].properties.customParameter);
  prop.customInputs = inputs.slice(j);
};
/** instance is frost, (experimental class is frost)
 * (keeping reference to mode object also keeps its old ship object)
 * @typedef Ship.Mode @property {EditMode} mode @property {()=>Ship} getShip
 * @param {EditMode} mode @param {Ship|(()=>Ship)} ship */
Ship.Mode = function (mode, ship) {
  this.mode = mode;
  this.getShip = ship instanceof Ship ? __private(ship) : ship;
  Object.freeze(this);
};
// when encoding ship, it might need to be in "Ship" mode
/** @constant @type {Ship.Mode} */
Ship.Mode.NONE = new Ship.Mode("Ship", new Ship("", [], "", []));
/** adds a layer for the parser to pass stored global ship in mode
 * to pars functione, next parser calls only return the parse function
 * result and not do parsing again (in case it just modifies global
 * ship /the usual case which recycles global @see {ship} object)
 * @param {EditMode} mode
 * @param {Ship} globalShip @param {(ship:Ship)=>Ship} parse */
Ship.Mode.useParser = function (mode, globalShip, parse) {
  var isParsed = !1;
  return new Ship.Mode(mode, function () {
    if (isParsed)
      return globalShip;
    globalShip = parse(globalShip)
    isParsed = !0;
    return globalShip;
  });
};
Object.freeze(Ship.Mode);

// generating Droneboi
/** global ship that's being rendered and editng */
var ship = Ship.fromObject({name: "Starter Droneboi", ci: []});
// var block = new Block("Block", [0, 0, 0], [0, !0, 0]),
//   ship = new Ship("None", [0, 9], "never", [block]);

// huh? A concept for undo redo history implementation
function Edit() {
  this.history = [];
  this.edited = new Ship("", [], "", []);
}
/** @type {(((ship?:Ship)=>void)&{id?:string}|undefined)[]} */
Edit.listeners = [];
Edit.rotate =
/** @TODO Fix rotating tiny blocks */
  /** rotates Dr ships as well as db vehicles
   * @overload @param {BlockSelection} selection
   * @param {number} rx
   * @overload @param {BlockSelection} selection
   * @param {number} rx @param {number} ry @param {number} rz */
  function (selection, rx, ry, rz) {
    if (typeof ry != "number") {
      var applyRotation = function (rot) {
        rot[2] =
          /** @type {0|1|2|3} */
          (rot[2] + rx & 3);
      };
      ry = rz = 0;
    } else
      applyRotation = function (rot) {
        Block.rotate(rot, rx, ry, rz);
      };
    rx >= 0 && rx < 4 ? rx |= 0 : rx = Math.round(rx / 90) % 4 + 4 & 3;
    ry >= 0 && ry < 4 ? ry |= 0 : ry = Math.round(ry / 90) % 4 + 4 & 3;
    rz >= 0 && rz < 4 ? rz |= 0 : rz = Math.round(rz / 90) % 4 + 4 & 3;
    var i = 0, n = 0, edtA = [0, 1, 2], newA = [0];
    function prcsAxis(ax) {
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
      selection[i++].position =
        /** @type {XYZPosition} */
        (newA);
    }
    Edit.eventFire(selection.parentShip);
  };
/**
 * @param {BlockSelection} selection
 * @param {number} x @param {number} y @param {number} z */
Edit.move = function (selection, x, y, z) {
  for (var i = selection.length; i-- > 0;) {
    var pos = selection[i].position;
    pos[0] += x;
    pos[1] += y;
    pos[2] += z;
  }
  Edit.eventFire(selection.parentShip);
};
/** @type {(ship?:Ship)=>void} */
Edit.eventFire = function (ship) {
  for (var i = this.listeners.length; i-- > 0;)
    (this.listeners[i] || F)(ship);
};

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

// the initial source used can be found here:
// https://github.com/KaaBEL/Deltarealm-b64-keys/blob/main/index.html#LC827
/** @param {[number,number,number]} r @returns {Rotation} */
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
var i, j, buffer = new Uint8Array(0);
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

/** @param {Ship} ship base64 key prototype */
function encodeCmprsShip(ship) {
  // version 0.0.significantVersion
  // versions 16 and further will significantVersion of Db Vehicle editor
  if (ship.getMode().mode !== "Ship")
    console.warn("Converting Ship that isn't Ship.Mode \"Ship\".");
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
  wVersion([0, 0, Ship.VERSION]);
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
  // How did it with new Uint8Array(), zero length Uint8Array?
  for (j = l = 0; l < buffer.length; kB[j++] = new Uint8Array(1040)) {
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
  if (arr.length > 2 && arr[2] > 15)
    ship.significantVersion = arr[2];
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
    for (s = ""; i < buffer.length;)
      s += String.fromCharCode(buffer[i++]);
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
      // (v.0.1.55) compatibility with old keys for control property
      if ("control" in obj && !("customParameter" in obj))
        obj.customParameter = obj.control;
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
