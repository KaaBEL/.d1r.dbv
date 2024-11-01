// contents of editor.html
/// <reference path="./e.ts" />
var version_defs_ts = "v.0.1.64T13";

// contents of initiations in code.js

type safe = {
  [key: string | number | symbol]: unknown
};

const OP = Object.prototype.hasOwnProperty,
  /** should be safe with safe type */
  OC: () => safe = function () {
    return {};
  };

function __extends(_new_class: Function, _super: Function) {
  class __ {
    constructor() {
      // this can be omitted
      this.constructor = _super;
    }
  }
  __.prototype = _super.prototype;
  _new_class.prototype = new __();
}

function __private<T extends any>(val: T): () => T {
  return function () {
    return val;
  };
}

var settings: typeof defaults | null = null;

function er(s: string) {
  throw new Error(s);
  return s;
}
