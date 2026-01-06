//@ts-check
/// <reference path="./defs.d.ts" />
"use strict";
/** @readonly */
var version_code_js = "v.0.2.30";
/** 3h_  @TODO check @see {Ship.VERSION} */
// NOTE: 3 options to modify and/or contribute are:
// A) download and edit source files localy
// B) create chrome extensions with custom modifications for live page
// C) pull requests contribuition to main repo on github
var OP = Object.prototype.hasOwnProperty,
  /** @typedef {{[K in string|number|symbol]?:unknown}} safe */
  /** @type {()=>safe} should be safe with safe type */
  OC = function () {
    return {};
  };
if (typeof F != "function" || typeof UDF !== "undefined")
  /** @readonly */
  var F = function () {}, UDF = void 0;
// inheritance's gonna go brrrrrrrrrrrrrrrr (taken standard ES5 extending)
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
  };
}
/** @param {string} s best function ever, I should use this */
function er(s) {
  throw new Error(s);
  return s;
}

//@ts-expect-error
if (typeof Initial != "function")
  var Initial = function () {
    throw new TypeError("Illegal constructor");
    this.data = null;
  };

/**
 * @typedef {number|[number,number]} UseData
 * @typedef {{id:number,weight?:number,strength?:number,cost?:number,
 * energy_use?:UseData,energy_store?:number,fuel_use?:UseData,
 * fuel_store?:number,cargo_use?:UseData,cargo_store?:number,
 * draw?:number[],now?:number,bitmap:ShortDef|SizeDef}} BlockData
 * @typedef {{id:number,weight?:number,strength?:number,cost?:number,
 * energy_use?:number|number[],energy_store?:number,
 * fuel_use?:number|number[],fuel_store?:number,cargo_use?:number|number[],
 * cargo_store?:number,draw?:number[],now?:number,
 * bitmap:number|(number|string)[]}} BlockDataSimple
 */
/** @typedef {never} Data @returns {never} */
function Data() {
  throw new TypeError("Illegal constructor");
}
/** Changing original values for color IDs breaks rendering and Commands
 * tab, newer property "now" is used for consistent order with games */
Data.colors =
  /** @type {const} */
  ({
    "White": 0, "Light Gray": 1, "Dark Gray": 2, "Black": 3,
    "Yellow": 4, "Orange": 5, "Red": 6, "Wine": 7, "Pink": 8,
    "Purple": 9, "Light Blue": 10, "Dark Blue": 11, "Navy": 12,
    "Lime": 13, "Green": 14, "Fuel": 15, "Yellow Hazard Stripes": 16,
    "Red Hazard Stripes": 17, "White Hazard Stripes": 18,
    "Festive Red": 19, "Festive Green": 20, "Teal": {id: 29, now: 21},
    "Magneta": {id: 30, now: 22}, "Station Floor 2": {id: 25, now: 29},
    "Station Floor 1": {id: 24, now: 30}, "Station Floor 0": {id: 23,
    now: 31}, "Gonb": {id: 28, now: 62}, "BREAD": {id: 21, now: 63},
    "Wood": {id: 26, now: 64}, "Festive Duck": {id: 27, now: 65},
    "[custom color]": {id: 22, now: 127}
  });
Data.paths = [
  ["m,hv", 8, -8, -16, 32], ["m,hv", -8, -8, 16, 32], ["m,hv", -8, 8, 16,
  -16], ["m,hvh", -8, -8, 16, 16, -16], ["m,hvh", -8, -8, 16, 32, -16],
  ["m,hv", 8, -8, -16, 16], ["m,hv", -8, -8, 16, 16], ["m,vhvh", 8, 0, -8,
  -16, 16, 8], ["m,vhvh", -8, 0, -8, 16, 16, -8], ["m,vhvh", -8, 0, 8, 16,
  -16, -8], ["m,vhvh", 8, 8, -16, -16, 32, 8], ["m,vhvh", -8, 8, -16, 16,
  32, -8], ["m,hvhm,hvh", -8, -8, 16, 3, -16, 0, 10, 16, 3, -16],
  ["m,hvhm,", -8, -5, 16, 10, -16, 4, -8], ["vhvhvhvhvhvm,vhvhvhvhvhvh",
  5, 1, -2, 1, 2, 1, -5, -1, 2, -1, -2, 3, 1, 1, 2, 1, -2, 3, 3, -1, -2,
  -1, 2, -3, -3], ["m,", -4, -3], ["vhvhvhvhvhvhm,hvhvhvhvhvh", 4, 2, 1,
  -2, 1, 3, -3, -2, -1, 2, -1, -3, 4, 4, 1, -2, 1, 2, 1, -5, -1, 2, -1,
  -2, -1], ["m,vl,hl,vl,hm,", -8, 6, -12, 2, -2, 12, 2, 2, 12, -2, 2, -12,
  1, -5], ["vhvm,vhvm,vhvm,vhv", 2, 10, -2, 0, -1, -2, -10, 2, 0, -5, 2,
  10, -2, 0, -1, -1, -10, 1], ["m,", -5, 3], ["m,hvhm,", -8, -8, 16, 16,
  -16, 0, -8], ["c, , ,c, , ,c, , ,c, , ,", 0, -4.18, 3.81, -8, 8, -8,
  4.18, 0, 8, 3.81, 8, 8, 0, 4.18, -3.81, 8, -8, 8, -4.18, 0, -8, -3.81,
  -8, -8], ["m,", -8, 0], ["hvhv", 8, 8, -16, -8], ["hl,hl,", -6, -2, -8,
  16, -2, 8], ["m,hl,h", 6, -8, -12, -2, -16, 16], ["m,hvhl,", -24, -24,
  32, 64, -16, 16, -32, 0], ["m,hl,z", -40, -24, 16, -8, 24, 0],
  ["m,l,l,l,", -24, -24, 32, 32, -16, 32, -24, -40, 0], ["m,vhm,vh", -24,
  8, 32, 16, 32, -32, 32, -16, 0], ["m,vl,vm,vl,v", -24, 8, -32, 16, 24,
  40, 16, 0, -40, 16, -24, 32, 0], ["m,hl,vhv", -24, -24, 48, -16, 24, 40,
  -16, -40, 0], ["m,hl,h", -24, -8, 48, -16, 16, -16, 0], ["m,vl,vm,vl,v",
  8, 40, -32, 16, -16, 32, -48, 0, -32, 16, 16, 32], ["m,hvh", -24, -24,
  48, 64, -48, 0], ["m,hl,vhv", -8, -40, 16, 16, 16, 32, -48, -32, 0],
  ["m,hvh", -8, -24, 16, 48, -16], ["m,vl,", 8, 24, -16, 32, -16],
  ["m,hvl,", 8, -24, 32, 16, -32, 16], ["m,vl,m,hv", -24, 24, -16, 16, 16,
  16, 0, 16, -16], ["m,", 0, 16], ["m,vl,m,l,v", -24, -8, 16, 16, 16, 16,
  0, 16, -16, -16], ["m,vl,hl,v", -24, -24, 16, 16, 32, 16, 16, -32, -16],
  ["m,hvm,vh", -40, 24, 32, -16, 0, -16, -16, -32], ["m,l,vl,", -40, 24,
  32, -16, -16, -32, -16], ["m,vhv", -24, -24, 48, 48, -48]
];
Data.groups = [
  "[[14,15],255,187,132,[14,13],255,215,175,[12],128,128,128,1,0]", "[[" +
  "16,15],255,187,132,[16,13],255,215,175,[12],128,128,128,3,0]", "[[16" +
  ",15],255,187,132,[16,13],255,215,175,[12],128,128,128,0,0]", "[[18,1" +
  "9],64,64,64,[18,17],128,128,128,0,0]", "[[14,15],255,187,132,[14,13]" +
  ",255,215,175,[12],128,128,128,0,0]", "[[3],96,96,96,0,0]", "[[21,22]" +
  ",32,32,32,[21,20],96,96,96,0,0]", "[[24],32,32,32,[23],96,96,96,0,0]",
  "[[25],32,32,32,[3],96,96,96,0,0]", "[[28],29,0,0,[27],18,0,0,[26],12" +
  "8,128,128,2,1]", "[[31],29,0,0,[30],21,0,0,[29],128,128,128,0,0]", "" +
  "[[33],29,0,0,[4,40],21,0,0,[32],128,128,128,2,0]", "[[34],128,128,12" +
  "8,0,0]", "[[35],128,128,128,0,0]", "[[3],128,128,128,0,0]", "[[5],12" +
  "8,128,128,0,0]", "[[6],128,128,128,0,0]", "[[2],128,128,128,0,0]", "" +
  "[[8],128,128,128,0,0]", "[[9],128,128,128,0,0]", "[[0],128,128,128,0" +
  ",0]", "[[1],128,128,128,0,0]", "[[7],128,128,128,0,0]", "[[10],128,1" +
  "28,128,0,0]", "[[4],128,128,128,0,0]", "[[11],128,128,128,0,0]", "[[" +
  "38],29,0,0,[37],18,0,0,[36],128,128,128,0,0]", "[[42],29,0,0,[41],18" +
  ",0,0,[39],128,128,128,0,0]", "[[44],29,0,0,[43],18,0,0,[36],128,128," +
  "128,1,0]", "[[45],128,128,128,0,0]", "[[45,40],128,128,128,2,0]", "[" +
  "[10],0,0,128,0,0]", "[[11],0,0,128,0,0]", "[[9],0,0,128,0,0]", "[[4]" +
  ",128,0,0,0,0]", "[[3],128,0,0,0,0]", "[[28],0,29,0,[27],0,18,0,[26]," +
  "96,164,96,2,1]"
];
// #data.xmltodbve v.0.2.27 was used to show ts errors where block IDs
// weren't assigned (case of new blocks), but still can be tested in browser

// search / ?([^]{20,74}[,{;]) ?/ replace "  $1\n "
// search /\["\d+ \d+"\]|"\d+ \d+"/ replace <number with texture index>
Data.blocks =
  /** @type {const} */
  ({block: {id: 0, draw: [14, 14, 14, 14, 14, 14]},
  wedge: {id: 1, draw: [15, 14, 14, 15, 14, 14]},
  wedge_1x2: {id: 2, draw: [20, 24, 5, 20, 24, 5]},
  pyramid: {id: 3, draw: [15, 16, 17, 15, 16, 17]},
  pyramid_1x2: {id: 4, draw: [20, 21, 17, 20, 21, 17]},
  inverse_pyramid: {id: 5, draw: [22, 18, 19, 14, 14, 14]},
  inverse_pyramid_1x2: {id: 6, draw: [23, 25, 19, 24, 24, 14]},
  hydrogen_tank_small: {id: 7, draw: [0, 3, 4, 1, 3, 2]},
  rcs_rocket_thruster_small: {id: 8, draw: [7, 7, 5, 7, 7, 6]},
  rocket_thruster_small: {id: 9, draw: [8, 8, 5, 8, 8, 6]},
  cockpit_fighter: {id: 10, draw: [9, 10, 11, 9, 12, 13]},
  cockpit_cruiser: {id: 11, draw: [26, 27, 28, 26, 29, 30]},
  __unknown__: {id: 511},
  Core: {id: 690, weight: 2, strength: 10, cost: -1, cargo_store: 5,
  bitmap: 128}, Block: {id: 691, weight: 1, strength: 10, cost: 100,
  bitmap: 52}, Wedge: {id: 692, weight: 0.5, strength: 5, cost: 100,
  bitmap: 53}, "Wedge 1x2": {id: 693, weight: 1, strength: 10, cost: 100,
  bitmap: [54, 1, 2]}, "Wedge 1x4": {id: 694, weight: 2, strength: 20,
  cost: 100, bitmap: [55, 1, 4]}, Pyramid: {id: 695, weight: .5, strength: 5,
  cost: 100, bitmap: 56}, Slab: {id: 696, weight: .5, strength: 5,
  cost: 100, bitmap: [57, 1, .5]}, "Smooth Corner": {id: 697, weight: .5,
  strength: 10, cost: 100, bitmap: 60}, "Smooth Corner 1x2": {id: 698,
  weight: 1, strength: 10, cost: 100, bitmap: [61, 1, 2]},
  "Smooth Corner 1x4": {id: 699, weight: 2, strength: 20, cost: 100,
  bitmap: [71, 1, 4]}, Struct: {id: 700, weight: .5, strength: 5, cost: 100,
  bitmap: 35}, "Glass Block": {id: 701, weight: 1, strength: 1, cost: 100,
  bitmap: 150}, "Glass Wedge": {id: 702, weight: .5, strength: .5,
  cost: 100, bitmap: 151}, "Slab Wedge": {id: 703, weight: .5, strength: 5,
  cost: 100, bitmap: [62, 1, .5]}, "Tiny Hydrogen Thruster": {id: 738,
  weight: .5, strength: 2.5, cost: 100, fuel_use: 175, bitmap: [8, .5, .5]},
  "Small Hydrogen Thruster": {id: 739, weight: 2, strength: 10, cost: 100,
  fuel_use: 150, bitmap: 4}, "Medium Hydrogen Thruster": {id: 740,
  weight: 8, strength: 40, cost: 400, fuel_use: 125, bitmap: [28, 2, 2]},
  "Large Hydrogen Thruster": {id: 741, weight: 24, strength: 120, cost: 800,
  fuel_use: 100, bitmap: [13, 3, 4]}, "Tiny Ion Thruster": {id: 742,
  weight: .75, strength: 2.5, cost: 100, energy_use: 275, bitmap: [9, .5,
  .5]}, "Small Ion Thruster": {id: 743, weight: 3, strength: 10, cost: 100,
  energy_use: 250, bitmap: 0}, "Medium Ion Thruster": {id: 744, weight: 6,
  strength: 20, cost: 400, energy_use: 225, bitmap: [1, 1, 2]},
  "Large Ion Thruster": {id: 745, weight: 18, strength: 60, cost: 800,
  energy_use: 200, bitmap: [2, 2, 3]}, "Reaction Wheel": {id: 746, weight: 2,
  strength: 10, cost: 100, energy_use: 100, bitmap: 34},
  "Small Hydrogen Tank": {id: 754, weight: 2, strength: 10, cost: 100,
  fuel_store: 30, bitmap: 89}, "Medium Hydrogen Tank": {id: 755, weight: 8,
  strength: 40, cost: 400, fuel_store: 150, bitmap: [86, 2, 2]},
  "Large Hydrogen Tank": {id: 756, weight: 18, strength: 90, cost: 900,
  fuel_store: 375, bitmap: [92, 3, 3]}, "Small Battery": {id: 757, weight: 3,
  strength: 10, cost: 100, energy_store: 20, bitmap: 41},
  "Medium Battery": {id: 758, weight: 12, strength: 40, cost: 400,
  energy_store: 100, bitmap: [44, 2, 2]}, "Large Battery": {id: 759,
  weight: 18, strength: 60, cost: 600, energy_store: 175, bitmap: [42, 2,
  3]}, "Small Storage Rack": {id: 760, weight: 3, strength: 10, cost: 100,
  cargo_store: 20, bitmap: 88}, "Medium Storage Rack": {id: 761,
  weight: 12, strength: 40, cost: 400, cargo_store: 100, bitmap: [80, 2, 2]},
  "Large Storage Rack": {id: 762, weight: 27, strength: 90, cost: 900,
  cargo_store: 250, bitmap: [68, 3, 3]}, "Small Hydraulic Drill": {id: 770,
  weight: 3, strength: 10, cost: 100, energy_use: 1, cargo_use: [-1, 1.02],
  bitmap: 24}, Cannon: {id: 771, weight: 2, strength: 10, cost: 100,
  bitmap: 36}, "Rotary Cannon": {id: 772, weight: 2, strength: 10,
  cost: 200, bitmap: 37}, "Plasma Cannon": {id: 773, weight: 2,
  strength: 10, cost: 200, energy_use: [10, 1.02], bitmap: 38},
  "Pulse Laser": {id: 774, weight: 2, strength: 10, cost: 200,
  energy_use: [2, .52], bitmap: 39}, "Beam Laser": {id: 775, weight: 2,
  strength: 10, cost: 200, energy_use: 4, bitmap: 40},
  __placeholder776__: {id: 776, bitmap: 167}, "Weight Block": {id: 786,
  weight: 10, strength: 10, cost: 100, bitmap: 172},
  "Armor Block": {id: 787, weight: 5, strength: 50, cost: 100,
  bitmap: 173}, "Solar Block": {id: 788, weight: 1, strength: 2, cost: 100,
  energy_use: -.25, bitmap: 136}, "Small Solar Panel": {id: 789, weight: 1,
  strength: .5, cost: 100, energy_use: -.75, bitmap: [133, 1, 2]},
  Hinge: {id: 790, weight: 5, strength: 10, cost: 100, bitmap: 12},
  Separator: {id: 791, weight: 1, strength: 1, cost: 100, bitmap: 132},
  Piston: {id: 792, weight: 5, strength: 10, cost: 100, bitmap: 31},
  "Camera Block": {id: 793, weight: 1, strength: 10, cost: 100,
  bitmap: 171}, "Ghost Block": {id: 794, weight: 1, strength: 10,
  cost: 100, bitmap: 174}, Dock: {id: 795, weight: 1, strength: 10,
  cost: 100, bitmap: [129, 1, .5]}, "Small Rift Drive": {id: 796, weight: 5,
  strength: 10, cost: 500, bitmap: 175}, __placeholder798__: {id: 798,
  bitmap: [131, 1, .5]}, __placeholder799__: {id: 799, bitmap: [130, 1, .5]},
  "Constant On Signal": {id: 802, weight: .25, strength: 2.5, cost: 100,
  bitmap: [95, .5, .5]}, "Control Block": {id: 803, weight: 1, strength: 10,
  cost: 100, bitmap: 99}, "AND Gate": {id: 804, weight: 1, strength: 10,
  cost: 100, bitmap: 103}, "NAND Gate": {id: 805, weight: 1, strength: 10,
  cost: 100, bitmap: 104}, "OR Gate": {id: 806, weight: 1, strength: 10,
  cost: 100, bitmap: 105}, "NOR Gate": {id: 807, weight: 1, strength: 10,
  cost: 100, bitmap: 106}, "XOR Gate": {id: 808, weight: 1, strength: 10,
  cost: 100, bitmap: 107}, "XNOR Gate": {id: 809, weight: 1, strength: 10,
  cost: 100, bitmap: 108}, "NOT Gate": {id: 810, weight: .5, strength: 5,
  cost: 100, bitmap: [109, 1, .5]}, LED: {id: 811, weight: .25,
  strength: 2.5, cost: 100, bitmap: [110, .5, .5]}, Delay: {id: 812,
  weight: .5, strength: 5, cost: 100, bitmap: [111, 1, .5]},
  "Constant Number": {id: 813, weight: .25, strength: 2.5, cost: 100,
  bitmap: [112, .5, .5]}, "Speed Sensor": {id: 814, weight: 1, strength: 10,
  cost: 100, bitmap: 113}, "Tilt Sensor": {id: 815, weight: 1,
  strength: 10, cost: 100, bitmap: 114}, "Distance Sensor": {id: 816,
  weight: 1, strength: 10, cost: 100, bitmap: 115}, "GPS Sensor": {id: 817,
  weight: 1, strength: 10, cost: 100, bitmap: 116}, "Numerical Inverter": {
  id: 818, weight: .5, strength: 5, cost: 100, bitmap: [117, 1, .5]}, Clamp:
  {id: 819, weight: .5, strength: 5, cost: 100, bitmap: [118, 1, .5]}, Abs: {
  id: 820, weight: .5, strength: 5, cost: 100, bitmap: [119, 1, .5]},
  "Threshold Gate": {id: 821, weight: .5, strength: 5, cost: 100,
  bitmap: [120, 1, .5]}, "Numerical Switchbox": {id: 822, weight: 1,
  strength: 10, cost: 100, bitmap: 121}, "Function Block": {id: 823,
  weight: 1, strength: 10, cost: 100, bitmap: 122}, "Memory Register": {
  id: 824, weight: 1, strength: 10, cost: 100, bitmap: 123}, Gauge: {
  id: 825, weight: .5, strength: 5, cost: 100, bitmap: [124, .5, 1]},
  Dial: {id: 826, weight: .25, strength: 2.5, cost: 100, bitmap: [125, .5,
  .5]}, "Digital Display": {id: 827, weight: .5, strength: 5, cost: 100,
  bitmap: [126, 1, .5]}, "Push To Toggle": {id: 828, weight: .5,
  strength: 5, cost: 100, bitmap: [127, 1, .5]}, __placeholder834__: {
  id: 834, bitmap: 176}, __placeholder835__: {id: 835, bitmap: 177},
  __placeholder836__: {id: 836, bitmap: 178}, __placeholder837__: {id: 837,
  bitmap: 179}, __placeholder838__: {id: 838, bitmap: 180},
  __placeholder839__: {id: 839, bitmap: 181}, __placeholder840__: {id: 840,
  bitmap: [134, 2, 2]}, __placeholder841__: {id: 841, bitmap: [164, 1, 2]},
  __placeholder842__: {id: 842, bitmap: [165, 1, 2]}, __placeholder843__: {
  id: 843, bitmap: [166, 1, 2]}, __placeholder844__: {id: 844,
  bitmap: 183}, __placeholder845__: {id: 845, bitmap: [184, 2, 2]},
  __placeholder846__: {id: 846, bitmap: [186, 2, 2]}, __placeholder847__: {
  id: 847, bitmap: 160}, __placeholder848__: {id: 848, bitmap: 161},
  __placeholder849__: {id: 849, bitmap: 162}, __placeholder850__: {id: 850,
  bitmap: [144, 4, 1]}, __placeholder851__: {id: 851, bitmap: [158, 2, 1]},
  __placeholder852__: {id: 852, bitmap: [148, 2, 3]}, __placeholder853__: {
  id: 853, bitmap: 163}, __placeholder854__: {id: 854, bitmap: [140, 4,
  1]}, __placeholder855__: {id: 855, bitmap: 182}, __placeholder856__: {
  id: 856, bitmap: 155}, __placeholder857__: {id: 857, bitmap: 154},
  __NULL__: {id: 1023, bitmap: [-1, -1, -1]}, Afterburner: {id: 1035,
  weight: 2, strength: 10, cost: 70, bitmap: 16}, "Dynamo Thruster": {
  id: 1037, weight: 3, strength: 15, cost: 90, bitmap: 30}, "T1 Rammer": {
  id: 1043, weight: 1, strength: 20, cost: 70, bitmap: 64},
  "T1 Nano Healer": {id: 1060, weight: 1, strength: 10, cost: 130,
  bitmap: 66}, __placeholder969__: {id: 969, weight: .169, cost: 6969,
  bitmap: 82}, "ControlBlock": {id: 1 + 1280, bitmap: 1071}, Gyro1: {
  id: 9 + 1280, bitmap: 1072}, Camera: {id: 20 + 1280, bitmap: 1073},
  Scope: {id: 115 + 1280, bitmap: 1075}, Beacon: {id: 114 + 1280,
  bitmap: 1074}, FuelTank0: {id: 2 + 1280, bitmap: 1079}, FuelTank1: {
  id: 42 + 1280, bitmap: [1098, 1, 2]}, FuelTank2: {id: 12 + 1280,
  bitmap: [1080, 2, 2]}, FuelTank4: {id: 146 + 1280, bitmap: [1082, 3, 3]},
  FuelTank3: {id: 147 + 1280, bitmap: [1085, 4, 4]}, DeutTank0: {
  id: 148 + 1280, bitmap: 1806}, DeutTank1: {id: 149 + 1280, bitmap: [1796,
  1, 2]}, DeutTank2: {id: 150 + 1280, bitmap: [1791, 2, 2]}, DeutTank4: {
  id: 151 + 1280, bitmap: [1809, 3, 3]}, DeutTank3: {id: 152 + 1280,
  bitmap: [1812, 4, 4]}, ExotTank0: {id: 153 + 1280, bitmap: 1134},
  ExotTank1: {id: 154 + 1280, bitmap: [1099, 1, 2]}, ExotTank2: {
  id: 155 + 1280, bitmap: [1116, 2, 2]}, ExotTank4: {id: 156 + 1280,
  bitmap: [1109, 3, 3]}, ExotTank3: {id: 157 + 1280, bitmap: [1121, 4, 4]},
  GlowTank0: {id: 158 + 1280, bitmap: 1511}, GlowTank2: {id: 159 + 1280,
  bitmap: [1521, 2, 2]}, GlowTank4: {id: 160 + 1280, bitmap: [1494, 3, 3]},
  Battery0: {id: 16 + 1280, bitmap: 1209}, Battery1: {id: 22 + 1280,
  bitmap: [1200, 2, 1]}, Battery2: {id: 17 + 1280, bitmap: [1182, 2, 2]},
  Battery4: {id: 161 + 1280, bitmap: [1217, 3, 3]}, Battery3: {
  id: 162 + 1280, bitmap: [1211, 4, 4]}, Pipe: {id: 163 + 1280,
  bitmap: 1384}, BackgroundPipe: {id: 164 + 1280, bitmap: 1974},
  Engine_Fuel1: {id: 3 + 1280, bitmap: 1171}, Engine_Fuel2: {id: 7 + 1280,
  bitmap: 1158}, Engine_Fuel4: {id: 178 + 1280, bitmap: [1143, 2, 2]},
  Engine_Fuel3: {id: 24 + 1280, bitmap: [1161, 1, 2]}, Engine_Hybrid1: {
  id: 8 + 1280, bitmap: 1366}, Engine_Exot1: {id: 179 + 1280, bitmap: [1963,
  1, 2]}, Engine_Power1: {id: 4 + 1280, bitmap: 1159}, Engine_Power2: {
  id: 6 + 1280, bitmap: 1160}, Engine_Power3: {id: 5 + 1280, bitmap: 1157},
  Engine_Power4: {id: 25 + 1280, bitmap: [1136, 1, 3]}, Engine_Big1: {
  id: 180 + 1280, bitmap: [1137, 2, 5]}, Engine_Big2: {id: 181 + 1280,
  bitmap: [1179, 3, 4]}, Engine_Big3: {id: 182 + 1280, bitmap: [1305, 4, 6]},
  Engine_Solid1: {id: 61 + 1280, bitmap: [1287, 1, 2]}, SolarBlock: {
  id: 216 + 1280, bitmap: 1988}, Reactor0: {id: 15 + 1280, bitmap: 1172,
  editor: "SolarPanel"}, SolarPanel1: {id: 210 + 1280, bitmap: [1162, 2, 1],
  editor: "SolarPanelMed"}, SolarPanel2: {id: 211 + 1280, bitmap: [1166, 4,
  1], editor: "SolarPanelBig"}, Reactor1: {id: 11 + 1280, bitmap: 1986},
  Reactor2: {id: 212 + 1280, bitmap: [1488, 2, 1]}, Reactor3: {id: 14 + 1280,
  bitmap: [1357, 2, 1]}, Reactor4: {id: 23 + 1280, bitmap: [1288, 2, 2]},
  Reactor5: {id: 21 + 1280, bitmap: [1959, 3, 3]}, Reactor8: {id: 213 + 1280,
  bitmap: [1354, 3, 4]}, Reactor6: {id: 214 + 1280, bitmap: [1175, 4, 4]},
  Reactor7: {id: 215 + 1280, bitmap: [1309, 5, 5]}, Armor_Basic: {
  id: 13 + 1280, bitmap: 1274}, Armor_BasicBig: {id: 242 + 1280,
  bitmap: [1290, 2, 2]}, Armor_Laser1: {id: 26 + 1280, bitmap: 1210},
  Armor_LaserWedge0: {id: 243 + 1280, bitmap: 1215}, Armor_LaserWedge1: {
  id: 244 + 1280, bitmap: [1224, 1, 2]}, Armor_LaserWedge2: {id: 245 + 1280,
  bitmap: [1216, 1, 3]}, Armor_LaserWedge3: {id: 246 + 1280, bitmap: [1243,
  1, 4]}, Armor_LaserWedge4: {id: 247 + 1280, bitmap: [1242, 1, 5]},
  Armor_Heavy: {id: 27 + 1280, bitmap: 1279}, Armor_HeavyWedge0: {
  id: 248 + 1280, bitmap: 1280}, Armor_HeavyWedge1: {id: 249 + 1280,
  bitmap: [1273, 1, 2]}, Armor_HeavyWedge2: {id: 250 + 1280, bitmap: [1246,
  1, 3]}, Armor_HeavyWedge3: {id: 251 + 1280, bitmap: [1244, 1, 4]},
  Armor_HeavyWedge4: {id: 252 + 1280, bitmap: [1245, 1, 5]}, Armor_Laser2: {
  id: 28 + 1280, bitmap: 1275}, Armor_Laser2Wedge0: {id: 253 + 1280,
  bitmap: 1265}, Armor_Laser2Wedge1: {id: 254 + 1280, bitmap: [1247, 1, 2]},
  Armor_Laser2Wedge2: {id: 255 + 1280, bitmap: [1248, 1, 3]},
  Armor_Laser2Wedge3: {id: 256 + 1280, bitmap: [1249, 1, 4]},
  Armor_Laser2Wedge4: {id: 257 + 1280, bitmap: [1250, 1, 5]}, Armor_Regen: {
  id: 29 + 1280, bitmap: 1385}, Shield1: {id: 31 + 1280, bitmap: 1304},
  Shield2: {id: 258 + 1280, bitmap: 1295}, Shield3: {id: 259 + 1280,
  bitmap: [1283, 3, 3]}, Weapon_bomb1: {id: 19 + 1280, bitmap: 1394},
  Weapon_bomb2: {id: 37 + 1280, bitmap: 1135}, Weapon_Laser1: {id: 35 + 1280,
  bitmap: 1367}, Weapon_Laser2: {id: 56 + 1280, bitmap: [1359, 1, 2]},
  Weapon_Laser3: {id: 60 + 1280, bitmap: [1360, 1, 2]}, Weapon_Machinegun1: {
  id: 55 + 1280, bitmap: 1375}, Weapon_Machinegun2: {id: 274 + 1280,
  bitmap: [1361, 1, 2]}, Weapon_Cannon1: {id: 275 + 1280, bitmap: [1362, 1,
  3]}, Weapon_Cannon2: {id: 276 + 1280, bitmap: [1377, 2, 6]},
  Weapon_PlasmaCannon1: {id: 277 + 1280, bitmap: [1393, 1, 2]},
  Weapon_PlasmaCannon2: {id: 278 + 1280, bitmap: [1379, 1, 4]},
  Weapon_NeutCannon1: {id: 279 + 1280, bitmap: [1415, 1, 4]}, Weapon_DMG1: {
  id: 58 + 1280, bitmap: 1376}, Weapon_Rocket1: {id: 64 + 1280,
  bitmap: [1469, 1, 3]}, Weapon_Rocket2: {id: 280 + 1280, bitmap: [1431, 2,
  7]}, Weapon_Railgun1: {id: 281 + 1280, bitmap: [1448, 1, 7]},
  Utility_Decoupler: {id: 34 + 1280, bitmap: 1403}, Utility_PipeDecoupler: {
  id: 315 + 1280, bitmap: 1966}, Utility_Hinge: {id: 306 + 1280,
  bitmap: 1479}, Utility_Piston: {id: 307 + 1280, bitmap: [1447, 1, 2]},
  Utility_Rotor: {id: 308 + 1280, bitmap: 1480}, Utility_Pump: {
  id: 309 + 1280, bitmap: 1532}, Utility_SolidPump: {id: 310 + 1280,
  bitmap: 1533}, Utility_VOID: {id: 311 + 1280, bitmap: 1523},
  Utility_PipePiston: {id: 316 + 1280, bitmap: [1964, 1, 2]},
  Utility_PipeRotor: {id: 317 + 1280, bitmap: 1965}, Utility_Docking1: {
  id: 36 + 1280, bitmap: 1534}, Utility_Docking2: {id: 54 + 1280,
  bitmap: 1582}, Utility_GPMP: {id: 62 + 1280, bitmap: 1451},
  Utility_Decelerator: {id: 312 + 1280, bitmap: 1574},
  Utility_DirectionalDecelerator: {id: 318 + 1280, bitmap: 2012},
  Utility_MobileSpawn: {id: 313 + 1280, bitmap: 1583}, Utility_Wheel1: {
  id: 65 + 1280, bitmap: 1460}, Utility_Wheel2: {id: 314 + 1280,
  bitmap: [1461, 2, 2]}, Utility_Sign: {id: 319 + 1280, bitmap: 1990},
  Utility_TogglableCollider: {id: 320 + 1280, bitmap: 1987}, Drill0: {
  id: 321 + 1280, bitmap: 1816, editor: "Anchor"}, Drill1: {id: 338 + 1280,
  bitmap: [1520, 1, 2]}, Drill2: {id: 339 + 1280, bitmap: [1497, 2, 4]},
  Drill3: {id: 340 + 1280, bitmap: [1463, 3, 8]}, Grinder: {id: 358 + 1280,
  bitmap: 1817}, Excavator1: {id: 341 + 1280, bitmap: [1584, 3, 2]},
  Excavator2: {id: 342 + 1280, bitmap: [1732, 6, 4]}, ExotCollector1: {
  id: 343 + 1280, bitmap: [1539, 5, 5]}, Cargo0: {id: 344 + 1280,
  bitmap: 1573}, Cargo1: {id: 345 + 1280, bitmap: [1571, 2, 2]}, Cargo2: {
  id: 346 + 1280, bitmap: [1535, 4, 4]}, Converter_Electrolyzer1: {
  id: 347 + 1280, bitmap: [1714, 1, 2]}, Converter_Electrolyzer2: {
  id: 348 + 1280, bitmap: [1712, 2, 4]}, Converter_Electrolyzer3: {
  id: 349 + 1280, bitmap: [1661, 4, 8]}, Converter_Deut1: {id: 350 + 1280,
  bitmap: [1696, 1, 2]}, Converter_Deut2: {id: 351 + 1280, bitmap: [1710, 2,
  4]}, Converter_Deut3: {id: 352 + 1280, bitmap: [1638, 4, 8]},
  Converter_Exot1: {id: 353 + 1280, bitmap: [1411, 2, 4]}, Converter_Exot2: {
  id: 354 + 1280, bitmap: [1389, 4, 8]}, Converter_Smelter1: {id: 355 + 1280,
  bitmap: [1587, 2, 2]}, Converter_Smelter2: {id: 356 + 1280, bitmap: [1602,
  4, 4]}, Converter_Smelter3: {id: 357 + 1280, bitmap: [1589, 4, 8]},
  Logic_LaserSensor: {id: 370 + 1280, bitmap: 1606}, Logic_LaserEmitter: {
  id: 382 + 1280, bitmap: 2013}, Logic_LaserReciever: {id: 383 + 1280,
  bitmap: 1980}, Logic_VelocitySensor: {id: 371 + 1280, bitmap: 1615},
  Logic_AngVelocitySensor: {id: 372 + 1280, bitmap: 1624},
  Logic_ResourceSensor: {id: 373 + 1280, bitmap: 1633}, Logic_HPSensor: {
  id: 384 + 1280, bitmap: 2014}, Logic_AngleSensor: {id: 385 + 1280,
  bitmap: 1995}, Logic_CoordSensor: {id: 386 + 1280, bitmap: 1989},
  Logic_AltitudeSensor: {id: 387 + 1280, bitmap: 1996}, Logic_Button: {
  id: 374 + 1280, bitmap: 1642}, Logic_Antenna: {id: 388 + 1280,
  bitmap: [1962, 1, 2]}, Logic_Screen: {id: 375 + 1280, bitmap: 1651},
  Logic_Timer: {id: 376 + 1280, bitmap: 1660}, Logic_Switch: {id: 377 + 1280,
  bitmap: 1669}, Logic_Randomizer: {id: 378 + 1280, bitmap: 1678},
  Logic_AndGate: {id: 379 + 1280, bitmap: 1076}, Logic_OrGate: {
  id: 380 + 1280, bitmap: 1077}, Logic_XorGate: {id: 381 + 1280,
  bitmap: 1078}, Decorative_Nose0: {id: 43 + 1280, bitmap: 1803},
  Decorative_Nose1: {id: 46 + 1280, bitmap: [1807, 2, 1]},
  Decorative_Nose2: {id: 45 + 1280, bitmap: [1748, 2, 2]},
  Decorative_BackgroundBlock1: {id: 402 + 1280, bitmap: 1687},
  Decorative_Block1: {id: 49 + 1280, bitmap: 1804}, Decorative_Block2: {
  id: 50 + 1280, bitmap: [1771, 1, 2]}, Decorative_Wedge0: {id: 44 + 1280,
  bitmap: 1802}, Decorative_Wedge3: {id: 403 + 1280, bitmap: 1767},
  Decorative_Wedge1: {id: 47 + 1280, bitmap: [1768, 1, 2]},
  Decorative_Wedge2: {id: 48 + 1280, bitmap: [1786, 1, 2]},
  Decorative_Wedge4: {id: 404 + 1280, bitmap: [1769, 1, 3]},
  Decorative_Wedge7: {id: 405 + 1280, bitmap: [1776, 1, 3]},
  Decorative_Wedge5: {id: 406 + 1280, bitmap: [1770, 1, 4]},
  Decorative_Wedge8: {id: 407 + 1280, bitmap: [1766, 1, 4]},
  Decorative_Wedge6: {id: 408 + 1280, bitmap: [1746, 1, 5]},
  Decorative_Wedge9: {id: 409 + 1280, bitmap: [1747, 1, 5]},
  Decorative_ConvexCurvedArmor1: {id: 410 + 1280, bitmap: 1914},
  Decorative_HollowConvexCurvedArmor1: {id: 411 + 1280, bitmap: 1851},
  Decorative_ConvexCurvedArmor2: {id: 412 + 1280, bitmap: [1915, 1, 2]},
  Decorative_HollowConvexCurvedArmor2: {id: 413 + 1280, bitmap: [1837, 1,
  2]}, Decorative_ConvexCurvedArmor3: {id: 414 + 1280, bitmap: [1921, 1, 3]},
  Decorative_HollowConvexCurvedArmor3: {id: 415 + 1280, bitmap: [1850, 1,
  3]}, Decorative_ConvexCurvedArmor4: {id: 416 + 1280, bitmap: [1923, 1, 4]},
  Decorative_HollowConvexCurvedArmor4: {id: 417 + 1280, bitmap: [1849, 1,
  4]}, Decorative_ConvexCurvedArmor5: {id: 418 + 1280, bitmap: [1916, 1, 5]},
  Decorative_HollowConvexCurvedArmor5: {id: 419 + 1280, bitmap: [1836, 1,
  5]}, Decorative_ConcaveCurvedArmor1: {id: 420 + 1280, bitmap: 1955},
  Decorative_HollowConcaveCurvedArmor1: {id: 421 + 1280, bitmap: 1880},
  Decorative_ConcaveCurvedArmor2: {id: 422 + 1280, bitmap: [1948, 1, 2]},
  Decorative_HollowConcaveCurvedArmor2: {id: 423 + 1280, bitmap: [1870, 1,
  2]}, Decorative_ConcaveCurvedArmor3: {id: 424 + 1280, bitmap: [1940, 1,
  3]}, Decorative_HollowConcaveCurvedArmor3: {id: 425 + 1280, bitmap: [1860,
  1, 3]}, Decorative_ConcaveCurvedArmor4: {id: 426 + 1280, bitmap: [1919, 1,
  4]}, Decorative_HollowConcaveCurvedArmor4: {id: 427 + 1280, bitmap: [1826,
  1, 4]}, Decorative_ConcaveCurvedArmor5: {id: 428 + 1280, bitmap: [1920, 1,
  5]}, Decorative_HollowConcaveCurvedArmor5: {id: 429 + 1280, bitmap: [1825,
  1, 5]}, Decorative_HalfSpikeArmor: {id: 430 + 1280, bitmap: 1911},
  Decorative_HollowHalfSpikeArmor: {id: 431 + 1280, bitmap: 1881},
  Decorative_SpikeArmor1: {id: 432 + 1280, bitmap: 1913},
  Decorative_HollowSpikeArmor1: {id: 433 + 1280, bitmap: 1877},
  Decorative_SpikeArmor2: {id: 434 + 1280, bitmap: [1922, 1, 2]},
  Decorative_HollowSpikeArmor2: {id: 435 + 1280, bitmap: [1862, 1, 2]},
  Decorative_SpikeArmor3: {id: 436 + 1280, bitmap: [1933, 1, 3]},
  Decorative_HollowSpikeArmor3: {id: 437 + 1280, bitmap: [1855, 1, 3]},
  Decorative_SpikeArmor4: {id: 438 + 1280, bitmap: [1917, 1, 4]},
  Decorative_HollowSpikeArmor4: {id: 439 + 1280, bitmap: [1848, 1, 4]},
  Decorative_SpikeArmor5: {id: 440 + 1280, bitmap: [1918, 1, 5]},
  Decorative_HollowSpikeArmor5: {id: 441 + 1280, bitmap: [1838, 1, 5]},
  Decorative_RoundSpikeArmor5: {id: 442 + 1280, bitmap: 1912},
  Decorative_HollowRoundSpikeArmor5: {id: 443 + 1280, bitmap: 1882},
  Decorative_TitaniumBeamArmor1: {id: 444 + 1280, bitmap: 1899},
  Decorative_HollowTitaniumBeamArmor1: {id: 445 + 1280, bitmap: 1888},
  Decorative_TitaniumBeamArmor2: {id: 446 + 1280, bitmap: 1898},
  Decorative_HollowTitaniumBeamArmor2: {id: 447 + 1280, bitmap: 1889},
  Decorative_TitaniumBeamArmor3: {id: 448 + 1280, bitmap: 1894},
  Decorative_HollowTitaniumBeamArmor3: {id: 449 + 1280, bitmap: 1890},
  Decorative_TitaniumBeamArmor4: {id: 450 + 1280, bitmap: 1895},
  Decorative_HollowTitaniumBeamArmor4: {id: 451 + 1280, bitmap: 1891},
  Decorative_TitaniumBeamArmor5: {id: 452 + 1280, bitmap: 1896},
  Decorative_HollowTitaniumBeamArmor5: {id: 453 + 1280, bitmap: 1892},
  Decorative_TitaniumDiamondShapedArmor: {id: 454 + 1280, bitmap: 1897},
  Decorative_HollowTitaniumDiamondShapedArmor: {id: 455 + 1280,
  bitmap: 1893}, Decorative_WireConnector1: {id: 456 + 1280, bitmap: 1883},
  Decorative_WireConnector2: {id: 457 + 1280, bitmap: 1884},
  Decorative_WireConnector3: {id: 458 + 1280, bitmap: 1885},
  Decorative_WireConnector4: {id: 459 + 1280, bitmap: 1886},
  Decorative_ThinDiagonalBeam1: {id: 460 + 1280, bitmap: 1953},
  Decorative_SmallTriangle1: {id: 461 + 1280, bitmap: 1900},
  Decorative_SmallSquare1: {id: 462 + 1280, bitmap: 1901},
  Decorative_DiagonalBeam1: {id: 463 + 1280, bitmap: 1902},
  Decorative_DiagonalBeam2: {id: 464 + 1280, bitmap: 1903},
  Decorative_HalfSquare1: {id: 465 + 1280, bitmap: 1904},
  Decorative_HalfSharpSquare1: {id: 466 + 1280, bitmap: 1905},
  Decorative_LongSmallTriangle1: {id: 467 + 1280, bitmap: 1906},
  Decorative_LBeam1: {id: 468 + 1280, bitmap: 1907},
  Decorative_DiagonalLBeam1: {id: 469 + 1280, bitmap: 1908},
  Decorative_InDentedTriangle1: {id: 470 + 1280, bitmap: 1909},
  Decorative_OutDentedTriangle1: {id: 471 + 1280, bitmap: 1910},
  Decorative_Antenna0: {id: 51 + 1280, bitmap: [1772, 1, 2]},
  Decorative_Antenna1: {id: 59 + 1280, bitmap: [1789, 2, 2]}, Cheat_Source: {
  id: 472 + 1280, bitmap: 1997}, Cheat_Laser: {id: 473 + 1280, bitmap: 1998},
  Cheat_Engine: {id: 474 + 1280, bitmap: 1999}, Cheat_Gyro: {id: 475 + 1280,
  bitmap: 2000}, Cheat_GPMP: {id: 476 + 1280, bitmap: 2005},
  Cheat_Decelerator: {id: 477 + 1280, bitmap: 2006}, Cheat_ImmobilityBlock: {
  id: 478 + 1280, bitmap: 2007}, Cheat_IndestructibilityBlock: {
  id: 479 + 1280, bitmap: 2008}, Cheat_Ballast: {id: 480 + 1280,
  bitmap: 2009}, Cheat_Shield: {id: 481 + 1280, bitmap: 2010}, Cheat_Bomb: {
  id: 482 + 1280, bitmap: 2011}, Cheat_Structure: {id: 483 + 1280,
  bitmap: 1887}, Armor_Cheat1: {id: 484 + 1280, bitmap: 2004},
  Armor_CheatWedge0: {id: 485 + 1280, bitmap: 1981}, Armor_CheatWedge1: {
  id: 486 + 1280, bitmap: [1982, 1, 2]}, Armor_CheatWedge2: {id: 487 + 1280,
  bitmap: [1983, 1, 3]}, Armor_CheatWedge3: {id: 488 + 1280, bitmap: [1975,
  1, 4]}, Armor_CheatWedge4: {id: 489 + 1280, bitmap: [1967, 1, 5]},
  ControlBlock_Probe: {id: 10 + 1280, bitmap: 1074}
});
Data.titles =
  /** @type {const} */
  ({
  
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
  969: "Clamp Chan",
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
  1060: "T1 Nano Healer",
  1281: "Cockpit",
  1282: "Tiny hydrogen tank",
  1283: "Chemical fuel engine",
  1284: "Photon engine",
  1285: "Neutron engine",
  1286: "Ion engine",
  1287: "Chemical fuel engine MK2",
  1288: "Plasma engine",
  1289: "Gyroscope",
  1290: "Probe core",
  1291: "Photon reactor",
  1292: "Medium hydrogen tank",
  1293: "Titanium armor",
  1294: "Exotic matter reactor",
  1295: "Small solar panel",
  1296: "Tiny battery",
  1297: "Medium battery",
  1299: "Bomb",
  1300: "Camera",
  1301: "Isotope-Z reactor",
  1302: "Small battery",
  1303: "Nuclear reactor",
  1304: "Nuclear engine",
  1305: "Deuterium engine",
  1306: "Insulator armor",
  1307: "Quartz armor",
  1308: "Bizarium armor",
  1309: "Regenerating armor",
  1311: "Basic force shield",
  1314: "Decoupler",
  1315: "Basic laser",
  1316: "Docking unit",
  1317: "Deuterium bomb",
  1322: "Small hydrogen tank",
  1323: "Small nose",
  1324: "1*1 wedge",
  1325: "Large nose",
  1326: "Medium nose",
  1327: "1*2 wedge",
  1328: "1*2 wedge",
  1329: "Structural block",
  1330: "Medium structural block",
  1331: "Small decorative antenna",
  1334: "Fuel docking unit",
  1335: "Machinegun",
  1336: "Heavy laser",
  1338: "Repulsion cannon",
  1339: "Medium decorative antenna",
  1340: "Heavy laser",
  1341: "Solid fuel booster",
  1342: "Gravity generator",
  1344: "Missile launcher",
  1345: "Small wheel",
  1394: "Beacon",
  1395: "Scope",
  1426: "Large hydrogen tank",
  1427: "Huge hydrogen tank",
  1428: "Tiny deuterium tank",
  1429: "Small deuterium tank",
  1430: "Medium deuterium tank",
  1431: "Large deuterium tank",
  1432: "Huge deuterium tank",
  1433: "Tiny exotic matter tank",
  1434: "Small exotic matter tank",
  1435: "Medium exotic matter tank",
  1436: "Large exotic matter tank",
  1437: "Huge exotic matter tank",
  1438: "Small GLOW tank",
  1439: "Medium GLOW tank",
  1440: "Large GLOW tank",
  1441: "Large battery",
  1442: "Huge battery",
  1443: "Pipe",
  1444: "Background pipe",
  1458: "Chemical fuel engine MK3",
  1459: "Exotic matter engine",
  1460: "Deuterium engine MK2",
  1461: "Fusion engine",
  1462: "Unstable matter engine",
  1490: "Medium solar panel",
  1491: "Large solar panel",
  1492: "Hydrogen generator",
  1493: "Deuterium reactor",
  1494: "Fusion reactor",
  1495: "Unstable matter reactor",
  1496: "Solar block",
  1522: "Heavy titanium armor",
  1523: "1*1 insulator wedge",
  1524: "1*2 insulator wedge",
  1525: "1*3 insulator wedge",
  1526: "1*4 insulator wedge",
  1527: "1*5 insulator wedge",
  1528: "1*1 quartz wedge",
  1529: "1*2 quartz wedge",
  1530: "1*3 quartz wedge",
  1531: "1*4 quartz wedge",
  1532: "1*5 quartz wedge",
  1533: "1*1 bizarium wedge",
  1534: "1*2 bizarium wedge",
  1535: "1*3 bizarium wedge",
  1536: "1*4 bizarium wedge",
  1537: "1*5 bizarium wedge",
  1538: "Strong force shield",
  1539: "Large force shield",
  1554: "Autocannon",
  1555: "Cannon",
  1556: "Heavy cannon",
  1557: "Plasma gun",
  1558: "Heavy plasma gun",
  1559: "Neutron blaster",
  1560: "Nuclear missile launcher",
  1561: "Railgun",
  1586: "Hinge",
  1587: "Piston",
  1588: "Rotor",
  1589: "Resource pump",
  1590: "Solid resource transporter",
  1591: "Resource vacuum",
  1592: "Decelerator",
  1593: "Mobile spawnpoint",
  1594: "Big wheel",
  1595: "Pipe decoupler",
  1596: "Pipe piston",
  1597: "Pipe rotor",
  1598: "Directional decelerator",
  1599: "Sign",
  1600: "Togglable collider",
  1601: "Anchor",
  1618: "Small drill",
  1619: "Medium drill",
  1620: "Large drill",
  1621: "Small excavator",
  1622: "Medium excavator",
  1623: "Exotic matter collector",
  1624: "Small container",
  1625: "Medium container",
  1626: "Large container",
  1627: "Small electrolyzer",
  1628: "Medium electrolyzer",
  1629: "Large electrolyzer",
  1630: "Small deuterium mixer",
  1631: "Medium deuterium mixer",
  1632: "Large deuterium mixer",
  1633: "Small exotic matter smelter",
  1634: "Large exotic matter smelter",
  1635: "Small smelter",
  1636: "Medium smelter",
  1637: "Large smelter",
  1638: "Grinder",
  1650: "Laser sensor",
  1651: "Velocity sensor",
  1652: "Angular velocity sensor",
  1653: "Resource sensor",
  1654: "1*3 wedge",
  1655: "Screen",
  1656: "Timer",
  1657: "Switch",
  1658: "Randomizer",
  1659: "AND-gate",
  1660: "OR-gate",
  1661: "XOR-gate",
  1662: "Beam emitter",
  1663: "Beam reciever",
  1664: "Health sensor",
  1665: "Angle sensor",
  1666: "Position sensor",
  1667: "Altitude sensor",
  1668: "Antenna",
  1682: "Background block",
  1683: "1*1 wedge",
  1684: "1*3 wedge",
  1685: "1*3 wedge",
  1686: "1*4 wedge",
  1687: "1*4 wedge",
  1688: "1*5 wedge",
  1689: "1*5 wedge",
  1690: "1*1 Convex curved armor",
  1691: "1*1 Convex curved armor",
  1692: "1*2 Convex curved armor",
  1693: "1*2 Convex curved armor",
  1694: "1*3 Convex curved armor",
  1695: "1*3 Convex curved armor",
  1696: "1*4 Convex curved armor",
  1697: "1*4 Convex curved armor",
  1698: "1*5 Convex curved armor",
  1699: "1*5 Convex curved armor",
  1700: "1*1 Concave curved armor",
  1701: "1*1 Concave curved armor",
  1702: "1*2 Concave curved armor",
  1703: "1*2 Concave curved armor",
  1704: "1*3 Concave curved armor",
  1705: "1*3 Concave curved armor",
  1706: "1*4 Concave curved armor",
  1707: "1*4 Concave curved armor",
  1708: "1*5 Concave curved armor",
  1709: "1*5 Concave curved armor",
  1710: "Half spike",
  1711: "Half spike",
  1712: "Spike",
  1713: "Spike",
  1714: "Spike",
  1715: "Spike",
  1716: "Spike",
  1717: "Spike",
  1718: "Spike",
  1719: "Spike",
  1720: "Spike",
  1721: "Spike",
  1722: "Round spike",
  1723: "Round spike",
  1724: "Titanium beam",
  1725: "Titanium beam",
  1726: "Titanium beam",
  1727: "Titanium beam",
  1728: "Titanium beam",
  1729: "Titanium beam",
  1730: "Titanium beam",
  1731: "Titanium beam",
  1732: "Titanium beam",
  1733: "Titanium beam",
  1734: "Titanium diamond shaped armor",
  1735: "Titanium diamond shaped armor",
  1736: "Wire connector",
  1737: "Wire connector",
  1738: "Wire connector",
  1739: "Wire connector",
  1740: "Thin diagonal beam",
  1741: "Small triangle",
  1742: "Small square",
  1743: "Diagonal beam",
  1744: "Diagonal beam",
  1745: "Half square",
  1746: "Half sharp square",
  1747: "Long small triangle",
  1748: "L-beam",
  1749: "Diagonal L-beam",
  1750: "In dented triangle",
  1751: "Out dented triangle",
  1752: "Resource source",
  1753: "Cheat laser",
  1754: "Cheat engine",
  1755: "Cheat gyroscpe",
  1756: "Cheat gravity generator",
  1757: "Cheat decelerator",
  1758: "Cheat immobility block",
  1759: "Cheat indestructibility block",
  1760: "Cheat ballast",
  1761: "Cheat force shield",
  1762: "Cheat bomb",
  1763: "Cheat structure",
  1764: "Indestructible armor",
  1765: "1*1 Indestructible wedge",
  1766: "1*2 Indestructible wedge",
  1767: "1*3 Indestructible wedge",
  1768: "1*4 Indestructible wedge",
  1769: "1*5 Indestructible wedge"
});
/** @type {any} */
Data.temp = {};
/** @template {"colors"|"blocks"} T @param {T} src */
Data.generateNames = function (src) {
  var names =
    /** Names by ID
     * @type {{length:number}&{[K in keyof typeof Data[T]as(typeof Data[T][
     * K] extends number?typeof Data[T][K]:typeof Data[T][K]["id"])]:K}&
     * {[K in number as Exclude<K,keyof typeof Data[T]>]:
     * keyof typeof Data[T]|undefined}}
     */
    ({length: 0}),
    data = Data[src];
  for (var p in data) {
    /** one data item: color id, block data */
    var item = data[p];
    var id = typeof item == "object" && item ? item.id : item;
    if (id in names)
      throw new Error("Duplicit name at id: " + id);
    names[id] = p;
    if (id >= names.length)
      names.length = id + 1;
  }
  return names;
};
/** @template {"colors"|"blocks"} T @param {T} src */
Data.generateIDs = function (src) {
  var data = Data[src], ids =
    /** IDs by Name is missing the undefined case, isn't 100% type safe
     * @type {{[K in keyof typeof Data[T]]:typeof Data[T][
     * K] extends number?typeof Data[T][K]:typeof Data[T][K]["id"]}}
     */
    ({});
  for (var p in data) {
    /** @type {BlockDataSimple|number} */
    var item = data[p];
    ids[p] = typeof item == "object" ? item.id : item;
  }
  return ids;
};
/** @template {keyof BlockData} T @param {T} type */
Data.generateValues = function (type) {
  /** @type {{[key:string]:BlockData[T]|undefined}} Values by Name */
  var values = {},
    data = Data.blocks,
    /** @type {BlockDataSimple[keyof BlockData]} */
    val;
  for (var p in data)
    if ((val = data[p][type]) !== UDF) {
      if (data[p].id in values)
        throw new Error("Duplicit value id: " + data[p].id);
      values[data[p].id] =
        // v.0.2.20 cast because of touples, assuming shallow copy won't bug
        /** @type {BlockData[T]} */
        (val instanceof Array ? val.slice() : val);
    }
  return values;
};
/** @param {typeof Edit|typeof Ship} namespace */
Data.nameMethods = function (namespace) {
  if (namespace === Edit)
    var names = ["Edit."];
  else if (namespace === Ship)
    names = ["Ship."];
  else
    return;
  var scopes = [namespace], path = "";
  function setMethodName(proprety) {
    if (scopes.indexOf(proprety) !== -1)
      return;
    if (typeof proprety == "function")
      proprety.methodName = path + p;
    else if (typeof proprety != "object")
      return;
    scopes.push(proprety);
    names.push(path + p + ".");
  }
  for (var i = 0; i < scopes.length; i++) {
    var current = scopes[i];
    path = "" + names.shift();
    for (var p in current)
      OP.call(current, p) && setMethodName(current[p]);
    path += "prototype.";
    var prototype = "prototype" in current ?
      current.prototype || null :
      null;
    for (var p in prototype)
      OP.call(prototype, p) && setMethodName(prototype[p]);
  }
};
Data.estimateIdentifier = new RegExp("^[^f]*function\\s+([_$a-zA-Z\\xA0-\
\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*)");
/** @param {Function&{methodName?:string,name?:string}} fn */
Data.getFunctionName = function (fn) {
  if (typeof fn != "function") {
    console.error(typeof fn + " is not a function!");
    return "(error)";
  }
  var s = fn.methodName || fn.name;
  return typeof s == "string" ?
    s :
    (Data.estimateIdentifier.exec(
      Function.prototype.toString.call(fn)) || ["", ""])[1];
};
Data.dispose = function () {
  if (!Object.keys(Data.blocks).length)
    return "Data.blocks had already been disposed of";
  for (var p in Data.blocks)
    if (OP.call(Data.blocks, p))
      delete Data.blocks[p];
  return "disposed of Data.blocks";
};
/** May throw error, use asynchronously! @throws {Error} */
Data.checkTitles = function () {
  if (!Object.keys(Data.blocks).length)
    throw new Error();
  var l = 0, defined = [false], blocksData = Data.blocks;
  /** @type {number[]} */
  var errors = [];
  for (var name in blocksData)
    if (OP.call(blocksData, name)) {
      var id = blocksData[name].id;
      defined[id > l ? l = id : id] = true;
      if (id in Data.titles)
        continue;
      errors.push(id);
      if (errors.length > 5)
        continue;
      console.error("missing title of block: " + name + " id: " + id);
    }
  if (errors.length > 4) {
    var blockNames = Block.NAME || Data.generateNames("blocks");
    for (var i = errors.length, titles = {}; i-- > 0;)
      titles[errors[i]] = "__NEW__" + blockNames[errors[i]];
    for (id in Data.titles)
      if (OP.call(Data.titles, id))
        titles[id] = Data.titles[id];
    name = JSON.stringify(titles).slice(1, -1);
    console.log("{\n  " + name.replace(/"(\d+)": */g, function (m, g1) {
        return "\n  " + g1 + ": ";
      }) + "\n}");
  }
  for (; l-- > 1280;)
    if (!defined[l] && l in Data.titles)
      console.warn("title of undefined block id:" + l + " !");
  for (l > 1024 ? l = 1024 : 0; l-- > 0;)
    if (!defined[l] && l in Data.titles)
      console.warn("title of undefined block id:" + l + " !");
};
// remove Object.freeze(Data); in case of causing issues
Object.freeze(Data);

/** @typedef {Block|LogicBlock} ShipBlock */
/**
 * @callback LExec @param {Logic<2|3>[]} arg
 * @param {LogicBlock} block @param {Ship} ship @returns {void} */
/**
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
/** @param {...{k:number,x:number,y:number}[]|string|number|LExec} args */
Logic.generateLogic = function () {
  /** @type {{[key:number]:Logic[]&{exec:LExec|LExec&safe}|undefined}} */
  var map = {},
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
    if (arg === UDF)
      return console.warn("Found \"undefined\" type" + AT);
    var nodesDef = typeof arg == "string" ?
      defs[Number(arg)] :
      defs[defs.length] = arg,
      nodes = [];
    (map[l++] = nodes =
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
      OP.call(map, l) ?
        console.error("Property ", l++, "already exists" + AT) :
        setLogic(a[i]);
  return map;
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
/** entire oject is frozen */
Logic.VALUE = Object.freeze(Logic.generateLogic(
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
  "7", "7", "7",
  // GPS Sensor
  // def8
  [{k: 3, x: -1, y: 0}, {k: 3, x: 1, y: 0}],
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
/** addDefault but for Logic - if property contains nodeIndex data it
 * will use them to reassemble these connections, to reassamble them
 * properly Logic.reassemble must be used on completed blocks, otherwise
 * be aware of and make sure to not have nodeIndex property on new block!
 * @param {string|number} name @param {safe} property
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
    ],
    /** @type {(number|undefined)[]} */
    nodeIndex = property.nodeIndex instanceof Array ?
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
    /** @type {number} */
    // BE AWARE nodeIndex is nor DBV property here, it's old format
    // connections references like extracted from control property
    var index = nodeIndex[i] || 0, item = logics[index];
    // logicDef defines what node is going to be specified/listed
    if (logicDef[i].type > 1) {
      // ^if it is output it will later or might already be referenced
      // by input, so it needs to be replaced to presented index
      // index is not taken
      if (!item) {
        logics[index || (index = l)] = node;
        continue;
      }
      // 'huh!' case check (checking for unsupposed wierd case)
      if (typeof index != "number" || index < 1)
        console.error("logics contain property with non-number key" +
          " or less then 1, at Logic.addLogic().");
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
    // else it is input
    node.pairs = index || -1;
    // else just take first unassigned index for input
    logics[index = l] = node;
    // there's the requirement of Logic.reassemble to be used
    // due to the lack of blocks list while blocks are under construcion
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
// Logic.checkNodeOwners unused code removed in v.0.2.7

/** @namespace @typedef {never} Color @returns {never} */
function Color() {
  throw new TypeError("Illegal constructor");
}
/** object is frozen */
Color.NAME = Object.freeze(Data.generateNames("colors"));
/** object is frozen */
Color.ID = Object.freeze(Data.generateIDs("colors"));
/** object is frozen */
Color.NOW = Object.freeze(Data.generateValues("now"));
/** 10:Lololipop replacement, 15:Steel replacement */
Color.db1ToDb3 = Object.freeze({
  0: "White", 1: "Dark Gray", 3: "Light Blue", 4: "Orange", 5: "Red",
  6: "Lime", 7: "Yellow", 8: "Festive Red", 9: "Light Gray",
  10: "Red Hazard Stripes", 11:  "Yellow Hazard Stripes", 12: "Fuel",
  13: "Wine", 14: "Wood", 15: "White Hazard Stripes", 16: "Purple",
  17: "Pink", 18: "Festive Green", 19: "Festive Duck"
});
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
    return "Lime";
  if (/__placeholder776__|Afterburner/.test(name))
    return "Red";
  var id = Block.ID[name];
  if ((id > 1279 && id < 2048) || Color.colorlessRegexp.test(name))
    return null;
  return "White";
};
Color.colorlessRegexp = new RegExp("Struct|Glass Block|Glass Wedge|Sol\
ar Block|Solar Panel|Hinge|Piston|Ghost Block|Gauge|Dial|Digital Displ\
ay|__placeholder(?:84[0-26-9]|85[0-3])__");

/** @typedef {()=>Physics.Ship} initShipPhysics */
/** class is frozen Block Physics */
function Physics() {
  this.reporter = "";
  Object.seal(this);
}
// Only the Physics class initially, better classification system
// should be decided after
// /** class is frozen Block Physics */
// Physics.Block = PShip function () {
//   this.enabled = false;
// };
/** initPhysics is executed in context of Block constructor, the brackets
 * keep ts from asssiming it's PBlock property and uses its (this)context
 * @readonly @this {Block} @type {()=>Physics} *///@ts-expect-error
Physics.INIT = function initBlockPhysics() {
  var blockPhysics = new Physics();
  if (this instanceof Block)
    this.getPhysics = function () {
      return blockPhysics;
    };
  return blockPhysics;
};
/** @readonly *///@ts-expect-error
Physics.rend = {reporter: false};
/** @readonly class is frozen Ship Physics @param {Ship} ship */
Physics.Ship = function PShip(ship) {
  /** @type {string[]} list of selected inputs (checked checkbox) */
  this.selectedInputs = [];
};
/** @type {initShipPhysics} @readonly *///@ts-expect-error
Physics.Ship.INIT = (function initShipPhysics() {
  if (!(this instanceof Ship))
    throw new TypeError("initShipPhysics used not on Ship.");
  var shipPhysics = new Physics.Ship(this);
  this.getPhysics = function () {
    return shipPhysics;
  };
  return shipPhysics;
});
Object.freeze(Object.freeze(Physics).Ship);

/** letter case of block names doesn't matter when loaded by game,
 * Block name definitions require strict letter cases here */
/**
 * @typedef {[x:number,y:number,z:number]} XYZPosition
 * @typedef {[axis:0|1|2,sign:boolean,rot:0|1|2|3]} Rotation
 * @typedef {keyof typeof Color.ID|""|null} Colors
 * @typedef {{customParameter?:(number|string|[number,number,number,
 * number])[],nodeIndex?:number[],weldGroup?:number}} BlockProps
 * @param {string} name
 * @param {XYZPosition} pos DBV to DR: [-: 0, x: p[0] * 2, y: p[1] * 2]
 * @param {Rotation} rot DBV to DR: [-: 0, f: f, r: Math.floor(r / 90)]
 * @param {{[key:string]:unknown}|0} [prop={color:""}]
 * @param {keyof typeof Color.ID|""|null} [color=""] */
function Block(name, pos, rot, prop, color) {
  this.internalName = name;
  /** DBV: [not-used, x, y] */
  this.position = pos;
  /** DBV: [not-used, flipped, cunterclockwise] */
  this.rotation = rot;
  prop = prop || {};
  prop.color = color !== UDF ?
    color :
    prop.color === null || prop.color ? prop.color : "";
  this.properties =
    /** @type {{[key:string]:unknown,color:Colors}&BlockProps} */
    (prop);
  this.getPhysics = Physics.INIT;
  Object.seal(this);
}
// NOTE that blocks definitions will be version dependant over time
// (allows cross version editing) there is just no need to implement it yet
/** object is frozen @readonly *///@ts-expect-error
Block.NAME = Object.freeze(Data.generateNames("blocks"));
/** object is frozen @readonly *///@ts-expect-error
Block.ID = Object.freeze(Data.generateIDs("blocks"));
/** object is frozen @readonly *///@ts-expect-error
Block.TITLE = Object.freeze(Data.titles);
/** @readonly @type {{[key:number]:number|undefined}} (Mass) *///@ts-expect-error
// 799: 1, Inversed Dock?
Block.WEIGHT = Data.generateValues("weight");
/** @readonly @type {{[key:number]:number|undefined}} (Integrity) */
//@ts-expect-error
Block.STRENGTH = Data.generateValues("strength");
/** number = Electricity Units per second
 * and in case of thruster when they are set to 1 000 000 (1M) force,
 * [number,number] = [Electricity Units, amout of seconds per use]
 * second @type {{[key:number]:number|[number,number]|undefined}}
 * @readonly (Electricity) *///@ts-expect-error
Block.ENERGY_USE = Data.generateValues("energy_use");
/** number = contained units
 * @readonly @type {{[key:number]:number|undefined}} (Electricity) */
//@ts-expect-error
Block.ENERGY_STORE = Data.generateValues("energy_store");
/** number = Liters of Fuel per second,
 * and in case of thruster when they are set to 1 000 000 (1M) force,
 * [number,number] = [Liters of fuel, amout of seconds per use]
 * @type {{[key:number]:number|[number,number]|undefined}} (Fuel)
 * @readonly *///@ts-expect-error
Block.FUEL_USE = Data.generateValues("fuel_use");
/** number = contained liters
 * @readonly @type {{[key:number]:number|undefined}} (Fuel) *///@ts-expect-error
// 754: was 20 before fuel buff
// 755: was 100 before fuel buff
// 375: was 250 before fuel buff
Block.FUEL_STORE = Data.generateValues("fuel_store");
/** number = items per second,
 * [number,number] = [Items, amout of seconds per use] @readonly
 * @type {{[key:number]:number|[number,number]|undefined}} (Cargo) */
//@ts-expect-error
Block.CARGO_USE = Data.generateValues("cargo_use");
/** number = items capacity
 * @readonly @type {{[key:number]:number|undefined}} (Cargo) *///@ts-expect-error
Block.CARGO_STORE = Data.generateValues("cargo_store");
/** positive = buy price of block, -1 = block isn't purchasable
 * @readonly @type {{[key:number]:number|undefined}} (MarketValue) */
//@ts-expect-error
Block.COST = Data.generateValues("cost");
/** @readonly *///@ts-expect-error
Block.db1ToDb3 = Object.freeze({
  "T1 Block": "Block", "T1 Wedge": "Wedge", "T2 Wedge": "Wedge",
  "T1 Wedge 1x2": "Wedge 1x2", "Structure Block": "Struct",
  "Simple Thruster": "Small Hydrogen Thruster", "Ion Thruster": "Small Ion" +
  " Thruster", "Momentum Wheel": "Reaction Wheel", "Small Fuel Tank": "Sma" +
  "ll Hydrogen Tank", "Medium Fuel Tank": "Medium Hydrogen Tank",
  // There seems to be older "T2 Battery" name version, T1 is a guess
  "T1 Battery": "Small Battery", "T2 Battery": "Small Battery",
  "Small Crate": "Small Storage Rack", "Medium Crate": "Medium Storage Rack",
  "T1 Drill": "Small Hydraulic Drill", "T1 Gatling Gun": "Rotary Cannon",
  "T1 Blaster": "Plasma Cannon", "T1 Pulse Laser": "Pulse Laser",
  "T2 Block": "Armor Block", "T1 Solar Panel": "Small Solar Panel",
  "T2 Solar Panel": "Small Solar Panel", Seperator: "Separator",
  Connector: "Dock", Explosive: "__placeholder776__",
  "Station Block": "__placeholder846__"
});
/** @readonly settings for @see {Block.arrayFromObjects} *///@ts-expect-error
Block.creator = {warns: 3};
/**
 * @readonly @param {any[]|any} blocks
 * @param {Logic<any>[]&{nc?:any}} [logics] */
Block.arrayFromObjects = function (blocks, logics) {
  var warn = Block.creator.warns,
    bs = blocks instanceof Array ? blocks : [blocks];
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
   * connections (new DBV "nc") property */
  var rawLogics = logics || [],
    /** maps connections to key:input, value:output map -
     * to be used in @see {extractConnections} */
    ncProperty = function () {
      /** @type {{[key:number]:number|undefined}} [key:input]:output */
      var map = {}, connections = rawLogics.nc;
      if (!(connections && connections.length))
        return UDF;
      for (var i = connections.length; i-- > 0;) {
        // (v.0.1.67) fixed null connections
        if (!(connections[i] instanceof Object))
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
        //@ts-expect-error
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
      prop: block.properties || block.prop || {},
      flip: block.f || block.flipped,
      weld: block.wg || block.weld,
      lpos: block.logicPosition
    };
    // (v.0.1.64T14) color is nullable so null as deafault for DBV detected
    // uses later Color.default to set it
    var color = block.color || block.s || o.prop.color;
    o.prop.color = typeof color == "string" ? color : null;
    // (v.0.1.64T14) hasOwnProperty check for "for ... in ..." ?
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
      /** @type {Rotation} *///@ts-expect-error
      rot = o.rot instanceof Array && o.rot.length === 3 ?
        // (v.0.1.68.K10) support for Deltarealm JSONs
        typeof o.rot[1] == "number" ?
          B64Key.rotateBlock([+o.rot[0], +o.rot[1], +o.rot[2]]) :
          [
            o.rot[0] >= 0 && o.rot[0] < 3 &&
              typeof o.rot[0] == "number" ? o.rot[0] : 0,
            typeof o.rot[1] == "boolean" ? o.rot[1] : !1,
            typeof o.rot[2] == "number" ? o.rot[2] & 3 : 0
          ] :
        [
          0,
          typeof o.flip == "boolean" ? o.flip : !1,
          // (v.0.1.68.1) rotation signed value now rounds to nearest value
          typeof o.rot == "number" ? o.rot / 90 + 4.5 & 3 : 0
        ],
      // should the prop.control stay?
      // (v.0.1.68.1) custom parameter is now present only if defined and
      // using customParameter alias is prioritised over control and custom
      control = block.c || o.prop.customParameter ||
        o.prop.control || o.prop.custom;
    if (Block.ID[name] === UDF) {
      o.prop.invalidName = name;
      name = "__unknown__";
    }
    if (o.pos instanceof Array && o.pos.length === 2) {
      if (typeof o.prop.color != "string")
        // NOTE that defaulting color requires DBV like position ^
        o.prop.color = Color.default(name);
      if (typeof o.rot != "number" && warn && warn--)
        console.warn("incorrect array position length or wrong rota" +
          "tion? at: Block.arrayFromObjects, blocks: ", bs, " i: ", i);
      var adjX = 0, adjY = 0, size = Block.Size.VALUE[Block.ID[name]];
      pos = [0, o.pos[0] * 2 + adjX, o.pos[1] * 2 + adjY];
    }
    // is keeping custom parameter properties not changed a good idea?
    // block.ni or properties.nodeIndex is used prior to them anyway
    if (control !== UDF)
      o.prop.customParameter = control;
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
      Logic.addLogic(name, o.prop, rawLogics, r);
    }
    if (Block.ID[name] > 689 && Block.ID[name] < 947)
      // (v.0.1.64T14) was it really impossible to load wgs from JSON?
      o.prop.weldGroup = o.weld || o.prop.weldGroup || 0;
    r[i] = new Block(name, [pos[0], pos[1], pos[2]], rot, o.prop);
    if (o.lpos && o.lpos instanceof Array)
      logicBlockPositions[i] =
        [+o.lpos[0] || 0, +o.lpos[1] || 0, +o.lpos[2] || 0];
    // r[i] = block; (v.0.1.68) was then returning any[] ...Susge
  }
  // optionally for preserving old connections, the correct loading of logic
  // nodes will require to assign references after all blocks are loaded
  Logic.reassemble(r, rawLogics);
  logicBlockPositions.forEach(function (e, i) {
    (r[i] = new LogicBlock(block, i, rawLogics)).logicPosition = e;
  });
  return r;
};
/** @readonly @param {number} n @param {Logic<any>[]} [logics] */
Block.generateArray = function generateArray(n, logics) {
  if (n === -7)
    return "DecoLayer_Half1|5,0|180,-1,1|c16;&DecoLayer_Half1|4,0|180,-1,1|c\
16;&DecoLayer_Half1|3,0|180,-1,1|c16;&DecoLayer_Half1|2,0|180,-1,1|c16;&Reac\
tor0|0,1|90,1,1|1|512,0,0,0|2|0|0|;&Utility_Docking1|2,3|0,-1,1|1|512,512,0,\
0|2|2|5|;&DecoLayer3_Half1|4,2|90,1,1|c13;&DecoLayer_Texure1|3,1|0,-1,1|c1;&\
Decolayer2_Block2|4,2|270,1,1|c1;&Armor_HeavyWedge0|5,1|0,-1,1|1|0|0|0|;&Wea\
pon_Cannon1|6,2|270,1,1|2|64,0,0,0|1|0|0|;&Utility_Rotor|3,2|270,1,1|3|16,32\
,0,0|1|720|90|;&Cargo0|2,1|0,1,1|1|0|0|0|Iron:50;&ControlBlock|3,1|0,1,1|1|3\
2,16,0,0|0|4|0|;&Reactor1|2,2|0,1,1|1|512,0,0,0|0|0|0|;&Armor_HeavyWedge0|1,\
2|0,1,1|1|0|0|0|;&Armor_Heavy|1,1|0,1,1|1|0|0|0|;&Armor_Heavy|4,1|0,1,1|1|0|\
0|0|;&Utility_Wheel1|1,0|0,1,1|1|4,8,0,0|1|10|0|;&DecoLayer_Texure1|1,2|0,-1\
,1|c10;&DecoLayer_Texure6|3,2|0,-1,1|c1;&Decolayer2_Block1|1,2|0,-1,1|c1;&De\
coLayer_Texure7|2,2|0,-1,1|c1;&DecoLayer_Half1|5,1|0,-1,1|c7;&Decolayer2_Wed\
ge0|5,1|0,-1,1|c1;&DecoLayer_Half1|1,0|180,-1,1|c16;&Decolayer3_Wedge0|1,2|0\
,1,1|c1;&DecoLayer_Texure7|4,1|0,1,1|c1;&DecoLayer_Texure7|1,1|0,-1,1|c1;&Ut\
ility_Wheel1|2,0|0,1,1|1|4,8,0,0|1|10|0|;&Utility_Wheel1|3,0|0,1,1|1|4,8,0,0\
|1|10|0|;&Utility_Wheel1|4,0|0,1,1|1|4,8,0,0|1|10|0|;&Utility_Wheel1|5,0|0,1\
,1|1|4,8,0,0|1|10|0|;".split("&").map(function (e) {
      var part = e.split("|"), rot = part[2].split(","), prop = {};
      if (/Deco[Ll]ayer\d?_/.test(e)) {
        prop.invalidName = part[0];
        part[0] = "__unknown__";
      }
      /** @type {Rotation} */
      var r = [0, +rot[1] < 0, 0], pos = part[1].split(",");
      r[2] =
        /** @type {0|1|2|3} */
        (+rot[0] / 90 + 4.5 & 3);
      return new Block(part[0], [0, +pos[0], +pos[1]], r);
    });
  else if (n !== -69)
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
/** for 2D blocks @readonly @param {number} id */
Block.isFlippable = function (id) {
  return id < 697 ? id > 691 && id < 695 : id > 1279 ||
    id < 700 || id === 703 || id === 702;
};
/** @typedef {0|1|2|3|number} RA Rotation Axis */
// not tested or debugged at all
/** manipulates inputed Rotation array, do not assign returned array
 * for further use if possible @readonly
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
    } else
      // if ('I have no idea') // newer ts doesn't like this I guess
      throw new Error("Not implemented.");
  }
  return [rot[0] = face, rot[1] = side, rot[2] = turn];
};
/** instance is frozen
 * @readonly
 * @param {number} x @param {number} y @param {number} w @param {number} h
 * @param {number} resolution @param {number} l @param {number} t */
Block.Size = function Size(x, y, w, h, resolution, l, t) {
  /** @readonly */
  this.l = l | 0;
  /** @readonly */
  this.t = t | 0;
  /** @readonly */
  this.x = x | 0;
  /** @readonly */
  this.y = y | 0;
  /** @readonly */
  this.w = w | 0;
  /** @readonly */
  this.h = h | 0;
  /** stands for resolution @readonly */
  this.res = resolution | 0;
  Object.freeze(this);
};
Block.Size.width = 4;
Block.Size.height = 48;
Block.Size.prototype.toString = function () {
  return JSON.stringify(this);
};
/**
 * @typedef {number} ShortDef PreciseDef may be implemented
 * @typedef {[number|string]|[number|string,number,number]} SizeDef
 * @typedef {{[key:number]:SizeDef|ShortDef|undefined}} SizesArg
 * @type {(arg:SizesArg)=>{[key:number]:Block.Size|undefined}} */
Block.Size.generate = function (arg) {
  var r = {690: new this(0, 0, 2, 2, 32, 0, 0)}, a = arg;
  // by replacing nw = a with nw = {} it will log sizes and do 'reflow'
  for (var l = 690, nw = a; l < Block.NAME.length; l++)
    if (Block.NAME[l]) {
      var v = arg[l], res = l > 1279 ? 13 : 32;
      var rowSize = (this.width * 32) / res | 0;
      if (!v && v !== 0)
        continue;
      if (v === -1)
        throw new Error("Uninitialised bitmap.");
      if (typeof v == "number")
        v = [v];
      if (typeof v[0] == "number")
        var x = v[0] % rowSize * res,
          y = (v[0] / rowSize | 0) * res;
      else {
        x = (+(v[0] + " ").split(" ")[0] / res | 0) * res;
        y = (+(v[0] + " ").split(" ")[1] / res | 0) * res;
        v[0] = (x / res | 0) + (y / res | 0) * rowSize;
      }
      if (((v[1] || 1) < 0 || (v[2] || 1) < 0) && v[0] !== -1)
        throw new Error("Neither width nor height can be negative.");
      var w = (v[1] || 1), h = (v[2] || 1);
      r[l] = l > 1279 ?
        new this(x, y, w * res, h * res, res, w * 2 - 2, h * 2 - 2) :
        new this(x, y, w * res, h * res, res, 0, 0);
      if (nw !== arg) {
        var offsetY = v[0] / rowSize << 0;
        console.log(v[0] % rowSize, offsetY, Block.NAME[l], v, r[l]);
        //Data.blocks[Block.NAME[l]].bitmap = v;
        nw instanceof Array && nw.push(v);
      }
    }
  nw instanceof Array &&
    console.log(JSON.stringify(nw).replace(/,/g, ", "));
  return r;
};
// #riptesting blocks were still not tested properly all at once
Block.Size.VALUE = Block.Size.generate(Data.generateValues("bitmap"));
/** creates previously Block.Selected instance
 * may require inversing pos[1] @param {ShipBlock|null} block
 * @param {number} [index=-1] @param {XYZPosition} [position] */
Block.Size.highlightBlock = function (block, index, position) {
  if (!block)
    return new Block.Size.Highlight(null, index || 0, position ?
      position[1] : 0, position ? position[2] : 0, 0, 0, [0, 0, 0]);
  var id = Block.ID[block.internalName],
    size = Block.Size.VALUE[id] || {w: 1, h: 1, l: 0, t: 0, res: 1};
  // calculations from expensiveRenderer
  var ow = size.w / size.res * 2, oh = size.h / size.res * 2;
  var pos = position || block.position;
  var x = -pos[1], y = pos[2], rot = 10 - block.rotation[2] & 3;
  var w = rot & 1 ? oh : ow, h = rot & 1 ? ow : oh;
  if (id > 1279) {
    rot & 1 ? x -= size.t / 2 : x -= size.l / 2;
    w /= 2;
    h /= 2;
  } else {
    x -= rot === (block.rotation[1] ? 0 : 2) ?
      (ow - 2) :
      rot === 3 ? (oh - 2) : 0;
    y -= rot === (block.rotation[1] ? 1 : 3) ?
      (ow - 2) :
      rot === 0 ? (oh - 2) : 0;
  }
  var i = typeof index === "number" ? index : -1;
  return new Block.Size.Highlight(block, i, x, y, w, h, pos);
};
/**
 * @param {ShipBlock|null} block @param {number} i @param {number} x
 * @param {number} y @param {number} w @param {number} h
 * @param {XYZPosition} position */
Block.Size.Highlight = function (block, i, x, y, w, h, position) {
  if (!(block instanceof Block))
    block = new Block("__NULL__", [0, 0, 0], [0, !1, 0]);
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.block = block;
  this.index = i;
  this.positionX = position[1];
  this.positionY = position[2];
  this.color = "#ffffff";
  Object.seal(this);
};
Block.Size.Highlight.prototype.toString = function () {
  return [this.x, this.y, this.w, this.h] + "ID: " +
    [Block.ID[this.block.internalName], "i: " + this.index] +
    ["pos: " + this.positionX, this.positionY, this.color];
};
/** instance is frozen
 * @readonly @template {"BLOCK"|"PYRAMID"|"WEDGE"} T @param {T} type */
Block.Mirror = function Mirror(type) {
  /** @readonly */
  this.type = type;
  /** @readonly */
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

/** JSDoc syntax for interfaces */
/** @typedef {{min:number;max:number;default:number[];}} Slider */
/** @typedef {{min:number;max:number;default:number[];}} IntegerSlider */
/** @typedef {{options:string[];default:number[];}} Dropdown */
/** @typedef {{default:number[];}} NumberInputs */
/** @typedef {{default:string[];}} TextInputs */
/** @typedef {{idx:number;default:number[] | number[][];}} WeldGroups */
/**
 * @typedef {{"Slider":Slider;"Integer Slider":IntegerSlider;
 * "Dropdown":Dropdown;"Number Inputs":NumberInputs;"Text Inputs":TextInputs;
 * "WeldGroups":WeldGroups;}} ItemTs
 */
// TODO: To be considered for resystemizing
/** blocks can have any combination of Block.Properies (dropdown, input(s))
 * @readonly
 * @template {keyof ItemTs} T @param {T} type @param {string} name */
Block.Properties = function (type, name) {
  /** type defines the kind of item, item is one of few classes */
  this.type = type;
  /** text displayed above the setting like Tourque, Thrust, Function */
  this.name = name;
  /** @type {ItemTs[T]} defines the data structure *///@ts-expect-error
  this.item = new Block.Properties.Items[type]();
  Object.seal(this);
};
Block.Properties.Items = {
  // changed the integer slider from not having enterable input
  // to allow only for integer number unlike slider's multiplies of 0.1
  /** @type {new()=>Slider} */
  "Slider": function Slider() {
    this.min = 0;
    this.max = 0;
    /** @type {[number]} */
    this.default = [0];
  },
  /** @type {new()=>IntegerSlider} */
  "Integer Slider": function IntegerSlider() {
    this.min = 0;
    this.max = 0;
    /** @type {[number]} integer! */
    this.default = [0];
  },
  /** @type {new()=>Dropdown} */
  "Dropdown": function Dropdown() {
    this.options = [""];
    /** @type {[number]} integer */
    this.default = [0];
  },
  /** @type {new()=>NumberInputs} */
  "Number Inputs": function NumberInputs() {
    /** @type {number[]} */
    this.default = [0];
  },
  /** @type {new()=>TextInputs} */
  "Text Inputs": function TextInputs() {
    /** @type {string[]} */
    this.default = [""];
  },
  /** @type {new()=>WeldGroups} hidden property */
  "WeldGroups": function WeldGroups() {
    /** not exactly sure what's this for */
    this.idx = 0;
    /** Hinge/Piston use additnional digit
     * @type {[number]|number[][]} Separator must have array of four >:o */
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
/** @typedef {Block.Properties<keyof ItemTs>} Prop properties definitions */
/**
 * @type {<T extends PropsArg[]>(argArr: T)=>Prop[]} */
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
  return r;
};
/**
 * @type {{[key:number]:Prop[]|undefined,
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
  790: Block.Properties.justOne([
    [1, "Gear Ratio", 0.2, 3, 1],
    [2, "Spawn Rotation", ["Left", "Middle", "Right"], 1],
    [5, 0]
  ]),
  791: Block.Properties.justOne([[5, [0, 0, 0, 0]]]),
  792: Block.Properties.justOne([[0, "Gear Ratio", 0.2, 3, 1], [5, 0]]),
  803:
    // custom parameter (DBV block's "c") property contains option string
    // instead of number reference to option index (DBVE has that shit too)
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
/** @param {string|number} name @param {safe} property */
Block.Properties.addProperty = function (name, property) {
  var propsDef = Block.Properties.VALUE[typeof name == "number" ?
    name :
    Block.ID[name]
  ];
  /** @type {any[]} works in Block.ts as well */
  var custom = property.customParameter = [];
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
/** returns <default input optoins>.concat([custom input options])
 * @param {ShipProperties|null} prop */
Block.Properties.getInputOptions = function (prop) {
  var arrMaybe = (prop || {}).customInputs;
  return Block.Properties.VALUE[803][0].item.options.concat(
    (arrMaybe instanceof Array ?
      arrMaybe :
      []).map(String)
  );
};
/** visualising for collisions data (Block.Box2d.VALUE) */
var test_collbxs = false,
  // @type {typeof F|((rend?:any)=>true|undefined)} not work in ts v.5.9.2
  /** @type {(rend?:any)=>boolean|void} */
  test_debugbox2collisions = F;
/** @typedef {{x:number,y:number}|[number,number]} PathArg */
/** @typedef {Block.Box2d[]&{range:number}} Box2dPath */
/**
 * @typedef {readonly[Box2dPath,Box2dPath,Box2dPath,Box2dPath,
 * Box2dPath,Box2dPath,Box2dPath,Box2dPath]} Box2dDefinition
 */
/** instance is frozen
 * @readonly Point @param {number} x @param {number} y */
Block.Box2d = function Point(x, y) {
  /** @readonly */
  this.x = x;
  /** @readonly */
  this.y = y;
  Object.freeze(this);
};
Block.Box2d.prototype.toString = function () {
  return "x" + this.x + "y" + this.y;
};
/** @param {...PathArg[]|string|number} args */
Block.Box2d.generateBuildBox = function () {
  /** @type {{[key:number]:Box2dDefinition|undefined}} */
  var map = {},
    /** @type {Box2dDefinition[]} */
    defs = [],
    /** @type {{[key:string]:Block.Box2d|undefined}} */
    points = {},
    /** @readonly */
    AT = " at Block.Box2d.generateBuildBox.";
  /** @param {{x:number,y:number}[]} path @param {boolean} [flip] */
  function box2dArray(path, flip) {
    function box2dItem() {
      var x = path[j].x, y = path[j].y;
      var n = Math.sqrt((x - 1) * (x - 1) + (y + 1) * (y + 1));
      n > max ? max = n : 0;
      frozen.push(points[x + "_" + y] ||
        (points[x + "_" + y] = new Block.Box2d(x, y)));
    }
    /** @type {Block.Box2d[]} */
    var frozen = [], result;
    if (flip)
      for (var j = 0, max = 1; j < path.length; j++)
        box2dItem();
    else
      for (j = path.length, max = 1; j-- > 0;)
        box2dItem();
    (result =
      /** @type {Block.Box2d[]&{range:number}} */
      (frozen)
    ).range = max;
    return Object.freeze(result);
  }
  /** @param {PathArg[]|string} arg */
  function setBuildBox(arg) {
    if (arg === UDF)
      return console.warn("Found \"undefined\" type" + AT);
    var path = typeof arg == "object" ? arg.map(function (e) {
      return e instanceof Array ? {x: e[0], y: e[1]} : {x: e.x, y: e.y};
    }) : null;
    if (!path)
      return map[l++] = defs[+arg];
    for (var n = 3, rotations = [box2dArray(path, true)]; n-- > 0;) {
      path.forEach(function (e) {
        var x = -e.y;
        e.y = e.x - 2;
        e.x = x;
      });
      rotations.push(box2dArray(path, true));
    }
    path.forEach(function (e) {
      // vertical mirror, but it's done in horizontal position
      e.y = -e.y - 2;
    });
    for (n = 4; n-- > 0;) {
      path.forEach(function (e) {
        var x = -e.y;
        e.y = e.x - 2;
        e.x = x;
      });
      rotations.push(box2dArray(path));
    }
    if (rotations.length === 8)
      map[l++] = defs[defs.length] =
        /** @type {Box2dDefinition} */
        (Object.freeze(rotations));
    else
      throw new Error("the Box2dPath[] isn't 8 element tuple");
  }
  for (var i = 0, l = 690, a = arguments; i < a.length; i++)
    typeof a[i] == "number" ?
      l = a[i] :
      OP.call(map, l) ?
        console.error("Property ", l++, "already exists" + AT) :
        setBuildBox(a[i]);
  /** @type {{[key:string]:typeof defs[number]}} */
  var msDefs = {}, ba = box2dArray([]);
  /** @param {keyof Block.ID} name */
  function setMsBuildBox(name) {
    /** @type {{-readonly[T in keyof Box2dDefinition]:Box2dDefinition[T]}} */
    var rotations = [ba, ba, ba, ba, ba, ba, ba, ba], j = 8;
    for (; j-- > 0;) {
      var rect = Block.Size.highlightBlock(new Block(
          name,
          [0, 2, -2],
          /** @type {Rotation} */
          ([0, j < 4, 8 - j & 3])
        ));
      rotations[j] = box2dArray([
          {x: -rect.x, y: rect.y + rect.h},
          {x: -rect.x, y: rect.y},
          {x: -rect.x - rect.w, y: rect.y},
          {x: -rect.x - rect.w, y: rect.y + rect.h}
        ]);
    }
    var json = JSON.stringify(rotations[0]);
    map[i] = json in msDefs ?
      msDefs[json] :
      msDefs[json] = Object.freeze(rotations);
  }
  defs.length = 0;
  for (i = 1280; i < 2048; i++)
    if (i in Block.NAME)
      setMsBuildBox(Block.NAME[i]);
  return map;
};
Block.Box2d.VALUE = Block.Box2d.generateBuildBox(
  690,
  // def<definition index>: <dimensions> <shape> "<representative block>"
  // def0: 1x1 block "Block"
  [{x: 0, y: 0}, {x: 0, y: -2}, {x: 2, y: -2}, {x: 2, y: 0}],
  // [{x: 0, y: 0}, {x: 0, y: -1}, {x: 0, y: -2}, {x: 2, y: -2},
  // {x: 2, y: -1}, {x: 2, y: 0}], #riptesting
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
    {x: 0, y: 2},
    {x: 0, y: -2},
    {x: 2, y: -2},
    {x: 2, y: -1.625},
    {x: 0.25, y: 2}
  ],
  // def3: 1x4 wedge "Wedge 1x4"
  [
    {x: 0, y: 6},
    {x: 0, y: -2},
    {x: 2, y: -2},
    {x: 2, y: -1.5},
    {x: 0.125, y: 6}
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
  [{x: 0, y: -1}, {x: 0, y: -2}, {x: 1, y: -2}, {x: 1, y: -1}],
  "0",
  // def8: 2x2 block "Medium Hydrogen Tank"
  [{x: 0, y: 2}, {x: 0, y: -2}, {x: 4, y: -2}, {x: 4, y: 2}],
  // def9: 3x4 block "Large Hydrogen Thruster"
  [{x: 0, y: 6}, {x: 0, y: -2}, {x: 6, y: -2}, {x: 6, y: 6}],
  "7", "0",
  // def10: 1x2 block "Medium Ion Thruster"
  [{x: 0, y: 2}, {x: 0, y: -2}, {x: 2, y: -2}, {x: 2, y: 2}],
  // def11: 2x3 block "Large Battery"
  [{x: 0, y: 4}, {x: 0, y: -2}, {x: 4, y: -2}, {x: 4, y: 4}],
  "0",
  754, "0", "8",
  // def12: 3x3 block "Large Hydrogen Tank"
  [{x: 0, y: 4}, {x: 0, y: -2}, {x: 6, y: -2}, {x: 6, y: 4}],
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
  "0", "0", "0", "5", "5", "5", "5", "0", "0", "0",
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
    {x: 0, y: 2},
    {x: 0, y: -2},
    {x: 2, y: -2},
    {x: 2, y: -1.25},
    {x: 1.5, y: 0.75},
    {x: 0.875, y: 1.75},
    {x: 0.375, y: 2}
  ],
  // def19: 1x4 smooth_corner "Smooth Corner 1x4"
  [
    {x: 0, y: 6},
    {x: 0, y: -2},
    {x: 2, y: -2},
    {x: 2, y: -0.75},
    {x: 1.375, y: 4},
    {x: 0.875, y: 5.5},
    {x: 0.25, y: 6}
  ]
);
Block.Box2d.warn = test_collbxs;
/** @param {[number,number][]} item */
Block.Box2d.generateGrid = function (item) {
  var arr =
    /** @type {Box2dPath} */
    (item.map(function (e) {
      return new Block.Box2d(e[0], e[1]);
    }));
  arr.range = item.reduce(function (prev, curr) {
    return [Math.max(
      Math.abs(prev[0]),
      Math.abs(prev[1]),
      Math.abs(curr[0]),
      Math.abs(curr[1])
    ), 0];
  })[0] * 2;
  return arr;
};
Block.Box2d.GRID = Object.freeze({
  Small: Block.Box2d.generateGrid(
    [[-8, 12], [-8, -14], [10, -14], [10, 12], [0, 0]]),
  Medium: Block.Box2d.generateGrid(
    [[-14, 20], [-14, -22], [16, -22], [16, 20], [0, 0]]),
  Large: Block.Box2d.generateGrid(
    [[-20, 30], [-20, -32], [22, -32], [22, 30], [0, 0]]),
  Dreambox: Block.Box2d.generateGrid(
    [[-98, 98], [-98, -100], [100, -100], [100, 98], [0, 0]]),
  Career: Block.Box2d.generateGrid(
    [[-10, 10], [-10, -12], [12, -12], [12, 10], [0, 0]]),
  Sandbox:  Block.Box2d.generateGrid(
    [[-20, 20], [-20, -22], [22, -22], [22, 20], [0, 0]])
});
/**
 * @callback Block.Box2d.Visualize
 * @param {Box2dPath|Block.Box2d[]} path @param {number} [x]
 * @param {number} [y] @param {boolean} [isBlock1] @returns {void} */
/** returns {(x:number,y:number,path:Box2dPath,isBlock1?:boolean)=>void}
 * @type {Block.Box2d.Visualize} callback */
Block.Box2d.visualize = function (path, x, y, isBlock1) {};
/** if using Box2dPath as collider, last point is the reference point
 * @param {ShipBlock|Box2dPath} forShape @param {ShipBlock[]} within
 * @param {boolean} [inside] @param {boolean} [inverted] */
Block.Box2d.collide = function (forShape, within, inside, inverted) {
  /** @typedef {{ax:number,by:number,c:number}} VRP */
  /** @param {Block.Box2d} pointA @param {Block.Box2d} pointB */
  function someVRPthing(pointA, pointB) {
    // nominal vector of A->B (a, b)
    var a = pointA.y - pointB.y, b = pointB.x - pointA.x;
    /** @see {VRP}: a*x + b*y + c = 0 it's an equtation */
    return {ax: a, by: b, c: -(a * pointA.x + b * pointA.y)};
    // (basically check equotation for points on that line)
  }
  //(GE('evil_result') || {}).innerText += block1.internalName + ";";
  /** !can only be used for lines known to intersect (v.0.1.67)
   * @param {VRP} vrp1 @param {VRP} vrp2 */
  function intersectionOfVRPs(vrp1, vrp2) {
    // coercion
    if (vrp2.ax !== 0)
      // multiplier to be able to subtract both equtations
      var n = vrp1.ax / vrp2.ax || vrp1.by / vrp2.by;
    else
      // multiplier, but ... from y coefficient
      n = vrp1.by / vrp2.by;
    // variables subtracting the equtasions
    var x = vrp1.ax - vrp2.ax * n, y = vrp1.by - vrp2.by * n;
    // resolving the equation (...?)
    if (Math.abs(x) < 1E-9)
      x = (-vrp1.by * (y = -(vrp1.c - vrp2.c * n) / y) - vrp1.c) /
        vrp1.ax;
    else if (Math.abs(y) < 1E-9)
      y = (-vrp1.ax * (x = -(vrp1.c - vrp2.c * n) / x) - vrp1.c) /
        vrp1.by;
    else {
      //er("Incorrect multiplication for x1: y1: x2: y2:" + vrp2.by) :
      console.error("Incorrect multiplication at collisioons.COLISNS");
      if (devt_debugger)
        debugger;
      return null;
    }
    return new Block.Box2d(x, y);
  }
  /** @returns {Block.Box2d[]|null} */
  function combineOutlines() {
    for (var i = path1.length, point1 = path1[0]; i-- > 0;) {
      var endpoint1 = path1[i];
      if (point1.x > endpoint1.x)
        /** oPrpdcr = original prependicular (shortened)
         * & 1 = line1 x1 == x2, & 2 = line1 y1 == y2,
         * & 8 = line2 x1 == x2, & 16 = line2 y1 == y2 */
        var oPrpdcr = 0, xMax1 = point1.x, xMin1 = endpoint1.x;
      else {
        xMin1 = point1.x;
        xMax1 = endpoint1.x;
        oPrpdcr = +(xMin1 === xMax1);
      }
      if (point1.y > endpoint1.y)
        var yMax1 = point1.y, yMin1 = endpoint1.y;
      else {
        yMin1 = point1.y;
        yMax1 = endpoint1.y;
        oPrpdcr |= +(yMin1 === yMax1 && 2);
      }
      for (var j = path2.length, point2 = path2[0]; j-- > 0;) {
        // prpdcr = local prependicular (shortened)
        var endpoint2 = path2[j], prpdcr = oPrpdcr, intersect = null;
        if (prpdcr) {
          prpdcr |= +(point2.x === endpoint2.x && 8);
          prpdcr |= +(point2.y === endpoint2.y && 16);
          //(GE('evil_result') || {}).innerText += block1.internalName + "; ";
          // get intersection point for prependicular lines
          intersect = prpdcr === 17 ?
            new Block.Box2d(point1.x, point2.y) :
            prpdcr === 10 ?
              new Block.Box2d(point2.x, point1.y) :
              null;
        }
        if (prpdcr < 3)
          // get intersection point for crossing lines
          intersect = intersectionOfVRPs(
            someVRPthing(point1, endpoint1),
            someVRPthing(point2, endpoint2)
          );
        else if (prpdcr === 9 || prpdcr === 18)
          // paralel lines do not have intersection point but may collide
          // except for collision based selection
          intersect = new Block.Box2d(NaN, NaN);
        if (intersect) {
          x = intersect.x, y = intersect.y;
          if (point2.x > endpoint2.x)
            var xMax2 = point2.x, xMin2 = endpoint2.x;
          else {
            xMin2 = point2.x;
            xMax2 = endpoint2.x;
          }
          if (point2.y > endpoint2.y)
            var yMax2 = point2.y, yMin2 = endpoint2.y;
          else {
            yMin2 = point2.y;
            yMax2 = endpoint2.y;
          }
          if ((x !== x || y !== y) && !inside) {
            if (
              // paralel vertical lines on x axis (xMin<i> === xMax<i>)
              prpdcr === 9 ?
                // lines are same position
                xMax1 === xMax2 &&
                  // (vertical) lines are the same direction
                  (point1.y === yMin1) === (point2.y === yMin2) &&
                  // line segments are overlaping
                  yMax1 > yMin2 && yMin1 < yMax2 :
                // paralel horizontal lines on y axis (yMin<i> === yMax<i>)
                prpdcr === 18 &&
                  // lines are same position
                  yMax1 === yMax2 &&
                  // (horizontal) lines are the same direction
                  (point1.x === xMin1) === (point2.x === xMin2) &&
                  // line segments are overlaping
                  xMax1 > xMin2 && xMin1 < xMax2
            ) {
              return [point1, endpoint1, point2, endpoint2];
            } else
              prpdcr !== 9 && prpdcr !== 18 &&
                console.error("Detected NaN at comparing part.COLISNS");
          } else if (
            (xMin1 === xMax1 ?
              y > yMin1 && y < yMax1 :
              x > xMin1 && x < xMax1) && (xMin2 === xMax2 ?
                y > yMin2 && y < yMax2 :
                x > xMin2 && x < xMax2)
          ) {
            return [point1, endpoint1, point2, endpoint2];
          }
        }
        point2 = endpoint2;
      }
      point1 = endpoint1;
    }
    return null;
  }
  var test_message = "";
  /** index 0 of checkerPoint is used as originally point1 argument
   * @param {Block.Box2d[]} checkerPoint @param {Block.Box2d[]} path */
  function insides(checkerPoint, path) {
    /** or isIntersect name? dos checker intersections through points */
    function pntBIntersect() {
      // @param {boolean} vertical
      // in the direction of path:
      // starting endpoint (pntA) of currently checked
      // line segment is laying on the checker line
      // the nextPoint was correct, but I screwed up actually
      // the entire order (hopefully swapping pntA with pntB's enough)
      var nextPnt = path[(j + 2) % path.length];
      // if current line segment is laying horizontal on checker line
      return (pntA.y === y ?
        // if previous line is also horizontal
        nextPnt.y !== y &&
          //?? >v ^< ' (if first A to second B directs to right)
          // should match (next line going up)??
          pntB.x > pntA.x === nextPnt.y > y :
        // else if directions and angle of both segments makes a boundary
        nextPnt.y === y ?
          // '270 degrees or what, works only for inside corners <v ^>'
          pntA.y < y === pntB.x < nextPnt.x :
          // line aiming up must match with non-horizontal line
          // aiming the other way
          pntA.y > y === nextPnt.y < y) ?
        pntB = new Block.Box2d(
            pntA.x,
            pntA.y + (pntB.x > pntA.x ? 1 : -1)
          ) :
        null;
      // not even this BRUH
    }
    var point = checkerPoint[0], pntB = path[0];
    var y = point.y, before = 0, at = 0, after = 0;
    var a1 = new Block.Box2d(point.x - 512, y),
      b1 = new Block.Box2d(point.x + 512, y);
    // checking being inside other block using horizontal checker line
    for (var j = path.length; j-- > 0;) {
      var pntA = path[j];
      path.length && test_debugbox2collisions(checkerPoint || path) &&
        Block.Box2d.visualize([pntB, pntA, a1, b1]);
      if (pntB.y > pntA.y) {
        var yMax = pntB.y, yMin = pntA.y;
      } else {
        yMin = pntB.y;
        yMax = pntA.y;
      }
      // checks for line segment not itersecting checker line
      if (
        pntB.y === y ? !pntBIntersect() :
          // WHY ARENT YOU LIKE <= AND >= ???
          yMax <= y || yMin >= y
      ) {
        // second point will be the starting (first) one in next segment
        pntB = pntA;
        continue;
      }
      var intersect = pntB.x === pntA.x ?
        // line is vertical, just use a point at the prependicular
        new Block.Box2d(pntB.x, y) :
        intersectionOfVRPs(
          {ax: 0, by: -1, c: y},
          someVRPthing(pntB, pntA)
        );
      if (intersect) {
        x = intersect.x;
        if (x === pntA.x) {
          ;
        }
        // direction of line segment, which must be only non-horizontal
        // second pntB under first pntA means that current line segment
        // makes a entering (left) boundary, otherwise its end boundary
        var n = pntA.y < pntB.y ? 1 : -1;
        /** @TODO ABANDONED UNFINISHED finish fixing at */
        x < point.x ? before += n : x > point.x ? after += n : at += n;
        // x < point.x ? before += n : after += n;
        // How to use test_debugbox2collisions:
        // devt_debugger && rend_collisions &&
        // console.log("before:", before, "at:, at", "after:", after);
      }
      pntB = pntA;
    }
    // devt_debugger && rend_collisions &&
    //   console.log("before:", before, "at:", at, "after:", after);
    test_message = "before: " + before + " at: " + at + " after: " + after;
    if (before & after & 1) {
      Block.Box2d.visualize(path1.slice(), x1, y1);
      return [];
    }
    return null;
  }
  /** @param {ShipBlock} block @param {readonly Box2dPath[]|undefined} def */
  function transformPath(block, def) {
    if (!def)
      return;
    var rot = block.rotation, path = def[+rot[1] * 4 + rot[2]];
    var x = block.position[1], y = block.position[2], done = [];
    (done =
      /** @type {Box2dPath} */
      (path.map(function (e) {
        // might be modified to use cos sin for more angles
        return new Block.Box2d(e.x + x, e.y + y);
      }))
    ).range = path.range;
    return done;
  }
  if (!(forShape instanceof Array)) {
    var temporary = transformPath(forShape,
      Block.Box2d.VALUE[Block.ID[forShape.internalName]]);
    var x1 = forShape.position[1], y1 = forShape.position[2];
  } else {
    x1 = forShape[forShape.length - 1].x;
    y1 = forShape[forShape.length - 1].y;
    (temporary =
      /** @type {Box2dPath} */
      (forShape.slice(0, -1))).range = forShape.range;
  }
  if (!temporary) {
    Block.Box2d.warn &&
      console.warn("Uhm, trying to collide block without collisions?");
    return [];
  } else
    var path1 = temporary;
  /** @type {ShipBlock[]} */
  var colliding = [], range1 = test_collbxs ? Infinity : path1.range;
  Block.Box2d.visualize(path1, x1, y1, true);
  for (var i = within.length; i-- > 0;) {
    var block2 = within[i], pos2 = block2.position, path2, result;
    if (devt_debugger && (test_bugged || {})[block2.internalName + ' ' +
      block2.position + ' ' + block2.rotation] === forShape)
      debugger;
    temporary = transformPath(block2,
      Block.Box2d.VALUE[Block.ID[block2.internalName]]);
    if (!temporary || block2 === forShape)
      continue;
    var x = Math.abs(x1 - pos2[1]), y = Math.abs(y1 - pos2[2]);
    if (Math.sqrt(x * x + y * y) >= range1 + (path2 = temporary).range)
      continue;
    Block.Box2d.visualize(path2, pos2[1], pos2[2], false);
    if (inside) {
      // inside modes dectects outside blocks actaully lol
      // ...it's becuase of blocks needed to be visualised for Ship.check
      result = path2.slice();
      if (/(?:Block|Smooth Corner 1x2) 0,-\d,-1\d/.test(block2.internalName+
       ' '+block2.position+' '+block2.rotation) && devt_debugger)
       debugger;
      // each of the blocks within gets to be the checker
      if (insides(path2, path1))
        result = null;
      result && Block.Box2d.visualize(result, x, y);
      result = combineOutlines() || result;
    } else {
      // otherwise it's collision mode
      result = combineOutlines();
      //for (var j = path1.length && path2.length; !result && j-- > 0;)
      if (!result)
        result = insides(path1, path2) || insides(path2, path1);
    }
    // inverted negates the condition for detecting a block
    !inverted === !!result && colliding.push(block2);
    if (!devt_debugger && result && test_bugged)
      test_bugged[block2.internalName + ' ' + block2.position + ' ' +
        block2.rotation] = forShape;
    result && Block.Box2d.visualize(result);
  }
  return colliding;
};
Object.freeze(Block);

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
  Object.seal(this);
}
__extends(LogicBlock, Block);

/** @typedef {0|1|2|3} Edit.Type commands enum @typedef {0} Edit.Save */
/** @typedef {1} Edit.Target @typedef {2} Edit.This @typedef {3} Edit.Undo */
/** @typedef {Edit.save} Ship.clone set second param (copy) to 1 */
/**
 * @typedef {((slab?:boolean)=>any)|((ids:number[])=>any)} EditSomeCommand
 * @typedef {(x:number,y:number,z:number,block:any)=>any} EditBlockCommand
 * @typedef {(...args:number[])=>any} EditNumberCommand
 * @typedef {(ids:number[],color:number)=>any} EditColorCommand
 * @typedef {EditBlockCommand|EditNumberCommand|EditSomeCommand|
 * EditColorCommand} EditThisCommand
 * @typedef {(target:Ship,...args:number[])=>any} EditTargetCommand */
/** @typedef {((ship?:Ship,cmd?:string)=>void)&{id?:string}} EditListner */
// A concept for undo redo history implementation
/** class/namespace tp handle editing history, toJSON method in use
 * @param {string} command methodName path
 * @param {string} args stringified Array @param {Edit.Type} type */
function Edit(command, args, type) {
  /** @type {Edit.Type} commands enum */
  this.type = type;
  this.command = command;
  this.args = args;
  /** if not 0, it holds temporary reference to @see {Edit.Undo} */
  // when Edit.historyAt crawls edits list for progression path
  // it assigns a 0 or reference to what was skipped by undone
  this.temp = 0;
  Object.seal(this);
}
// what about buildReplace options kind !!?
// > if an Edit command uses settings, it must contain optional
// parameters for them
/** @type {(EditListner|undefined)[]} */
Edit.listeners = [];
Edit.prototype.toString = function () {
  if (this.args[0] !== "[" || this.args.slice(-1)[0] !== "]")
    return "\"Error: args is not arguments array (" + this.type + " " +
      this.command + ")\"";
  return "[" + this.type + ",\"" + this.command + "\"," + this.args + "]";
};
Edit.prototype.toJSON = function () {
  try {
    var args = JSON.parse(this.args);
  } catch (e) {
    console.error(e);
    args = this.args;
  }
  return [this.type, this.command, args];
};
/** quicksaving/loading and also used to reset setting history
 * @overload @param {Ship} target tp be saved @returns {Ship}
 * @overload @param {string} target to be loaded from history
 * @returns {void} @param {Ship} target @param {safe} [saved] */
Edit.save = function (target, saved) {
  if (target.getMode().mode !== "Ship") {
    console.error("can't use Edit.save while not in Ship mode");
    return target;
  }
  if (!saved || typeof saved != "object") {
    target.history.push(new Edit(
      "Edit.save",
      JSON.stringify([target.toJSON()]),
      /** @type {Edit.Save} */
      (0)
    ));
    return target;
  }
  var clone = Ship.fromObject(saved);
  target.selection.length = 0;
  target.name = clone.name;
  target.gameVersion = clone.gameVersion;
  target.dateTime = clone.dateTime;
  target.blocks = clone.blocks;
  target.prop = clone.prop;
  return target;
};
Edit.applyCommand = (
  /** Finally reliazed how the overloads work with JSDoc
   * @overload @param {Ship} target @param {EditThisCommand} cmd
   * @param {...any} _inputs @returns {void}
   * @overload @param {EditTargetCommand} cmd @param {Ship} target
   * @param {...any} _inputs @returns {void}
   * @param {EditTargetCommand|Ship} cmdOrThis
   * @param {Ship|EditThisCommand} [targetOrCmd]
   * @param {...any[]} [_inputs] */
  function (cmdOrThis, targetOrCmd, _inputs) {
    var isThis = cmdOrThis instanceof Ship,
      args = JSON.stringify([].slice.call(arguments, 2)),
      /** @type {Ship} */
      target = cmdOrThis instanceof Ship ?
        cmdOrThis :
        targetOrCmd || arguments[1],
      /** @type {(this:Ship|undefined,...args:any)=>any} *uck this sh**/
      command = typeof cmdOrThis == "function" ?
        cmdOrThis :
        typeof targetOrCmd == "function" ? targetOrCmd : console.error;
    try {
      isThis ?
        command.apply(target, JSON.parse(args)) :
        command.apply(UDF, (function (arr) {
          arr.unshift(target);
          return arr;
        })(JSON.parse(args)));
    } catch (err) {
      console.error("applying command failed, resseting history", err);
      Edit.redo(target);
      return;
    }
    var item = new Edit(
      Data.getFunctionName(command),
      args,
      /** @type {Edit.Target|Edit.This} */
      (+isThis + 1)
    )
    item.command === "anonymous" ? 0 : target.history.push(item);
    if (target === ship)
      for (var i = 0, l = this.listeners.length; i < l; i++)
        (this.listeners[i] || F)(ship, item.command);
  }
);
/** @param {Ship} target @param {number} index */
Edit.historyAt = function (target, index) {
  var edits = target.history, last = edits[edits.length - 1];
  if (!(index in edits))
    return console.error("Index: " + index +
      " is out of range for editing history");
  if (last.type === 3) {
    last.args = "[" + (index) + "]";
    if (index >= edits.length - 2)
      index = --edits.length - 1;
  } else if (index === edits.length - 1)
    console.info("Executing undo history restart");
  else
    edits.push(last = new Edit(
      "Edit.undo",
      "[" + index + "]",
      /** @type {Edit.Undo} */
      (3)
    ));
  // check all the relevant references/jumps with Edit.undo-s 3h_
  for (var i = index, n = 0, lmax = 0xffff; i > 0;) {
    if (edits[n = i].type ===
        /** @type {Edit.Undo} */
        (3) ?
          edits[i = +edits[i].args.slice(1, -1)].temp = n :
          edits[--i].temp = 0) {
      i < n ? i : console.error("Edit.Undo refers forward");
    }
  }
  try {
    for (i = 0; i <= index && lmax-- > 0; i++) {
      /** @type {unknown} */
      var property = self, args = JSON.parse((last = edits[i]).args);
      for (var path = last.command.split("."); path.length;)
        if (property instanceof Object)
          property = property[path.shift() || ""];
      if (typeof property != "function") {
        console.error("edits[" + i + "].command isn't function property");
        continue;
      }
      var command = property;
      if (!(args instanceof Array))
        console.warn("edit.args is not an Array");
      /** @see {Edit.This} */
      if (last.type === 2)
        command.apply(target, args);
      /** @see {Edit.Undo} */
      else if (last.type !== 3)
        command.apply(UDF, [
          /** @type {any} */
          (target)
        ].concat(args));
      if (last.temp > i)
        // this was an interesting to find what bug it is bug v.0.2.4
        i = last.temp - 1;
    }
  } catch (e) {
    console.error("Executing Edit commands failed misserably, " +
      "at index: " + i + " command: " + edits[i], e);
    // save Ship before completely throwing an error
    Edit.save(target);
  }
};
/** @param {Ship} target */
Edit.undo = function (target) {
  var edits = target.history, last = edits[edits.length - 1];
  var index = last && last.type === 3 ?
    +last.args.slice(1, -1) :
    edits.length - 1;
  Edit.historyAt(target, index - +!!index);
};
/** @param {Ship} target */
Edit.redo = function (target) {
  var edits = target.history, last = edits[edits.length - 1];
  var index = last && last.type === 3 ?
    +last.args.slice(1, -1) :
    edits.length - 1;
 Edit.historyAt(target, index + +!!(index < edits.length - 1));
};
Edit.rotate =
  /** @type {Edit.Primitive.rotate} */
  (function (target, rx, ry, rz) {
    arguments.length > 2 ?
      Edit.applyCommand(Edit.Primitive.rotate, target, rx) :
      Edit.applyCommand(Edit.Primitive.rotate, target, rx, ry, rz);
  });
/** @type {Edit.Primitive.move} */
Edit.move = function (target, x, y, z) {
  var cmd = Edit.Primitive.move;
  Edit.applyCommand(cmd, target, x, y, z);
};
/** @type {Edit.Primitive.paint} */
Edit.paint = function (target, color) {
  var cmd = Edit.Primitive.paint;
  Edit.applyCommand(cmd, target, color);
};
/** @type {Edit.Primitive.oldUIColor} */
Edit.oldUIColor = function (ids, color) {
  /** @type {Ship["setSelected"]} */
  var cmd = Ship.prototype.setSelected;
  Edit.applyCommand(this, cmd, ids);
  Edit.applyCommand(Edit.Primitive.paint, this, color);
};
/** @type {Edit.Primitive.oldUIMove} */
Edit.oldUIMove = function (ids) {
  var cmd = Edit.Primitive.oldUIMove;
  Edit.applyCommand(this, cmd, ids);
};
/** @type {Edit.Primitive.oldUIRotate} */
Edit.oldUIRotate = function (ids) {
  var cmd = Edit.Primitive.oldUIRotate;
  Edit.applyCommand(this, cmd, ids);
};
/* @param {Ship} target @param {number} x @param {number} y
 * @param {number} z @param {ShipBlock} tile */
/** @type {(target:Ship,x:number,y:number,z:number,tile:ShipBlock)=>void} */
Edit.place = function (target, x, y, z, tile) {
  /** @type {Ship["placeBlock"]} */
  var cmd = Ship.prototype.placeBlock;
  Edit.applyCommand(target, cmd, x, y, z, tile);
};
/** @type {(target:Ship,selection?:number[]|ShipBlock[])=>void} */
Edit.select = function (target, selection) {
  /** @type {Ship["setSelected"]} */
  var cmd = Ship.prototype.setSelected;
  arguments.length > 1 ?
    Edit.applyCommand(target, cmd, selection) :
    Edit.applyCommand(target, cmd);
};
// taken from: https://stackoverflow.com/a/47593316
/** @param {number} seed @see {Ship.dateTime} */
Edit.randSFC32 = function (seed) {
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
  };
};
/** namespace for original Edit methods
 * @namespace @typedef {never} Edit.Primitive @returns {never} */
Edit.Primitive = function () {
  throw new TypeError("Illegal constructor");
};
Edit.Primitive.rotate = (
  /** rotates Dr ships as well as db vehicles
   * @overload @param {Ship} target rotate on DBVE Rotation basis
   * @param {number} rx @returns {void}
   * @overload @param {Ship} target rotate using Block.rotate
   * @param {number} rx @param {number} ry @param {number} rz
   * @returns {void} @param {Ship} target @param {number} rx
   * @param {number} [ny] @param {number} [nz] */
  function (target, rx, ny, nz) {
    if (typeof ny != "number") {
      var ry = 0, rz = 0, applyRotation = function (rot) {
        rot[2] =
          /** @type {0|1|2|3} */
          (rot[2] + rx & 3);
      };
      rx *= 90;
    } else {
      ry = ny;
      rz = nz || 0;
      applyRotation = function (rot) {
        Block.rotate(rot, rx, ry, rz);
      };
    }

    rx >= 0 && rx < 4 ? rx |= 0 : rx = Math.round(rx / 90) % 4 + 4 & 3;
    ry >= 0 && ry < 4 ? ry |= 0 : ry = Math.round(ry / 90) % 4 + 4 & 3;
    rz >= 0 && rz < 4 ? rz |= 0 : rz = Math.round(rz / 90) % 4 + 4 & 3;
    var i = 0, edtA = [0, 1, 2, 0, 0, 0];
    var selection = target.selection;
    /** @param {number} ax ; */
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
      /** @type {XYZPosition} */
      var newA = [0, 0, 0];
      for (var n = 3, pos = selection[i].position; n-- > 0;) {
        newA[n] = edtA[n] & 4 ? -pos[edtA[n] & 3] : pos[edtA[n] & 3];
      }
      applyRotation(selection[i].rotation);
      selection[i++].position = newA;
    }
  }
);
/**
 * @param {Ship} target
 * @param {number} x @param {number} y @param {number} z */
Edit.Primitive.move = function (target, x, y, z) {
  for (var aar = target.selection, i = aar.length; i-- > 0;) {
    var pos = aar[i].position;
    pos[0] += x;
    pos[1] += y;
    pos[2] += z;
  }
};
/** @param {Ship} target @param {number} color */
Edit.Primitive.paint = function (target, color) {
  var colorName = Color.NAME[color] || null;
  target.selection.forEach(color === -1 ?
    function (e) {
      e.properties.color = Color.default(e.internalName);
    } :
    function (e) {
      e.properties.color = colorName;
    });
};
// end of taken
/** @this {Ship} @param {number[]} ids @param {number} color */
Edit.Primitive.oldUIColor = function (ids, color) {
  /** @type {keyof Color.ID|""} */
  var name = Color.NAME[color] || "";
  for (var i = 0, arr = this.blocks; i < ids.length; i++)
    arr[ids[i]].properties.color = name;
};
/** @this {Ship} @param {number[]} ids */
Edit.Primitive.oldUIMove = function (ids) {
  for (var i = 0, arr = this.blocks; i < ids.length; i++) {
    var pos = arr[ids[i]].position;
    pos[1] & 1 ?
      pos[2] & 1 ? --pos[1] : ++pos[2] :
      pos[2] & 1 ? --pos[2] : ++pos[1];
  }
};
/** @this {Ship} @param {number[]} ids */
Edit.Primitive.oldUIRotate = function (ids) {
  for (var i = 0, arr = this.blocks; i < ids.length; i++) {
    var o = arr[ids[i]], rot = o.rotation[2];
    if ([
        "Slab Wedge",
        "Wedge",
        "Wedge 1x2",
        "Wedge 1x4",
        "Smooth Corner",
        "Smooth Corner 1x2",
        "Smooth Corner 1x4",
        "Glass Wedge"
      ].indexOf(o.internalName) >= 0 && rot === 3) {
      o.rotation[1] = !o.rotation[1];
    }
    //@ts-expect-error
    o.rotation[2] = rot + 1 & 3;
  }
};
Edit.haha = Edit;
Data.nameMethods(Edit);

/**
 * @typedef {Block[]&{target?:Ship,id:number}} EditSelection
 * @TODO BlockSelection can be used only with its target
 * a Blueprint with deep copied logics should be used instead
 * BlockSelection is even EditSelection now and is not used at all */
/**
 * @typedef {{nodeList:(Logic|undefined)[],nodeConnections:number[][],
 * customInputs:Ship.CustomInput[],gridSize:Ship.Grid}} KnownShipProperties
 * @typedef {{[key:string]:unknown}&{[K in keyof KnownShipProperties]?:
 *   KnownShipProperties[K]}} ShipProperties
 * @see {Logic} @see {Ship.CustomInput}
 * @typedef {"Ship"|"Logic"|"Save"} EditMode */
/** class is frozen, toJSON methods in use
 * @param {string} name
 * @param {number[]} version
 * @param {string} time
 * @param {ShipBlock[]} blocks
 * @param {ShipProperties|null} [properties=null]
 * @param {Ship.Mode} [mode=new Ship.Mode("Ship")]
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
  /** @type {Edit[]} */
  this.history = [];
  /** @type {ShipBlock[]} */
  this.selection = [];
  /** to track Droneboi Vehicles editor version in its JSON savefiles
   * @type {number} */
  this.significantVersion = Ship.VERSION;
  Object.seal(this);
}
/** @readonly @type {45} significantVersion: 45 (integer) */// @ts-ignore
Ship.VERSION = 45;
Ship.propertyNames = new RegExp("^(?:nodeList|nodeConnections|customI" +
  "nputs|gridSize)$");
Ship.prototype.selectRect = (
  /**
   * @overload @returns {ShipBlock[]}
   * @overload @param {number} x0 @param {number} x1 @param {number} y0
   * @param {number} y1 @param {number} z0 @param {number} z1
   * @returns {ShipBlock[]} @this {Ship} */
  function (x0, y0, z0, x1, y1, z1) {
    // n first coordinate is stored as temporary
    var x = x0, y = y0, z = z0, selected = this.selection;
    var i = selected.length = 0, all = this.blocks;
    if (typeof x == "number") {
      // if the second coordinate is greater as supposed
      //   n0 will become the second coordinate
      //   else n0 already is second one, temporary is set to first
      x1 > x0 ? x0 = x1 : x = x1;
      y1 > y0 ? y0 = y1 : y = y1;
      z1 > z0 ? z0 = z1 : z = z1;
    } else {
      for (; i < all.length; i++)
        selected.push(all[i]);
    }
    for (; i < all.length; i++) {
      var pos = all[i].position;
      if (pos[0] < x || pos[0] > x0 ||
        pos[1] < y || pos[1] > y0 || pos[2] < z || pos[2] > z0)
        continue;
      selected.push(all[i]);
    }
    return selected;
  }
);
/** skipping selection parameter selects all blocks
 * @this {Ship} @param {ShipBlock[]|number[]} [selection] */
Ship.prototype.setSelected = function (selection) {
  var ship = this;
  if (!selection) {
    selection = ship.selection;
    for (var i = selection.length = ship.blocks.length; i--;)
      selection[i] = ship.blocks[i];
    return;
  }
  var ids = [], selected = ship.selection, blocks = ship.blocks;
  for (var i = selected.length = selection.length; i-- > 0;) {
    var id = selection[i];
    if ((ids[i] = typeof id == "number" ? id : blocks.indexOf(id)) < 0)
      console.error("Selected ShipBlock was not found:" + id);
    selected[i] = blocks[ids[i]];
  }
};
/** @deprecated use @see {Ship.prototype.removeBlocks} @this {Ship} */
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
};
/** @this {Ship} */
Ship.prototype.replaceRect = function (x0, y0, z0, x1, y1, z1) {
  // https://stackoverflow.com/a/424445 backup random number solution
  var selected = this.selection;
  if (!selected.length)
    return console.warn("No blocks selected.");
  var x = x0, y = y0, z = z0, blocks = [], rand = Edit.randSFC32(0);
  // x becomes x_min and x0 becomes x_max
  x1 > x0 ? x0 = x1 : x = x1;
  y1 > y0 ? y0 = y1 : y = y1;
  z1 > z0 ? z0 = z1 : z = z1;
  /** @param {Ship} ship */
  function pushBlock(ship) {
    // console.log(x, y, z, x0, y0, z0, x1, y1, z1);
    var idx = Math.floor(rand() * selected.length);
      // looking for short and suitable name of random block from selection
    var one = selected[idx], name = one.internalName;
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
  ship.removeRect(x1 = x, y1 = y, z1 = z, x0, y0, z0);
  /** axis += 2 spacing is used temporarily
   * @TODO make block collisions blocks are being placed
   * maybe some kind of table for axis x, y, z, block index */
  for (x = x1; x <= x0; x += 2)
    for (y = y0; y >= y1; y -= 2)
      for (z = z1; z <= z0; z += 2)
        blocks.push(pushBlock(this));
  return blocks;
};
Ship.prototype.fillRect = function () {
  throw new Error("Unimplemented");
  var x = 0, x0 = 0, y = 0, y0 = 0, z = 0, z0 = 0;
  // width, height, length (not implemented yet placing with collsisions)
  var w = x - x0 + 1, h = y - y0 + 1, l = z - z0 + 1;
  var b;
};
/**
 * @this {Ship} @param {number} x @param {number} y @param {number} z */
Ship.prototype.paste = function (x, y, z) {
  var selected = this.selection;
  /** @type {(Logic<any>|undefined)[]} */
  var logics = ship.prop && ship.prop.nodeList || [],
    /** @type {(Logic<any>|undefined)[]} */
    oldLogics = this.prop &&
      this.prop.nodeList || [],
    /** @type {number[]} mapping new output nodes indexes by old ones */
    outputs = [],
    /** @type {number[]} later used to assign each to output */
    inputs = [];
  for (var i = selected.length, l = 1; i-- > 0;) {
    var pos = selected[i].position, rot = selected[i].rotation;
    var block = new Block(
      selected[i].internalName,
      [pos[0] + x, pos[1] + y, pos[2] + z],
      [rot[0], rot[1], rot[2]],
      JSON.parse(JSON.stringify(selected[i].properties))
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
          idx = (selected[i].properties.nodeIndex || [])[j];
        newNode.owner = block;
        /** @type {Logic<any>|safe} node from nodeList of selection */
        var oldNode = oldLogics[idx] || {};
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
    newNode = logics[inputs[i]] || {};
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
      } else
        console.error("Missing new logic output node at: " + outIdx);
    } else if (
      (outNode = logics[newNode.pairs]) && outNode.pairs instanceof Array
    ) {
      newNode.pairs = newNode.pairs;
      outNode.pairs.push(inputs[i]);
    } else
      newNode.pairs = -1;
  };
};
Ship.prototype.mirror = (
  /**
   * @overload @returns {void}
   * @overload @param {number} x0 @param {number} x1 @param {number} y0
   * @param {number} y1 @param {number} z0 @param {number} z1
   * @returns {void} @this {Ship}
   * @param {number} [x0] @param {number} [x1] @param {number} [y0]
   * @param {number} [y1] @param {number} [z0] @param {number} [z1] */
  /** @type {()=>void} */
  function (x0, y0, z0, x1, y1, z1) {
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
  }
);
Ship.prototype.mirror2d = (
  /**
   * @overload @returns {void}
   * @overload @param {number} x0 @param {number} x1 @param {number} y0
   * @param {number} y1 @param {number} z0 @param {number} z1
   * @returns {void} @this {Ship}
   * @param {number} [x0] @param {number} [x1] @param {number} [y0]
   * @param {number} [y1] @param {number} [z0] @param {number} [z1] */
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
          // (has size of tiny thruster ? leave it alone : [0, 1, 2, -1][r]) :
          (size.w & 16 ? 0 : (r + 1) % 4 - 1) :
          size ?
            // move bigger blocks to keep position of their center
            r > 1 ? -(size.w -32 >> 4) : (size.w - 32 >> 4) :
            0;
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
      // Wedges and Smoooowth Couorners
      if (Block.isFlippable(id))
        block.rotation[1] = !block.rotation[1];
    }
    var lx = x0 || 0, ly = y0 || 0, lz = z0 || 0, hx = 0, hy = 0, hz = 0;
    /** @type {XYZPosition} */
    var pos, all = this.blocks;
    if (typeof x1 == "number") {
      y1 = y1 || 0;
      z1 = z1 || 0;
      x1 > (x0 || 0) ? hx = x1 : lx = x1;
      y1 > (y0 || 0) ? hy = y1 : ly = y1;
      z1 > (z0 || 0) ? hz = z1 : lz = z1;
      for (var i = 0; i < all.length; i++) {
        pos = all[i].position;
        // selection is inverted TROLOLOOLOOLLOOLOLOLOOLOLOLO LOLOLOLOLOLOLOL
        if (pos[0] < lx || pos[0] > hx || pos[1] < ly || pos[1] > hy ||
          pos[2] < lz || pos[2] > hz)
          pushBlock(all[i], pos);
      }
    } else {
      for (var i = 0; i < all.length; i++) {
        pos = all[i].position;
        pushBlock(all[i], pos);
      }
    }
  }
);
/** ignores __NULL__ blocks if nonull is true
 * @this {Ship} @param {number} x @param {number} y
 * @param {boolean} [nonull=true] @returns null if nothing found */
Ship.prototype.blockAtPonit2d = function (x, y, nonull) {
  if (nonull === UDF)
    nonull = true;
  for (var all = this.blocks, i = all.length; i-- > 0;) {
    var block = all[i];
    if (block.internalName === "__NULL__" && nonull)
      continue;
    var rect = Block.Size.highlightBlock(block, i);
    var rx = rect.x, ry = rect.y;
    if (-x < rx || y < ry || -x > rx + rect.w || y > ry + rect.h)
      continue;
    return rect;
  }
  return null;
};
/** used to revert position adjustment from vehicles 'infected' by it:
 * https://github.com/KaaBEL/.d1r.dbv/commit/0b8156e155383059cf1aeeb4a997818
3c92b92f8#diff-fa9a713c17c685348118b8d29bd55f10491e651ccafaf45d1044ed01ffe6e
80bL1414
 * WARNING because of significant version it doesn't autodetect @this {Ship}
 * @param {boolean} [fixSlab] if true it also fixes wrong Slab size */
Ship.prototype.fixPositionAdjustment = function (fixSlab) {
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
Edit.applyCommand(this, this.fixPositionAdjustment, fixSlab);
};
/** allows using position adjustment for certain operations such as,
 * DR base64 keys prototype @param {(ship:Ship)=>void} operation
 * @this {Ship} method does not track updates of ship made by operation */
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
Ship.prototype.fixVersion_1_3 = function () {
  var gv = this.gameVersion;
  if (!(gv instanceof Array))
    return;
  if (gv[0] === 1 ? gv.length > 1 && gv[1] > 3 : gv[0] > 1)
    return;
  var blocks = this.blocks, i = blocks.length;
  if (gv.length < 3 || (gv[0] && gv[1] === 3)) {
    while (i-- > 0)
      if (blocks[i].properties.color === "Purple")
        blocks[i].properties.color = "Magneta";
  } else
    while (i-- > 0) {
      if (blocks[i].properties.color === "Purple")
        blocks[i].properties.color = "Magneta";
      if (blocks[i].internalName === "Hinge") {
        var cP = blocks[i].properties.customParameter || [];
        cP[2] = cP[1];
        cP[1] = 1;
      }
    }
  this.gameVersion = [];
};
/**
 * @param {number} x @param {number} y @param {number} z
 * @param {ShipBlock|number} refBlock template for the new one */
Ship.prototype.placeBlock = function placeBlock(x, y, z, refBlock) {
  // improved old_UI from editor.js
  var ref = typeof refBlock == "number" ?
    Block.arrayFromObjects({n: Block.NAME[refBlock], p: [0, 0]})[0] :
    /** @type {ShipBlock} */
    (JSON.parse(JSON.stringify(refBlock)));
  delete ref.properties.nodeIndex;
  var logics = this.prop && this.prop.nodeList || [];
  var block = new Block(
    ref.internalName,
    [x, y, z],
    /** @type {Rotation} */
    (ref.rotation.slice()),
    Block.Properties.addProperty(ref.internalName, Logic.addLogic(
      ref.internalName,
      ref.properties,
      logics,
      this.blocks
    ))
  );
  if (logics.length)
    (this.prop || (this.prop = {})).nodeList = logics;
  (block.properties.nodeIndex || []).forEach(function (e) {
    var node = logics[e];
    node ? node.owner = block : console.error("no node in temp code");
  });
  this.blocks.push(this.getMode().mode === "Logic" ?
    // block added to ship.blocks is LogicBlock for Logic editing mode
    new LogicBlock(block, -1, logics) :
    block);
  return block;
};
/** replaces block on given index with last block and cuts off
 * last item of blocks array @this {Ship} @param {number[]} ids */
Ship.prototype.removeBlocks = function removeBlocks(ids) {
  var logics = this.prop && this.prop.nodeList || [];
  // https://www.youtube.com/watch?v=14jlIxVrcvo
  // &lc=UgzUpAoGmpxuPXHmFZ54AaABAg.9eJVIExWl_q9eLBZH5o9Co
  for (var i = ids.sort(function (a, b) {
    return a - b;
  }).length, blocks = this.blocks; i-- > 0;) {
    Logic.removeLogic(blocks[ids[i]], logics);
    blocks[ids[i]] = blocks.slice(-1)[0];
    blocks.length--;
  }
  // (v.0.2.1) is JSON.parse(JSON.stringify(ids)) necessary here?
};
/** @see {Tool.list} */
/** 3h_ 
 * @this {Ship} @param {number} x0 @param {number} y0
 * @param {number} x1 @param {number} y1
 * @param {boolean} [loose] true = select any block colliding within area
 * @param {boolean} [deselect] true = deselect instead of selecting */
Ship.prototype.selectArea2d = function selectArea2d(x0, y0, x1, y1,
  loose, deselect) {
  var l = this.blocks.length, index = 0;
  var right = Math.max(x0, x1), left = Math.min(x0, x1);
  var bottom = Math.max(y0, y1), top = Math.min(y0, y1);
  if (!loose)
    for (; l-- > 0;) {
      var rect = Block.Size.highlightBlock(this.blocks[l]),
        leftRight = rect.x > left && rect.x + rect.w < right,
        topBottom = rect.y > top && rect.y + rect.h < bottom;
      if (leftRight && topBottom) {
        index = this.selection.indexOf(this.blocks[l]);
        deselect ?
          index > -1 && this.selection.splice(index, 1) :
          index < 0 && this.selection.push(this.blocks[l]);
      }
    }
  else
    for (; l-- > 0;) {
      rect = Block.Size.highlightBlock(this.blocks[l]);
      leftRight = rect.x + rect.w > left && rect.x < right;
      topBottom = rect.y + rect.h > top && rect.y < bottom;
      if (leftRight && topBottom) {
        index = this.selection.indexOf(this.blocks[l]);
        deselect ?
          index > -1 && this.selection.splice(index, 1) :
          index < 0 && this.selection.push(this.blocks[l]);
      }
    }
};
Ship.prototype.toJSON = function () {
  /** @param {ShipProperties["nodeList"]} logics */
  function parseNodeConnections(logics) {
    if (!logics)
      return [];
    for (var i = logics.length, parsed = []; i-- > 0;) {
      var node = logics[i], n = node ? node.pairs : [];
      typeof n == "number" && logics[n] && parsed.push([i, n]);
    }
    return parsed;
  };
  return {
    name: this.name,
    gameVersion: this.gameVersion,
    dateTime: this.dateTime,
    blocks: this.blocks.map(function (e) {
      var r = e.rotation;
      return e instanceof Block ? {
        internalName: e.internalName,
        position: e.position,
        rotation: B64Key.gBlockRotation(r[2] | +r[1] << 2 | r[0] << 3),
        properties: e.properties
      } : {
        internalName: e.internalName,
        position: e.position,
        rotation: B64Key.gBlockRotation(r[2] | +r[1] << 2 | r[0] << 3),
        properties: e.properties,
        logicPosition: e.logicPosition,
        logicBlockIndex: e.logicBlockIndex
      };
    }),
    prop: function (prop) {
      var obj = {};
      for (var p in prop)
        if (OP.call(prop, p))
          p === "nodeList" ?
            obj.nodeConnections = parseNodeConnections(prop[p]) :
            obj[p] = prop[p];
      return obj;
    } (this.prop),
    history: this.history
  };
}
// (v.0.2.8) major refactor after limiting use of type any
/** @readonly @param {safe} object @see {Block.arrayFromObjects} */
Ship.fromObject = function fromObject(object) {
  var o = {
    name: object.name || object.n,
    ver: object.gameVersion || object.version || object.gv,
    time: object.dateTime || object.time || object.dt,
    blocks: object.blocks || object.b,
    props: object.properties || object.prop,
    add: object.ls || object.nc || object.ci ? {
      size: object.ls,
      logic: object.nc,
      inputs: object.ci
    } : null
  };
  var name = typeof o.name === "string" ? o.name : "[unnamed]",
    ver = (typeof o.ver === "string" ?
      o.ver.replace(/ ,/g, ".").split(".") :
      o.ver instanceof Array ?
        o.ver :
        []).map(Number),
    time = typeof o.time == "string" ? o.time : Ship.dateTime(),
    /** @type {safe|null} */
    props = typeof o.props == "object" ? o.props : null,
    /** @type {Logic<any>[]&{nc:any}} */
    logics = function () {
      /** @type {any} */
      var arr = [], temporary = (props || {}).nodeList;
      /** @type {unknown[]} */
      var logics = temporary instanceof Array ? temporary : [];
      arr.nc = o.add && o.add.logic || (temporary instanceof Array ?
        logics.map(function (e, i) {
          /** @type {{pairs?:unknown}} */
          var node = typeof e == "object" && e || {}, n = node.pairs;
          return !!(typeof n == "number" && logics[n]) && [i, n] || null;
        }) :
        props && props.nodeConnections || []);
      return arr;
    }(),
    blocks = o.blocks instanceof Array ?
      Block.arrayFromObjects(o.blocks, logics) :
      Block.generateArray(("" + o.blocks).toUpperCase() ===
        "PAZIK" ? -7 : -69, logics);
  delete logics.nc;
  Logic.reassemble(blocks, logics);
  if (o.add) {
    // (v.0.1.68.K1) added fallbacks for launchpadSize and customInputs, not
    // nodeConnections since prsed nodeList is used for "ni" in DBV file
    (props = props || OC()).launchpadSize = o.add.size || 0;
    for (var i = Ship.Grid.VALUE.length; i-- > 56;) {
      var grid = Ship.Grid.VALUE[i];
      if (grid && grid.dbvIndex === props.launchpadSize)
        props.gridSize = grid;
    }
    props.nodeConnections = o.add.logic;
    props.customInputs = o.add.inputs || [];
  }
  if (logics.length)
    (props = props || OC()).nodeList = logics;
  // reassamble different from Logic.reassemble
  props = Ship.CustomInput.reassemble(blocks, props);
  return new Ship(name, ver, time, blocks, props);
};
/** @readonly @param {Ship} ship */
Ship.toDBV = function toDBV(ship) {
  if (ship.getMode().mode !== "Ship")
    console.warn("Converting Ship that isn't Ship.Mode \"Ship\".");
  var blocks = [];
  for (var i = 0, e = ship.blocks[0]; i < ship.blocks.length; i++) {
    e = ship.blocks[i];
    var size = Block.Size.VALUE[Block.ID[e.internalName]];
    /__placeholder\d+__/.test(e.internalName) || size && blocks.push({
      n: e.internalName,
      p: [Math.floor(e.position[1]) / 2, Math.floor(e.position[2]) / 2],
      r: Math.floor(e.rotation[2] * 90),
      f: e.rotation[1],
      s: e.properties.color,
      c: e.properties.customParameter || [],
      ni: e.properties.nodeIndex || [],
      wg: e.properties.weldGroup || 0
    });
  }
  /** @type {{Item1:number,Item2:number}[]} */
  var connections = [], custominps = [], shipProp = ship.prop || {};
  var logics = shipProp.nodeList instanceof Array ?
    shipProp.nodeList :
    [];
  for (i = logics.length; i-- > 0;) {
    /** @type {Logic<any>|{pairs:[]}} */
    var node = logics[i] || {pairs: []}, n = node.pairs;
    typeof n == "number" && logics[n] &&
      connections.push({
        // node identifier, input type
        Item1: i,
        // referenced node
        Item2: n
      });
  }
  var inputs = shipProp.customInputs instanceof Array ?
    shipProp.customInputs :
    [];
  for (i = 0; i < inputs.length; i++) {
    /** @type {Ship.CustomInput|safe} */
    var custom = inputs[i] || {}, s = custom.name,
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
/** @readonly @param {string} key reads Droneboi bas64 keys */
Ship.fromDBKey = function (key) {
  var blocks = [], arr = key.split("|").slice(-1)[0].split(":");
  for (var i = arr.length - 1, logics = []; i-- > 0;) {
    var o = arr[i].split(";"), name = Block.db1ToDb3[o[0]] || o[0];
    // o[1] position, used below to replace contents of array o
    var rot = +(o[2] + "").replace(",", ".") / 90 || 0 & 3;
    // o[4] controll groups not used
    var ctrl = [+o[3] || 0],
      color = +o[5] === +o[5] ?
        Color.db1ToDb3[+o[5]] :
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
  return new Ship("[unnamed]", [],
    Ship.dateTime(1714557750), blocks, obj);
};
/** @param {ArrayBuffer|Uint8Array|string} mssss */
Ship.fromMSSSS = function (mssss) {
  var singleWarn = 1;
  /** @param {unknown} raw */
  function decodePart(raw) {
    if (typeof raw != "string") {
      singleWarn && singleWarn-- &&
        console.warn("MSSSS ship.Parts[x] isn't string");
      return new Block("__unknown__", [0, 0, 0], [0, !1, 0]);
    }
    if (raw[0] !== "{" || raw.slice(-1)[0] !== "}") {
      var part = raw.split("|"), rot = part[2].split(","), prop = {};
      if (/Deco[Ll]ayer\d?_/.test(raw)) {
        prop.invalidName = part[0];
        part[0] = "__unknown__";
      }
      /** @type {Rotation} */
      var r = [0, +rot[1] < 0, 0], pos = part[1].split(",");
      if (+rot[2] < 0)
        r[1] = !r[1];
      r[2] =
        /** @type {0|1|2|3} */
        (+rot[0] / 90 + +(+rot[2] < 0) * 2 + 4.5 & 3);
      return new Block(part[0], [0, +pos[0], +pos[1]], r);
    }
    try {
      var result = JSON.parse(raw),
        /** @type {safe} */
        obj = result instanceof Object ? result : {};
    } catch (e) {
      console.error("parsing a MSSSS object ship.Parts[x]:" + raw);
      obj = {};
    }
    var name = typeof obj.ID == "number" ?
        Block.NAME[obj.ID + 1280] :
        "__unknown__",
      /** @type {XYZPosition} */
      position = [0, +(obj.X || 0), +(obj.Y || 0)],
      rotMirVert = +(obj.MirVert || 0) < 0,
      rotIndex =
        /** @type {0|1|2|3} */
        (+(obj.Rotation || 0) / 90 + +rotMirVert * 2 + 4.5 & 3),
      rotFlip = +(obj.MirHor || 0) < 0 ? !rotMirVert : rotMirVert,
      /** @type {Rotation} */
      rotation = [0, rotFlip, rotIndex];
    return new Block(name, position, rotation);
  }
  if (typeof mssss != "string") {
    mssss instanceof Uint8Array ? 0 : mssss = new Uint8Array(mssss);
    for (var i = mssss.byteLength; i-- > 0;)
      mssss[i] ^= 19;
    mssss = Ship.utf8ToString(mssss);
  }
  var string = mssss.trim();
  if (string[0] !== "{")
    return null;
  if (string.slice(-1)[0] !== "}") {
    for (i = string.length; i-- > 0;)
      if (/\w/.test(String.fromCharCode(string[i].charCodeAt(0) ^ 19)))
        break;
    if ((string = string.slice(0, i + 1)).slice(-1)[0] !== "}")
      return null;
  }
  try {
    var result = JSON.parse(string),
      /** @type {safe} */
      o = result instanceof Object ? result : {};
  } catch (e) {
    console.error("Parsing .mssss:", e);
    return;
  }
  var name = typeof o.Name == "string" ? o.Name : "Modular Spaceship",
    parts = o.Parts instanceof Array ? o.Parts.map(decodePart) : [],
    moreParts = o.UncompressedParts;
  if (moreParts instanceof Array)
    parts = parts.concat(moreParts.map(function (item) {
      return new Block("__unknown__", [0, 0, 0], [0, !1, 0], item);
    }));
  var spaceship = new Ship(name, [], Ship.dateTime(), parts);
  spaceship.setSelected();
  Edit.Primitive.rotate(spaceship, 2);
  spaceship.setSelected([]);
  return spaceship;
};
/** @readonly @param {Ship} ship @throws {Error} */
Ship.checkDBV = function (ship) {
  /** @TODO finish checkDBV (me later: nah, nope) */
  /** @param {Error} err */
  function at(err) {
    if (i !== -1)
      err.message += " for \"" + b[i].internalName + "\" block.";
    return err;
  }
  function notPositiveInteger(n) {
    return (n % 1 !== 0) || isNaN(n % 1) || n < 0;
  }
  /** @param {Prop["item"]} item @param {unknown[]} arr @param {number} id */
  function checkProperty(item, arr, id) {
    if (id === 803) {
      if (typeof arr[0] != "string")
        throw at(new Error("The \"c\" property requires type:" +
          " string at index: 0"));
      n = 1;
      return;
    }
    for (var j = 0, def = item.default; j < def.length; j++)
      if (typeof arr[n++] != typeof def[j])
        throw at(new Error("The \"c\" property requires type: " +
          typeof def[j] + " at index: " + (n - 1)));
    if (id === 791) {
      if (!(arr[0] instanceof Array && arr[0].length === 4) ||
        arr[0].some(function (e) {
          return notPositiveInteger(e) || n > 4;
        })) {
        throw at(new Error("Incorrect welgroups array"));
      }
    } else if (item instanceof classes["Integer Slider"] ||
      item instanceof classes["Dropdown"]) {
      if (notPositiveInteger(arr[n - 1])) {
        throw at(new Error("The \"c\" property requires positive" +
          " integer value at index: " + (n - 1)));
      }
    }
    var n0 = arr[n - 1];
    if ("max" in item && "min" in item && typeof n0 == "number") {
      if (n0 > item.max || n0 < item.min)
        throw at(new Error("Only values in range: " + item.min + " " +
          item.max + " are allowed at index: " + (n - 1) +
          " of \"c\" property"));
    }
    "@TODO ABANDONED UNFINISHED";
  }
  console.info("A" + "BAN" + "DONE" + atob("RCBVTkZJTklTSEVE"));
  rend_collisions = true;
  var classes = Block.Properties.Items, shipProp = ship.prop || {};
  for (var b = ship.blocks, i = b.length, msg = ""; i-- > 0;) {
    var id = Block.ID[b[i].internalName], pos = b[i].position;
    if (id < 690 && id > 959)
      console.warn("Non Droneboi: Conquest block " + b[i].internalName);
    // if (pos[1] % 1 || pos[2] % 1 || isNaN(pos[1] % 1 + pos[2] % 1))
    //   throw at(new Error("Fractial position: " + pos));
    var n = +b[i].rotation[2], arr = b[i].properties.customParameter;
    if (notPositiveInteger(Math.floor(n * 90)) || n > 3)
      throw new Error("Invalid rotation value isn't 0, 1, 2 or 3");
    if (typeof b[i].rotation[1] != "boolean")
      throw at(new Error("Flippable value (rotation[1]) is invalid"));
    if (b[i].rotation[1] && !Block.isFlippable(id))
      throw at(new Error("Block is not flippable"));
    n = Color.ID[b[i].properties.color || ""];
    if (n > 20 || n < 0)
      throw at(new Error("Unexisting color"));
    n = b[i].properties.weldGroup || 0;
    if (notPositiveInteger(n) || n > 4)
      throw at(new Error("Ivalid weld group"));
    var propsDef = Block.Properties.VALUE[id];
    if (!(arr instanceof Array))
      throw at(new Error("The array \"c\" property is required"));
    if (propsDef) {
      for (var j = 0, n = 0; j < propsDef.length; j++)
        checkProperty(propsDef[j].item, arr, id);
      if (arr.length !== n && !Logic.VALUE[id] && arr.length !== n + 1)
        throw at(new Error("The \"c\" property requires " + n +
          " items long array"));
    }
    arr = b[i].properties.nodeIndex;
    if (arr && !(arr instanceof Array && arr.every(function (e) {
      return typeof e == "number" && !isNaN(e % 1);
    }))) {
      throw at(new Error("The \"ni\" property can be (int) number[]"));
    }
    /** @TODO investigate bottom lines parallel collisions */
    var colliding = Block.Box2d.collide(b[i], b);
    if (colliding.length)
      throw at(new Error("There is some overlapping with \"" +
        colliding.map(function (e) {
          return e.internalName;
        }) + "\""));
  }
  var grid = shipProp.gridSize && shipProp.gridSize.box2d || null;
  if (!grid)
    throw new Error("Can do only .DBV grids for now :(");
  if (typeof ship.name != "string")
    throw new Error("ship.name must be of type string.");
  colliding = Block.Box2d.collide(Block.Box2d.GRID.Small,
    ship.blocks, true);
  if (colliding && colliding.length)
    throw new Error("Detected block(s) reaching outside small grid: " +
      colliding.map(function (e) {
        return e.internalName;
      }));
  rend_collisions = false;
  return ship;
};
/** timeToString
 * @readonly @param {number} [t=Date.now()] @param {number} [f=1] ?1 */
Ship.dateTime = function (t, f) {
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
};
/** @param {Uint8Array|ArrayBuffer} buffer @param {number} [i=0] */
Ship.utf8ToString = function (buffer, i) {
  var bytes = buffer instanceof Uint8Array ?
    buffer :
    new Uint8Array(buffer);
  // check BOM
  i = i || 0;
  if (bytes[i] === 0xEF && bytes[i + 1] === 0xBB && bytes[i + 2] === 0xBF)
    i += 3;
  // lb = lower boundary, ub = upper boundary, cp = code point, more
  var n = 0, lb = 128, ub = 191, cp = 0, more = 0, s = "";
  for (n = 0; i < bytes.length; s += String.fromCharCode(cp)) {
    if ((cp = bytes[i++]) < 128)
      continue;
    if (cp < 194) {
      cp = 0xFFFD;
      continue;
    }
    if (cp < 224) {
      cp = cp - 192 << 6;
      more = 1;
    } else if (cp < 240) {
      cp === 224 ?
        lb = 160 :
        cp === 239 && (ub = 191);
      cp = cp - 224 << 12;
      more = 2;
    } else if (cp < 245) {
      cp === 240 ?
        lb = 144 :
        cp === 244 && (ub = 143);
      cp = cp - 240 << 18;
      more = 3;
    } else if (cp < 256) {
      cp = 0xFFFD;
      continue;
    } else {
      debugger;
      console.error("debugger HuHh!?");
    }
    while (more) {
      if (i >= bytes.length) {
        cp = 0xFFFD;
        continue;
      }
      n = bytes[i++];
      n < lb || n > ub ? more = 0 : 0;
      lb = 128;
      ub = 191;
      if (!more) {
        i--;
        more = 0;
        cp = 0xFFFD;
        continue;
      }
      cp = cp + (n - 128 << --more * 6);
    }
    if (0xffff0000 & cp)
    {
      if (0xff000000 & cp)
        throw new Error("[v.0.2.27]Code point out of Unicode range!?");
      cp -= 0x10000;
      s += String.fromCharCode((cp >> 10) + 0xD800);
      cp = (cp & 0x3FF) + 0xDC00;
    }
  }
  return s;
};
/** @param {string} name @param {number} type */
Ship.CustomInput = function CustomInput(name, type) {
  this.name = name;
  /** type: -1 = unknown, 0 = Button, 1 = Switch. */
  this.type = type;
  Object.seal(this);
};
Ship.CustomInput.prototype.toString = function () {
  return this.name;
};
/** @param {Block[]} blocks @param {safe|null} prop ShipProperties */
Ship.CustomInput.reassemble = function (blocks, prop) {
  // This Ship.CustomInput.reassemble code feels so ...loading ...brain error
  var temporary = (prop || {}).customInputs;
  /** @type {safe} custom input from savefile */
  var old, oldInputs = temporary instanceof Array ? temporary : [];
  /** @type {Ship.CustomInput[]} */
  var inputs = [], used = Block.Properties.getInputOptions(prop);
  for (var i = used.length, j = i; i-- > 0;)
    inputs[i] = new Ship.CustomInput(used[i], 0);
  for (j += i = oldInputs.length; i-- > 0;)
    if ((old = oldInputs[i]) instanceof Object) {
      inputs[--j] = new Ship.CustomInput("" + (old.n || old.name),
        typeof old.t == "number" ? old.t : +(old.type || 0));
      used[j] = inputs[j].name;
    } else
      console.warn("CustomInput check- not passed.");
  /** @param {unknown} customParam */
  function includeMissingInput(customParam) {
    if (!(customParam instanceof Array))
      return console.warn("ControlBlock check0 not passed.");
    var name = customParam[0];
    if (typeof name != "string")
      return console.warn("ControlBlock check1 not passed.");
    // if found then remeber to not include dplicates
    if (used.indexOf(name) === -1) {
      inputs.push(new Ship.CustomInput(name, -1));
      used.push(name);
    }
  }
  for (var i = blocks.length; i-- > 0;)
    if (blocks[i].internalName === "Control Block")
      includeMissingInput(blocks[i].properties.customParameter);
  if (inputs.length > j)
    (prop || (prop = {})).customInputs = inputs.slice(j);
  return prop;
};
/** instance is frozen, (experimental class is frozen)
 * (keeping reference to mode object also keeps its old ship object)
 * @typedef Ship.Mode @property {EditMode} mode @property {()=>Ship} getShip
 * @param {EditMode} mode @param {Ship|(()=>Ship)} ship */
Ship.Mode = function (mode, ship) {
  /** @readonly */
  this.mode = mode;
  /** @readonly */
  this.getShip = ship instanceof Ship ? __private(ship) : ship;
  Object.freeze(this);
};
// when encoding ship, it might need to be in "Ship" mode
/** @readonly @type {Ship.Mode} *///@ts-expect-error
Ship.Mode.NONE = new Ship.Mode("Ship", new Ship("", [], "", []));
/** adds a layer for the parser to pass stored global ship in mode
 * to parse function, later parser calls only return the parse function
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
/** insctace is frozen, class is frozen
 * @param {{dbv?:number,grid?:number}} indexes @param {string} game
 * @param {string} name @param {Box2dPath|null} box2d */
Ship.Grid = function Grid(game, name, box2d, indexes) {
  /** @readonly */
  this.game = game;
  /** @readonly */
  this.name = name;
  /** @readonly */
  this.dbvIndex = indexes.dbv;
  /** @readonly */
  this.box2d = box2d ? Object.freeze(box2d) : null;
  /** @readonly */
  this.gridIndex = indexes.grid;
  Object.freeze(this);
};
Ship.Grid.prototype.toString = function () {
  return "[object Ship.Grid " + this.name + "]";
};
/** GG @param {{[key:number]:[game:string,name:string,dbvId:number]}} data */
Ship.Grid.generateGrids = function (data) {
  /** @type {(Ship.Grid|undefined)[]} */
  var grids = [], e = data[0];
  for (var p in data)
    if (OP.call(data, p) && typeof +p == "number" && (e = data[p])) {
      var opt = {grid: +p, dbv: e[2]};
      grids[p] = new Ship.Grid(e[0], e[1], Block.Box2d.GRID[e[1]], opt);
    }
  return grids;
};
Ship.Grid.VALUE = Ship.Grid.generateGrids({
  63: ["Droneboi: Conquest", "Small", 0],
  62: ["Droneboi: Conquest", "Medium", 1],
  61: ["Droneboi: Conquest", "Large", 2],
  60: ["Droneboi: Conquest", "Dreambox", 3],
  55: ["Droneboi", "Career", 1],
  54: ["Droneboi", "Sandbox", 2]
});
Data.nameMethods(Ship);
Object.freeze(Object.freeze(Ship).Mode);
Object.freeze(Ship.Grid);

// generating Eagle's Pazik (Modular Spaceships Space Ship)
/** global ship that's being rendered and edited */
var ship = Ship.fromObject({name: "Pazik_Mk1_Emil_", blocks: "Pazik"});
// var block = new Block("Block", [0, 0, 0], [0, !0, 0]),
//   ship = new Ship("None", [0, 9], "never", [block]);

/** class for old Deltarealm base64 prototype keys code
 * @namespace @typedef {never} B64Key @returns {never} */
function B64Key() {
  throw new TypeError("Illegal constructor");
}
B64Key.i = 0;
B64Key.j = 0;
B64Key.buffer = new Uint8Array(0);
/** @function base64ToUint8array */
B64Key.b64ToU8arr = function base64ToUint8array(base64) {
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
};
/** @function uint8arrayToBase64 @param {Uint8Array} uint8array */
B64Key.u8arrToB64 = function uint8arrayToBase64(uint8array) {
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
};

// the initial source used can be found here:
// https://github.com/KaaBEL/Deltarealm-b64-keys/blob/main/index.html#LC827
/** @param {[number,number,number]} r @returns {Rotation} */
B64Key.rotateBlock = function (r) {
  /** @type {0|1|2|3} rotation, (angle => of axis) */
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
      //@ts-expect-error
      return [2, !0, r[1] + 4 - r[2] & 3];
    case 2:
      r[0] = 0;
      r[1] = r[1] + 2 & 3;
      r[2] = r[2] + 2 & 3;
      break;
    case 3:
      //@ts-expect-error
      return [2, !1, r[1] + r[2] & 3];
  }
  while (i-- > 0)
    if (r[i]) {
      angle = r[i];
      if (i === 1)
        //@ts-expect-error
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
              //@ts-expect-error
              rot = rot + angle & 3;
          case 2:
            if (o_side === !0)
              rot = 2;
            break;
        }
      }
    }
  return [face, o_side, rot];
};
// sorts blocks by position x than y than z
B64Key.sortShip = function () {
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
};
B64Key.wBit = function (b) {
  if (b)
    B64Key.buffer[B64Key.i] |= 1 << B64Key.j;
  else
    B64Key.buffer[B64Key.i] &= 255 - (1 << B64Key.j);
  if (++B64Key.j > 7) {
    B64Key.i++;
    B64Key.j = 0;
  }
};
/** Concluded to be safe to include max 24 bits */
B64Key.wBitsMSBfFast = function (l, n) {
  var buffer = B64Key.buffer;
  buffer[B64Key.i] |= n << B64Key.j;
  n >>= 8 - B64Key.j;
  if (l + B64Key.j > 8) {
    l -= 8 - B64Key.j;
    B64Key.j = 0;
    B64Key.i++;
    while (l > 7) {
      buffer[B64Key.i++] |= n;
      n >>= 8;
      l -= 8;
    }
    buffer[B64Key.i] |= n;
    n >>= l;
  }
  B64Key.j += l;
  buffer[B64Key.i] &= 255 >> 8 - B64Key.j;
  if (B64Key.j > 7) {
    B64Key.i++;
    B64Key.j = 0;
  }
  // value of spare bits
  return n;
};
B64Key.wMSBfirst = function (l, n) {
  for (var i1 = B64Key.i += l, buffer = B64Key.buffer; l-- > 0; n >>= 8)
    buffer[--i1] = n & 255;
  return n;
};
B64Key.wVersion = function (arr) {
  for (var l = 0, m = 0, n = 64, buffer = B64Key.buffer; !0;) {
    while (arr[l] >= n--)
      n = 64 << (m += 6);
    buffer[B64Key.i++] = arr[l] >> m;
    while (m) {
      buffer[B64Key.i - 1] |= 64;
      m -= 6;
      n >>= 6;
      buffer[B64Key.i++] = (arr[l] & n) >> m;
    }
    if (++l < arr.length)
      buffer[B64Key.i - 1] |= 128;
    else
      break;
  }
};

/** base64 key prototype
  @param {Ship} ship sensitive to dbv grid since v.0.2.1 */
B64Key.encode = function encodeCmprsShip(ship) {
  // version 0.0.significantVersion
  // versions 16 and further will significantVersion of Db Vehicle editor
  if (ship.getMode().mode !== "Ship")
    console.warn("Converting Ship that isn't Ship.Mode \"Ship\".");
  var l, n, id, p_i, chunkEnd, s, propertiesStr = "";
  var propertiesRef = [], b, arr, min, max, prev, size = [], sizeB = [];
  // id length
  // changed to 10 from 4
  var IDLEN = 10;
  B64Key.i = B64Key.j = 0;
  var buffer = B64Key.buffer = new Uint8Array(1040);
  // array of pointers to arrays with kBs of file (1024 + buffer of 16 bytes)
  /** @type {number[]} */
  var rotations = [], kB = [buffer];
  // data block: compression version
  B64Key.wVersion([0, 0, Ship.VERSION]);
  // data block: name
  if ((l = ship.name.length) > 255)
    console.warn("too long name (" + l + ") set to: " + (l = 255));
  // for the stupid that put this before l check, the check is for a reason
  buffer[B64Key.i++] = l;
  for (n = 0; n < l;) {
    s = ship.name.charCodeAt(n++);
    buffer[B64Key.i++] = s > 31 && s < 127 || s > 8 && s < 11 ? s : 63;
  }
  // data block: game version
  arr = ship.gameVersion;
  B64Key.wVersion(arr);
  for (l = 0; l < 3 && arr.length; l++)
    if (arr[l] > [0, 1, 2][l])
      console.warn("unknown game version");
  // data block: date and time (seconds from  26.1.2022 16:48 UTC)
  B64Key.wMSBfirst(4, Date.now() / 1e3 - 1643215695);
  // data block: blocks
  B64Key.sortShip();
  b = ship.blocks;
  var isDBVehicle = (((ship.prop || {}).gridSize || {}).game ||
      "").slice(0, 8) === "Droneboi",
    dbvVehicle = isDBVehicle ? Ship.toDBV(ship) : {b: [], nc: []};
  // blocks length
  B64Key.wBit(n = (l = b.length) > 8191);
  B64Key.wBitsMSBfFast(n ? 21 : 13, l);
  if (!l) {
    console.log("empty ship (no blocks)");
    if (B64Key.j)
      B64Key.i++;
    arr = new Uint8Array(B64Key.i);
    while (B64Key.i-- > 0)
      arr[B64Key.i] = buffer[B64Key.i];
    return arr;
  }
  // ID bit length (3 bits) + 4 (IDLEN)
  B64Key.wBitsMSBfFast(3, IDLEN - 4);
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
    if (B64Key.wBitsMSBfFast(l, min[n] + (1 << l - 1) - 1))
      return er("ship too far in axis: " + "xyz"[n]);
    if (B64Key.wBitsMSBfFast(l, max[n] + (1 << l - 1) - 1))
      return er("ship too far in axis: " + "xyz"[n]);
  }
  /** @param {Block} block */
  function fixedBlock(block) {
    // ID
    B64Key.wBitsMSBfFast(IDLEN, id = Block.ID[block.internalName]);
    // position
    B64Key.wBitsMSBfFast(8, block.position[2] + 127);
    B64Key.wBitsMSBfFast(6, block.position[1] + 31);
    B64Key.wBitsMSBfFast(6, block.position[0] + 31);
    /** rotation @type {number|Rotation} */
    var r = block.rotation;
    B64Key.wBitsMSBfFast(5, r = r[2] | +r[1] << 2 | r[0] << 3);
    // are properties?
    checkProperties(block.properties, block);
    rotations[id] = r;
    if (B64Key.j) {
      B64Key.i++;
      B64Key.j = 0;
    }
  }
  function endings() {
    // handles chunk endings, kB borders or both
    if (B64Key.i > chunkEnd) {
      prev = [B64Key.i, B64Key.j, 0];
      n = B64Key.i = chunkEnd + 8;
      B64Key.j = 0;
      // six bits after chunkending
      B64Key.wBitsMSBfFast(6, (chunkEnd << 3) + 7 - p_i);
      fixedBlock(b[l]);
      n = B64Key.i - n;
      B64Key.i = chunkEnd + 1;
      B64Key.j = B64Key.i + n;
      chunkEnd += n + 512;
      while(B64Key.i < B64Key.j) {
        buffer[B64Key.i + n] = buffer[B64Key.i];
        buffer[B64Key.i] = buffer[B64Key.i + 7];
        buffer[B64Key.i + 7] = 0;
        B64Key.i++;
      }
      B64Key.i = prev[0] + n;
      B64Key.j = prev[1];
      for (n = 1 << IDLEN; n-- > 0;)
        rotations[n] = 8;
    }
    if (B64Key.i > 1023) {
      prev = buffer;
      buffer = new Uint8Array(1040);
      p_i -= 1024;
      chunkEnd -= 1024;
      B64Key.i -= 1024;
      for (n = 0; n < 16; n++)
        buffer[n] = prev[n | 1024];
      kB.push(B64Key.buffer = buffer);
    }
  }
  function checkProperties(prpt, block) {
    isDBVehicle && function (e) {
      prpt = JSON.parse(JSON.stringify(e));
      delete prpt.n;
      delete prpt.p;
      delete prpt.r;
      delete prpt.f;
    }(dbvVehicle.b[ship.blocks.indexOf(block)]);
    var p, s = JSON.stringify(prpt);
    // Has properties
    B64Key.wBit(s !== "{}");
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
  p_i = B64Key.i << 3;
  chunkEnd = B64Key.i + 511;
  // relative blocks string
  for (l = 1, arr = b[0].position; l < b.length; l++) {
    p_i = (B64Key.i << 3) + B64Key.j;
    // ID
    B64Key.wBitsMSBfFast(IDLEN, id = Block.ID[b[l].internalName]);
    // relative position
    prev = [arr[0], arr[1], arr[2]];
    arr = b[l].position;
    n = 2;
    s = arr[n] - prev[n] - 1;
    if (s < 0) {
      s += size[n];
      prev[1]++;
    }
    B64Key.wBit(s);
    if (s)
      B64Key.wBitsMSBfFast(sizeB[n], s - 1);
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
      B64Key.wBit(s);
      if (s)
        B64Key.wBitsMSBfFast(sizeB[n], s - 1);
    }
    // optionaly relative rotation
    var rot = b[l].rotation;
    n = rot[2] | +rot[1] << 2 | rot[0] << 3;
    B64Key.wBit(s = rotations[id] !== n);
    if (s)
      B64Key.wBitsMSBfFast(5, n);
    rotations[id] = n;
    checkProperties(b[l].properties, b[l]);
    endings();
  }
  if (B64Key.j)
    B64Key.i++;
  chunkEnd = B64Key.i - 1;
  // last/ending chunk
  // only if proceeding relative chunk??! unsure
  --l && endings();
  // data block: properties
  if (propertiesRef.length) {
    // just indexes and lengths of JSON strings
    var nodes = isDBVehicle && dbvVehicle.nc.map(function (e) {
      return [e.Item1, e.Item2];
    });
    s = JSON.stringify([propertiesRef, propertiesStr, 0, nodes]);
    for (n = 0; n < s.length;) {
      buffer[B64Key.i++] = s.charCodeAt(n++);
      if (B64Key.i > 1023) {
        kB.push(B64Key.buffer = buffer = new Uint8Array(1040));
        B64Key.i = 0;
      }
    }
  }
  // joins binary data of required length to one file
  B64Key.buffer = buffer =
    new Uint8Array((kB.length - 1 << 10) + B64Key.i);
  // How did it with new Uint8Array(), zero length Uint8Array?
  B64Key.j = l = 0;
  for (; l < buffer.length; kB[B64Key.j++] = new Uint8Array(1040)) {
    (n = buffer.length - l) > 1023 ? n = 1024 : 0;
    arr = kB[B64Key.j];
    for (B64Key.i = 0; B64Key.i < n;)
      buffer[l++] = arr[B64Key.i++];
  }
  return buffer;
};
B64Key.gBit = function gBit() {
  var b_int = (B64Key.buffer[B64Key.i] & 1 << B64Key.j) >> B64Key.j;
  if (++B64Key.j > 7) {
    B64Key.j = 0;
    B64Key.i++;
  }
  return b_int;
};
B64Key.gMSBfirst = function (l) {
  var n = 0, buffer = B64Key.buffer;
  while (l-- > 0)
    n = n * 256 + buffer[B64Key.i++];
  return n;
};
B64Key.gBitsMSBfFast = function (l) {
  var mj = B64Key.j, b_int = 0, buffer = B64Key.buffer;
  if (l + B64Key.j > 8) {
    b_int = buffer[B64Key.i++] & 255 << B64Key.j;
    l -= 8 - B64Key.j;
    B64Key.j = 8;
    while (l > 8) {
      b_int += (buffer[B64Key.i++] << B64Key.j);
      l -= 8;
      B64Key.j += 8;
    }
    b_int += (buffer[B64Key.i] & 255 >> (8 - l)) << B64Key.j;
  } else
    b_int += buffer[B64Key.i] & 255 >> (8 - l) << B64Key.j;
  b_int >>= mj;
  if ((B64Key.j = (B64Key.j & 7) + l) > 7) {
    B64Key.i++;
    B64Key.j = 0;
  }
  return b_int;
};
B64Key.gVersion = function gVersion() {
  var version = [], n = 0, buffer = B64Key.buffer;
  B64Key.i--;
  do {
    version.push(0);
    do {
      version[n] = (version[n] << 6) + (buffer[++B64Key.i] & 63);
    } while (buffer[B64Key.i] & 64);
    n++;
  } while (buffer[B64Key.i] & 128);
  B64Key.i++;
  return version;
};
/** @param {number} n rotation by 5 bit index @returns dr rotation */
B64Key.gBlockRotation = function (n) {
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
};
/** @param {Uint8Array|undefined} [cmprsShip] last updated in v.0.2.1  */
B64Key.decode = function decodeCmprsShip(cmprsShip) {
  // ? version 0.0.1! the existing prototype specification is for v.0.0
  var n = 0, l, pl, chunkEnd, id, IDLEN, BLEN, s = "", arr = [];
  var prev = [], b = [], min = [],  max = [], size = [], sizeB = [];
  var rot = [], properties = [], obj, ship = {}, p_i, num = 0;
  B64Key.i = B64Key.j = 0;
  var buffer = B64Key.buffer;
  if (cmprsShip !== UDF)
    B64Key.buffer = buffer = cmprsShip;
  // data block: compression version (and check)
  arr = B64Key.gVersion();
  while (n < 2)
    if (arr[n++] > 0)
      return er("unknown file vesrion");
  if (arr.length > 2 && arr[2] > 15)
    ship.significantVersion = arr[2];
  // data block: name
  l = buffer[B64Key.i++];
  while (l-- > 0)
    s += String.fromCharCode(buffer[B64Key.i++]);
  ship.name = s;
  // data block: game version
  ship.gameVersion = B64Key.gVersion().join(".");
  // data block: date and time
  // ...of compression as I don't have date and time parse
  s = Ship.dateTime(B64Key.gMSBfirst(4) + 1643215695);
  ship.dateTime = "compressed: " + s + " UTC";
  // data block: blocks
  // blocks length
  BLEN = B64Key.gBitsMSBfFast(B64Key.gBit() ? 21 : 13);
  ship.blocks = b;
  if (!BLEN) {
    if (B64Key.i > buffer.length)
      return er("unexpected end of data");
    console.log("read empty ship (no blocks)");
    return ship;
  }
  // ID bit length
  IDLEN = B64Key.gBitsMSBfFast(3) + 4;
  // min max positions
  for (n = 0, l = 6; n < 3; ++n > 1 ? l = 8 : 0) {
    min[n] = B64Key.gBitsMSBfFast(l);
    max[n] = B64Key.gBitsMSBfFast(l);
    min[n] -= (1 << l - 1) - 1;
    max[n] -= (1 << l - 1) - 1;
  }
  /** @param {boolean} [b=!0] first block */
  function fixedBlock(b) {
    if (b === UDF)
      b = !0;
    var obj = {}, num = 0;
    // ID
    obj.internalName = Block.NAME[id = B64Key.gBitsMSBfFast(IDLEN)];
    // position
    obj.position = arr = [];
    arr[2] = B64Key.gBitsMSBfFast(8) - 127;
    arr[1] = B64Key.gBitsMSBfFast(6) - 31;
    arr[0] = B64Key.gBitsMSBfFast(6) - 31;
    // rotation
    num = B64Key.gBitsMSBfFast(5);
    // !!!not tested rotation index to Rotation type
    obj.rotation = [num >> 3, (num & 4) > 0, num & 3];
    obj.properties = {};
    // has properties
    if (B64Key.gBit() && b)
      properties.push(0);
    if (b) {
      prev = arr;
      rot[id] = num;
    }
    if (B64Key.j) {
      B64Key.i++;
      B64Key.j = 0;
    }
    return obj;
  }
  function relativeBlock() {
    p_i = (B64Key.i << 3) + B64Key.j;
    var obj = {}, num = 0;
    // ID
    obj.internalName = Block.NAME[id = B64Key.gBitsMSBfFast(IDLEN)];
    // relative x position
    obj.position = arr = [prev[0], prev[1], prev[2]];
    if (isDBVehicle)
      obj.position = [prev[1], prev[2]];
    arr[2] += B64Key.gBit() ? B64Key.gBitsMSBfFast(sizeB[2]) + 2 : 1;
    if (arr[n = 2] > max[2]) {
      arr[2] -= size[2];
      arr[1]++;
    }
    while (n-- > 0) {
      // relative y and z positions
      arr[n] += B64Key.gBit() ? B64Key.gBitsMSBfFast(sizeB[n]) + 1 : 0;
      if (arr[n] > max[n]) {
        if (n < 1)
          return er("blocks doesn't fit in box");
        arr[1] -= size[1];
        arr[0]++;
      }
    }
    // optionaly relative rotation
    num = B64Key.gBit() ? B64Key.gBitsMSBfFast(5) : rot[id];
    // !!!not tested rotation index to Rotation type
    obj.rotation = [num >> 3, (num & 4) > 0, num & 3];
    obj.properties = {};
    // has properties
    if (B64Key.gBit() && B64Key.i < chunkEnd)
      properties.push(l);
    if (B64Key.i + +!!B64Key.j > chunkEnd)
      return "";
    prev = arr;
    rot[id] = num;
    b[l] = obj;
    return "";
  }
  function chunkEnding() {
    // handles chunk ends
    var n_0, n_1, buf_0;
    if (n_0 = B64Key.i + +!!B64Key.j > chunkEnd) {
      B64Key.i = chunkEnd;
      B64Key.j = 0;
    }
    if ((--chunkEnd << 3) + 7 - p_i !== B64Key.gBitsMSBfFast(6)) {
      b[l = b.length = ++pl] = obj = fixedBlock();
      console.warn("corrupted chunk: " + (p_i >> 13));
    } else
      obj = fixedBlock(!1);
    var r = obj.rotation;
    //@ts-expect-error
    B64Key.gBlockRotation(r[2] | +r[1] << 2 | r[0] << 3);
    n_1 = B64Key.i;
    if (n_0) {
      buf_0 = buffer;
      B64Key.buffer = buffer = new Uint8Array(16);
      B64Key.i = n_0 = p_i >> 3;
      B64Key.j = p_i & 7;
      for (n = 0; B64Key.i <= chunkEnd;)
        buffer[n++] = buf_0[B64Key.i++];
      for (B64Key.i = n_1; n < 8;)
        buffer[n++] = buf_0[B64Key.i++];
      B64Key.i = 0;
      relativeBlock();
      B64Key.i += n_0 + n_1 - chunkEnd - 1;
      B64Key.buffer = buffer = buf_0;
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
  p_i = B64Key.i << 3;
  chunkEnd = B64Key.i + 512;
  var v;
  while (++l < BLEN) {
    if (+(v = relativeBlock()) && B64Key.i < chunkEnd)
      return v;
    if (B64Key.i >= chunkEnd)
      chunkEnding();
  }
  if (B64Key.j) {
    B64Key.i++;
    B64Key.j = 0;
  }
  chunkEnd = B64Key.i;
  l--;
  // last/ending chunk
  chunkEnding();
  // data block: properties
  if (l = properties.length) {
    if (buffer[buffer.length - 1] !== 93)
      return er("unexpected end of data");
    for (s = ""; B64Key.i < buffer.length;)
      s += String.fromCharCode(buffer[B64Key.i++]);
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
    var isDBVehicle = arr[3] instanceof Array;
    if (isDBVehicle)
      ship.prop = {nc: arr[3]};
    arr = arr[0];
    for (B64Key.i = l - 1 << 1; l-- > 0; B64Key.i -= 2) {
      obj = JSON.parse(s.slice(arr[B64Key.i],
        arr[B64Key.i] + arr[B64Key.i | 1]));
      if (isDBVehicle) {
        var block = b[properties[l]];
        for (var p in obj)
          if (OP.call(obj, p) && p !== "__proto__")
            block[p] = obj[p];
      } else
        b[properties[l]].properties = obj;
      // (v.0.1.55) compatibility with old keys for control property
      if ("control" in obj && !("customParameter" in obj))
        obj.customParameter = obj.control;
    }
  }
  return ship;
};
/** function used for debugging encode/decode */
// just converts Uint8Array to string with binary numbers in DevTools
B64Key.binaryData = function ($help) {
  if (typeof $help === "boolean")
    return "args: ArrayBuffer | Array (data), ?[?from, to] (slice), ?bytesiz\
e, ?isMSBF=false :displays data in bits(for viewing data)";
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
};
/** function for manual use to check rotations or/and rotation index
 * @param {[number, number, number]} arr */
B64Key.rotationIndex = function (arr) {
  var rot = B64Key.rotateBlock(arr);
  var num = rot[2] | +rot[1] << 2 | rot[0] << 3;
  var r = B64Key.gBlockRotation(num);
  if (typeof r == "string")
    throw new Error(r);
  return [r[0], r[1], r[2], num];
};
/** piece of history
 * @param {CanvasRenderingContext2D} rc
 * @param {Block} block */
B64Key.drawBlock = function (rc, block) {
  if (typeof Tool != "function" || !("drawPathRc" in Tool))
    throw Error("class Tool is not availible");
  /** @param {any} face @param {any} mirr @param {number} rot */
  function rotatePath(face, mirr, rot) {
    /** @param {number} add @param {number} multiply */
    function format(add, multiply) {
      return (face[++i + 1 - add] * multiply << 10).toString(16);
    }
    var x = rot > 1 ? -1 : 1 , y = +(rot && rot < 3) ^ mirr ? -1 : 1,
      i = 0, c, str = face[0].replace(/ /g, ","), path = "";
    if (rot & 1)
      while (i < str.length)
        if ((c = str.charCodeAt(i) & 95) === 72)
          path += (str[i] === "h" ? " v" : " V") + format(1, x);
        else if (c === 86)
          path += (str[i] === "v" ? " h" : " H") + format(1, y);
        else {
          if (c > 64 && c < 91)
            path += " ";
          path += str[i] + format(0, y) + str[i] + format(2, x);
        }
    else
      while (i < str.length)
        if ((c = str.charCodeAt(i) & 95) === 72)
          path += " " + str[i] + format(1, x);
        else if (c === 86)
          path += " " + str[i] + format(1, y);
        else {
          if (c > 64 && c < 91)
            path += " ";
          path += str[i] + format(1, x) + str[i] + format(1, y);
        }
    return path;
  }
  function procsColor(clr) {
    if (n > 128)
      return 255 - ((255 - clr) * (255 - n) >> 7);
    else if (n < 128)
      return clr * n >> 7;
    return clr;
  }
  rc.canvas.width = rc.canvas.height = 80;
  var b_dat = Data.blocks[block.internalName].draw,
    p = block.position;
    // posX = w_mid - p[0] * 16 + 8,
    // posY = h_mid + p[2] * 16 + 8;
  var n = p[1] * 4 + 128,
    r = block.rotation,
    g_dat = [];
  try {
    g_dat = JSON.parse(Data.groups[b_dat[r[0] + +r[1] * 3]]);
  } catch (e) {
    console.error(e instanceof Error ? e.message : e,
      block.internalName + " b_dat: ", b_dat, " i: ", r[0] + +r[1] * 3);
  }
  // -r[1] -> !r[1] superbug solved!1!!
  r = [r[0], g_dat.pop() ? !r[1] : r[1], r[2]];
  r[2] =
    /** @type {0|1|2|3} */
    (r[2] + g_dat.pop() & 3);
  while (g_dat.length) {
    var path = "";
    rc.fillStyle = "#" + [0, 0, 0].map(function () {
      return ("0" + procsColor(g_dat.pop()).toString(16)).slice(-2);
    }).join("");
    var arr = g_dat.pop();
    while (arr.length)
      path += rotatePath(Data.paths[arr.pop()], r[1], r[2]);
    Tool.drawPathRc(new Tool("", "Ma000,a000" + path + " z"));
  }
}

Edit.save(ship);
if (ship.name === "Pazik_Mk1_Emil_") {
  Edit.select(ship);
  Edit.rotate(ship, 2);
  Edit.select(ship, []);
}

//@ts-expect-error exporting but not exports weird stuff
var api = typeof module == "undefined" ? {} : module.exports;
api.version_code_js = version_code_js;
api.OP = OP;
api.OC = OC;
api.F = F;
api.__extends = __extends;
api.__private = __private;
api.er = er;
api.Initial = Initial;
api.Data = Data;
api.Logic = Logic;
api.Color = Color;
api.Physics = Physics;
api.test_collbxs = test_collbxs;
api.test_debugbox2collisions = test_debugbox2collisions;
api.Block = Block;
api.Edit = Edit;
api.Ship = Ship;
api.ship = ship;
api.B64Key = B64Key;
