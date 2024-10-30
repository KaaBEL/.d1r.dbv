/// <reference path="Data.ts" />

/** @DOTO eliminate all @ts-ignore */
type ShipBlock = Block | LogicBlock;

const enum LogicNode {
  InpBool = 0,
  InpNum,
  OutBool,
  OutNum
}
type InputLogicNode = LogicNode.InpBool | LogicNode.InpNum;
type OutoutLogicNode = LogicNode.OutBool | LogicNode.OutNum;

type LogicNodeList = (Logic<any> | undefined)[];

type LExec = (
  arg: Logic<LogicNode>[],
  block: LogicBlock,
  ship: Ship
) => void;
type LogicDef = {k: LogicNode, x: number, y: number}[];

class Logic<T extends LogicNode> {
  static VER = "v.0.1.64T11";

  /** 0|1 = input, has only index reference to source, 2|3 = output */
  type: T;
  x: number;
  y: number;
  /** reference(s) to connected, -1 or [] means disconcted */
  pairs: T extends InputLogicNode ?
    number : number[];
  owner: ShipBlock | null = null;
  /** each output node has value, for input nodes it's undefined */
  value: T extends LogicNode.OutBool ?
    boolean : T extends LogicNode.OutNum ?
      number : undefined;

  /** for logigs documentation/data @see {Logic.VALUE} */
  constructor(type: T, x: number, y: number) {
    this.type = type;
    this.x = x;
    this.y = y;
    this.pairs = (type > 1 ? [] : -1) as typeof this.pairs;
    this.owner = null;
    this.value = (type & 1 ? 0 : false) as T extends LogicNode.OutBool ?
      boolean : T extends LogicNode.OutNum ?
        number : undefined;
    Object.seal(this);
  }

  // Logic static properties
  static dashOff = 0;
  /** specifies when logic nodes and connections should be rendered */
  static rend = !1;
  /** global (logics) nodeList */
  //@ts-ignore
  static nodes = [UDF] as LogicNodeList & {ownerShip: Ship};

  static generateLogic(...args: (LogicDef | string | number | LExec)[]) {
    var o: {
        [key: number]: Logic<any>[] & {
          exec: LExec | LExec & safe
        } | undefined
      } = {},
      defs: LogicDef[] = [],
      func: LExec = function (arg, block) {},
      /** @constant */
      AT = " at Logic.generateLogic.";
    function setLogic(arg: LogicDef | string) {
      if (typeof arg == "function")
        return void (func = arg);
      if (typeof arg == "undefined")
        return console.warn("Found \"undefined\" type" + AT);
      var nodesDef = typeof arg == "string" ?
        defs[Number(arg)] :
        defs[defs.length] = arg,
        nodes = [] as any[];
      (o[l++] = nodes = nodes as Logic<any>[] & {
        exec: LExec | LExec & safe
      }).exec = func;
      for (var i = 0; i < nodesDef.length;) {
        var def = nodesDef[i++];
        nodes.push(Object.freeze(
          new Logic(def.k, def.x / 2, def.y / -2)
        ));
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
  /** 738, 739, 740, 741, 742, 743, 744, 745 Thrusters */
  static execThruster: LExec = function (arg, block) {
    console.log("execThruster",
      block.getPhysics().reporter = arg[0].value ? "ON" : "OFF");
  };
  /** 770: Drill, 771: Cannon, 772: Rotary Cannon, 773: Plasma Cannon
   * 774: Pulse Laser, 775: Beam Laser, 791, ... */
  static execToolBlock: LExec = function (arg, block) {
    block.getPhysics().reporter = arg[0].value ? "ON" : "OFF";
  };
  /** 790: Hinge, 792: Piston */
  static execPistonHinge: LExec = function (arg, block) {
    block.getPhysics().reporter = "" + arg[0].value;
  };
  /** 802: Constant On Signal */
  static execConstantTrue: LExec = function (arg, block) {
    console.log("execConstantTrue", arg[0].value = true);
    block.getPhysics().reporter = "" + arg[0].value;
  };
  /** 803: Control Block */
  static execControlBlock: LExec = function (arg, block) {
    var custom = block.properties.customParameter || [];
    console.log("execControlBlock", arg[0].value =
      //@ts-ignore
      ship.getPhysics().selectedInputs.indexOf("" + custom[0]) !== -1);
    block.getPhysics().reporter = "" + arg[0].value;
  };
  /** 804: AND Gate */
  static execANDGate: LExec = function (arg, block) {
    console.log("execANDGate",
      arg[2].value = arg[0].value && arg[1].value);
    block.getPhysics().reporter = "" + arg[2].value;
  };
  /** 805: NAND Gate */
  static execNANDGate: LExec = function (arg, block) {
    console.log("execNANDGate",
      arg[2].value = !(arg[0].value && arg[1].value));
    block.getPhysics().reporter = "" + arg[2].value;
  };
  /** 806: OR Gate */
  static execORGate: LExec = function (arg, block) {
    console.log("execORGate",
      arg[2].value = arg[0].value || arg[1].value);
    block.getPhysics().reporter = "" + arg[2].value;
  };
  /** 807: NOR Gate */
  static execNORGate: LExec = function (arg, block) {
    console.log("execNORGate",
      arg[2].value = !(arg[0].value || arg[1].value));
    block.getPhysics().reporter = "" + arg[2].value;
  };
  /** 808: XOR Gate */
  static execXORGate: LExec = function (arg, block) {
    console.log("execXORGate",
      arg[2].value = arg[0].value !== arg[1].value);
    block.getPhysics().reporter = "" + arg[2].value;
  };
  /** 809: XNOR Gate */
  static execXNORGate: LExec = function (arg, block) {
    console.log("execXNORGate",
      arg[2].value = arg[0].value === arg[1].value);
    block.getPhysics().reporter = "" + arg[2].value;
  };
  /** 810: NOT Gate */
  static execNOTGate: LExec = function (arg, block) {
    console.log("execNOTGate",
      arg[1].value = !arg[0].value);
    block.getPhysics().reporter = "" + arg[1].value;
  };
  /** 813: Constant Number */
  static execConstantNumber: LExec = function (arg, block) {
    var custom = block.properties.customParameter || [];
    // console.log("execConstantNumber", arg[0].value = +custom[0]);
    block.getPhysics().reporter = "" + arg[0].value;
  };
  /** Unimplemented LogicBlock execution */
  static execUnimplemented: LExec = function (arg, block) {
    block.getPhysics().reporter = "X";
  };
  /** 818: Numerical Inverter */
  static execNumericalInverter: LExec = function (arg, block) {
    // console.log("execNumericalInverter", arg[1].value = -arg[0].value);
    block.getPhysics().reporter = "" + arg[1].value;
  };
  /** 819: Clamp */
  static execClamp: LExec = function (arg, block) {
    var val = Number(arg[0].value),
      custom = block.properties.customParameter || [];
    console.log("execClamp", arg[1].value = val < +custom[0] ?
      +custom[0] :
      val > +custom[1] ?
        +custom[1] :
        val);
    block.getPhysics().reporter = "" + arg[1].value;
  };
  /** 820: Abs */
  static execAbs: LExec = function (arg, block) {
    console.log("execAbs", arg[1].value = Math.abs(Number(arg[0].value)));
    block.getPhysics().reporter = "" + arg[1].value;
  };
  /** 821: ThresholdGate */
  static execThresholdGate: LExec = function (arg, block) {
    var val = Number(arg[0].value),
      custom = block.properties.customParameter || [];
    console.log("execThresholdGate", arg[1].value = val < +custom[0] ?
      +custom[0] :
      val > +custom[1] ?
        +custom[1] :
        val);
    block.getPhysics().reporter = "" + arg[1].value;
  };
  /** 822: Numerical Switchbox */
  static execNumericalSwitchbox: LExec = function (arg, block) {
    arg[3].value = arg[0].value ?
      Number(arg[2].value) :
      Number(arg[1].value);
    console.log("execNumericalSwitchbox", arg[3].value);
    block.getPhysics().reporter = "" + arg[3].value;
  };
  /** 823: FUNCTION BLOCK */
  static execFunctionExpensive: LExec = function (arg, block) {
    console.error("Screw you NCalcJS (for now)!");
  };
  /** 824: Memory Register */
  static execMemoryRegister: LExec = function (arg, block) {
    arg[3].value = arg[1].value ?
      0 :
      arg[0].value ?
        arg[2].value :
        arg[3].value;
    console.log("execMemoryRegister", arg[3].value);
    block.getPhysics().reporter = "" + arg[3].value;
  };
  /** 825: Gauge, 826: Dial, 827: Digital Display */
  static execDisplays: LExec = function (arg, block) {
    block.getPhysics().reporter = "" + arg[0].value;
  };
    /** 828: Push To Toggle */
  static execPushToToggle: LExec & {
    toggled?: boolean
  } = function (arg, block) {
    if (arg[0].value !== Logic.execPushToToggle.toggled)
      arg[1].value = !arg[1].value;
    block.getPhysics().reporter = "" + arg[1].value;
  };


/** @TODO later improve logic comments briefness+clarity (in progress) */
/** Older instances of Logics comments/documenting for comparsion:
 * v.0.1.20.3 @see https://github.com/KaaBEL/.d1r.dbv/blob/1ed349b2230ddd8f3b64a6cd082d10fe7eeaeedc/assets/code.js
 * v.0.1.22 @see https://github.com/KaaBEL/.d1r.dbv/blob/1392589299b68fb61c1a87bc7e4616f6d20af75d/assets/code.js */
/** entire oject is frost */
  static VALUE = Object.freeze(Logic.generateLogic(
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
  ));

  // (v.0.1.20.2) I might've accidently screw this method up so much
  // this method is supposed to be the initialize default, not
  // Logic(property).fromObject at the same time... BRUH
  // (v.0.1.42) IDEA for logics system to just use references to block
  // and optionally specify nth node, each block then must know its index
  /** @TODO Logics rework update ^ */
  /**
   * addDefault but for Logic - if property contains nodeIndex data it
   * will use them to reassemble these connections, to reassamble them
   * properly Logic.reassemble must be used on completed blocks
   */
  static addLogic(
    /**
     * @param {string|number} name internalName of Block
     */
    name: string | number,
    /**
     * @param {any} property properties of Block
     */
    property: safe,
    /**
     * @param {Logic<any>|undefined)[]} logics
     * it is the global Logic.nodes or ship.prop.nodeList
     */
    logics: (Logic<any>|undefined)[],
    /**
     * @param {Block[]} blocks
     */
    blocks: Block[]
  ) {
    /**
     * (new) DBV property nodeIndex(es) contains (not yet) references to
     * logic node indexes of logics (fresh nodeList)
     */
    var ni: number[] = [],
      logicDef = Logic.VALUE[typeof name == "number" ?
        name :
        //@ts-ignore
        Block.ID[name]
      ],
      nodeIndex: (number|undefined)[] =
        property.nodeIndex instanceof Array ?
          property.nodeIndex :
          property.nodeIndex = [];
    if (!logicDef)
      return property;
    for (var i = logicDef.length, l = 1; i-- > 0; ni[i] = index) {
      // prepare not taken index
      while (logics[l])
        l++;
      var n = 0, node = new Logic(logicDef[i].type, 0, 0);
      // this works with the old savefiles logic, new is converted to it
      // BE AWARE nodeIndex is nor DBV property here, it's old format
      // connections references like extracted from control property
      var index: number = nodeIndex[i] || -1, item = logics[index];
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
  static reassemble(blocks: Block[], logics: (Logic<any>|undefined)[]) {
    if (!logics || !logics.length)
      return blocks;
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
  /** removes all nodes of inputed block and removes their connections */
  static removeLogic(block: Block, logics: (Logic<any>|undefined)[]) {
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

  /** is directly related with Logic.execs */
  static expensiveExec(ship: Ship) {
    var nodeList = ship.prop && ship.prop.nodeList || [];
    for (var i = 0, blocks = ship.blocks; i < blocks.length; i++) {
      //@ts-ignore
      var o = blocks[i], logic = Logic.VALUE[Block.ID[o.internalName]];
      if (!logic)
        continue;
      /** @type {} */
      //@ts-ignore
      var arg: Logic<Node.Id|3>[] = [],
        //@ts-ignore
        block = o instanceof LogicBlock && o ||
        // #MessingWithWorkingLogics
          //@ts-ignore
          (blocks[i] = o = new LogicBlock(o, i, nodeList));
      // Get corresponding inputs/outputs for the operation
      for (var j = logic.length; j-- > 0;) {
        var node = nodeList[block.properties.nodeIndex[j]];
        if (!node)
          console.error("Index: " + j + " is missing from nodeList.");
        else if (node.owner !== o)
        //@ts-ignore
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
  // /** more confusation added to the Logic mess, OH YEAHH!!! */
  // static checkNodeOwners(logics: (Logic<any>|undefined)[], ship: Ship,
  //   i: number, oldOwner: Block|LogicBlock) {
  //   if (ship.prop && ship.prop.nodeList !== logics)
  //     return console.error("Inputted incompatible nedoList (logics).");
  //   var node = logics[i];
  //   if (!node)
  //     return console.error();
  //   if (node.owner !== oldOwner)
  //     "unfinished, unused";
  // };

  static {
    Logic.execPushToToggle.toggled = false;
  }
}
