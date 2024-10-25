import BlockData from "./blocks.json";

/**
 * Object that holds mappings between block values for speedy data access
 */
export default class BlockHash {
    public nameToID: Map<string, number>;
    public IDToName: Map<number, string>;
    public IDToCost: Map<number, number>;

    constructor() {
        // Basic mappings
        this.nameToID;
        this.IDToName;

        // Other mappings
        this.IDToCost;
    }
}
