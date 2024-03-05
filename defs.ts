// v0.0.3 when updated, version inherited from editor.html is used
var _ge: any;
function GE(v: any) {return document.getElementById(typeof v=="number"&&v==v?
  (_ge=v+1)-1:v==void 0?v=_ge++:v)}

var vX = 0;
var vY = 0,
  fX: number,
  fY: number,
  gX: number,
  gY: number;
var sc = 16;
var canvas: HTMLCanvasElement;
var ctx: CanvasRenderingContext2D;

function OldTile(tile: OldTile)
function OldTile(tile: [string, string, integer, integer, integer])
function OldTile(type: string, name: string, x: integer, y: integer
  , rotation: integer | null)

var render = function render() {
  return;
}

var press = function press(x: number, y: number) {
  return console.log(x, y);
}

var cStart: number, tStart: number, touch: number, touch_2: number;
var bd: HTMLElement | null;
// TODO: all the rest of editor.html script tag global scope
