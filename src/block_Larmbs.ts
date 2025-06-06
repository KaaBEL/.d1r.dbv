import BlockData from "../assets/blocks.json";

/**
 * Object that holds mappings between block values for speedy data access
 */
export default class BlockHash {
    // Basic conversions
    public nameToID: Map<string, number>;
    public IDToName: Map<number, string>;

    // Basic data
    public IDToCost: Map<number, number>;
    public IDToWeight: Map<number, number>;
    public IDToStrength: Map<number, number>;

    // Storage and usage
    public IDToEnergyUse: Map<number, number | [number, number]>;
    public IDToEnergyStore: Map<number, number>;
    public IDToFuelUse: Map<number, number | [number, number]>;
    public IDToFuelStore: Map<number, number>;
    public IDToCargoUse: Map<number, number | [number, number]>;
    public IDToCargoStore: Map<number, number>;

    constructor() {
        // Basic mappings
        this.nameToID;
        this.IDToName;

        // Other mappings
        this.IDToCost;
    }
}

export enum Rotation {
    Up,
    Down,
    left,
    Right,
} 

/**
 * Class which represents a in game block
 */
export class Block {
    id: number;
    texture: number | null;

    position: [number, number];

    // Orientation
    rotation: Rotation;
    flipped: boolean;

    weld_group: number;
}

/**
 * An in game craft
 */
class Craft {
    position: [number, number];
    rotation: number;
    blocks: Block[];
}