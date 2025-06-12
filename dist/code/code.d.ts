//@ts-nocheck
var version_code_d_ts = "0.2.10";
type Properties = typeof Block.Properties;
/** @param {Function} _new_class @param {Function} _super */
declare function __extends(_new_class: Function, _super: Function): void;
/** @template {any} T @param {T} val @returns {()=>T} */
declare function __private<T extends unknown>(val: T): () => T;
/** @param {string} s best function ever, I should use this */
declare function er(s: string): string;
declare function Data(): void;
declare class Data {
    data: any;
}
declare namespace Data {
    let colors: {
        readonly White: 0;
        readonly "Light Gray": 1;
        readonly "Dark Gray": 2;
        readonly Black: 3;
        readonly Yellow: 4;
        readonly Orange: 5;
        readonly Red: 6;
        readonly Wine: 7;
        readonly Pink: 8;
        readonly Purple: 9;
        readonly "Light Blue": 10;
        readonly "Dark Blue": 11;
        readonly Navy: 12;
        readonly Lime: 13;
        readonly Green: 14;
        readonly Fuel: 15;
        readonly "Yellow Hazard Stripes": 16;
        readonly "Red Hazard Stripes": 17;
        readonly "White Hazard Stripes": 18;
        readonly "Festive Red": 19;
        readonly "Festive Green": 20;
        readonly Teal: {
            readonly id: 29;
            readonly now: 21;
        };
        readonly Magneta: {
            readonly id: 30;
            readonly now: 22;
        };
        readonly "Station Floor 2": {
            readonly id: 25;
            readonly now: 29;
        };
        readonly "Station Floor 1": {
            readonly id: 24;
            readonly now: 30;
        };
        readonly "Station Floor 0": {
            readonly id: 23;
            readonly now: 31;
        };
        readonly Gonb: {
            readonly id: 28;
            readonly now: 62;
        };
        readonly BREAD: {
            readonly id: 21;
            readonly now: 63;
        };
        readonly Wood: {
            readonly id: 26;
            readonly now: 64;
        };
        readonly "Festive Duck": {
            readonly id: 27;
            readonly now: 65;
        };
        readonly "[custom color]": {
            readonly id: 22;
            readonly now: 127;
        };
    };
    let paths: (string | number)[][];
    let groups: string[];
    let blocks: {
        readonly block: {
            readonly id: 0;
            readonly draw: readonly [14, 14, 14, 14, 14, 14];
        };
        readonly wedge: {
            readonly id: 1;
            readonly draw: readonly [15, 14, 14, 15, 14, 14];
        };
        readonly wedge_1x2: {
            readonly id: 2;
            readonly draw: readonly [20, 24, 5, 20, 24, 5];
        };
        readonly pyramid: {
            readonly id: 3;
            readonly draw: readonly [15, 16, 17, 15, 16, 17];
        };
        readonly pyramid_1x2: {
            readonly id: 4;
            readonly draw: readonly [20, 21, 17, 20, 21, 17];
        };
        readonly inverse_pyramid: {
            readonly id: 5;
            readonly draw: readonly [22, 18, 19, 14, 14, 14];
        };
        readonly inverse_pyramid_1x2: {
            readonly id: 6;
            readonly draw: readonly [23, 25, 19, 24, 24, 14];
        };
        readonly hydrogen_tank_small: {
            readonly id: 7;
            readonly draw: readonly [0, 3, 4, 1, 3, 2];
        };
        readonly rcs_rocket_thruster_small: {
            readonly id: 8;
            readonly draw: readonly [7, 7, 5, 7, 7, 6];
        };
        readonly rocket_thruster_small: {
            readonly id: 9;
            readonly draw: readonly [8, 8, 5, 8, 8, 6];
        };
        readonly cockpit_fighter: {
            readonly id: 10;
            readonly draw: readonly [9, 10, 11, 9, 12, 13];
        };
        readonly cockpit_cruiser: {
            readonly id: 11;
            readonly draw: readonly [26, 27, 28, 26, 29, 30];
        };
        readonly __unknown__: {
            readonly id: 511;
        };
        readonly Core: {
            readonly id: 690;
            readonly weight: 2;
            readonly strength: 10;
            readonly cost: -1;
            readonly cargo_store: 5;
        };
        readonly Block: {
            readonly id: 691;
            readonly weight: 1;
            readonly strength: 10;
            readonly cost: 100;
        };
        readonly Wedge: {
            readonly id: 692;
            readonly weight: 0.5;
            readonly strength: 5;
            readonly cost: 100;
        };
        readonly "Wedge 1x2": {
            readonly id: 693;
            readonly weight: 1;
            readonly strength: 10;
            readonly cost: 100;
        };
        readonly "Wedge 1x4": {
            readonly id: 694;
            readonly weight: 2;
            readonly strength: 20;
            readonly cost: 100;
        };
        readonly Pyramid: {
            readonly id: 695;
            readonly weight: 0.5;
            readonly strength: 5;
            readonly cost: 100;
        };
        readonly Slab: {
            readonly id: 696;
            readonly weight: 0.5;
            readonly strength: 5;
            readonly cost: 100;
        };
        readonly "Smooth Corner": {
            readonly id: 697;
            readonly weight: 0.5;
            readonly strength: 10;
            readonly cost: 100;
        };
        readonly "Smooth Corner 1x2": {
            readonly id: 698;
            readonly weight: 1;
            readonly strength: 10;
            readonly cost: 100;
        };
        readonly "Smooth Corner 1x4": {
            readonly id: 699;
            readonly weight: 2;
            readonly strength: 20;
            readonly cost: 100;
        };
        readonly Struct: {
            readonly id: 700;
            readonly weight: 0.5;
            readonly strength: 5;
            readonly cost: 100;
        };
        readonly "Glass Block": {
            readonly id: 701;
            readonly weight: 1;
            readonly strength: 1;
            readonly cost: 100;
        };
        readonly "Glass Wedge": {
            readonly id: 702;
            readonly weight: 0.5;
            readonly strength: 0.5;
            readonly cost: 100;
        };
        readonly "Slab Wedge": {
            readonly id: 703;
            readonly weight: 0.5;
            readonly strength: 5;
            readonly cost: 100;
        };
        readonly "Tiny Hydrogen Thruster": {
            readonly id: 738;
            readonly weight: 0.5;
            readonly strength: 2.5;
            readonly cost: 100;
            readonly fuel_use: 175;
        };
        readonly "Small Hydrogen Thruster": {
            readonly id: 739;
            readonly weight: 2;
            readonly strength: 10;
            readonly cost: 100;
            readonly fuel_use: 150;
        };
        readonly "Medium Hydrogen Thruster": {
            readonly id: 740;
            readonly weight: 8;
            readonly strength: 40;
            readonly cost: 400;
            readonly fuel_use: 125;
        };
        readonly "Large Hydrogen Thruster": {
            readonly id: 741;
            readonly weight: 24;
            readonly strength: 120;
            readonly cost: 800;
            readonly fuel_use: 100;
        };
        readonly "Tiny Ion Thruster": {
            readonly id: 742;
            readonly weight: 0.75;
            readonly strength: 2.5;
            readonly cost: 100;
            readonly energy_use: 275;
        };
        readonly "Small Ion Thruster": {
            readonly id: 743;
            readonly weight: 3;
            readonly strength: 10;
            readonly cost: 100;
            readonly energy_use: 250;
        };
        readonly "Medium Ion Thruster": {
            readonly id: 744;
            readonly weight: 6;
            readonly strength: 20;
            readonly cost: 400;
            readonly energy_use: 225;
        };
        readonly "Large Ion Thruster": {
            readonly id: 745;
            readonly weight: 18;
            readonly strength: 60;
            readonly cost: 800;
            readonly energy_use: 200;
        };
        readonly "Reaction Wheel": {
            readonly id: 746;
            readonly weight: 2;
            readonly strength: 10;
            readonly cost: 100;
            readonly energy_use: 100;
        };
        readonly "Small Hydrogen Tank": {
            readonly id: 754;
            readonly weight: 2;
            readonly strength: 10;
            readonly cost: 100;
            readonly fuel_store: 30;
        };
        readonly "Medium Hydrogen Tank": {
            readonly id: 755;
            readonly weight: 8;
            readonly strength: 40;
            readonly cost: 400;
            readonly fuel_store: 150;
        };
        readonly "Large Hydrogen Tank": {
            readonly id: 756;
            readonly weight: 18;
            readonly strength: 90;
            readonly cost: 900;
            readonly fuel_store: 375;
        };
        readonly "Small Battery": {
            readonly id: 757;
            readonly weight: 3;
            readonly strength: 10;
            readonly cost: 100;
            readonly energy_store: 20;
        };
        readonly "Medium Battery": {
            readonly id: 758;
            readonly weight: 12;
            readonly strength: 40;
            readonly cost: 400;
            readonly energy_store: 100;
        };
        readonly "Large Battery": {
            readonly id: 759;
            readonly weight: 18;
            readonly strength: 60;
            readonly cost: 600;
            readonly energy_store: 175;
        };
        readonly "Small Storage Rack": {
            readonly id: 760;
            readonly weight: 3;
            readonly strength: 10;
            readonly cost: 100;
            readonly cargo_store: 20;
        };
        readonly "Medium Storage Rack": {
            readonly id: 761;
            readonly weight: 12;
            readonly strength: 40;
            readonly cost: 400;
            readonly cargo_store: 100;
        };
        readonly "Large Storage Rack": {
            readonly id: 762;
            readonly weight: 27;
            readonly strength: 90;
            readonly cost: 900;
            readonly cargo_store: 250;
        };
        readonly "Small Hydraulic Drill": {
            readonly id: 770;
            readonly weight: 3;
            readonly strength: 10;
            readonly cost: 100;
            readonly energy_use: 1;
            readonly cargo_use: readonly [-1, 1.02];
        };
        readonly Cannon: {
            readonly id: 771;
            readonly weight: 2;
            readonly strength: 10;
            readonly cost: 100;
        };
        readonly "Rotary Cannon": {
            readonly id: 772;
            readonly weight: 2;
            readonly strength: 10;
            readonly cost: 200;
        };
        readonly "Plasma Cannon": {
            readonly id: 773;
            readonly weight: 2;
            readonly strength: 10;
            readonly cost: 200;
            readonly energy_use: readonly [10, 1.02];
        };
        readonly "Pulse Laser": {
            readonly id: 774;
            readonly weight: 2;
            readonly strength: 10;
            readonly cost: 200;
            readonly energy_use: readonly [2, 0.52];
        };
        readonly "Beam Laser": {
            readonly id: 775;
            readonly weight: 2;
            readonly strength: 10;
            readonly cost: 200;
            readonly energy_use: 4;
        };
        readonly __placeholder776__: {
            readonly id: 776;
        };
        readonly "Weight Block": {
            readonly id: 786;
            readonly weight: 10;
            readonly strength: 10;
            readonly cost: 100;
        };
        readonly "Armor Block": {
            readonly id: 787;
            readonly weight: 5;
            readonly strength: 50;
            readonly cost: 100;
        };
        readonly "Solar Block": {
            readonly id: 788;
            readonly weight: 1;
            readonly strength: 2;
            readonly cost: 100;
            readonly energy_use: -0.25;
        };
        readonly "Small Solar Panel": {
            readonly id: 789;
            readonly weight: 1;
            readonly strength: 0.5;
            readonly cost: 100;
            readonly energy_use: -0.75;
        };
        readonly Hinge: {
            readonly id: 790;
            readonly weight: 5;
            readonly strength: 10;
            readonly cost: 100;
        };
        readonly Separator: {
            readonly id: 791;
            readonly weight: 1;
            readonly strength: 1;
            readonly cost: 100;
        };
        readonly Piston: {
            readonly id: 792;
            readonly weight: 5;
            readonly strength: 10;
            readonly cost: 100;
        };
        readonly "Camera Block": {
            readonly id: 793;
            readonly weight: 1;
            readonly strength: 10;
            readonly cost: 100;
        };
        readonly "Ghost Block": {
            readonly id: 794;
            readonly weight: 1;
            readonly strength: 10;
            readonly cost: 100;
        };
        readonly Dock: {
            readonly id: 795;
            readonly weight: 1;
            readonly strength: 10;
            readonly cost: 100;
        };
        readonly "Small Rift Drive": {
            readonly id: 796;
            readonly weight: 5;
            readonly strength: 10;
            readonly cost: 500;
        };
        readonly __placeholder798__: {
            readonly id: 798;
        };
        readonly __placeholder799__: {
            readonly id: 799;
        };
        readonly "Constant On Signal": {
            readonly id: 802;
            readonly weight: 0.25;
            readonly strength: 2.5;
            readonly cost: 100;
        };
        readonly "Control Block": {
            readonly id: 803;
            readonly weight: 1;
            readonly strength: 10;
            readonly cost: 100;
        };
        readonly "AND Gate": {
            readonly id: 804;
            readonly weight: 1;
            readonly strength: 10;
            readonly cost: 100;
        };
        readonly "NAND Gate": {
            readonly id: 805;
            readonly weight: 1;
            readonly strength: 10;
            readonly cost: 100;
        };
        readonly "OR Gate": {
            readonly id: 806;
            readonly weight: 1;
            readonly strength: 10;
            readonly cost: 100;
        };
        readonly "NOR Gate": {
            readonly id: 807;
            readonly weight: 1;
            readonly strength: 10;
            readonly cost: 100;
        };
        readonly "XOR Gate": {
            readonly id: 808;
            readonly weight: 1;
            readonly strength: 10;
            readonly cost: 100;
        };
        readonly "XNOR Gate": {
            readonly id: 809;
            readonly weight: 1;
            readonly strength: 10;
            readonly cost: 100;
        };
        readonly "NOT Gate": {
            readonly id: 810;
            readonly weight: 0.5;
            readonly strength: 5;
            readonly cost: 100;
        };
        readonly LED: {
            readonly id: 811;
            readonly weight: 0.25;
            readonly strength: 2.5;
            readonly cost: 100;
        };
        readonly Delay: {
            readonly id: 812;
            readonly weight: 0.5;
            readonly strength: 5;
            readonly cost: 100;
        };
        readonly "Constant Number": {
            readonly id: 813;
            readonly weight: 0.25;
            readonly strength: 2.5;
            readonly cost: 100;
        };
        readonly "Speed Sensor": {
            readonly id: 814;
            readonly weight: 1;
            readonly strength: 10;
            readonly cost: 100;
        };
        readonly "Tilt Sensor": {
            readonly id: 815;
            readonly weight: 1;
            readonly strength: 10;
            readonly cost: 100;
        };
        readonly "Distance Sensor": {
            readonly id: 816;
            readonly weight: 1;
            readonly strength: 10;
            readonly cost: 100;
        };
        readonly "GPS Sensor": {
            readonly id: 817;
            readonly weight: 1;
            readonly strength: 10;
            readonly cost: 100;
        };
        readonly "Numerical Inverter": {
            readonly id: 818;
            readonly weight: 0.5;
            readonly strength: 5;
            readonly cost: 100;
        };
        readonly Clamp: {
            readonly id: 819;
            readonly weight: 0.5;
            readonly strength: 5;
            readonly cost: 100;
        };
        readonly Abs: {
            readonly id: 820;
            readonly weight: 0.5;
            readonly strength: 5;
            readonly cost: 100;
        };
        readonly "Threshold Gate": {
            readonly id: 821;
            readonly weight: 0.5;
            readonly strength: 5;
            readonly cost: 100;
        };
        readonly "Numerical Switchbox": {
            readonly id: 822;
            readonly weight: 1;
            readonly strength: 10;
            readonly cost: 100;
        };
        readonly "Function Block": {
            readonly id: 823;
            readonly weight: 1;
            readonly strength: 10;
            readonly cost: 100;
        };
        readonly "Memory Register": {
            readonly id: 824;
            readonly weight: 1;
            readonly strength: 10;
            readonly cost: 100;
        };
        readonly Gauge: {
            readonly id: 825;
            readonly weight: 0.5;
            readonly strength: 5;
            readonly cost: 100;
        };
        readonly Dial: {
            readonly id: 826;
            readonly weight: 0.25;
            readonly strength: 2.5;
            readonly cost: 100;
        };
        readonly "Digital Display": {
            readonly id: 827;
            readonly weight: 0.5;
            readonly strength: 5;
            readonly cost: 100;
        };
        readonly "Push To Toggle": {
            readonly id: 828;
            readonly weight: 0.5;
            readonly strength: 5;
            readonly cost: 100;
        };
        readonly __placeholder834__: {
            readonly id: 834;
        };
        readonly __placeholder835__: {
            readonly id: 835;
        };
        readonly __placeholder836__: {
            readonly id: 836;
        };
        readonly __placeholder837__: {
            readonly id: 837;
        };
        readonly __placeholder838__: {
            readonly id: 838;
        };
        readonly __placeholder839__: {
            readonly id: 839;
        };
        readonly __placeholder840__: {
            readonly id: 840;
        };
        readonly __placeholder841__: {
            readonly id: 841;
        };
        readonly __placeholder842__: {
            readonly id: 842;
        };
        readonly __placeholder843__: {
            readonly id: 843;
        };
        readonly __placeholder844__: {
            readonly id: 844;
        };
        readonly __placeholder845__: {
            readonly id: 845;
        };
        readonly __placeholder846__: {
            readonly id: 846;
        };
        readonly __placeholder847__: {
            readonly id: 847;
        };
        readonly __placeholder848__: {
            readonly id: 848;
        };
        readonly __placeholder849__: {
            readonly id: 849;
        };
        readonly __placeholder850__: {
            readonly id: 850;
        };
        readonly __placeholder851__: {
            readonly id: 851;
        };
        readonly __placeholder852__: {
            readonly id: 852;
        };
        readonly __placeholder853__: {
            readonly id: 853;
        };
        readonly __placeholder854__: {
            readonly id: 854;
        };
        readonly __placeholder855__: {
            readonly id: 855;
        };
        readonly __placeholder856__: {
            readonly id: 856;
        };
        readonly __placeholder857__: {
            readonly id: 857;
        };
        readonly __NULL__: {
            readonly id: 1023;
        };
        readonly Afterburner: {
            readonly id: 1035;
            readonly weight: 2;
            readonly strength: 10;
            readonly cost: 70;
        };
        readonly "Dynamo Thruster": {
            readonly id: 1037;
            readonly weight: 3;
            readonly strength: 15;
            readonly cost: 90;
        };
        readonly "T1 Rammer": {
            readonly id: 1043;
            readonly weight: 1;
            readonly strength: 20;
            readonly cost: 70;
        };
        readonly "T1 Nano Healer": {
            readonly id: 1060;
            readonly weight: 1;
            readonly strength: 10;
            readonly cost: 130;
        };
        readonly __placeholder969__: {
            readonly id: 969;
            readonly weight: 0.169;
            readonly cost: 6969;
        };
    };
    let titles: {
        readonly 0: "block";
        readonly 1: "wedge";
        readonly 2: "wedge_1x2";
        readonly 3: "pyramid";
        readonly 4: "pyramid_1x2";
        readonly 5: "inverse_pyramid";
        readonly 6: "inverse_pyramid_1x2";
        readonly 7: "hydrogen_tank_small";
        readonly 8: "rcs_rocket_thruster_small";
        readonly 9: "rocket_thruster_small";
        readonly 10: "cockpit_fighter";
        readonly 11: "cockpit_cruiser";
        readonly 511: "__unknown__";
        readonly 690: "Core";
        readonly 691: "Block";
        readonly 692: "Wedge";
        readonly 693: "Wedge 1x2";
        readonly 694: "Wedge 1x4";
        readonly 695: "Pyramid";
        readonly 696: "Slab";
        readonly 697: "Smooth Corner";
        readonly 698: "Smooth Corner 1x2";
        readonly 699: "Smooth Corner 1x4";
        readonly 700: "Struct";
        readonly 701: "Glass Block";
        readonly 702: "Glass Wedge";
        readonly 703: "Slab Wedge";
        readonly 738: "Tiny Hydrogen Thruster";
        readonly 739: "Small Hydrogen Thruster";
        readonly 740: "Medium Hydrogen Thruster";
        readonly 741: "Large Hydrogen Thruster";
        readonly 742: "Tiny Ion Thruster";
        readonly 743: "Small Ion Thruster";
        readonly 744: "Medium Ion Thruster";
        readonly 745: "Large Ion Thruster";
        readonly 746: "Reaction Wheel";
        readonly 754: "Small Hydrogen Tank";
        readonly 755: "Medium Hydrogen Tank";
        readonly 756: "Large Hydrogen Tank";
        readonly 757: "Small Battery";
        readonly 758: "Medium Battery";
        readonly 759: "Large Battery";
        readonly 760: "Small Storage Rack";
        readonly 761: "Medium Storage Rack";
        readonly 762: "Large Storage Rack";
        readonly 770: "Small Hydraulic Drill";
        readonly 771: "Cannon";
        readonly 772: "Rotary Cannon";
        readonly 773: "Plasma Cannon";
        readonly 774: "Pulse Laser";
        readonly 775: "Beam Laser";
        readonly 776: "TNT";
        readonly 786: "Weight Block";
        readonly 787: "Armor Block";
        readonly 788: "Solar Block";
        readonly 789: "Small Solar Panel";
        readonly 790: "Hinge";
        readonly 791: "Separator";
        readonly 792: "Piston";
        readonly 793: "Camera Block";
        readonly 794: "Ghost Block";
        readonly 795: "Dock";
        readonly 796: "Small Rift Drive";
        readonly 798: "Red Magnet";
        readonly 799: "Inversed Dock";
        readonly 802: "Constant On Signal";
        readonly 803: "Control Block";
        readonly 804: "AND Gate";
        readonly 805: "NAND Gate";
        readonly 806: "OR Gate";
        readonly 807: "NOR Gate";
        readonly 808: "XOR Gate";
        readonly 809: "XNOR Gate";
        readonly 810: "NOT Gate";
        readonly 811: "LED";
        readonly 812: "Delay";
        readonly 813: "Constant Number";
        readonly 814: "Speed Sensor";
        readonly 815: "Tilt Sensor";
        readonly 816: "Distance Sensor";
        readonly 817: "GPS Sensor";
        readonly 818: "Numerical Inverter";
        readonly 819: "Clamp";
        readonly 820: "Abs";
        readonly 821: "Threshold Gate";
        readonly 822: "Numerical Switchbox";
        readonly 823: "Function Block";
        readonly 824: "Memory Register";
        readonly 825: "Gauge";
        readonly 826: "Dial";
        readonly 827: "Digital Display";
        readonly 828: "Push To Toggle";
        readonly 834: "station wall 4 sides LBRU";
        readonly 835: "station wall 2 sides corner LB";
        readonly 836: "station wall 1 side B";
        readonly 837: "station wall 0 sides";
        readonly 838: "station wall 3 sides LBR";
        readonly 839: "station wall 2 sides opposite LR";
        readonly 840: "station solar block";
        readonly 841: "station launchpad door casing";
        readonly 842: "station launchpad door middle";
        readonly 843: "station launchpad door ending";
        readonly 844: "station floor 1 1x1";
        readonly 845: "station floor 1 2x2";
        readonly 846: "station floor 2 2x2";
        readonly 847: "station door casing";
        readonly 848: "station door middle";
        readonly 849: "station door ending";
        readonly 850: "station launch terminal";
        readonly 851: "station bench";
        readonly 852: "station wardrobe";
        readonly 853: "station telescope";
        readonly 854: "station market terminal";
        readonly 855: "station wedge";
        readonly 856: "station foor 2 1x1";
        readonly 857: "station floor 3 1x1";
        readonly 969: "Clamp Chan";
        readonly 1023: "__NULL__";
        readonly 1024: "Core";
        readonly 1025: "T1 Block";
        readonly 1026: "T2 Block";
        readonly 1027: "T1 Wedge";
        readonly 1028: "T1 Wedge 1x2";
        readonly 1029: "T2 Wedge";
        readonly 1030: "Structure Block";
        readonly 1031: "Glass Block";
        readonly 1032: "Glass Wedge";
        readonly 1033: "Station Block";
        readonly 1034: "Simple Thruster";
        readonly 1035: "Afterburner";
        readonly 1036: "Ion Thruster";
        readonly 1037: "Dynamo Thruster";
        readonly 1038: "Momentum Wheel";
        readonly 1039: "Small Fuel Tank";
        readonly 1040: "Medium Fuel Tank";
        readonly 1041: "Small Battery";
        readonly 1042: "Medium Battery";
        readonly 1043: "T1 Rammer";
        readonly 1044: "T1 Blaster";
        readonly 1045: "T1 Pulse Laser";
        readonly 1046: "T1 Gatling Gun";
        readonly 1047: "T1 Rocket Launcher";
        readonly 1048: "Explosive";
        readonly 1049: "T1 Drill";
        readonly 1050: "T1 Mining Laser";
        readonly 1051: "Small Crate";
        readonly 1052: "Medium Crate";
        readonly 1053: "Connector";
        readonly 1054: "T1 Solar Panel";
        readonly 1055: "T2 Solar Panel";
        readonly 1056: "Solar Block";
        readonly 1057: "Hinge";
        readonly 1058: "Seperator";
        readonly 1059: "Camera Block,";
        readonly 1060: "T1 Nano Healer";
    };
    /** @template {"colors"|"blocks"} T @param {T} src */
    function generateNames<T extends "blocks">(src: T): {
        length: number;
    } & { [K in keyof (typeof Data)[T] as (typeof Data)[T][K] extends number ? (typeof Data)[T][K] : (typeof Data)[T][K]["id"]]: K; } & { [K_1 in number as Exclude<K_1, keyof (typeof Data)[T]>]: keyof (typeof Data)[T]; };
    /** @template {"colors"|"blocks"} T @param {T} src */
    function generateIDs<T extends "colors" | "blocks">(src: T): { [K in keyof (typeof Data)[T]]: (typeof Data)[T][K] extends number ? (typeof Data)[T][K] : (typeof Data)[T][K]["id"]; };
    /** @template {keyof BlockData} T @param {T} type */
    function generateValues<T extends keyof BlockData>(type: T): {
        [key: string]: BlockData[T];
    };
    /** @param {typeof Edit|typeof Ship} namespace */
    function nameMethods(namespace: typeof Edit | typeof Ship): void;
    let estimateIdentifier: RegExp;
    /** @param {Function&{methodName?:string,name?:string}} fn */
    function getFunctionName(fn: Function & {
        methodName?: string;
        name?: string;
    }): string;
}
/** @typedef {Block|LogicBlock} ShipBlock */
declare class Logic<T extends 0 | 1 | 2 | 3> {
    /** @typedef {Block|LogicBlock} ShipBlock */
    /** as definition
     * x, y is position relative to middle, else used by rendering method,
     * pairs is initialized -1 or [] depending on type, owner is null
     * for logigs documentation/data @see {Logic.VALUE} */
    constructor(type: T, x: number, y: number);
    /** 0|1 = input, has only index reference to source, 2|3 = output
     * @type {T} */
    type: T;
    x: number;
    y: number;
    pairs: T extends 0 | 1 ? number : number[];
    /** @type {ShipBlock|null} */
    owner: ShipBlock | null;
    /** each output node has value, for input nodes it's undefined */
    value: T extends 2 ? boolean : T extends 3 ? number : undefined;
}
declare namespace Logic {
    let dashOff: number;
    let rend: boolean;
    /**
     * @callback LExec @param {Logic<2|3>[]} arg
     * @param {LogicBlock} block @param {Ship} ship @returns {void} */
    /** @param {...{k:number,x:number,y:number}[]|string|number|LExec} args */
    function generateLogic(...args: (string | number | LExec | {
        k: number;
        x: number;
        y: number;
    }[])[]): {
        [key: number]: Logic<any>[] & {
            exec: LExec | (LExec & {
                [x: string]: unknown;
                [x: number]: unknown;
                [x: symbol]: unknown;
            });
        };
    };
    function execThruster(arg: Logic<2 | 3>[], block: LogicBlock, ship: Ship): void;
    function execToolBlock(arg: Logic<2 | 3>[], block: LogicBlock, ship: Ship): void;
    function execPistonHinge(arg: Logic<2 | 3>[], block: LogicBlock, ship: Ship): void;
    function execConstantTrue(arg: Logic<2 | 3>[], block: LogicBlock, ship: Ship): void;
    function execControlBlock(arg: Logic<2 | 3>[], block: LogicBlock, ship: Ship): void;
    function execANDGate(arg: Logic<2 | 3>[], block: LogicBlock, ship: Ship): void;
    function execNANDGate(arg: Logic<2 | 3>[], block: LogicBlock, ship: Ship): void;
    function execORGate(arg: Logic<2 | 3>[], block: LogicBlock, ship: Ship): void;
    function execNORGate(arg: Logic<2 | 3>[], block: LogicBlock, ship: Ship): void;
    function execXORGate(arg: Logic<2 | 3>[], block: LogicBlock, ship: Ship): void;
    function execXNORGate(arg: Logic<2 | 3>[], block: LogicBlock, ship: Ship): void;
    function execNOTGate(arg: Logic<2 | 3>[], block: LogicBlock, ship: Ship): void;
    function execConstantNumber(arg: Logic<2 | 3>[], block: LogicBlock, ship: Ship): void;
    function execUnimplemented(arg: Logic<2 | 3>[], block: LogicBlock, ship: Ship): void;
    function execNumericalInverter(arg: Logic<2 | 3>[], block: LogicBlock, ship: Ship): void;
    function execClamp(arg: Logic<2 | 3>[], block: LogicBlock, ship: Ship): void;
    function execAbs(arg: Logic<2 | 3>[], block: LogicBlock, ship: Ship): void;
    function execThresholdGate(arg: Logic<2 | 3>[], block: LogicBlock, ship: Ship): void;
    function execNumericalSwitchbox(arg: Logic<2 | 3>[], block: LogicBlock, ship: Ship): void;
    function execFunctionExpensive(arg: Logic<2 | 3>[], block: LogicBlock, ship: Ship): void;
    function execMemoryRegister(arg: Logic<2 | 3>[], block: LogicBlock, ship: Ship): void;
    function execDisplays(arg: Logic<2 | 3>[], block: LogicBlock, ship: Ship): void;
    let execPushToToggle: LExec & {
        toggled?: boolean;
    };
    let VALUE: Readonly<{
        [key: number]: Logic<any>[] & {
            exec: LExec | (LExec & {
                [x: string]: unknown;
                [x: number]: unknown;
                [x: symbol]: unknown;
            });
        };
    }>;
    /** @TODO Logics rework update ^ */
    /** addDefault but for Logic - if property contains nodeIndex data it
     * will use them to reassemble these connections, to reassamble them
     * properly Logic.reassemble must be used on completed blocks, otherwise
     * be aware of and make sure to not have nodeIndex property on new block!
     * @param {string|number} name @param {safe} property
     * @param {(Logic<any>|undefined)[]} logics
     * it is the global Logic.nodes or ship.prop.nodeList
     * @param {Block[]} blocks */
    function addLogic(name: string | number, property: {
        [x: string]: unknown;
        [x: number]: unknown;
        [x: symbol]: unknown;
    }, logics: (Logic<any> | undefined)[], blocks: Block[]): {
        [x: string]: unknown;
        [x: number]: unknown;
        [x: symbol]: unknown;
    };
    /** @param {Block[]} blocks @param {(Logic<any>|undefined)[]} [logics] */
    function reassemble(blocks: Block[], logics?: (Logic<any> | undefined)[]): Block[];
    /** removes all nodes of inputed block and removes their connections
     * @param {Block} block @param {(Logic<any>|undefined)[]} logics */
    function removeLogic(block: Block, logics: (Logic<any> | undefined)[]): void;
    /** @param {Ship} ship is directly related with Logic.execs */
    function expensiveExec(ship: Ship): void;
}
declare function Color(): void;
declare class Color {
    prop: any;
}
declare namespace Color {
    export let NAME: Readonly<{
        length: number;
    } & {
        readonly 0: "White";
        readonly 1: "Light Gray";
        readonly 2: "Dark Gray";
        readonly 3: "Black";
        readonly 4: "Yellow";
        readonly 5: "Orange";
        readonly 6: "Red";
        readonly 7: "Wine";
        readonly 8: "Pink";
        readonly 9: "Purple";
        readonly 10: "Light Blue";
        readonly 11: "Dark Blue";
        readonly 12: "Navy";
        readonly 13: "Lime";
        readonly 14: "Green";
        readonly 15: "Fuel";
        readonly 16: "Yellow Hazard Stripes";
        readonly 17: "Red Hazard Stripes";
        readonly 18: "White Hazard Stripes";
        readonly 19: "Festive Red";
        readonly 20: "Festive Green";
        readonly 29: "Teal";
        readonly 30: "Magneta";
        readonly 25: "Station Floor 2";
        readonly 24: "Station Floor 1";
        readonly 23: "Station Floor 0";
        readonly 28: "Gonb";
        readonly 21: "BREAD";
        readonly 26: "Wood";
        readonly 27: "Festive Duck";
        readonly 22: "[custom color]";
    } & {
        [x: number]: "White" | "Light Gray" | "Dark Gray" | "Black" | "Yellow" | "Orange" | "Red" | "Wine" | "Pink" | "Purple" | "Light Blue" | "Dark Blue" | "Navy" | "Lime" | "Green" | "Fuel" | "Yellow Hazard Stripes" | "Red Hazard Stripes" | "White Hazard Stripes" | "Festive Red" | "Festive Green" | "Teal" | "Magneta" | "Station Floor 2" | "Station Floor 1" | "Station Floor 0" | "Gonb" | "BREAD" | "Wood" | "Festive Duck" | "[custom color]";
    }>;
    export let ID: Readonly<{
        readonly White: 0;
        readonly "Light Gray": 1;
        readonly "Dark Gray": 2;
        readonly Black: 3;
        readonly Yellow: 4;
        readonly Orange: 5;
        readonly Red: 6;
        readonly Wine: 7;
        readonly Pink: 8;
        readonly Purple: 9;
        readonly "Light Blue": 10;
        readonly "Dark Blue": 11;
        readonly Navy: 12;
        readonly Lime: 13;
        readonly Green: 14;
        readonly Fuel: 15;
        readonly "Yellow Hazard Stripes": 16;
        readonly "Red Hazard Stripes": 17;
        readonly "White Hazard Stripes": 18;
        readonly "Festive Red": 19;
        readonly "Festive Green": 20;
        readonly Teal: 29;
        readonly Magneta: 30;
        readonly "Station Floor 2": 25;
        readonly "Station Floor 1": 24;
        readonly "Station Floor 0": 23;
        readonly Gonb: 28;
        readonly BREAD: 21;
        readonly Wood: 26;
        readonly "Festive Duck": 27;
        readonly "[custom color]": 22;
    }>;
    export let NOW: Readonly<{
        [key: string]: number;
    }>;
    export let db1ToDb3: Readonly<{
        0: "White";
        1: "Dark Gray";
        3: "Light Blue";
        4: "Orange";
        5: "Red";
        6: "Lime";
        7: "Yellow";
        8: "Festive Red";
        9: "Light Gray";
        10: "Red Hazard Stripes";
        11: "Yellow Hazard Stripes";
        12: "Fuel";
        13: "Wine";
        14: "Wood";
        15: "White Hazard Stripes";
        16: "Purple";
        17: "Pink";
        18: "Festive Green";
        19: "Festive Duck";
    }>;
    /** @param {string} name @return {Colors} */
    function _default(name: string): Colors;
    export { _default as default };
    export let colorlessRegexp: RegExp;
}
/** @typedef {()=>Physics.Ship} initShipPhysics */
/** class is frozen Block Physics */
declare function Physics(): void;
declare class Physics {
    reporter: string;
}
declare namespace Physics {
    export function INIT(): Physics;
    export namespace rend_1 {
        let reporter: boolean;
    }
    export { rend_1 as rend };
    /** @readonly class is frozen Ship Physics @param {Ship} ship */
    export function Ship(ship: Ship): void;
    export namespace Ship {
        let INIT: initShipPhysics;
    }
}
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
declare function Block(name: string, pos: XYZPosition, rot: Rotation, prop?: {
    [key: string]: unknown;
} | 0, color?: keyof typeof Color.ID | "" | null): void;
declare class Block {
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
    constructor(name: string, pos: XYZPosition, rot: Rotation, prop?: {
        [key: string]: unknown;
    } | 0, color?: keyof typeof Color.ID | "" | null);
    internalName: string;
    /** DBV: [not-used, x, y] */
    position: XYZPosition;
    /** DBV: [not-used, flipped, cunterclockwise] */
    rotation: Rotation;
    properties: {
        [key: string]: unknown;
        color: Colors;
    } & BlockProps;
    getPhysics: () => Physics;
}
declare namespace Block {
    let NAME_1: Readonly<{
        length: number;
    } & {
        readonly 0: "block";
        readonly 1: "wedge";
        readonly 2: "wedge_1x2";
        readonly 3: "pyramid";
        readonly 4: "pyramid_1x2";
        readonly 5: "inverse_pyramid";
        readonly 6: "inverse_pyramid_1x2";
        readonly 7: "hydrogen_tank_small";
        readonly 8: "rcs_rocket_thruster_small";
        readonly 9: "rocket_thruster_small";
        readonly 10: "cockpit_fighter";
        readonly 11: "cockpit_cruiser";
        readonly 511: "__unknown__";
        readonly 690: "Core";
        readonly 691: "Block";
        readonly 692: "Wedge";
        readonly 693: "Wedge 1x2";
        readonly 694: "Wedge 1x4";
        readonly 695: "Pyramid";
        readonly 696: "Slab";
        readonly 697: "Smooth Corner";
        readonly 698: "Smooth Corner 1x2";
        readonly 699: "Smooth Corner 1x4";
        readonly 700: "Struct";
        readonly 701: "Glass Block";
        readonly 702: "Glass Wedge";
        readonly 703: "Slab Wedge";
        readonly 738: "Tiny Hydrogen Thruster";
        readonly 739: "Small Hydrogen Thruster";
        readonly 740: "Medium Hydrogen Thruster";
        readonly 741: "Large Hydrogen Thruster";
        readonly 742: "Tiny Ion Thruster";
        readonly 743: "Small Ion Thruster";
        readonly 744: "Medium Ion Thruster";
        readonly 745: "Large Ion Thruster";
        readonly 746: "Reaction Wheel";
        readonly 754: "Small Hydrogen Tank";
        readonly 755: "Medium Hydrogen Tank";
        readonly 756: "Large Hydrogen Tank";
        readonly 757: "Small Battery";
        readonly 758: "Medium Battery";
        readonly 759: "Large Battery";
        readonly 760: "Small Storage Rack";
        readonly 761: "Medium Storage Rack";
        readonly 762: "Large Storage Rack";
        readonly 770: "Small Hydraulic Drill";
        readonly 771: "Cannon";
        readonly 772: "Rotary Cannon";
        readonly 773: "Plasma Cannon";
        readonly 774: "Pulse Laser";
        readonly 775: "Beam Laser";
        readonly 776: "__placeholder776__";
        readonly 786: "Weight Block";
        readonly 787: "Armor Block";
        readonly 788: "Solar Block";
        readonly 789: "Small Solar Panel";
        readonly 790: "Hinge";
        readonly 791: "Separator";
        readonly 792: "Piston";
        readonly 793: "Camera Block";
        readonly 794: "Ghost Block";
        readonly 795: "Dock";
        readonly 796: "Small Rift Drive";
        readonly 798: "__placeholder798__";
        readonly 799: "__placeholder799__";
        readonly 802: "Constant On Signal";
        readonly 803: "Control Block";
        readonly 804: "AND Gate";
        readonly 805: "NAND Gate";
        readonly 806: "OR Gate";
        readonly 807: "NOR Gate";
        readonly 808: "XOR Gate";
        readonly 809: "XNOR Gate";
        readonly 810: "NOT Gate";
        readonly 811: "LED";
        readonly 812: "Delay";
        readonly 813: "Constant Number";
        readonly 814: "Speed Sensor";
        readonly 815: "Tilt Sensor";
        readonly 816: "Distance Sensor";
        readonly 817: "GPS Sensor";
        readonly 818: "Numerical Inverter";
        readonly 819: "Clamp";
        readonly 820: "Abs";
        readonly 821: "Threshold Gate";
        readonly 822: "Numerical Switchbox";
        readonly 823: "Function Block";
        readonly 824: "Memory Register";
        readonly 825: "Gauge";
        readonly 826: "Dial";
        readonly 827: "Digital Display";
        readonly 828: "Push To Toggle";
        readonly 834: "__placeholder834__";
        readonly 835: "__placeholder835__";
        readonly 836: "__placeholder836__";
        readonly 837: "__placeholder837__";
        readonly 838: "__placeholder838__";
        readonly 839: "__placeholder839__";
        readonly 840: "__placeholder840__";
        readonly 841: "__placeholder841__";
        readonly 842: "__placeholder842__";
        readonly 843: "__placeholder843__";
        readonly 844: "__placeholder844__";
        readonly 845: "__placeholder845__";
        readonly 846: "__placeholder846__";
        readonly 847: "__placeholder847__";
        readonly 848: "__placeholder848__";
        readonly 849: "__placeholder849__";
        readonly 850: "__placeholder850__";
        readonly 851: "__placeholder851__";
        readonly 852: "__placeholder852__";
        readonly 853: "__placeholder853__";
        readonly 854: "__placeholder854__";
        readonly 855: "__placeholder855__";
        readonly 856: "__placeholder856__";
        readonly 857: "__placeholder857__";
        readonly 1023: "__NULL__";
        readonly 1035: "Afterburner";
        readonly 1037: "Dynamo Thruster";
        readonly 1043: "T1 Rammer";
        readonly 1060: "T1 Nano Healer";
        readonly 969: "__placeholder969__";
    } & {
        [x: number]: "block" | "wedge" | "wedge_1x2" | "pyramid" | "pyramid_1x2" | "inverse_pyramid" | "inverse_pyramid_1x2" | "hydrogen_tank_small" | "rcs_rocket_thruster_small" | "rocket_thruster_small" | "cockpit_fighter" | "cockpit_cruiser" | "__unknown__" | "Core" | "Block" | "Wedge" | "Wedge 1x2" | "Wedge 1x4" | "Pyramid" | "Slab" | "Smooth Corner" | "Smooth Corner 1x2" | "Smooth Corner 1x4" | "Struct" | "Glass Block" | "Glass Wedge" | "Slab Wedge" | "Tiny Hydrogen Thruster" | "Small Hydrogen Thruster" | "Medium Hydrogen Thruster" | "Large Hydrogen Thruster" | "Tiny Ion Thruster" | "Small Ion Thruster" | "Medium Ion Thruster" | "Large Ion Thruster" | "Reaction Wheel" | "Small Hydrogen Tank" | "Medium Hydrogen Tank" | "Large Hydrogen Tank" | "Small Battery" | "Medium Battery" | "Large Battery" | "Small Storage Rack" | "Medium Storage Rack" | "Large Storage Rack" | "Small Hydraulic Drill" | "Cannon" | "Rotary Cannon" | "Plasma Cannon" | "Pulse Laser" | "Beam Laser" | "Weight Block" | "Armor Block" | "Solar Block" | "Small Solar Panel" | "Hinge" | "Separator" | "Piston" | "Camera Block" | "Ghost Block" | "Dock" | "Small Rift Drive" | "Constant On Signal" | "Control Block" | "AND Gate" | "NAND Gate" | "OR Gate" | "NOR Gate" | "XOR Gate" | "XNOR Gate" | "NOT Gate" | "LED" | "Delay" | "Constant Number" | "Speed Sensor" | "Tilt Sensor" | "Distance Sensor" | "GPS Sensor" | "Numerical Inverter" | "Clamp" | "Abs" | "Threshold Gate" | "Numerical Switchbox" | "Function Block" | "Memory Register" | "Gauge" | "Dial" | "Digital Display" | "Push To Toggle" | "__NULL__" | "Afterburner" | "Dynamo Thruster" | "T1 Rammer" | "T1 Nano Healer" | "__placeholder776__" | "__placeholder798__" | "__placeholder799__" | "__placeholder834__" | "__placeholder835__" | "__placeholder836__" | "__placeholder837__" | "__placeholder838__" | "__placeholder839__" | "__placeholder840__" | "__placeholder841__" | "__placeholder842__" | "__placeholder843__" | "__placeholder844__" | "__placeholder845__" | "__placeholder846__" | "__placeholder847__" | "__placeholder848__" | "__placeholder849__" | "__placeholder850__" | "__placeholder851__" | "__placeholder852__" | "__placeholder853__" | "__placeholder854__" | "__placeholder855__" | "__placeholder856__" | "__placeholder857__" | "__placeholder969__";
    }>;
    export { NAME_1 as NAME };
    let ID_1: Readonly<{
        readonly block: 0;
        readonly wedge: 1;
        readonly wedge_1x2: 2;
        readonly pyramid: 3;
        readonly pyramid_1x2: 4;
        readonly inverse_pyramid: 5;
        readonly inverse_pyramid_1x2: 6;
        readonly hydrogen_tank_small: 7;
        readonly rcs_rocket_thruster_small: 8;
        readonly rocket_thruster_small: 9;
        readonly cockpit_fighter: 10;
        readonly cockpit_cruiser: 11;
        readonly __unknown__: 511;
        readonly Core: 690;
        readonly Block: 691;
        readonly Wedge: 692;
        readonly "Wedge 1x2": 693;
        readonly "Wedge 1x4": 694;
        readonly Pyramid: 695;
        readonly Slab: 696;
        readonly "Smooth Corner": 697;
        readonly "Smooth Corner 1x2": 698;
        readonly "Smooth Corner 1x4": 699;
        readonly Struct: 700;
        readonly "Glass Block": 701;
        readonly "Glass Wedge": 702;
        readonly "Slab Wedge": 703;
        readonly "Tiny Hydrogen Thruster": 738;
        readonly "Small Hydrogen Thruster": 739;
        readonly "Medium Hydrogen Thruster": 740;
        readonly "Large Hydrogen Thruster": 741;
        readonly "Tiny Ion Thruster": 742;
        readonly "Small Ion Thruster": 743;
        readonly "Medium Ion Thruster": 744;
        readonly "Large Ion Thruster": 745;
        readonly "Reaction Wheel": 746;
        readonly "Small Hydrogen Tank": 754;
        readonly "Medium Hydrogen Tank": 755;
        readonly "Large Hydrogen Tank": 756;
        readonly "Small Battery": 757;
        readonly "Medium Battery": 758;
        readonly "Large Battery": 759;
        readonly "Small Storage Rack": 760;
        readonly "Medium Storage Rack": 761;
        readonly "Large Storage Rack": 762;
        readonly "Small Hydraulic Drill": 770;
        readonly Cannon: 771;
        readonly "Rotary Cannon": 772;
        readonly "Plasma Cannon": 773;
        readonly "Pulse Laser": 774;
        readonly "Beam Laser": 775;
        readonly __placeholder776__: 776;
        readonly "Weight Block": 786;
        readonly "Armor Block": 787;
        readonly "Solar Block": 788;
        readonly "Small Solar Panel": 789;
        readonly Hinge: 790;
        readonly Separator: 791;
        readonly Piston: 792;
        readonly "Camera Block": 793;
        readonly "Ghost Block": 794;
        readonly Dock: 795;
        readonly "Small Rift Drive": 796;
        readonly __placeholder798__: 798;
        readonly __placeholder799__: 799;
        readonly "Constant On Signal": 802;
        readonly "Control Block": 803;
        readonly "AND Gate": 804;
        readonly "NAND Gate": 805;
        readonly "OR Gate": 806;
        readonly "NOR Gate": 807;
        readonly "XOR Gate": 808;
        readonly "XNOR Gate": 809;
        readonly "NOT Gate": 810;
        readonly LED: 811;
        readonly Delay: 812;
        readonly "Constant Number": 813;
        readonly "Speed Sensor": 814;
        readonly "Tilt Sensor": 815;
        readonly "Distance Sensor": 816;
        readonly "GPS Sensor": 817;
        readonly "Numerical Inverter": 818;
        readonly Clamp: 819;
        readonly Abs: 820;
        readonly "Threshold Gate": 821;
        readonly "Numerical Switchbox": 822;
        readonly "Function Block": 823;
        readonly "Memory Register": 824;
        readonly Gauge: 825;
        readonly Dial: 826;
        readonly "Digital Display": 827;
        readonly "Push To Toggle": 828;
        readonly __placeholder834__: 834;
        readonly __placeholder835__: 835;
        readonly __placeholder836__: 836;
        readonly __placeholder837__: 837;
        readonly __placeholder838__: 838;
        readonly __placeholder839__: 839;
        readonly __placeholder840__: 840;
        readonly __placeholder841__: 841;
        readonly __placeholder842__: 842;
        readonly __placeholder843__: 843;
        readonly __placeholder844__: 844;
        readonly __placeholder845__: 845;
        readonly __placeholder846__: 846;
        readonly __placeholder847__: 847;
        readonly __placeholder848__: 848;
        readonly __placeholder849__: 849;
        readonly __placeholder850__: 850;
        readonly __placeholder851__: 851;
        readonly __placeholder852__: 852;
        readonly __placeholder853__: 853;
        readonly __placeholder854__: 854;
        readonly __placeholder855__: 855;
        readonly __placeholder856__: 856;
        readonly __placeholder857__: 857;
        readonly __NULL__: 1023;
        readonly Afterburner: 1035;
        readonly "Dynamo Thruster": 1037;
        readonly "T1 Rammer": 1043;
        readonly "T1 Nano Healer": 1060;
        readonly __placeholder969__: 969;
    }>;
    export { ID_1 as ID };
    export let TITLE: Readonly<{
        readonly 0: "block";
        readonly 1: "wedge";
        readonly 2: "wedge_1x2";
        readonly 3: "pyramid";
        readonly 4: "pyramid_1x2";
        readonly 5: "inverse_pyramid";
        readonly 6: "inverse_pyramid_1x2";
        readonly 7: "hydrogen_tank_small";
        readonly 8: "rcs_rocket_thruster_small";
        readonly 9: "rocket_thruster_small";
        readonly 10: "cockpit_fighter";
        readonly 11: "cockpit_cruiser";
        readonly 511: "__unknown__";
        readonly 690: "Core";
        readonly 691: "Block";
        readonly 692: "Wedge";
        readonly 693: "Wedge 1x2";
        readonly 694: "Wedge 1x4";
        readonly 695: "Pyramid";
        readonly 696: "Slab";
        readonly 697: "Smooth Corner";
        readonly 698: "Smooth Corner 1x2";
        readonly 699: "Smooth Corner 1x4";
        readonly 700: "Struct";
        readonly 701: "Glass Block";
        readonly 702: "Glass Wedge";
        readonly 703: "Slab Wedge";
        readonly 738: "Tiny Hydrogen Thruster";
        readonly 739: "Small Hydrogen Thruster";
        readonly 740: "Medium Hydrogen Thruster";
        readonly 741: "Large Hydrogen Thruster";
        readonly 742: "Tiny Ion Thruster";
        readonly 743: "Small Ion Thruster";
        readonly 744: "Medium Ion Thruster";
        readonly 745: "Large Ion Thruster";
        readonly 746: "Reaction Wheel";
        readonly 754: "Small Hydrogen Tank";
        readonly 755: "Medium Hydrogen Tank";
        readonly 756: "Large Hydrogen Tank";
        readonly 757: "Small Battery";
        readonly 758: "Medium Battery";
        readonly 759: "Large Battery";
        readonly 760: "Small Storage Rack";
        readonly 761: "Medium Storage Rack";
        readonly 762: "Large Storage Rack";
        readonly 770: "Small Hydraulic Drill";
        readonly 771: "Cannon";
        readonly 772: "Rotary Cannon";
        readonly 773: "Plasma Cannon";
        readonly 774: "Pulse Laser";
        readonly 775: "Beam Laser";
        readonly 776: "TNT";
        readonly 786: "Weight Block";
        readonly 787: "Armor Block";
        readonly 788: "Solar Block";
        readonly 789: "Small Solar Panel";
        readonly 790: "Hinge";
        readonly 791: "Separator";
        readonly 792: "Piston";
        readonly 793: "Camera Block";
        readonly 794: "Ghost Block";
        readonly 795: "Dock";
        readonly 796: "Small Rift Drive";
        readonly 798: "Red Magnet";
        readonly 799: "Inversed Dock";
        readonly 802: "Constant On Signal";
        readonly 803: "Control Block";
        readonly 804: "AND Gate";
        readonly 805: "NAND Gate";
        readonly 806: "OR Gate";
        readonly 807: "NOR Gate";
        readonly 808: "XOR Gate";
        readonly 809: "XNOR Gate";
        readonly 810: "NOT Gate";
        readonly 811: "LED";
        readonly 812: "Delay";
        readonly 813: "Constant Number";
        readonly 814: "Speed Sensor";
        readonly 815: "Tilt Sensor";
        readonly 816: "Distance Sensor";
        readonly 817: "GPS Sensor";
        readonly 818: "Numerical Inverter";
        readonly 819: "Clamp";
        readonly 820: "Abs";
        readonly 821: "Threshold Gate";
        readonly 822: "Numerical Switchbox";
        readonly 823: "Function Block";
        readonly 824: "Memory Register";
        readonly 825: "Gauge";
        readonly 826: "Dial";
        readonly 827: "Digital Display";
        readonly 828: "Push To Toggle";
        readonly 834: "station wall 4 sides LBRU";
        readonly 835: "station wall 2 sides corner LB";
        readonly 836: "station wall 1 side B";
        readonly 837: "station wall 0 sides";
        readonly 838: "station wall 3 sides LBR";
        readonly 839: "station wall 2 sides opposite LR";
        readonly 840: "station solar block";
        readonly 841: "station launchpad door casing";
        readonly 842: "station launchpad door middle";
        readonly 843: "station launchpad door ending";
        readonly 844: "station floor 1 1x1";
        readonly 845: "station floor 1 2x2";
        readonly 846: "station floor 2 2x2";
        readonly 847: "station door casing";
        readonly 848: "station door middle";
        readonly 849: "station door ending";
        readonly 850: "station launch terminal";
        readonly 851: "station bench";
        readonly 852: "station wardrobe";
        readonly 853: "station telescope";
        readonly 854: "station market terminal";
        readonly 855: "station wedge";
        readonly 856: "station foor 2 1x1";
        readonly 857: "station floor 3 1x1";
        readonly 969: "Clamp Chan";
        readonly 1023: "__NULL__";
        readonly 1024: "Core";
        readonly 1025: "T1 Block";
        readonly 1026: "T2 Block";
        readonly 1027: "T1 Wedge";
        readonly 1028: "T1 Wedge 1x2";
        readonly 1029: "T2 Wedge";
        readonly 1030: "Structure Block";
        readonly 1031: "Glass Block";
        readonly 1032: "Glass Wedge";
        readonly 1033: "Station Block";
        readonly 1034: "Simple Thruster";
        readonly 1035: "Afterburner";
        readonly 1036: "Ion Thruster";
        readonly 1037: "Dynamo Thruster";
        readonly 1038: "Momentum Wheel";
        readonly 1039: "Small Fuel Tank";
        readonly 1040: "Medium Fuel Tank";
        readonly 1041: "Small Battery";
        readonly 1042: "Medium Battery";
        readonly 1043: "T1 Rammer";
        readonly 1044: "T1 Blaster";
        readonly 1045: "T1 Pulse Laser";
        readonly 1046: "T1 Gatling Gun";
        readonly 1047: "T1 Rocket Launcher";
        readonly 1048: "Explosive";
        readonly 1049: "T1 Drill";
        readonly 1050: "T1 Mining Laser";
        readonly 1051: "Small Crate";
        readonly 1052: "Medium Crate";
        readonly 1053: "Connector";
        readonly 1054: "T1 Solar Panel";
        readonly 1055: "T2 Solar Panel";
        readonly 1056: "Solar Block";
        readonly 1057: "Hinge";
        readonly 1058: "Seperator";
        readonly 1059: "Camera Block,";
        readonly 1060: "T1 Nano Healer";
    }>;
    export let WEIGHT: {
        [key: number]: number | undefined;
    };
    export let STRENGTH: {
        [key: number]: number | undefined;
    };
    export let ENERGY_USE: {
        [key: number]: number | [number, number] | undefined;
    };
    export let ENERGY_STORE: {
        [key: number]: number | undefined;
    };
    export let FUEL_USE: {
        [key: number]: number | [number, number] | undefined;
    };
    export let FUEL_STORE: {
        [key: number]: number | undefined;
    };
    export let CARGO_USE: {
        [key: number]: number | [number, number] | undefined;
    };
    export let CARGO_STORE: {
        [key: number]: number | undefined;
    };
    export let COST: {
        [key: number]: number | undefined;
    };
    let db1ToDb3_1: Readonly<{
        "T1 Block": "Block";
        "T1 Wedge": "Wedge";
        "T2 Wedge": "Wedge";
        "T1 Wedge 1x2": "Wedge 1x2";
        "Structure Block": "Struct";
        "Simple Thruster": "Small Hydrogen Thruster";
        "Ion Thruster": string;
        "Momentum Wheel": "Reaction Wheel";
        "Small Fuel Tank": string;
        "Medium Fuel Tank": "Medium Hydrogen Tank";
        "T1 Battery": "Small Battery";
        "T2 Battery": "Small Battery";
        "Small Crate": "Small Storage Rack";
        "Medium Crate": "Medium Storage Rack";
        "T1 Drill": "Small Hydraulic Drill";
        "T1 Gatling Gun": "Rotary Cannon";
        "T1 Blaster": "Plasma Cannon";
        "T1 Pulse Laser": "Pulse Laser";
        "T2 Block": "Armor Block";
        "T1 Solar Panel": "Small Solar Panel";
        "T2 Solar Panel": "Small Solar Panel";
        Seperator: "Separator";
        Connector: "Dock";
        Explosive: "__placeholder776__";
        "Station Block": "__placeholder846__";
    }>;
    export { db1ToDb3_1 as db1ToDb3 };
    export namespace creator {
        let warns: number;
    }
    /**
     * @readonly @param {any[]|any} blocks
     * @param {Logic<any>[]&{nc?:any}} [logics$] */
    export function arrayFromObjects(blocks: any[] | any, logics$?: Logic<any>[] & {
        nc?: any;
    }): Block[];
    /** @readonly @param {number} n @param {Logic<any>[]} [logics] */
    export function generateArray(n: number, logics?: Logic<any>[]): Block[];
    /** for DBV blocks @readonly @param {number} id */
    export function isFlippable(id: number): boolean;
    /** @typedef {0|1|2|3|number} RA Rotation Axis */
    /** manipulates inputed Rotation array, do not assign returned array
     * for further use if possible @readonly
     * @param {Rotation} rot @param {RA} x @param {RA} y @param {RA} z */
    export function rotate(rot: Rotation, x: RA, y: RA, z: RA): (boolean | 0 | 1 | 2 | 3)[];
    /** instance is frozen
     * @readonly @typedef {{x:number,y:number,w:number,h:number}}
     * @param {number} x @param {number} y
     * @param {number} w @param {number} h */
    export function Size(x: number, y: number, w: number, h: number): void;
    /**
     * instance is frozen
     */
    type Size = {
        x: number;
        y: number;
        w: number;
        h: number;
    };
    export namespace Size {
        export let width: number;
        export let height: number;
        export function genterateSizes(...arg: SizesArg[]): {
            [key: number]: Block.Size | undefined;
        };
        let VALUE_1: {
            [key: number]: Block.Size;
        };
        export { VALUE_1 as VALUE };
        /**
         * @typedef {{block:ShipBlock,id:number,x:number,y:number,w:number,
         * h:number}} Block.Selected @see {Block.Size.highlight}
        */
        /** creates what earilear was instance of Block.Selected
         * @param {ShipBlock} block @param {number} id @param {number} x
         * @param {number} y @param {number} w @param {number} h */
        export function highlight(block: ShipBlock, id: number, x: number, y: number, w: number, h: number): Readonly<{
            block: ShipBlock;
            id: number;
            x: number;
            y: number;
            w: number;
            h: number;
        }>;
    }
    /** instance is frozen
     * @readonly @template {"BLOCK"|"PYRAMID"|"WEDGE"} T @param {T} type */
    export function Mirror<T extends "BLOCK" | "PYRAMID" | "WEDGE">(type: T): void;
    export namespace Mirror {
        /** @param {string} data */
        export function generateRotations(data: string, AT: any): Rotation[];
        export let BLOCK: any;
        export let PYRAMID: Rotation[];
        export let WEDGE: Rotation[];
        let VALUE_2: {
            [key: number]: Mirror<"PYRAMID" | "WEDGE"> | undefined;
        };
        export { VALUE_2 as VALUE };
    }
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
    /** blocks can have any combination of Block.Properies (dropdown, input(s))
     * @readonly
     * @template {keyof ItemTs} T @param {T} type @param {string} name */
    export function Properties<T extends keyof ItemTs>(type: T, name: string): void;
    export namespace Properties {
        export let Items: {
            /** @type {new()=>Slider} */
            Slider: new () => Slider;
            /** @type {new()=>IntegerSlider} */
            "Integer Slider": new () => IntegerSlider;
            /** @type {new()=>Dropdown} */
            Dropdown: new () => Dropdown;
            /** @type {new()=>NumberInputs} */
            "Number Inputs": new () => NumberInputs;
            /** @type {new()=>TextInputs} */
            "Text Inputs": new () => TextInputs;
            /** @type {new()=>WeldGroups} hidden property */
            WeldGroups: new () => WeldGroups;
        };
        export let itemTypes: itemTypes;
        export function justOne<T extends PropsArg[]>(argArr: T): Prop[];
        let VALUE_3: {
            [key: number]: Prop[] | undefined;
            803: [Properties<"Dropdown">];
        };
        export { VALUE_3 as VALUE };
        /** @param {string|number} name @param {safe} property */
        export function addProperty(name: string | number, property: {
            [x: string]: unknown;
            [x: number]: unknown;
            [x: symbol]: unknown;
        }): {
            [x: string]: unknown;
            [x: number]: unknown;
            [x: symbol]: unknown;
        };
        /** returns <default input optoins>.concat([custom input options])
         * @param {ShipProperties|null} prop */
        export function getInputOptions(prop: ShipProperties | null): string[];
    }
    export let PROP: {
        [key: number]: Prop[] | undefined;
        803: [Properties<"Dropdown">];
    };
    /** instance is frozen
     * @readonly Point @param {number} x @param {number} y */
    export function Box2d(x: number, y: number): void;
    export class Box2d {
        constructor(x: number, y: number);
        toString(): string;
    }
    export namespace Box2d {
        /** @typedef {{x:number,y:number}|[number,number]} PathArg */
        /** @typedef {Block.Box2d[]&{range:number}} Box2dPath */
        /** @param {...PathArg[]|string|number} args */
        export function generateBuildBox(...args: (string | number | PathArg[])[]): {
            [key: number]: [Box2dPath, Box2dPath, Box2dPath, Box2dPath, Box2dPath, Box2dPath, Box2dPath, Box2dPath];
        };
        let VALUE_4: {
            [key: number]: [Box2dPath, Box2dPath, Box2dPath, Box2dPath, Box2dPath, Box2dPath, Box2dPath, Box2dPath];
        };
        export { VALUE_4 as VALUE };
        export { test_collbxs as warn };
        /** @param {[number,number][]} item */
        export function generateGrid(item: [number, number][]): Box2dPath;
        export let GRID: Readonly<{
            Small: Box2dPath;
            Medium: Box2dPath;
            Large: Box2dPath;
            Dreambox: Box2dPath;
            Career: Box2dPath;
            Sandbox: Box2dPath;
        }>;
        export function visualize(path: Box2dPath | Block.Box2d[], x?: number, y?: number, isBlock1?: boolean): void;
        /** if using Box2dPath as collider, last point is the reference point
         * @param {ShipBlock|Box2dPath} forShape @param {ShipBlock[]} within
         * @param {boolean} [inside] @param {boolean} [inverted] */
        export function collisions(forShape: ShipBlock | Box2dPath, within: ShipBlock[], inside?: boolean, inverted?: boolean): ShipBlock[];
        type Visualize = (path: Box2dPath | Block.Box2d[], x?: number, y?: number, isBlock1?: boolean) => void;
    }
    type Selected = {
        block: ShipBlock;
        id: number;
        x: number;
        y: number;
        w: number;
        h: number;
    };
}
/** neccesary ln Logic editing mode because of logicPosition and
 * logicBlockIndex properties, useless to be used for not logic blocks
 * @param {Block} block @param {number} index -1 for no index
 * @param {Ship|(Logic<any>|undefined)[]} ship used to get nodeList */
declare function LogicBlock(block: Block, index: number, ship: Ship | (Logic<any> | undefined)[]): void;
declare class LogicBlock {
    /** neccesary ln Logic editing mode because of logicPosition and
     * logicBlockIndex properties, useless to be used for not logic blocks
     * @param {Block} block @param {number} index -1 for no index
     * @param {Ship|(Logic<any>|undefined)[]} ship used to get nodeList */
    constructor(block: Block, index: number, ship: Ship | (Logic<any> | undefined)[]);
    internalName: string;
    position: XYZPosition;
    rotation: Rotation;
    properties: {
        [key: string]: unknown;
        color: Colors;
    } & BlockProps & {
        nodeIndex: number[];
    };
    getPhysics: () => Physics;
    logicPosition: XYZPosition;
    /** while in Logic mode it stores index of the block in Ship Ship.Mode */
    logicBlockIndex: number;
}
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
/**
 * @param {((...args:any[])=>any)&{methodName?:string}} command
 * @param {string} args stringified Array @param {Edit.Type} type */
declare function Edit(command: ((...args: any[]) => any) & {
    methodName?: string;
}, args: string, type: Edit.Type): void;
declare class Edit {
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
    /**
     * @param {((...args:any[])=>any)&{methodName?:string}} command
     * @param {string} args stringified Array @param {Edit.Type} type */
    constructor(command: ((...args: any[]) => any) & {
        methodName?: string;
    }, args: string, type: Edit.Type);
    /** @type {Edit.Type} commands enum */
    type: Edit.Type;
    command: ((...args: any[]) => any) & {
        methodName?: string;
    };
    args: string;
    /** if not 0, it holds temporary reference to @see {Edit.Undo} */
    temp: number;
    toString(): string;
}
declare namespace Edit {
    export let listeners: ((((ship?: Ship) => void) & {
        id?: string;
    }) | undefined)[];
    export let settingHistory: boolean;
    /** @param {Ship} target and also used to reset setting history */
    export function save(target: Ship): Ship;
    /** Finally reliazed how the overloads work with JSDoc
     * @overload @param {Ship} target @param {EditThisCommand} cmd
     * @param {...any} _inputs @returns {void}
     * @overload @param {EditTargetCommand} cmd @param {Ship} target
     * @param {...any} _inputs @returns {void}
     * @param {EditTargetCommand|Ship} cmdOrThis
     * @param {Ship|EditThisCommand} [targetOrCmd]
     * @param {...any[]} [_inputs] */
    export function capture(target: Ship, cmd: EditThisCommand, ..._inputs: any[]): void;
    /** Finally reliazed how the overloads work with JSDoc
     * @overload @param {Ship} target @param {EditThisCommand} cmd
     * @param {...any} _inputs @returns {void}
     * @overload @param {EditTargetCommand} cmd @param {Ship} target
     * @param {...any} _inputs @returns {void}
     * @param {EditTargetCommand|Ship} cmdOrThis
     * @param {Ship|EditThisCommand} [targetOrCmd]
     * @param {...any[]} [_inputs] */
    export function capture(cmd: EditTargetCommand, target: Ship, ..._inputs: any[]): void;
    /** @param {Ship} target @param {number} index */
    export function historyAt(target: Ship, index: number): void;
    /** @param {Ship} target */
    export function undo(target: Ship): void;
    /** @param {Ship} target */
    export function redo(target: Ship): void;
    /** rotates Dr ships as well as db vehicles
     * @overload @param {Ship} target
     * @param {number} rx
     * @overload @param {Ship} target
     * @param {number} rx @param {number} ry @param {number} rz
     * @returns {void} @param {Ship} target @param {number} rx
     * @param {number} [ny] @param {number} [nz]  */
    export function rotate(target: Ship, rx: number): any;
    /** rotates Dr ships as well as db vehicles
     * @overload @param {Ship} target
     * @param {number} rx
     * @overload @param {Ship} target
     * @param {number} rx @param {number} ry @param {number} rz
     * @returns {void} @param {Ship} target @param {number} rx
     * @param {number} [ny] @param {number} [nz]  */
    export function rotate(target: Ship, rx: number, ry: number, rz: number): void;
    /**
     * @param {Ship} target
     * @param {number} x @param {number} y @param {number} z */
    export function move(target: Ship, x: number, y: number, z: number): void;
    /** @param {Ship} target @param {number} color */
    export function paint(target: Ship, color: number): void;
    /** @param {number} seed @see {Ship.dateTime} also (todo for discussion) */
    export function randSFC32(seed: number): () => number;
    /** @this {Ship} @param {number[]} ids @param {number} color */
    export function oldUIColor(this: Ship, ids: number[], color: number): void;
    /** @this {Ship} @param {number[]} ids */
    export function oldUIMove(this: Ship, ids: number[]): void;
    /** @this {Ship} @param {number[]} ids */
    export function oldUIRotate(this: Ship, ids: number[]): void;
    /**
     * commands enum
     */
    type Type = 0 | 1 | 2 | 3;
    type Save = 0;
    type Target = 1;
    type This = 2;
    type Undo = 3;
}
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
/** class is frozen
 * @param {string} name
 * @param {number[]} version
 * @param {string} time
 * @param {ShipBlock[]} blocks
 * @param {ShipProperties|null} [properties=null]
 * @param {Ship.Mode} [mode=new Ship.Mode("Ship")]
 * for usuall ship creation ues @see {Ship.fromObject} */
declare function Ship(name: string, version: number[], time: string, blocks: ShipBlock[], properties?: ShipProperties | null, mode?: Ship.Mode): void;
declare class Ship {
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
    /** class is frozen
     * @param {string} name
     * @param {number[]} version
     * @param {string} time
     * @param {ShipBlock[]} blocks
     * @param {ShipProperties|null} [properties=null]
     * @param {Ship.Mode} [mode=new Ship.Mode("Ship")]
     * for usuall ship creation ues @see {Ship.fromObject} */
    constructor(name: string, version: number[], time: string, blocks: ShipBlock[], properties?: ShipProperties | null, mode?: Ship.Mode);
    name: string;
    gameVersion: number[];
    dateTime: string;
    /** @type {(Block|LogicBlock)[]} */
    blocks: (Block | LogicBlock)[];
    /** Ship properties (shortcut name since it is db/dr non-standard) */
    prop: ShipProperties;
    getMode: () => Mode;
    getPhysics: initShipPhysics;
    /** @type {()=>Edit[]} */
    getHistory: () => Edit[];
    /** @type {()=>ShipBlock[]} */
    getSelection: () => ShipBlock[];
    /** to track Droneboi Vehicles editor version in its JSON savefiles
     * @type {number} */
    significantVersion: number;
    selectRect: {
        /**
         * @overload @returns {ShipBlock[]}
         * @overload @param {number} x0 @param {number} x1 @param {number} y0
         * @param {number} y1 @param {number} z0 @param {number} z1
         * @returns {ShipBlock[]} @this {Ship} */
        (): ShipBlock[];
        /**
         * @overload @returns {ShipBlock[]}
         * @overload @param {number} x0 @param {number} x1 @param {number} y0
         * @param {number} y1 @param {number} z0 @param {number} z1
         * @returns {ShipBlock[]} @this {Ship} */
        (x0: number, x1: number, y0: number, y1: number, z0: number, z1: number): ShipBlock[];
    };
    /** for selectimg all blocks use @see {ship.selectRect}
     * @this {Ship} @param {ShipBlock[]|number[]} selection */
    setSelected(this: Ship, selection: ShipBlock[] | number[]): void;
    removeRect(x0: any, y0: any, z0: any, x1: any, y1: any, z1: any): void;
    /** @this {Ship} */
    replaceRect(this: Ship, x0: any, y0: any, z0: any, x1: any, y1: any, z1: any): void | Block[];
    fillRect(): never;
    /**
     * @this {Ship} @param {number} x @param {number} y @param {number} z */
    paste(this: Ship, x: number, y: number, z: number): void;
    mirror: {
        /**
         * @overload @returns {void}
         * @overload @param {number} x0 @param {number} x1 @param {number} y0
         * @param {number} y1 @param {number} z0 @param {number} z1
         * @returns {void} @this {Ship}
         * @param {number} [x0] @param {number} [x1] @param {number} [y0]
         * @param {number} [y1] @param {number} [z0] @param {number} [z1] */
        (): void;
        /**
         * @overload @returns {void}
         * @overload @param {number} x0 @param {number} x1 @param {number} y0
         * @param {number} y1 @param {number} z0 @param {number} z1
         * @returns {void} @this {Ship}
         * @param {number} [x0] @param {number} [x1] @param {number} [y0]
         * @param {number} [y1] @param {number} [z0] @param {number} [z1] */
        (x0: number, x1: number, y0: number, y1: number, z0: number, z1: number): void;
    };
    mirror2d: {
        /**
         * @overload @returns {void}
         * @overload @param {number} x0 @param {number} x1 @param {number} y0
         * @param {number} y1 @param {number} z0 @param {number} z1
         * @returns {void} @this {Ship}
         * @param {number} [x0] @param {number} [x1] @param {number} [y0]
         * @param {number} [y1] @param {number} [z0] @param {number} [z1] */
        (): void;
        /**
         * @overload @returns {void}
         * @overload @param {number} x0 @param {number} x1 @param {number} y0
         * @param {number} y1 @param {number} z0 @param {number} z1
         * @returns {void} @this {Ship}
         * @param {number} [x0] @param {number} [x1] @param {number} [y0]
         * @param {number} [y1] @param {number} [z0] @param {number} [z1] */
        (x0: number, x1: number, y0: number, y1: number, z0: number, z1: number): void;
    };
    /** ignores __NULL__ blocks if nonull is true
     * @this {Ship} @param {number} x @param {number} y
     * @param {boolean} [nonull=true] @returns null if nothing found */
    blockAtPonit2d(this: Ship, x: number, y: number, nonull?: boolean): Readonly<{
        block: ShipBlock;
        id: number;
        x: number;
        y: number;
        w: number;
        h: number;
    }>;
    /** used to revert position adjustment from vehicles 'infected' by it:
     * https://github.com/KaaBEL/.d1r.dbv/commit/0b8156e155383059cf1aeeb4a997818
    3c92b92f8#diff-fa9a713c17c685348118b8d29bd55f10491e651ccafaf45d1044ed01ffe6e
    80bL1414
     * @this {Ship}
     * @param {boolean} [fixSlab] if true it also fixes wrong Slab size */
    fixPositionAdjustment(this: Ship, fixSlab?: boolean): void;
    /** allows using position adjustment for certain operations such as,
     * DR base64 keys prototype @param {(ship:Ship)=>void} operation
     * @this {Ship} method does not track updates of ship made by operation */
    withPositionAdjustment(this: Ship, operation: (ship: Ship) => void): void;
    fixVersion_1_3(): void;
    /**
     * @param {number} x @param {number} y @param {number} z
     * @param {ShipBlock|number} refBlock template for the new one */
    placeBlock(x: number, y: number, z: number, refBlock: ShipBlock | number): Block;
    /** replaces block on given index with last block and cuts off
     * last item of blocks array @this {Ship} @param {number[]} ids */
    removeBlocks(this: Ship, ids: number[]): void;
}
declare namespace Ship {
    export let VERSION: 36;
    export let propertyNames: RegExp;
    /** @readonly @param {safe} object @see {Block.arrayFromObjects} */
    export function fromObject(object: {
        [x: string]: unknown;
        [x: number]: unknown;
        [x: symbol]: unknown;
    }): Ship;
    /** @readonly @param {Ship} ship */
    export function toDBV(ship: Ship): {
        n: string;
        gv: string;
        dt: string;
        ls: unknown;
        b: {
            n: string;
            p: number[];
            r: number;
            f: boolean;
            s: Colors;
            c: (string | number | [number, number, number, number])[];
            ni: number[];
            wg: number;
        }[];
        nc: number[][] | {
            Item1: number;
            Item2: number;
        }[];
        ci: {
            n: string;
            t: number;
        }[];
        significantVersion: 36;
    };
    /** @readonly @param {string} key reads Droneboi bas64 keys */
    export function fromDBKey(key: string): Ship;
    /** @readonly @param {Ship} ship @throws {Error} */
    export function checkDBV(ship: Ship): Ship;
    /** timeToString
     * @readonly @param {number} [t=Date.now()] @param {number} [f=1] ?1 */
    export function dateTime(t?: number, f?: number): string;
    /** @param {string} name @param {number} type */
    export function CustomInput(name: string, type: number): void;
    export class CustomInput {
        constructor(name: string, type: number);
        toString(): string;
    }
    export namespace CustomInput {
        /** @param {Block[]} blocks @param {safe|null} prop ShipProperties */
        function reassemble(blocks: Block[], prop: {
            [x: string]: unknown;
            [x: number]: unknown;
            [x: symbol]: unknown;
        } | null): {
            [x: string]: unknown;
            [x: number]: unknown;
            [x: symbol]: unknown;
        };
    }
    /** instance is frozen, (experimental class is frozen)
     * (keeping reference to mode object also keeps its old ship object)
     * @typedef Ship.Mode @property {EditMode} mode @property {()=>Ship} getShip
     * @param {EditMode} mode @param {Ship|(()=>Ship)} ship */
    export function Mode(mode: EditMode, ship: Ship | (() => Ship)): void;
    /**
     * instance is frozen, (experimental class is frozen)
     * (keeping reference to mode object also keeps its old ship object)
     */
    type Mode = {
        mode: EditMode;
        getShip: () => Ship;
    };
    export namespace Mode {
        let NONE: Ship.Mode;
        /** adds a layer for the parser to pass stored global ship in mode
         * to parse function, later parser calls only return the parse function
         * result and not do parsing again (in case it just modifies global
         * ship /the usual case which recycles global @see {ship} object)
         * @param {EditMode} mode
         * @param {Ship} globalShip @param {(ship:Ship)=>Ship} parse */
        function useParser(mode: EditMode, globalShip: Ship, parse: (ship: Ship) => Ship): Mode;
    }
    /** insctace is frozen, class is frozen
     * @param {{dbv?:number,grid?:number}} indexes @param {string} game
     * @param {string} name @param {Box2dPath|null} box2d */
    export function Grid(game: string, name: string, box2d: Box2dPath | null, indexes: {
        dbv?: number;
        grid?: number;
    }): void;
    export class Grid {
        constructor(game: string, name: string, box2d: Box2dPath | null, indexes: {
            dbv?: number;
            grid?: number;
        });
        beingClass: string;
    }
    export namespace Grid {
        /** GG @param {{[key:number]:[game:string,name:string,dbvId:number]}} data */
        export function generateGrids(data: {
            [key: number]: [game: string, name: string, dbvId: number];
        }): Grid[];
        let VALUE_5: Grid[];
        export { VALUE_5 as VALUE };
    }
    /**
     * set second param (copy) to 1
     */
    type clone = (target: Ship) => Ship;
}
/** class for old Deltarealm base64 prototype keys code */
declare function B64Key(): void;
declare class B64Key {
    value: any;
}
declare namespace B64Key {
    let i: number;
    let j: number;
    let buffer: Uint8Array<ArrayBuffer>;
    /** @function base64ToUint8array */
    function b64ToU8arr(base64: any): Uint8Array<ArrayBuffer>;
    /** @function uint8arrayToBase64 */
    function u8arrToB64(uint8array: any): string;
    /** @param {[number,number,number]} r @returns {Rotation} */
    function rotateBlock(r: [number, number, number]): Rotation;
    function sortShip(): string | Ship;
    function wBit(b: any): void;
    /** Concluded to be safe to include max 24 bits */
    function wBitsMSBfFast(l: any, n: any): any;
    function wMSBfirst(l: any, n: any): any;
    function wVersion(arr: any): void;
    /** base64 key prototype
      @param {Ship} ship sensitive to dbv grid since v.0.2.1 */
    function encode(ship: Ship): string | Uint8Array<ArrayBuffer>;
    function gBit(): number;
    function gMSBfirst(l: any): number;
    function gBitsMSBfFast(l: any): number;
    function gVersion(): number[];
    /** @param {number} n rotation by 5 bit index @returns dr rotation */
    function gBlockRotation(n: number): string | number[];
    /** @param {Uint8Array|undefined} [cmprsShip] last updated in v.0.2.1  */
    function decode(cmprsShip?: Uint8Array | undefined): string | {
        significantVersion: number;
        name: string;
        gameVersion: string;
        dateTime: string;
        blocks: any[];
        prop: {
            nc: any;
        };
    };
    /** function used for debugging encode/decode */
    function binaryData($help: any, ...args: any[]): string;
    /** function for manual use to check rotations or/and rotation index
     * @param {[number, number, number]} arr */
    function rotationIndex(arr: [number, number, number]): number[];
    /** piece of history
     * @param {CanvasRenderingContext2D} rc
     * @param {Block} block */
    function drawBlock(rc: CanvasRenderingContext2D, block: Block): void;
}
/** @readonly */
declare var version_code_js: string;
declare var OP: (v: PropertyKey) => boolean;
/** @typedef {{[K in string|number|symbol]?:unknown}} safe */
/** @type {()=>safe} should be safe with safe type */
declare var OC: () => {
    [x: string]: unknown;
    [x: number]: unknown;
    [x: symbol]: unknown;
};
declare function F(): void;
declare var UDF: any;
declare function Initial(): never;
declare class Initial {
    data: any;
}
declare var test_collbxs: boolean;
/** @type {typeof F|((rend?:any)=>true|undefined)} */
declare var test_debugbox2collisions: (() => void) | ((rend?: any) => true | undefined);
/** global ship that's being rendered and edited */
declare var ship: Ship;
declare var api: any;
type ShipBlock = Block | LogicBlock;
type initShipPhysics = () => PShip;
type XYZPosition = [x: number, y: number, z: number];
type Rotation = [axis: 0 | 1 | 2, sign: boolean, rot: 0 | 1 | 2 | 3];
type Colors = keyof typeof Color.ID | "" | null;
type BlockProps = {
    customParameter?: (number | string | [number, number, number, number])[];
    nodeIndex?: number[];
    weldGroup?: number;
};
type EditSomeCommand = ((slab?: boolean) => any) | ((ids: number[]) => any);
type EditBlockCommand = (x: number, y: number, z: number, block: any) => any;
type EditNumberCommand = (...args: number[]) => any;
type EditColorCommand = (ids: number[], color: number) => any;
type EditThisCommand = EditBlockCommand | EditNumberCommand | EditSomeCommand | EditColorCommand;
type EditTargetCommand = (target: Ship, ...args: number[]) => any;
type EditSelection = Block[] & {
    target?: Ship;
    id: number;
};
type KnownShipProperties = {
    nodeList: (Logic<any> | undefined)[];
    nodeConnections: number[][];
    customInputs: Ship.CustomInput[];
    gridSize: Ship.Grid;
};
type ShipProperties = {
    [key: string]: unknown;
} & { [K in keyof KnownShipProperties]?: KnownShipProperties[K]; };
type EditMode = "Ship" | "Logic" | "Save";
type safe = { [K in string | number | symbol]?: unknown; };
type UseData = number | [number, number];
type BlockData = {
    id: number;
    weight?: number;
    strength?: number;
    cost?: number;
    energy_use?: UseData;
    energy_store?: number;
    fuel_use?: UseData;
    fuel_store?: number;
    cargo_use?: UseData;
    cargo_store?: number;
    draw?: number[];
    now?: number;
};
type BlockDataSimple = {
    id: number;
    weight?: number;
    strength?: number;
    cost?: number;
    energy_use?: number | number[];
    energy_store?: number;
    fuel_use?: number | number[];
    fuel_store?: number;
    cargo_use?: number | number[];
    cargo_store?: number;
    draw?: number[];
    now?: number;
};
type LExec = (arg: Logic<2 | 3>[], block: LogicBlock, ship: Ship) => void;
/**
 * Rotation Axis
 */
type RA = 0 | 1 | 2 | 3 | number;
type PreciseDef = [number, number, number, number, number];
type SizeDef = [number | string] | [number | string, number, number];
type SizesArg = (SizeDef | PreciseDef) | (SizeDef | PreciseDef)[];
type Slider = {
    min: number;
    max: number;
    default: number[];
};
type IntegerSlider = {
    min: number;
    max: number;
    default: number[];
};
type Dropdown = {
    options: string[];
    default: number[];
};
type NumberInputs = {
    default: number[];
};
type TextInputs = {
    default: string[];
};
type WeldGroups = {
    idx: number;
    default: number[] | number[][];
};
type ItemTs = {
    "Slider": Slider;
    "Integer Slider": IntegerSlider;
    "Dropdown": Dropdown;
    "Number Inputs": NumberInputs;
    "Text Inputs": TextInputs;
    "WeldGroups": WeldGroups;
};
type itemTypes = ["Slider", "Integer Slider", "Dropdown", "Number Inputs", "Text Inputs", "WeldGroups"];
/**
 * Arguments typedefs for Properties Items generator
 */
type PropsArg = [0, string, number, number, number] | [1, string, number, number, number] | [2, string, string[], number] | [3, string, number[]] | [4, string, string[]] | [5, number | number[]];
/**
 * properties definitions
 */
type Prop = Properties<keyof ItemTs>;
type PathArg = {
    x: number;
    y: number;
} | [number, number];
type Box2dPath = Block.Box2d[] & {
    range: number;
};
