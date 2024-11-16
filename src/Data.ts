/// <reference path="defs.ts" />

type UseData = number | [number, number];
interface BlockData {
  id: number,
  draw?: [number, number, number, number, number, number],
  weight?: number,
  strength?: number,
  cost?: number,
  energy_use?: number | [number, number],
  energy_store?: number,
  fuel_use?: number | [number, number],
  fuel_store?: number,
  cargo_use?: number | [number, number],
  cargo_store?: number
};
interface BlockDataSimple {
  id: number,
  draw?: [number, number, number, number, number, number],
  weight?: number,
  strength?: number,
  cost?: number,
  energy_use?: number | number[],
  energy_store?: number,
  fuel_use?: number | number[],
  fuel_store?: number,
  cargo_use?: number | number[],
  cargo_store?: number
};

class Data {
  static VER = "v.0.1.64T13";

  constructor() {
    throw new TypeError("Illegal constructor");
  }

  // little minified to optionally save up some lines
  static colors = {
    // experimental null property on colors data
    "null": -1, "White": 0, "Light Gray": 1, "Dark Gray": 2, "Black": 3,
    "Yellow": 4, "Orange": 5, "Red": 6, "Wine": 7, "Pink": 8, "Purple": 9,
    "Light Blue": 10, "Dark Blue": 11, "Navy": 12, "Lime": 13,
    "Green": 14, "Fuel": 15, "Yellow Hazard Stripes": 16,
    "Red Hazard Stripes": 17, "White Hazard Stripes": 18,
    "Festive Red": 19, "Festive Green": 20, "BREAD": 21,
    "[custom color]": 22, "Station Floor 0": 23, "Station Floor 1": 24,
    "Station Floor 2": 25, "Wood": 26, "Festive Duck": 27, "Gonb": 28
  };
  static blocks = {
    block: {id: 0}, wedge: {id: 1}, wedge_1x2: {id: 2},
    pyramid: {id: 3}, pyramid_1x2: {id: 4}, inverse_pyramid: {id: 5},
    inverse_pyramid_1x2: {id: 6}, hydrogen_tank_small: {id: 7},
    rcs_rocket_thruster_small: {id: 8}, rocket_thruster_small: {id: 9},
    cockpit_fighter: {id: 10}, cockpit_cruiser: {id: 11}, __unknown__: {
    id: 511}, Core: {id: 690, weight: 2, strength: 10, cost: -1,
    cargo_store: 5}, Block: {id: 691, weight: 1, strength: 10, cost: 100},
    Wedge: {id: 692, weight: 0.5, strength: 5, cost: 100}, "Wedge 1x2": {
    id: 693, weight: 1, strength: 10, cost: 100}, "Wedge 1x4": {id: 694,
    weight: 2, strength: 20, cost: 100}, Pyramid: {id: 695, weight: 0.5,
    strength: 5, cost: 100}, Slab: {id: 696, weight: 0.5, strength: 5,
    cost: 100}, "Smooth Corner": {id: 697, weight: 0.5, strength: 10,
    cost: 100}, "Smooth Corner 1x2": {id: 698, weight: 1, strength: 10,
    cost: 100}, "Smooth Corner 1x4": {id: 699, weight: 2, strength: 20,
    cost: 100}, Struct: {id: 700, weight: 0.5, strength: 5, cost: 100},
    "Glass Block": {id: 701, weight: 1, strength: 1, cost: 100},
    "Glass Wedge": {id: 702, weight: 0.5, strength: 0.5, cost: 100},
    "Slab Wedge": {id: 703, cost: 100}, "Tiny Hydrogen Thruster": {id: 738,
    weight: 0.5, strength: 2.5, cost: 100, fuel_use: 175},
    "Small Hydrogen Thruster": {id: 739, weight: 2, strength: 10, cost: 100,
    fuel_use: 150}, "Medium Hydrogen Thruster": {id: 740, weight: 8,
    strength: 40, cost: 400, fuel_use: 125}, "Large Hydrogen Thruster":
    {id: 741, weight: 24, strength: 120, cost: 800, fuel_use: 100},
    "Tiny Ion Thruster": {id: 742, weight: 0.75, strength: 2.5, cost: 100,
    energy_use: 275}, "Small Ion Thruster": {id: 743, weight: 3, strength: 10,
    cost: 100, energy_use: 250}, "Medium Ion Thruster": {id: 744, weight: 6,
    strength: 20, cost: 400, energy_use: 225}, "Large Ion Thruster": {id: 745,
    weight: 18, strength: 60, cost: 800, energy_use: 200}, "Reaction Wheel": {
    id: 746, weight: 2, strength: 10, cost: 100, energy_use: 100},
    "Small Hydrogen Tank": {id: 754, weight: 2, strength: 10, cost: 100,
    fuel_store: 30}, "Medium Hydrogen Tank": {id: 755, weight: 8, strength: 40,
    cost: 400, fuel_store: 150}, "Large Hydrogen Tank": {id: 756, weight: 18,
    strength: 90, cost: 900, fuel_store: 375}, "Small Battery": {id: 757,
    weight: 3, strength: 10, cost: 100, energy_store: 20}, "Medium Battery": {
    id: 758, weight: 12, strength: 40, cost: 400, energy_store: 100},
    "Large Battery": {id: 759, weight: 18, strength: 60, cost: 600,
    energy_store: 175}, "Small Storage Rack": {id: 760, weight: 3,
    strength: 10, cost: 100, cargo_store: 20}, "Medium Storage Rack": {id: 761,
    weight: 12, strength: 40, cost: 400, cargo_store: 100},
    "Large Storage Rack": {id: 762, weight: 27, strength: 90, cost: 900,
    cargo_store: 250}, "Small Hydraulic Drill": {id: 770, weight: 3,
    strength: 10, cost: 100, energy_use: 1, cargo_use: [-1,1.02]}, Cannon: {
    id: 771, weight: 2, strength: 10, cost: 100}, "Rotary Cannon": {id: 772,
    weight: 2, strength: 10, cost: 200}, "Plasma Cannon": {id: 773, weight: 2,
    strength: 10, cost: 200, energy_use: [10,1.02]}, "Pulse Laser": {id: 774,
    weight: 2, strength: 10, cost: 200, energy_use: [2,0.52]}, "Beam Laser": {
    id: 775, weight: 2, strength: 10, cost: 200, energy_use: 4},
    __placeholder776__: {id: 776}, "Weight Block": {id: 786, weight: 10,
    strength: 10, cost: 100}, "Armor Block": {id: 787, weight: 5, strength: 50,
    cost: 100}, "Solar Block": {id: 788, weight: 1, strength: 2, cost: 100,
    energy_use: -0.25}, "Small Solar Panel": {id: 789, weight: 1,
    strength: 0.5, cost: 100, energy_use: -0.75}, Hinge: {id: 790, weight: 5,
    strength: 10, cost: 100}, Separator: {id: 791, weight: 1, strength: 1,
    cost: 100}, Piston: {id: 792, weight: 5, strength: 10, cost: 100},
    "Camera Block": {id: 793, weight: 1, strength: 10, cost: 100},
    "Ghost Block": {id: 794, weight: 1, strength: 10, cost: 100},
    Dock: {id: 795, weight: 1, strength: 10, cost: 100}, "Small Rift Drive": {
    id: 796, weight: 5, strength: 10, cost: 500}, __placeholder798__: {
    id: 798}, __placeholder799__: {id: 799}, "Constant On Signal": {id: 802,
    weight: 0.25, strength: 2.5, cost: 100}, "Control Block": {id: 803,
    weight: 1, strength: 10, cost: 100}, "AND Gate": {id: 804, weight: 1,
    strength: 10, cost: 100}, "NAND Gate": {id: 805, weight: 1, strength: 10,
    cost: 100}, "OR Gate": {id: 806, weight: 1, strength: 10, cost: 100},
    "NOR Gate": {id: 807, weight: 1, strength: 10, cost: 100}, "XOR Gate": {
    id: 808, weight: 1, strength: 10, cost: 100}, "XNOR Gate": {id: 809,
    weight: 1, strength: 10, cost: 100}, "NOT Gate": {id: 810, weight: 0.5,
    strength: 5, cost: 100}, LED: {id: 811, weight: 0.25, strength: 2.5,
    cost: 100}, Delay: {id: 812, weight: 0.5, strength: 5, cost: 100},
    "Constant Number": {id: 813, weight: 0.25, strength: 2.5, cost: 100},
    "Speed Sensor": {id: 814, weight: 1, strength: 10, cost: 100},
    "Tilt Sensor": {id: 815, weight: 1, strength: 10, cost: 100},
    "Distance Sensor": {id: 816, weight: 1, strength: 10, cost: 100},
    "GPS Sensor": {id: 817, weight: 1, strength: 10, cost: 100},
    "Numerical Inverter": {id: 818, weight: 0.5, strength: 5, cost: 100},
    Clamp: {id: 819, weight: 0.5, strength: 5, cost: 100}, Abs: {id: 820,
    weight: 0.5, strength: 5, cost: 100}, "Threshold Gate": {id: 821,
    weight: 0.5, strength: 5, cost: 100}, "Numerical Switchbox": {id: 822,
    weight: 1, strength: 10, cost: 100}, "Function Block": {id: 823, weight: 1,
    strength: 10, cost: 100}, "Memory Register": {id: 824, weight: 1,
    strength: 10, cost: 100}, Gauge: {id: 825, weight: 0.5, strength: 5,
    cost: 100}, Dial: {id: 826, weight: 0.25, strength: 2.5, cost: 100},
    "Digital Display": {id: 827, weight: 0.5, strength: 5, cost: 100},
    "Push To Toggle": {id: 828, weight: 0.5, strength: 5, cost: 100},
    __placeholder834__: {id: 834}, __placeholder835__: {id: 835},
    __placeholder836__: {id: 836}, __placeholder837__: {id: 837},
    __placeholder838__: {id: 838}, __placeholder839__: {id: 839},
    __placeholder840__: {id: 840}, __placeholder841__: {id: 841},
    __placeholder842__: {id: 842}, __placeholder843__: {id: 843},
    __placeholder844__: {id: 844}, __placeholder845__: {id: 845},
    __placeholder846__: {id: 846}, __placeholder847__: {id: 847},
    __placeholder848__: {id: 848}, __placeholder849__: {id: 849},
    __placeholder850__: {id: 850}, __placeholder851__: {id: 851},
    __placeholder852__: {id: 852}, __placeholder853__: {id: 853},
    __placeholder854__: {id: 854}, __placeholder855__: {id: 855},
    __placeholder856__: {id: 856}, __placeholder857__: {id: 857},
    __NULL__: {id: 1023}, Afterburner: {id: 1035, weight: 2, strength: 10,
    cost: 70}, "Dynamo Thruster": {id: 1037, weight: 3, strength: 15,
    cost: 90}, "T1 Rammer": {id: 1043, weight: 1, strength: 20, cost: 70},
    "T1 Nano Healer": {id: 1060, weight: 1, strength: 10, cost: 130}
  };
  /** list of all blocks in human readable form, used to debug block IDs */
  static titles = {
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
    776: "TNT",
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
    798: "Red Magnet",
    799: "Inversed Dock",
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
    834: "station wall 4 sides LBRU",
    835: "station wall 2 sides corner LB",
    836: "station wall 1 side B",
    837: "station wall 0 sides",
    838: "station wall 3 sides LBR",
    839: "station wall 2 sides opposite LR",
    840: "station solar block",
    841: "station launchpad door casing",
    842: "station launchpad door middle",
    843: "station launchpad door ending",
    844: "station floor 1 1x1",
    845: "station floor 1 2x2",
    846: "station floor 2 2x2",
    847: "station door casing",
    848: "station door middle",
    849: "station door ending",
    850: "station launch terminal",
    851: "station bench",
    852: "station wardrobe",
    853: "station telescope",
    854: "station market terminal",
    855: "station wedge",
    856: "station foor 2 1x1",
    857: "station floor 3 1x1",
    1023: "__NULL__",
    1024: "Core",
    1025: "T1 Block",
    1026: "T2 Block",
    1027: "T1 Wedge",
    1028: "T1 Wedge 1x2",
    1029: "T2 Wedge",
    1030: "Structure Block",
    1031: "Glass Block",
    1032: "Glass Wedge",
    1033: "Station Block",
    1034: "Simple Thruster",
    1035: "Afterburner",
    1036: "Ion Thruster",
    1037: "Dynamo Thruster",
    1038: "Momentum Wheel",
    1039: "Small Fuel Tank",
    1040: "Medium Fuel Tank",
    1041: "Small Battery",
    1042: "Medium Battery",
    1043: "T1 Rammer",
    1044: "T1 Blaster",
    1045: "T1 Pulse Laser",
    1046: "T1 Gatling Gun",
    1047: "T1 Rocket Launcher",
    1048: "Explosive",
    1049: "T1 Drill",
    1050: "T1 Mining Laser",
    1051: "Small Crate",
    1052: "Medium Crate",
    1053: "Connector",
    1054: "T1 Solar Panel",
    1055: "T2 Solar Panel",
    1056: "Solar Block",
    1057: "Hinge",
    1058: "Seperator",
    1059: "Camera Block,",
    1060: "T1 Nano Healer"
  };
  static generateNames(src: "colors" | "blocks") {
    /** Names by ID (ID to Name) */
    var names: {
      [key: number]: string | undefined,
      length: number
    } = {
      length: 0
    }, data: {[key: string]: number | BlockDataSimple} = Data[src];
    for (var p in data) {
      /** one data item: color id, block data */
      var item = data[p];
      var id = typeof item == "object" ? item.id : item;
      names[id] = p;
      if (id >= names.length)
        names.length = id + 1;
    }
    return names;
  }
  static generateIDs(src: "colors" | "blocks") {
    /** is missing the undefined case, isn't 100% type safe, IDs by Name */
    var ids: {[key: string]: number} = {length: 0},
      data: {[key: string]: number | BlockDataSimple} = Data[src];
    for (var p in data) {
      /** one data item: color id, block data */
      var item: BlockDataSimple | number = data[p];
      ids[p] = typeof item == "object" ? item.id : item;
    }
    return ids;
  }
  static generateValues<T extends keyof BlockData>(type: T) {
    /** Values by Name */
    var values: {
      [key: string]: BlockData[T] | undefined
    } = {}, data: {[key: string]: BlockDataSimple} = Data.blocks,
      val: BlockDataSimple[keyof BlockData];
    for (var p in data)
      if (val = data[p][type])
        values[data[p].id] = (val instanceof Array ?
          [val[0], val[1]] :
          val) as BlockData[T];
    return values;
  }
}
