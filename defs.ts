// v.0.0.17 when updated, version inherited from editor.html is used
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

var render = function render() {
  return;
}

var press = function press(x: number, y: number) {
  return console.log(x, y);
}

var contextmenu = function contextmenu(x: number, y: number, e: MouseEvent) {
  return console.log(x, y);
}

var over = function over(e: MouseEvent | TouchEvent | TchD) {
  return console.log(e);
}

var init = function init() {
  return;
}

var bd: HTMLElement | null;

var UDF: undefined, F: () => void, TCH: Touch;

/** @TODO check the definitions for new changes at some point */
/** tested object for touch data */
class TchD {
  event: TouchEvent;
  identifier: number;
  target: EventTarget;
  type: string;
  pageX: number;
  pageY: number;
  clientX: number;
  clientY: number;
  screenX: number;
  screenY: number;
  force: number;
  radiusX: number;
  radiusY: number;
  /** position within element */
  posX: number;
  /** position within element */
  posY: number;
  /** starting position */
  sX: number;
  /** starting position */
  sY: number;
  /** movement */
  movX: number;
  /** movement */
  movY: number;
  /** timestamp */
  time: number;
  /** timestamp of previous */
  pTime: number;
  /** start timestamp */
  sTime: number;
  /** source target */
  srcTarget: EventTarget;
  update: (touch: TchD, touchEvent: TouchEvent) => TchD;
  
  constructor (src: HTMLElement, touch: Touch, touchEvent: TouchEvent) {
    this.event = touchEvent;
    this.identifier = touch.identifier;
    this.target = touch.target;
    this.type = touchEvent.type;
    this.pageX = touch.pageX;
    this.pageY = touch.pageY;
    this.clientX = touch.clientX;
    this.clientY = touch.clientY;
    this.screenX = touch.screenX;
    this.screenY = touch.screenY;
    this.force = touch.force;
    this.radiusX = touch.radiusX;
    this.radiusY = touch.radiusY;
    this.posX = touch.pageX - src.offsetLeft;
    this.posY = touch.pageY - src.offsetTop;
    this.sX = this.posX;
    this.sY = this.posY;
    this.movX = 0;
    this.movY = 0;
    this.time = Date.now();
    this.pTime = 0;
    this.sTime = this.time;
    this.srcTarget = this.target;
    this.update = function (touch: TchD, touchEvent: TouchEvent) {
      if (!(touch instanceof Touch))
        throw new TypeError("1. arg: touch is not type of Touch");
      if (touch.identifier !== this.identifier)
        throw new Error("attempt to udpdate with different identifier");
      if (!(touchEvent instanceof TouchEvent))
        throw new TypeError("2. arg: touchEvent is not type of TouchEvent");
      this.event = touchEvent;
      this.target = touch.target;
      this.pageX = touch.pageX;
      this.pageY = touch.pageY;
      this.clientX = touch.clientX;
      this.clientY = touch.clientY;
      this.screenX = touch.screenX;
      this.screenY = touch.screenY;
      this.force = touch.force;
      this.radiusX = touch.radiusX;
      this.radiusY = touch.radiusY;
      this.type = touchEvent.type;
      var tmp = touch.pageX - src.offsetLeft;
      this.movX = tmp - this.posX;
      this.posX = tmp;
      tmp = touch.pageY - src.offsetTop;
      this.movY = tmp - this.posY;
      this.posY = tmp;
      tmp = Date.now()
      this.pTime = this.time;
      this.time = tmp;
      return this;
    };
  }
}

type touches = (TchD|null)[] & {count: number};
/** fires when action of event doesn't correspond with touches array
 * @returns {boolean} ? keep current touches : reset to the new action
 */// ^ swaped result by boolean (should reset on default: void functions) */
interface errorH {
  (touches: touches, faulty: TchD[], ev: TouchEvent): boolean;
}
/** fires when event is fired, may give all or portion of changed touches */
interface softH {
  (touches: touches, changed: TchD[], ev: TouchEvent): void;
}
/** fires when all events were collected, possibly one cycle */
interface hardH {
  (touches: touches, added: TchD[], removed: TchD[]): void;
}
var arr: any[];
function test_touches(targ: HTMLElement, calls: softH[],
  globalArr: any, customLog?: Function | any[]) {
  var a: any[] = [], t: {ch: Touch, cs?: TouchList} = {ch: TCH},
    custLog = typeof customLog == "function" ?
    customLog : customLog === UDF ? function () { return [] } :
    function () {
        return customLog instanceof Array ? customLog : [customLog];
      };
  var map = Array.prototype.map;
  function tchLog(s, e, ef, n?, l?, p?) {
    n = (t.ch = e).timeStamp % 1E7 | 0;
    // countermeausre in offset left in console logs by array indexes
    l = 7 - ((n) + "").length;
    return Array.prototype.concat.apply([
      n,
      " ".repeat(l) + s + map.call(ef(e, p = []), function (i) {
        var s = [
          /* empty */,
          i.identifier,
          i.force,
          i.pageX | 0,
          i.pageY | 0
        ].join(" ");
        return s += " ".repeat(13 - s.length);
      })
    ], custLog()).concat(e.timeStamp - n, p);
  }
  function fn(s, f) {
    // ef in tchLog
    var prpt = s !== "cancel:" ?
      function (e: TouchEvent, arr) {
          // p in touch log preservers the identifiesrs of changedTouches
          arr.push(map.call(e.changedTouches, function (e) {
            return e.identifier;
          }));
          return t.cs = e.touches;
        } :
      function (e: TouchEvent) {return t.cs = e.changedTouches};
    function prcs(e) {
      e.cancelable && e.preventDefault();
      if (a.push(tchLog(s, e, prpt)) > 109) {
        console.log([a]);
        a = new Array(10);
      }
    }
    if (globalArr)
      return function prcsLog(e) {
        if (a.push(tchLog(s, e, prpt)) > 99) {
          console.log([a]);
          (a = []).length = 10;
        }
        f(e);
      }
    function withLog(e) {
      delete a[a.push(tchLog(s, e, function (e) {
        return e.targetTouches;
      })) - 64];
      f(e);
    }
    return f ? withLog : prcs;
  }
  if (calls instanceof Array ? globalArr : calls = []) {
    (globalArr = typeof arr === "undefined" && (a.length = 10) &&
      Object.defineProperty(window, "tchs", {
        get: function (p?) {
          p = a;
          (a = []).length = 10;
          return {a: p};
        }
      }));
  }
  targ.ontouchcancel = fn("cancel:", calls[3]);
  targ.ontouchstart = fn(" start:", calls[0]);
  targ.ontouchmove = fn("  move:", calls[1]);
  targ.ontouchend = fn("   end:", calls[2]);

  return {a: a, tch: t};
}

function touchesInit(src: HTMLElement,
  hardHandl?: hardH,
  softHandl?: [softH, softH, softH, softH],
  errorHandl?: [errorH, errorH, errorH] | typeof F[]) {
  //@ts-ignore
  src = src instanceof HTMLElement ? src : console.error("Not src EL" +
    " at touchesInit  beggining.");
  var hardHandler = hardHandl || F,
    softHandlers = softHandl || [F, F, F, F],
    errorHandlers = errorHandl || [F, F, F];
  type touchlog = [number,string,number][];
  /** placeholder of "new TchD()" *///@ts-ignore
  const newTchD = new TchD();
  var o: {a: touchlog, tch: {ch: Touch, cs?: TouchList}},
    events: boolean[] = [!1];
  var temp = [newTchD], added = [newTchD], removed = [newTchD];
  type handler = (e: TouchEvent) => void;
  var touches: (TchD|null)[] & {count: number} = function () {
      //@ts-ignore
      var arr: TchD[] & {count: number} = [newTchD];
      arr.count = 0;
      return arr;
    }(),
    identifiers: number[] = [-1],
    handlers: [softH, softH, softH, softH] = [
      onstart,
      onmove,
      onend,
      oncancel
    ];
  [events, temp, added, removed, touches, identifiers].map(function (e) {
    e.length = 0;
  });

  console.log(o = test_touches(src, handlers, 1, function () {
    return [events, temp.length, added.length, removed.length,
      touches.length, identifiers].map(
      function (e, i) {
        if (typeof e == "number")
          return e;
        return e.join(",") + " ".slice(+!i);
      }
    );
  }));

  function createTouch(tch, ev, i) {
    if (i === UDF) {
      if ((i = identifiers.indexOf(tch.identifier)) >= 0)
        return errorHandlers[0](touches, tch, ev) ?
          console.error("Can't add existing Touch") :
          console.error("Assigning Touch", updateTouch(tch, ev, i));
    }
    for (i = 0; touches[i] !== null && i < touches.length;)
      i++;
    events[i] = !0;
    identifiers[i] = tch.identifier;
    touches[i] = added[i] = temp[i] = new TchD(src, tch, ev);
  }
  function updateTouch(tch, ev, i) {
    if (i === UDF) {
      if ((i = identifiers.indexOf(tch.identifier)) < 0)
        return errorHandlers[1](touches, tch, ev) ?
          console.error("Can't update unexisting Touch") :
          console.error("Adding Touch", createTouch(tch, ev, i));
    }
    events[i] = !0;//@ts-ignore
    temp[i] = touches[i].update(tch, ev);
  }
  function removeTouch(tch, ev, i) {
    var j = identifiers.indexOf(tch.identifier);
    if (j < 0 && errorHandlers[2](touches, tch, ev))
      return console.error("Can't remove unexisting Touch");
    events[j] = !0;
    identifiers[j] = -1;//@ts-ignore
    removed[j] = temp[j] = touches[j].update(tch, ev);
    touches[j] = null;
    for (j = touches.length - 1; j > 0 && touches[j] === null;)
      touches.length--;
  }
  function prcsTouches(evId: number, evStr: string, ev: TouchEvent,
    method: typeof updateTouch | typeof createTouch | typeof removeTouch) {
    for (var i = 0, tchs = ev.changedTouches; i < tchs.length; i++)
      method(tchs[i], ev, i);
    for (i = touches.count = 0; i < touches.length;)
      touches.count += +!!touches[i++];
    softHandlers[evId](touches, temp, ev);
    temp = [];
  }
  function inputTouches(evId, evStr, ev, method) {
    for (i = touches.count = 0; i < touches.length;)
      touches.count += +!!touches[i++];
    hardHandler(touches, added, removed);
    events = [];
    added = [];
    removed = [];
    prcsTouches(evId, evStr, ev, method);
  }

  function checkEvent(tchs) {
    for (var i = tchs.length; i-- > 0;)
      if (events[i])
        return !1;
    return !0;
  }
  function onstart(e) {
    if (checkEvent(e.changedTouches))
      prcsTouches(0, "start", e, createTouch);
    else
      inputTouches(0, "start", e, createTouch);
  }
  function onmove(e) {
    if (checkEvent(e.changedTouches))
      prcsTouches(1, "move", e, updateTouch);
    else
      inputTouches(1, "move", e, updateTouch);
  }
  function onend(e) {
    if (checkEvent(e.changedTouches))
      prcsTouches(2, "end", e, removeTouch);
    else
      inputTouches(2, "end", e, removeTouch);
  }
  function oncancel(e) {
    if (checkEvent(e.changedTouches))
      prcsTouches(3, "cancel", e, removeTouch);
    else
      inputTouches(3, "cancel", e, removeTouch);
  }
  return o;
}
touchesInit.time = 350;
touchesInit.move = 13;

var mouseStamp = 0;
function mouseInit() {
  if (!bd)
    return console.error("bd is null, UI wasn't initialized");//@ts-ignore
  bd.onmousewheel = bd.onwheel = function (e) {
    if (e.target !== canvas)
      return;
    var prev = sc, w = canvas.width / 2, h = canvas.height / 2;
    //@ts-ignore
    sc -= sc / (e.deltaY || -e.wheelDelta || 0) * 10;
    vX = (vX - w) * sc / prev + w;
    vY = (vY - h) * sc / prev + h;
    render();
  };
  var foreign = !1, pX = 0, pY = 0;
  bd.onmousedown = function (e) {
    if (foreign = e.target !== canvas)
      over(e);
    if (e.buttons & 1)
      mouseStamp = Date.now();
    pX = gX = e.pageX - canvas.offsetLeft;
    pY = gY = e.pageY - canvas.offsetTop;
  }
  bd.onmousemove = function (e) {
    if (foreign)
      return over(e);
    if (!(e.buttons & 1))
      return;
    var x = e.pageX - canvas.offsetLeft,
      y = e.pageY - canvas.offsetTop;
    // works on add difference basis to not fight with other movement
    vX += x - pX || 0;
    vY += y - pY || 0;
    pX = x;
    pY = y;
    render();
  };
  bd.onmouseup = function (e) {
    if (foreign)
      return over(e);
    if (Date.now() > mouseStamp + mouseInit.time)
      return;
    var x = e.pageX - canvas.offsetLeft, y = e.pageY - canvas.offsetTop;
    if (Math.abs(gX - x) > mouseInit.move &&
      Math.abs(gY - y) > mouseInit.move)
      return;
    press(x, y);
  }
  window.oncontextmenu = function (e) {
    for (var el = e.target; el instanceof Node;)
      if (!(el = el.parentNode))
        return;
      else if (el === bd)
        break;
    var x = e.pageX - canvas.offsetLeft, y = e.pageY - canvas.offsetTop;
    contextmenu(x, y, e);
  };
}
/** settings: press time legth allowed touch-start-times */
mouseInit.time = 350;
/** settings: press precision */
mouseInit.move = 7;

var actionType: number, moveScore: number, moveCount: number;
function touchGrab(all, ev) {
  ev.cancelable && ev.preventDefault();
  var x0 = all[0].movX,
    y0 = all[0].movY,
    x1 = all[1].movX,
    y1 = all[1].movY;
  if (actionType < 5) {
    var n = actionType === 2 ? 4 : 2;
    vX += (x0 + x1) / n;
    vY += (y0 + y1) / n;
  }
  if (actionType > 3 || actionType === 2) {
    var prev = sc, w = canvas.width / 2, h = canvas.height / 2;
    sc += ((all[0].pageX > all[1].pageX ?
        x0 - x1 :
        x1 - x0) +
      (all[0].pageY > all[1].pageY ?
        y0 - y1 :
        y1 - y0) || 0) *
      sc / (237 << +(actionType === 2));
    vX = (vX - w) * sc / prev + w;
    vY = (vY - h) * sc / prev + h;
    actionType === 2 ?
      ++moveCount > 4 ?
        actionType = Math.abs(moveScore) > touchesInit.move / 2 ?
          moveScore > 0 ? 3 : 5 :
          4 :
        moveScore += Math.abs(x0 + x1 + y0 + y1) -
          Math.abs(x0 - x1 + y0 - y1) * 2 :
      0;
  }
  render();
}
var foreign1 = !1, touchStamp = 0, prevCount = 0;
function thetouchstart(all: touches, changed: TchD[], ev: TouchEvent) {
  if (prevCount === 0)
    touchStamp = Date.now();
  if (all[0] && all[0].srcTarget !== canvas)
    over(all[0]);
  else if (all.length > 1 && !actionType && all[0] && all[1] &&
    Date.now() < touchStamp + touchesInit.time) {
    moveScore = moveCount = 0;
    actionType = 4;
  }
  prevCount = all.count;
}
function thetouchmove(all: touches, changed: TchD[], ev: TouchEvent) {
  if (all[0] && all[0].srcTarget !== canvas)
    over(all[0]);
  else if (actionType > 1 && all[0] && all[1])
    touchGrab(all, ev);
}
function thetouchend(all: touches, changed: TchD[], ev: TouchEvent) {
  if (all.count === 0)
    actionType = 0;
  if (all[0] && all[0].srcTarget !== canvas)
    over(all[0]);
  else if (actionType > 1 && all[0] && all[1])
    touchGrab(all, ev);
  prevCount = all.count;
}
function thetouchcancel(all: touches, changed: TchD[], ev: TouchEvent) {
  console.error("Touches canceled");
  prevCount = touchStamp = actionType = 0;
}

// /** Defintion for Propperties class in code.js */
// abstract class PropertiesDef<T extends keyof ItemTs> {
//   type: T;
//   name: string;
//   items: { new (): ItemTs[T] }[];
//   constructor(type: T, name: string) {
//     this.type = type;
//     this.name = name;
//     this.items = [];
//   }
//   static Slider: Slider;
//   static IntegerSlider: IntegerSlider;
//   static Dropdown: Dropdown;
//   static NumberInputs: NumberInputs;
//   static TextInputs: TextInputs;
// }
/** Definitons of Property item structs */
interface Slider {
  min: number;
  max: number;
  default: number;
}
interface IntegerSlider {
  min: number;
  max: number;
  default: number;
}
interface Dropdown {
  options: string[];
  default: number;
}
interface NumberInputs {
  default: number[];
}
interface TextInputs {
  default: string[];
}
interface ItemTs {
  "Slider": Slider;
  "Integer Slider": IntegerSlider;
  "Dropdown": Dropdown;
  "Number Inputs": NumberInputs;
  "Text Inputs": TextInputs;
}
// interface ConstrTs {
//   Slider: new () => Slider;
//   IntegerSlider: new () => IntegerSlider;
//   Dropdown: new () => Dropdown;
//   NumberInputs: new () => NumberInputs;
//   TextInputs: new () => TextInputs;
// }
// /** Arguments typedefs for Properties Items generator */
// type ts_ItmArg0 = [0, string, number, number, number];
// type ts_ItmArg1 = [1, string, number, number, number];
// type ts_ItmArg2 = [2, string, string[], number];
// type ts_ItmArg3 = [3, string, number[]];
// type ts_ItmArg4 = [4, string, string[]];
// type ts_PropsArg = ItmArg0 | ItmArg1 | ItmArg2 | ItmArg3 | ItmArg4;
// type itemTypes = ["Slider", "Integer Slider", "Dropdown",
// "Number Inputs", "Text Inputs"];
// interface justOneProperty {
//   <T extends ts_PropsArg[]>(argArr: T): [ItemTs[itemTypes[T[0][0]]]]
// }
//interface ItemConstructor
/*
Slider:
  Tiny Hydrogen Thruster: 375; 1125;
  Small Hydrogen Thruster: 1500; 4500;
  Medium Hydrogen Thruster: 6000; 18000;
  Large Hydrogen Thruster: 18000; 54000;
  Tiny Ion Thruster: 375; 1125;
  Small Ion Thruster: 1500; 4500;
  Medium Ion Thruster: 3000; 9000;
  Large Ion Thruster: 9000; 27000;
  Reaction Wheel: 2500; 7500;
  
  Hinge: 0.2; 3;
  Piston: 0.2; 3;
  
  Delay: 0.1; 5;
Integer Slider:
  Digital Dispay: 1; 4;
Dropdown:
  Control Block: "Up", "Down", "Left", "Right", "Turn Left", "Turn Right", "Action 1", "Action 2";
  Speed Sensor: "Absolute", "Directional", "Angular", "G-force";
Number inputs:
  Constant Number: 1;
  Clamp: 2;
  Treshold Gate: 2;
  Gauge: 2;
  Dial: 2;
Text Inputs:
  Function Block: 1;
*/
