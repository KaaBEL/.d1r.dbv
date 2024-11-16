/// <reference path="Color.ts" />

/** class is frost, Block Physics */
class Physics {
  static VER = "v.0.1.64T11";

  reporter: string = "";

  constructor () {
    this.reporter = "";
    Object.seal(this);
  }
  /**
   * @constant
   * initPhysics is executed in context of Block constructor, the brackets
   * keep ts from asssiming it's PBlock property and uses its (this)context
   */
  static INIT = (function initBlockPhysics(this: Block) {
    var blockPhysics = new Physics();
    //@ts-ignore
    if (this instanceof Block)
      this.getPhysics = function () {
        return blockPhysics;
      };
    return blockPhysics;
  });
  static rend = {reporter: false};

  // Only the Physics class initially, better classification system
  // should be decided later
  // /** class is frost, Block Physics */
  // static Block = function () {
  //   class PBlock {
  //     enabled: boolean;
  //
  //     constructor() {
  //       this.enabled = false;
  //       Object.seal(this);
  //     }
  //   }
  //   return Object.freeze(PBlock);
  // }();

  static Ship: Physics.ShipConstructor;

  static {
    Object.freeze(Physics);
  }
}

namespace Physics {
  /** class is frost, Ship Physics */
  class PShip {
    /** list of selected inputs (checked checkbox) */
    selectedInputs: string[];

    constructor(ship: Ship) {
      this.selectedInputs = [];
      Object.seal(this);
    }

    static INIT = function initShipPhysics(this: Ship) {
      if (!(this instanceof Ship))
        throw new TypeError("initShipPhysics used not on Ship.");
      var shipPhysics = new PShip(this);
      this.getPhysics = function () {
        return shipPhysics;
      };
      return shipPhysics;
    };

    static {
      Object.freeze(PShip);
    }
  }
  export type ShipConstructor = typeof PShip;
  export type ShipClass = PShip;
  Physics.Ship = PShip;
}
