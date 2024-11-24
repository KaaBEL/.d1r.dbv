/// <reference path="block.ts" />

type BlockSelection = ShipBlock[] & {parentShip: Ship;};
/**
 * @TODO BlockSelection can't be used for stored blueprints
 * a Blueprint with deep copied logics should be used instead
 */
type ShipProperties = {
  nodeList?: (Logic<any> | undefined)[],
  customInputs?: Ship.CustomInput[],
  [key: string]: unknown
};
type EditMode = "Ship" | "Logic";

interface Ship {
  selectRect(): BlockSelection;
  selectRect(
    x0: number,
    y0: number,
    z0: number,
    x1: number,
    y1: number,
    z1: number
  ): BlockSelection;
  removeRect(
    x0: number,
    y0: number,
    z0: number,
    x1: number,
    y1: number,
    z1: number
  ): void;
  fillRect(
    x0: number,
    y0: number,
    z0: number,
    x1: number,
    y1: number,
    z1: number,
    select: BlockSelection
  ): Block[] | undefined;
  paste(x: number, y: number, z: number, select: BlockSelection): void;
  mirror(): never;
  mirror(
    x0: number,
    y0: number,
    z0: number,
    x1: number,
    y1: number,
    z1: number
  ): never;
  mirror2d(): void;
  mirror2d(
    this: Ship,
    x0: number,
    y0: number,
    z0: number,
    x1: number,
    y1: number,
    z1: number
  ): void;
  blockAtPonit2d(x: number, y: number): Block.Selected | null;
  fixPositionAdjustment(fixSlab?: boolean | undefined): void;
  withPositionAdjustment(operation: (ship: Ship) => void): void;
  placeBlock(x: number, y: number, z: number, ref: ShipBlock): Block;
}

/** @see {Logic} @see {Ship.CustomInput} */
/** class is frost, for usuall ship creation use @see {Ship.fromObject} */
class Ship {
  static VER = "v.0.1.64T13";

  name: string;
  gameVersion: number[];
  dateTime: string;
  /** @satisfies {ShipBlock} */
  blocks: (Block|LogicBlock)[];
  /** Ship properties (shortcut name since it is db/dr non-standard) */
  prop: ShipProperties|null;
  getMode: () => Ship.Mode;
  getPhysics: typeof Physics.Ship.INIT;
  /** to track Droneboi Vehicles editor version in its JSON savefiles */
  significantVersion: number;

  constructor(
    name: string,
    version: number[],
    time: string,
    blocks: ShipBlock[],
    properties?: ShipProperties | null,
    mode?: Ship.Mode
  ) {
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
  /** @constant significantVersion: 25 (integer) */
  static VERSION: 25 = 25;

  static fromObject(object: any) {
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
      time = typeof o.time == "string" ? o.time : Ship.dateTime(),
      logics: Logic<any>[] & {nc: any;} = function () {
        var arr: any = [];
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
  static toDBV(ship: Ship) {
    if (ship.getMode().mode !== "Ship")
      console.warn("Converting Ship that isn't Ship.Mode \"Ship\".");
    var blocks: any[] = [];
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
    var shipProp = ship.prop || OC(), connections: any[] = [];
    var logics = shipProp.nodeList instanceof Array ?
      shipProp.nodeList :
      [];
    for (i = logics.length; i-- > 0;) {
      var node: Logic<any> | {pairs: []} = logics[i] || {pairs: []},
        n = node.pairs;
      typeof n == "number" && logics[n] &&
        connections.push({
          // node identifier, input type
          Item1: i,
          // referenced node
          Item2: node.pairs
        });
    }
    var inputs = shipProp.customInputs instanceof Array ?
      shipProp.customInputs :
      [];
    for (var custominps: any[] = [], i = 0; i < inputs.length; i++) {
      var custom: Ship.CustomInput | safe = inputs[i] || OC(),
        s = custom.name,
        t = custom.type;
      (t === 0 || t === 1 || t === -1) && typeof s == "string" &&
        custominps.push({n: s, t: t === -1 ? 0 : t});
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
  static fromDBKey(key: string) {
    var blocks: Block[] = [],
      arr = key.split("|").slice(-1)[0].split(":"),
      convertColor = [
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
    ], convertName: {[key: string]: string} = {
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
    };
    for (var i = arr.length - 1, logics: LogicNodeList = []; i-- > 0;) {
      var o = arr[i].split(";"), name = convertName[o[0]] || o[0];
      // o[1] position, used below to replace contents of array o
      var rot = +(o[2] + "").replace(",", ".") / 90 || 0 & 3;
      // o[4] controll groups not used
      var ctrl = [+o[3] || 0],
        color = +o[5] === +o[5] ?
          convertColor[+o[5]] :
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
    return new Ship("[unnamed]", [], Ship.dateTime(1714557750), blocks, obj);
  };
  // TODO: appended at the end of methods, might be more logical to be earlier
  /** timeToString @param {number} [t=Date.now()] @param {number} [f=1] */
  static dateTime = function (t?: number, f?: number) {
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
};
const enum Custom {
  UnknownInput = -1,
  Button = 0,
  Switch = 1
}
namespace Ship {
  export class CustomInput {
    name: string;
    type: Custom;

    constructor(name: string, type: Custom) {
      this.name = name;
      /** type: -1 = unknown, 0 = Button, 1 = Switch. */
      this.type = type;
      Object.seal(this);
    };
    static reassemble = function (blocks: Block[], prop: safe) {
      // This Ship.CustomInput.reassemble code feels so ...loading
      /** custom input from savefile */
      var old: safe, inputsOld = prop.customInputs instanceof Array ?
        prop.customInputs :
        [];
      var inputs: CustomInput[] = [], used = Block.Properties.getInputOptions(prop);
      for (var i = used.length, j = i; i-- > 0;)
        inputs[i] = new CustomInput(used[i], Custom.Button);
      for (j += i = inputsOld.length; i-- > 0;)
        if ((old = inputsOld[i]) instanceof Object) {
          inputs[--j] = new CustomInput("" + (old.n || old.name),
            typeof old.t == "number" ? old.t : +(old.type || 0));
          used[j] = inputs[j].name;
        } else
          console.warn("CustomInput check- not passed.");
      function checkControlBlock(customParam: unknown) {
        if (!(customParam instanceof Array))
          return console.warn("ControlBlock check0 not passed.");
        var name = customParam[0];
        if (typeof name != "string")
          return console.warn("ControlBlock check1 not passed.");
  // defs used to check for cunstomInputs not
  // found in ship.prop.customInputs
        used.indexOf(name) === -1 &&
          inputs.push(new CustomInput(name, Custom.UnknownInput)) &&
          // if found then remeber to not include dplicates
          used.push(name);
      }
      for (var i = blocks.length; i-- > 0;)
        if (blocks[i].internalName === "Control Block")
          checkControlBlock(blocks[i].properties.customParameter);
      prop.customInputs = inputs.slice(j);
    };
  }
  CustomInput.prototype.toString = function () {
    return this.name;
  };

  /**
   * class is frost instance is frost, (experimental class is frost)
   * (keeping reference to mode object also keeps its old ship object)
   */
  export class Mode {
    mode: string;
    getShip: () => Ship;

    constructor(mode: EditMode, ship: Ship | (() => Ship)) {
      this.mode = mode;
      this.getShip = ship instanceof Ship ? __private(ship) : ship;
      Object.freeze(this);
    };
    /** when encoding ship, it might need to be in "Ship" mode @constant */
    static NONE = new Ship.Mode("Ship", new Ship("", [], "", []));
    /**
     * adds a layer for the parser to pass stored global ship in mode
     * to pars functione, next parser calls only return the parse function
     * result and not do parsing again (in case it just modifies global
     * ship /the usual case which recycles global @see {ship} object)
     */
    static useParser(
      mode: EditMode,
      globalShip: Ship,
      parse: (ship: Ship) => Ship
    ) {
      var isParsed = !1;
      return new Ship.Mode(mode, function () {
        if (isParsed)
          return globalShip;
        globalShip = parse(globalShip)
        isParsed = !0;
        return globalShip;
      });
    };
  }

  Object.freeze(Object.freeze(Ship).Mode);
}

Ship.prototype.selectRect = function (
  x0?: number,
  y0?: number,
  z0?: number,
  x1?: number,
  y1?: number,
  z1?: number
): Block[] & {parentShip: Ship;} {
  // var l<x|y|z> lower boundary, var h<>
  var lx = x0 || 0, ly = y0 || 0, lz = z0 || 0, hx = 0, hy = 0, hz = 0;
  var selected: (Block | LogicBlock)[] = [];
  if (typeof x1 == "number") {
    y1 = y1 || 0;
    z1 = z1 || 0;
    var all = this.blocks;
    // if the second coordinate is greater as supposed
    //   n0 will become the second coordinate
    //   else n0 already is second one, temporary is set to first
    x1 > (x0 || 0) ? hx = x1 : lx = x1;
    y1 > (y0 || 0) ? hy = y1 : ly = y1;
    z1 > (z0 || 0) ? hz = z1 : lz = z1;
    for (var i = 0; i < all.length; i++) {
      var pos = all[i].position;
      if (pos[0] < lx || pos[0] > hx ||
        pos[1] < ly || pos[1] > hy || pos[2] < lz || pos[2] > hz)
        continue;
      selected.push(all[i]);
    }
  } else
    selected = this.blocks.concat(all = []);
  var select = selected as BlockSelection;
  select.parentShip = ship;
  return select;
};
Ship.prototype.removeRect = function (x0, y0, z0, x1, y1, z1) {
  var x = x0, y = y0, z = z0, selected = [];
  x1 > x0 ? x0 = x1 : x = x1;
  y1 > y0 ? y0 = y1 : y = y1;
  z1 > z0 ? z0 = z1 : z = z1;
  for (var all = this.blocks, i = all.length; i-- > 0;) {
    var pos = all[i].position;
    if (pos[0] < x || pos[0] > x0 || pos[1] < y || pos[1] > y0 ||
      pos[2] < z || pos[2] > z0)
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
Ship.prototype.fillRect = function (x0, y0, z0, x1, y1, z1,
  select: BlockSelection) {
  // https://stackoverflow.com/a/424445 backup random number solution
  if (!select.length)
    return;
  var x = x0, y = y0, z = z0, blocks = [], rand = Edit.randSFC32(0);
  // x becomes x_min and x0 becomes x_max
  x1 > x0 ? x0 = x1 : x = x1;
  y1 > y0 ? y0 = y1 : y = y1;
  z1 > z0 ? z0 = z1 : z = z1;
  /** @param {Ship} ship */
  function pushBlock(ship: Ship) {
    // console.log(x, y, z, x0, y0, z0, x1, y1, z1);
    var idx = Math.floor(rand() * select.length);
      // looking for short and suitable name of random block from selection
    var one = select[idx], name = one.internalName;
    var pos = one.position, properties = one.properties;
    return ship.blocks[ship.blocks.length] = new Block(
      name,
      // TODO: fill could defaultly adjust blocks to fit full grid
      [x + (pos[0] & 0), y + (pos[1] & 0), z + (pos[2] & 0)],
      one.rotation.slice() as Rotation,
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
Ship.prototype.paste = function (
  x: number,
  y: number,
  z: number,
  select: BlockSelection
) {
  var logics: LogicNodeList = ship.prop && ship.prop.nodeList || [],
    oldLogics: LogicNodeList = select.parentShip.prop &&
      select.parentShip.prop.nodeList || [],
    /** mapping new output nodes indexes by old ones */
    outputs: number[] = [],
    /** later used to assign each to output */
    inputs: number[] = [];
  for (var i = select.length, l = 1; i-- > 0;) {
    var pos = select[i].position, rot = select[i].rotation;
    var block = new Block(
      select[i].internalName,
      [pos[0] + x, pos[1] + y, pos[2] + z],
      [rot[0], rot[1], rot[2]],
      JSON.parse(JSON.stringify(select[i].properties))
    ), logicDef = Logic.VALUE[Block.ID[block.internalName]];
    if (logicDef) {
      /** nodeIndex (node Identifiers) */
      var ni: number[] = [], property = block.properties;
      property.nodeIndex instanceof Array || (property.nodeIndex = []);
      // backwards iterating >:D (evil laugh)
      for (var j = logicDef.length; j-- > 0;) {
        while (logics[l])
          l++;
        var newNode: Logic<any> | safe = logics[l] =
          new Logic(logicDef[j].type, 0, 0);
        var idx = (select[i].properties.nodeIndex || [])[j];
        newNode.owner = block;
        /** node from nodeList of selection */
        var oldNode: Logic<any> | safe = oldLogics[idx] || OC();
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
//@ts-ignore no one cares
Ship.prototype.mirror = function (x0, y0, z0, x1, y1, z1) {
  throw new Error("Unimplemented");
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
};
Ship.prototype.mirror2d = function (
  this: Ship,
  x0?: number,
  y0?: number,
  z0?: number,
  x1?: number,
  y1?: number,
  z1?: number): void {
  function pushBlock(block: Block, pos: XYZPosition) {
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
      block.rotation[2] = (4 - r) as Rot;
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
  var lx = x0 || 0, ly = y0 || 0, lz = z0 || 0, hx = 0, hy = 0, hz = 0;
  var pos: XYZPosition, all = this.blocks;
  if (typeof x1 == "number") {
    y1 = y1 || 0;
    z1 = z1 || 0;
    x1 > (x0 || 0) ? hx = x1 : lx = x1;
    y1 > (y0 || 0) ? hy = y1 : ly = y1;
    z1 > (z0 || 0) ? hz = z1 : lz = z1;
    for (var i = 0; i < all.length; i++) {
      pos = all[i].position;
      // selection is inverted TROLOLOOLOOLLOOLOLOLOOLOLOLO LOLOLOLOLOLOLOL
      if (pos[0] < lx || pos[0] > hx ||
        pos[1] < ly || pos[1] > hy || pos[2] < lz || pos[2] > hz)
        pushBlock(all[i], pos);
    }
  } else
    for (var i = 0; i < all.length; i++) {
      pos = all[i].position
      pushBlock(all[i], pos);
    }
  Edit.eventFire(this);
};
/** @returns null if nothing found */
Ship.prototype.blockAtPonit2d = function (x: number, y: number) {
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
Ship.prototype.fixPositionAdjustment = function (fixSlab?: boolean) {
  var slabsFix = fixSlab ? Block.Size.VALUE[696] : null;
  console.log(this.name + ".PositionAdjustment(" + fixSlab + ")");
  if (this.getMode().mode !== "Ship")
    console.warn("Fixing ship in not default Ship.Mode!");
  for (var i = 0; i < this.blocks.length; i++) {
    var block = this.blocks[i], rot = block.rotation[2],
      size = Block.Size.VALUE[Block.ID[block.internalName]];
    if (size === slabsFix)
      continue;
    if (size && ((size.w | size.h) & 16)) {
      rot > 1 ? block.position[2] -= 1 : 0;
      (rot + 1 & 3) > 1 ? block.position[1] -= 1 : 0;
    }
  }
};
/**
 * allows using position adjustment for certain operations such as,
 * DR base64 keys prototype
 */
Ship.prototype.withPositionAdjustment = function (
  operation: (ship: Ship) => void
) {
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
/** @param ref template Block for the new one */
Ship.prototype.placeBlock = function (
  x: number,
  y: number,
  z: number,
  /** template Block for the new one */
  ref: ShipBlock
) {
  // improved old_UI from editor.js
  var logics = this.prop && this.prop.nodeList || [];
  var block = new Block(
    ref.internalName,
    [x, y, z],
    ref.rotation.slice() as Rotation,
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

// generating Droneboi
/** global ship that's being rendered and editng */
var ship = Ship.fromObject({name: "Starter Droneboi", ci: []});
// var block = new Block("Block", [0, 0, 0], [0, !0, 0]),
//   ship = new Ship("None", [0, 9], "never", [block]);
