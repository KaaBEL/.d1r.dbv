// contents of editor.html
/// <reference path="./e.ts" />
var version_defs_ts = "v.0.1.64T11";

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

interface defaults {
  /** (default) true: image pattern, false: color */
  editorBackground: boolean,
  /** mumst be in #xxxxxx hex color format */
  editorBackgroundColor: string,
  /** (default) 0: dbc, 1: db, ... */
  editorBackgroundImage: number,
  /** mumst be in #xxxxxx hex color format */
  highlightColor: string,
  highlightWidth: number,
  logicPreviewAlpha: number,
  buildReplace: boolean,
  editorBackgroundStage: number,
  /** (default) false: PC, true: touchscreen device detected */
  fullscreenInitialized: boolean,
  /** (default) false: enabled, true: disabled */
  fullscreenDisabled: boolean,
  /** (default) false */
  renderSharp: boolean
}

var settings: defaults | null = null;

function er(s: string) {
  throw new Error(s);
  return s;
}
