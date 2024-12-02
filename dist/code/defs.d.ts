// v.0.1.68
/// <reference path="./editor.html.ts" />

/** defining new property on Console for editor.js */
declare interface Console {
  err: Console["error"] | undefined;
  /** can be set to throw error by enabling with throwErrors fnuction */
  error: Console["error"];
}
declare interface CanvasRenderingContext2D {
  msImageSmoothingEnabled?: boolean;
}
