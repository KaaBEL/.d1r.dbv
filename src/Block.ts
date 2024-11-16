/// <reference path="Physics.ts" />

const enum Rot {
  Up,
  Left,
  Down,
  Right
}
const enum Face {
  /** Face on right when looking at front (-x in Unity) */
  X,
  /** Face on top (+y in Unity) */
  Y,
  /** Face in front (+z in Unity) */
  Z
}
type Flipped = boolean;

// "p" as for position in x, y coordinates from .DBV file
/** db 2d p: [number, number] => [-: 0, x: p[0] * 2, y: p[1] * 2] */
type XYZPosition = [number, number, number];
// "r" as for rotation and "f" for flipped from .DBV file
/** db 2d r number, f: boolean => [-: 0, f: f, r: Math.floor(r / 90)] */
type Rotation = [Face, Flipped, Rot];
/** defines equivalents of ussual properties in DBV file */
type BlockProps = {
  customParameter?: (number | string | [number, number, number, number])[],
  nodeIndex?: number[],
  weldGroup?: number
};

class Block {
  static VER = "v.0.1.64T11";

  /**
   * letter case of block names doesn't matter when loaded by game,
   * bot Block name definitions requires strict letter cases here
   */
  internalName: string;
  /** [not-used, x, y] */
  position: XYZPosition;
  /** [not-used, flipped, cunterclockwise] */
  rotation: Rotation;
  /** */
  properties: {
    [key:string]: unknown,
    color: Colors
  } & BlockProps;
  /** */
  getPhysics = Physics.INIT;

  constructor (
    name: string,
    pos: XYZPosition,
    rot: Rotation,
    prop: {[key: string]: unknown} | 0 = {color: ""},
    color: Colors = ""
  ) {
    this.internalName = name;
    /** [not-used, x, y] */
    this.position = pos;
    /** [not-used, flipped, cunterclockwise] */
    this.rotation = rot;
    prop = prop || {};
    prop.color = color !== UDF ?
      prop.color = color :
      prop.color === null || prop.color ? prop.color : "";
    this.properties = prop as {
      [key: string]: unknown,
      color: Colors
    } & BlockProps;
    this.getPhysics = Physics.INIT;
    Object.seal(this);
  }
  // NOTE that blocks definitions will be version dependant over time
  // (allows cross version editing) there is just no need to implement it yet
  /** object is frost */
  static NAME = Object.freeze(Data.generateNames("blocks"));
  /** object is frost */
  static ID = Object.freeze(Data.generateIDs("blocks"));
  /** object is frost */
  static TITLE = Object.freeze(Data.titles);
  /** (Mass) */
  // Inversed Dock? 799: 1,
  static WEIGHT: {
    [key: number]: number | undefined
  } = Data.generateValues("weight");
  /** (Integrity) */
  static STRENGTH: {
    [key: number]: number | undefined
  } = Data.generateValues("strength");
  /**
   * number = Electricity Units per second
   * and in case of thruster when they are set to 1 000 000 (1M) force,
   * [number,number] = [Electricity Units, amout of seconds per use]
   * second (Electricity)
   */
  static ENERGY_USE: {
    [key: number]: number | [number, number] | undefined
  } = Data.generateValues("energy_use");
  /** number = contained units (Electricity) */
  static ENERGY_STORE: {
    [key: number]: number | undefined
  } = Data.generateValues("energy_store");
  /**
   * number = Liters of Fuel per second
   * and in case of thruster when they are set to 1 000 000 (1M) force,
   * [number,number] = [Liters of fuel, amout of seconds per use] (Fuel)
   */
  static FUEL_USE: {
    [key: number]: number | [number, number] | undefined
  } = Data.generateValues("fuel_use");
  /** number = contained liters (Fuel) */
  // 754: was 20 before fuel buff
  // 755: was 100 before fuel buff
  // 375: was 250 before fuel buff
  static FUEL_STORE: {
    [key: number]: number | undefined
  } = Data.generateValues("fuel_store");
  /**
   * number = items per second,
   * [number,number] = [Items, amout of seconds per use] (Cargo)
   */
  static CARGO_USE: {
    [key: number]: number | [number, number] | undefined
  } = Data.generateValues("cargo_use");
  /** number = items capacity (Cargo) */
  static CARGO_STORE: {
    [key: number]: number | undefined
  } = Data.generateValues("cargo_store");
  /**
   * positive = buy price of block, -1 = block isn't purchasable
   * (MarketValue)
   */
  static COST: {
    [key: number]: number | undefined;
  } = Data.generateValues("cost");

  /** @TODO handling ls (DBV property?) */
  /** */
  static arrayFromObjects(
    blocks: safe[] | safe,
    logics$?: Logic<any>[] & {nc?: any}
  ) {
    var warn = 3, bs = blocks instanceof Array ? blocks : [blocks];
    /**
     * nodeIndex (DBV "ni") property of a block is number[] type:
     * = it contains inputs and outputs indexes
     * = their connections are specified in "nc" DBV savefile property
     * = each index specifies whether it's input/output, bool/numerical,
     *   where is display position of node at that index, it is
     *   different for each block type,
     *   all are defined in @see {Logic.VALUE}
@see https://github.com/KaaBEL/.d1r.dbv/blob/1392589299b6/assets/code.js#L112
     * 1392589299b68fb61c1a87bc7e4616f6d20af75d */
    /**
     * in DBV format inputs and output indexes reference indexes of
     * connections (new DBV "nc") property
     */
    // TODO: change this variable logics to unpack the connections
    var logics = logics$ || [],
      /**
       * maps connections to key:input, value:output map -
       * to be used in @see {extractConnections}
       */
      ncProperty = function () {
        /** [key:input]:output */
        var map: {[key: number]: number | undefined} = {},
          connections = logics.nc;
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
    function extractLogic(customParameter: any) {
      var j = 0, props = Block.Properties.VALUE[Block.ID[name]] || [];
      for (var i = props.length; i-- > 0; j += p instanceof Array ?
          p.length :
          1)
        var p = props[i].item.default;
      return customParameter instanceof Array && customParameter.slice(j);
    }
    function extractConnections(indexes: number[]) {
      var logic = Logic.VALUE[Block.ID[name]] || [];
      for (var i = logic.length; i-- > 0;)
        // if node at index is input replace it with reference to output
        if (typeof logic[i].pairs == "number")
          //@ts-ignore
          indexes[i] = ncProperty[indexes[i]];
      return indexes;
    }
    var logicBlockPositions: XYZPosition[] = [],
      propertyNames = new RegExp("^(internalName|name|n|position|pos|p|rotat\
ion|rot|r|properties|prop|f|flipped|wg|weld|color|s|c|ni|invalidName|getPhys\
ics|logicPosition|logicBlockIndex)$");
    for (var i = 0, all: Block[] = []; i < bs.length; i++) {
      var block = bs[i], o = {
        name: block.internalName || block.name || block.n,
        pos: block.position || block.pos || block.p,
        rot: block.rotation || block.rot || block.r || 0,
        prop: (block.properties || block.prop || {color: ""}) as safe,
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
        rot: Rotation = o.rot instanceof Array && o.rot.length === 3 ?
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
        Logic.addLogic(name, o.prop, logics, all);
      }
      if (Block.ID[name] > 689 && Block.ID[name] < 947)
        o.prop.weldGroup = o.weld || 0;
      all[i] = new Block(name, [pos[0], pos[1], pos[2]], rot, o.prop);
      if (o.lpos && o.lpos instanceof Array)
        logicBlockPositions[i] =
          [+o.lpos[0] || 0, +o.lpos[1] || 0, +o.lpos[2] || 0];
    }
    // optionally correct loading if logic nodes will require
    // to finish references after all blocks are loaded
    Logic.reassemble(all, logics);
    var r: ShipBlock[] = all;
    // also may reassign
    logicBlockPositions.forEach(function (e, i) {
      (r[i] = new LogicBlock(all[i], i, logics)).logicPosition = e;
    });
    return r;
  };
  static generateArray(n: number, logics?: Logic<any>[]) {
    if (n !== -69)
      throw new Error("Not implemented. (only arg0: n = -69 works)");
    var i = 12, idx = 0, SH = "Small Hydrogen ";
    var blocks: Block[] = [];
    function updt(j: number) {
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
  /** for DBV blocks */
  static isFlippable(id: number) {
    return id < 697 ? id > 691 && id < 695 : id < 700 || id === 703;
  };
  // not tested or debugged at all
  /**
   * manipulates inputed Rotation array, do not use returned if possible
   */
  static rotate(rot: Rotation, x: number, y: number, z: number) {
    /** face of axis x, y, z */
    var face: Face = rot[0],
      /** other side/face on the opposite side */
      side: Flipped = rot[1],
      /** rotation of specified face (counterclockwise) */
      turn: Rot = rot[2];
    /** axis rotations are later applied with the same methd */
    var axiss = [x, y, z].map(function (e) {
      if (e >= 0 && e < 4)
        return e | 0;
      return Math.round(e / 90) % 4 + 4 & 3;
    });
    /** black magic going on in here */
    for (var axisIndex: Face = 0; axisIndex < 3; axisIndex++) {
      var steps = axiss[axisIndex];
      if (axisIndex === 1) {
        turn =
          /** @type {0|1|2|3} */
          (turn + steps & 3);
        continue;
      }
      var n = (((turn << 1) ^ axisIndex ^ 2) & 2) as Face.X | Face.Z;
      if (steps & 1)
        face = n === face ? 1 : n;
      side = (side ?
        (turn >> 1) | 2 :
        (3 - axisIndex + turn & 3) >> 1) + steps > 1;
      if (axisIndex === ((face & 1) << 1)) {
        turn = (turn + n & 3) as Rot;
      } else if ('I have no idea')
        throw new Error("Not implemented.")
    }
    return [rot[0] = face, rot[1] = side, rot[2] = turn];
  };

  static PROP: typeof this.Properties.VALUE;

  static collisions(ofBlock: ShipBlock, within: ShipBlock[]) {
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
    function transformPath(block: ShipBlock, path: Block.Box2d[]) {
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
    var colliding: ShipBlock[] = [], ofRange = temporary.range;
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

  static {
    Object.freeze(Block);
  }
}

namespace Block {
  /** instance is frost */
  type PreciseDef = [number, number, number,number,number];
  type SizeDef = [number | string] | [number | string, number, number];
  type SizesArg = (SizeDef | PreciseDef) | (SizeDef | PreciseDef)[];

  export class Size {
    x: number;
    y: number;
    w: number;
    h: number;

    constructor(x: number, y: number, w: number, h: number) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      Object.freeze(this);
    };

    static width = 4;
    static height = 48;

    static genterateSizes(...arg: SizesArg[]): {[key: number]: Size} {
      var l = 690,
        r: {[key: number]: Size} = {},
        a: {
          [key: number]: SizeDef | SizeDef[],
          length: number
        } = arguments;
      // by replacing nw = 0 with nw = [] it will log sizes and do 'reflow'
      for (var i = 0, j = 0, nw = 0; l < Block.NAME.length; l++)
        if (Block.NAME[l]) {
          //@ts-ignore
          var v: [number] | [number, number, number] | PreciseDef = a[i];
          //@ts-ignore
          v instanceof Array && v[j] instanceof Array ?
            //@ts-ignore
            v = v[j++] :
            j = 3;
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
    }
    // (TODO:) blocks were still not tested properly all at once, one more
    // undetected bug with block or texture and adding unit test for it
    static VALUE = Size.genterateSizes([[128], [52], [53]],
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
  }

  /** instance is frost */
  export class Mirror<T extends "BLOCK"|"PYRAMID"|"WEDGE"> {
    type: T;
    dictionary: T extends "BLOCK" ? undefined : Rotation[];
    constructor(type: T) {
      this.type = type;
      this.dictionary = (
        Block.Mirror[type] ||
        console.warn("Dictionary for \"BLOCK\" type is undefined!")
      ) as T extends "BLOCK" ? undefined : Rotation[];
      Object.freeze(this);
    };
    static generateRotations(dat: string, AT: string) {
    var array = JSON.parse("[" + dat + "]"), mirrors: Rotation[] = [];
    AT = ". At " + AT + " Mirror definitions.";
    if (array instanceof Array)
      for (var i = 24; i-- > 0;)
        if (i in array) {
          var num = array[i];
          mirrors[i] = [num >> 3, (num & 4) > 0, num & 3] as Rotation;
        } else
          throw new Error("Mirrors data is missing index: " + i + AT);
    else
      throw new Error("Mirrors data is not instanceof Array" + AT);
    return mirrors;
    };
    static BLOCK = null;
    static PYRAMID = Mirror.generateRotations("8,11,10,9,12,15,14,13\
,0,3,2,1,4,7,6,5,17,16,19,18,23,22,21,20", "PYRAMID");
    static WEDGE = Mirror.generateRotations("6,5,4,7,2,1,0,3,8,11,10\
,9,12,15,14,13,16,19,18,17,20,23,22,21", "WEDGE");
    static VALUE: {
      [key: number]: Mirror<"PYRAMID" | "WEDGE"> | undefined
    } = {
      1: new Mirror("WEDGE"),
      2: new Mirror("WEDGE"),
      3: new Mirror("PYRAMID"),
      4: new Mirror("PYRAMID"),
      5: new Mirror("PYRAMID"),
      6: new Mirror("PYRAMID"),
      8: new Mirror("PYRAMID"),
      9: new Mirror("PYRAMID"),
      10: new Mirror("WEDGE"),
      11: new Mirror("WEDGE"),
    };
  }

  // TODO: To be considered for resystemizing
  interface Slider {
    min: number;
    max: number;
    default: number[];
  }
  interface IntegerSlider {
    min: number;
    max: number;
    default: number[];
  }
  interface Dropdown {
    options: string[];
    default: number[];
  }
  interface NumberInputs {
    default: number[];
  }
  interface TextInputs {
    default: string[];
  }
  interface WeldGroups {
    idx: number;
    default: number[] | number[][];
  }
  export interface ItemTs {
    "Slider": Slider;
    "Integer Slider": IntegerSlider;
    "Dropdown": Dropdown;
    "Number Inputs": NumberInputs;
    "Text Inputs": TextInputs;
    "WeldGroups": WeldGroups;
  }
  /** Arguments typedefs for Properties Items generator */
  type PropsArg = [0, string, number, number, number] |
    [1, string, number, number, number] |
    [2, string, string[], number] |
    [3, string, number[]] | [4, string, string[]] |
    [5, number| number[]];
  type Props = Properties<keyof ItemTs>;
  type PropertiesGen = <T extends PropsArg[]>(argArr: T) => Props[];

  export class Properties<T extends keyof ItemTs> {
    type: T;
    name: string;
    item: ItemTs[T];

    constructor(type: T, name: string) {
      this.type = type;
      this.name = name;
      //@ts-ignore
      this.item = new Block.Properties.Items[type]();
    }

    // changed the integer slider from not having enterable input
    // to allow only for integer number unlike slider's multiplies of 0.1
    static Items =  {
      "Slider": class Slider {
        min: number;
        max: number;
        default: number[];
        constructor() {
          this.min = 0;
          this.max = 0;
          this.default = [0];
        }
      },
      "Integer Slider": class IntegerSlider {
        min: number;
        max: number;
        default: number[];
        constructor() {
          this.min = 0;
          this.max = 0;
          this.default = [0];
        }
      },
      "Dropdown": class Dropdown {
        options: string[];
        default: number[];
        constructor() {
          this.options = [""];
          this.default = [0];
        }
      },
      "Number Inputs": class NumberInputs {
        default: number[];
        constructor() {
          this.default = [0];
        }
      },
      "Text Inputs": class TextInputs {
        default: string[];
        constructor() {
          this.default = [""];
        }
      },
      "WeldGroups": class WeldGroups {
        idx: number;
        default: number[] | number[][];
        constructor() {
          this.idx = 0;
          this.default = [0];
        }
      }
    };
    static justOne: PropertiesGen = function (argArr) {
      for (var j = 0, r: Props[] = []; j < argArr.length; j++) {
        var v = argArr[j];
        switch (v[0]) {
          case 0:
            var p0 = r[j] = new Properties("Slider", v[1]);
            p0.item.min = v[2];
            p0.item.max = v[3];
            p0.item.default = [v[4]];
            break;
          case 1:
            var p1 = r[j] = new Properties("Integer Slider", v[1]);
            p1.item.min = v[2];
            p1.item.max = v[3];
            p1.item.default = [v[4]];
            break;
          case 2:
            var p2 = r[j] = new Properties("Dropdown", v[1]);
            p2.item.options = v[2];
            p2.item.default = [v[3]];
            break;
          case 3:
            var p3 = r[j] = new Properties("Number Inputs", v[1]);
            p3.item.default = v[2];
            break;
          case 4:
            var p4 = r[j] = new Properties("Text Inputs", v[1]);
            p4.item.default = v[2];
            break;
          case 5:
            var p5 = new Properties("WeldGroups", "");
            p5.item.idx = 0;
            r.forEach(function (e) {
              p5.item.idx += e.item.default.length;
            });
            (r[j] = p5).item.default = [v[1]] as number[]|number[][];
        }
      }
      return r;
    };
    /** @see {Ship.CustomInput} @see {ShipProperties} */
    static VALUE: {
      [key: number]: Props[] | undefined,
      803: [Properties<"Dropdown">]
    } = {
      738: Properties.justOne([[1, "Force", 375, 1125, 1125]]),
      // 738: + old logical input node
      739: Properties.justOne([[1, "Force", 1500, 4500, 4500]]),
      // 739: + old logical input node
      740: Properties.justOne([[1, "Force", 6000, 18000, 18000]]),
      // 740: + old logical input node
      741: Properties.justOne([[1, "Force", 1800, 54000, 54000]]),
      // 741: + old logical input node
      742: Properties.justOne([[1, "Force", 375, 1125, 1125]]),
      // 742: + old logical input node
      743: Properties.justOne([[1, "Force", 1500, 4500, 4500]]),
      // 743: + old logical input node
      744: Properties.justOne([[1, "Force", 3000, 9000, 9000]]),
      // 744: + old logical input node
      745: Properties.justOne([[1, "Force", 9000, 27000, 27000]]),
      // 745: + old logical input node
      746: Properties.justOne([[1, "Torque", 2500, 7500, 7500]]),
      // 770, 771, 772, 773, 774, 775: old logical input node
      790: Properties.justOne([[1, "Gear Ratio", 0.2, 3, 1], [5, 0]]),
      791: Properties.justOne([[5, [0, 0, 0, 0]]]),
      792: Properties.justOne([[0, "Gear Ratio", 0.2, 3, 1], [5, 0]]),
      803:
        // custom parameter (DBV block's "c") property contains option string
        // instead of number reference to option index (as for Ship class)
        // (which's in Block.Properties<"Dropdown"> item.default[0])
        Properties.justOne([[2, "Controls", [
          "Up",
          "Down",
          "Left",
          "Right",
          "Turn Left",
          "Turn Right",
          "Action 1",
          "Action 2"
        ], 0]]) as [Properties<"Dropdown">],
      // 803: + old logical output node
      // 804, 805, 806, 807, 808, 809, 810: old logical output node and input nodes
      812: Properties.justOne([[0, "Duraion in seconds", 0.1, 5, 1]]),
      813: Properties.justOne([[3, "Number", [0]]]),
      814: Properties.justOne([[2, "Mode", [
        "Absolute",
        "Directional",
        "Angular",
        "G-force"
      ], 0]]),
      819: Properties.justOne([[3, "Range", [0, 1]]]),
      821: Properties.justOne([[3, "Range", [0, 1]]]),
      823: Properties.justOne([[4, "Function", [""]]]),
      825: Properties.justOne([[3, "Range", [-1, 1]]]),
      826: Properties.justOne([[3, "Range", [-1, 1]]]),
      827: Properties.justOne([[1, "Decimals amount", 1, 4, 2]])
    };
    // /** @type {{[key:number]:number|undefined}} */
    // Block.Properties.WELDGROUPS = {790: 2, 791: 4, 792: 2};
    static addProperty(name: string|number, property: safe) {
      var propsDef = Block.Properties.VALUE[typeof name == "number" ?
        name :
        Block.ID[name]
      ];
      var custom = property.customParameter = [] as any[];
      if (!(propsDef instanceof Array))
        return property;
      for (var i = 0, n = 0, p; i < propsDef.length;)
        if ((p = propsDef[i++]) instanceof Block.Properties)
          for (var j = 0, l = p.item.default.length; j < l;)
            custom[n++] = p.name === "Controls" &&
              p.item instanceof Block.Properties.Items.Dropdown ?
                p.item.options[p.item.default[j++]] :
                p.item.default[j++];
      return property;
    };
    /** returns <default input optoins>.concat([custom input options]) */
    //@ts-ignore
    static getInputOptions(prop: ShipProperties | null) {
      var arrMaybe = (prop || OC()).customInputs;
      return Block.Properties.VALUE[803][0].item.options.concat(
        (arrMaybe instanceof Array ?
          arrMaybe :
          []).map(String)
      );
    }

    static {
      Block.PROP = Properties.VALUE;
    }
  }

  /** instance is frost */
  export class Selected {
    block: ShipBlock;
    id: number;
    x: number;
    y: number;
    w: number;
    h: number;

    constructor(
      block: ShipBlock,
      id: number,
      x: number,
      y: number,
      w: number,
      h:number
    ) {
      this.block = block;
      this.id = id;
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      Object.freeze(this);
    };
  }

  type PathArg = {x: number, y: number} | [number, number];

  /** instance is frost */
  class Point {
    x: number;
    y: number;

    constructor (x: number, y: number) {
      this.x = x;
      this.y = y;
      Object.freeze(this);
    };
    static generateBuildBox(...arg: (PathArg[] | string | number)[]) {
      var o: {
        [key: number]: Point[] & {range: number} | undefined
      } = {},
        defs: (Point[] & {range: number})[] = [];
      const AT = " at Block.Box2d.generateBuildBox.";
      function setBuildBox(args: PathArg[] | string) {
        if (typeof args == "undefined")
          return console.warn("Found \"undefined\" type" + AT);
        var path = typeof args == "object" ? args.map(function (e) {
          return e instanceof Array ?
            new Block.Box2d(e[0], e[0]) :
            new Block.Box2d(e.x, e.y);
        }) : null;
        if (path)
          var j = path.length;
        else
          return o[l++] = defs[+args];
        for (var n = 0, max = 1; j-- > 0; n > max ? max = n : 0)
          var x = path[j].x,
            y = path[j].y,
            n = Math.sqrt(x * x + y * y);
        (o[l++] =defs[defs.length] =
          path as Point[] & {range: number}
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
    // def<definition index>: <dimensoins> <shape> "<representative block>"
    static VALUE = Point.generateBuildBox(
      690,
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
    );
  }
  /** instance is frost */
  export var Box2d = Object.freeze(Point);
  export type Box2d = Point;
}
Block.Box2d;

/**
 * neccesary ln Logic editing mode because of logicPosition and
 * logicBlockIndex properties, useless to be used for not logic blocks
 */
class LogicBlock {
  /** name of block */
  internalName: string;
  /** [not-used, x, y] */
  position: XYZPosition;
  /** [not-used, flipped, cunterclockwise] */
  rotation: Rotation;
  /** more strict Block.properties for easier logic operations */
  properties: Block["properties"] & {nodeIndex: number[]};
  getPhysics: typeof Physics.INIT;
  /** while in Logic mode it stores original position */
  logicPosition: XYZPosition;
  /** while in Logic mode it stores index of the block in Ship Ship.Mode */
  logicBlockIndex: number;
  constructor(
    block: Block,
    /** -1 for no index */
    index: number,
    /** used to get nodeList */
    ship: Ship | LogicNodeList
  ) {
    this.internalName = block.internalName;
    this.position = block.position.slice() as XYZPosition;
    this.rotation = block.rotation;
    this.properties = (
      function (prop, logicBlock) {
        var logic = Logic.VALUE[Block.ID[block.internalName]] || [];
        var ni = prop.nodeIndex instanceof Array ?
          prop.nodeIndex :
          prop.nodeIndex = [];
        if (ni.length !== logic.length)
          console.warn("Why does block id: " + index + " have " +
            (ni.length > logic.length ? "more" : "less") +
            " nodeIdentifier (nodeIndex property) slots?", block);
        // #MessingWithWorkingLogics
        var node: Logic<any> | undefined,
          nodeList = ship instanceof Array ?
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
      }(block.properties, this)
    ) as Block["properties"] & {nodeIndex: number[]};
    this.getPhysics = block.getPhysics;
    this.logicPosition = block.position;
    this.logicBlockIndex = index;
  }
}
__extends(LogicBlock, Block);

type VRP = {ax: number, by: number, c: number};
// global test functions so it can be tested separately from its local scope
/** originally: test_someVRPshetFromSchoolMathNotes */
function test_someVRPshet(pointA: Block.Box2d, pointB: Block.Box2d) {
  // nominal vector of A->B (a, b)
  var a = pointA.y - pointB.y, b = pointB.x - pointA.x;
  /** @see {VRP}: a*x + b*y + c = 0 */
  return {ax: a, by: b, c: -(a * pointA.x + b * pointA.y)};
  // (basically check formula for points on that line)
}
// JSON.stringify(someVRPshetFromSchoolMathNotes({x: 3, y: 7}, {x:-2, y: 1}));
// Should return {ax: 6, by: -5, c: 17}

function test_collisionOfVRPshets(vrp1: VRP, vrp2: VRP) {
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
