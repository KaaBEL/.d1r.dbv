// v.0.1.52
/** @TODO v0.1.53: move to code directory */
/** defining new property on Console for editor.js */
declare interface Console {
  err: Console["error"] | undefined;
  /** can be set to throw error by enabling with throwErrors fnuction */
  error: Console["error"];
}
declare interface CanvasRenderingContext2D {
  msImageSmoothingEnabled?: boolean;
}
