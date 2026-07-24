// v.0.2.44
/// <reference path="./_k_api.js" types="./lib.fsaapi.d.ts" />

/** defining new property on Console for editor.js */
declare interface Console {
  err: Console["error"] | undefined;
  /** can be set to throw error by enabling with throwErrors fnuction */
  error: Console["error"];
}
declare interface CanvasRenderingContext2D {
  msImageSmoothingEnabled?: boolean;
}
