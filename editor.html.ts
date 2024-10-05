// v.0.1.60
function GE(v){return document.getElementById(+v===v?(GE.i=v+1)-1:v===
  void 0?v=GE.i++:v)}GE.i=0;

var vX = 0;
var vY = 0,
  fX: number,
  fY: number,
  gX: number,
  gY: number;
var sc = 16;
var canvas: HTMLCanvasElement;
var ctx: CanvasRenderingContext2D;

/** signals UI API click on canvas */
var press = function press(x: number, y: number) {
  return console.log(x, y);
};

/** return true if move is used outside UI API */
var move = function move(x: number, y: number, e: MouseEvent) {
  return Boolean(console.log(x, y));
};

var contextmenu = function contextmenu(x: number, y: number, e: MouseEvent) {
  return console.log(x, y);
};

var over = function over(e: MouseEvent | TouchEvent | TchD) {
  return console.log(e);
};

var render = function render() {
  return;
};

var init = function init() {
  return;
};

var bd: HTMLElement & {onmousewheel?: (
  this: GlobalEventHandlers,
  ev: WheelEvent & {wheelDelta?: number}
) => any} | null;

var UDF: undefined, F: () => void, TCH: Touch;

/** @TODO check the definitions for new changes at some point */
type tchsDat = (TchD|null)[];
type touches = (TchD|null)[] & {count: number};
/** fires when action of event doesn't correspond with touches array
 * @returns {boolean} ? keep current touches : reset to the new action
 */// ^ swaped result by boolean (should reset on default: void functions) */
interface errorH {
  (touches: touches, faulty: Touch, ev: TouchEvent): boolean;
}
/** fires when event is fired, may give all or portion of changed touches */
interface softH {
  (touches: touches, changed: (TchD|null)[], ev: TouchEvent): void;
}
/** fires when all events were collected, possibly one cycle */
interface hardH {
  (touches: touches, added: tchsDat, removed: tchsDat): void;
}
type handler = (e: TouchEvent) => void;

/** tested object for touch data
 */
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
  update: (touch: Touch, touchEvent: TouchEvent) => TchD;
  
  constructor ()
  constructor (src: HTMLElement, touch: Touch, touchEvent: TouchEvent)
  constructor (src?: HTMLElement, touch?: Touch, touchEvent?: TouchEvent) {
    var source = src || document.createElement("div");
    // @ts-is-stoopid if (!arguments.length)
      try {
        touch = new Touch({identifier: 0, target: source});
        touchEvent = new TouchEvent("cancel");
      } catch (e) {
        touch = {} as Touch;
        touchEvent = {} as TouchEvent;
      }
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
    this.posX = touch.pageX - source.offsetLeft;
    this.posY = touch.pageY - source.offsetTop;
    this.sX = this.posX;
    this.sY = this.posY;
    this.movX = 0;
    this.movY = 0;
    this.time = Date.now();
    this.pTime = 0;
    this.sTime = this.time;
    this.srcTarget = this.target;
    this.update = function (touch, touchEvent) {
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
      var tmp = touch.pageX - source.offsetLeft;
      this.movX = tmp - this.posX;
      this.posX = tmp;
      tmp = touch.pageY - source.offsetTop;
      this.movY = tmp - this.posY;
      this.posY = tmp;
      tmp = Date.now()
      this.pTime = this.time;
      this.time = tmp;
      return this;
    };
    return Object.seal(this);
  }
}

/** aditional/optional js logging of touch events */
function test_touches(targ: HTMLElement, calls: handler[],
  globalArr: any, customLog?: Function | any[] | any) {
  var a: any[] = [], t: {ch: Touch, cs?: TouchList} = {ch: TCH},
    custLog: () => any[] = typeof customLog == "function" ?
    customLog : customLog === UDF ? function (): [] { return [] } :
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
      //@ts-ignore
      " ".repeat(l) + s + map.call(ef(e, p = []), function (i) {
        var s = [
          /* empty */,
          i.identifier,
          i.force,
          i.pageX | 0,
          i.pageY | 0
        ].join(" ");
        //@ts-ignore
        return s += " ".repeat(13 - s.length);
      })
    ], custLog()).concat(e.timeStamp - n, p);
  }
  function fn(s: string, f?: handler) {
    // ef in tchLog
    var prpt = s !== "cancel:" ?
      function (e: TouchEvent, arr) {
          // p in touch log preservers the identifiesrs of changedTouches
          arr.push(map.call(e.changedTouches, function (e: any) {
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
      return function prcsLog(e: TouchEvent) {
        if (a.push(tchLog(s, e, prpt)) > 99) {
          console.log([a]);
          (a = []).length = 10;
        }
        f && f(e);
      }
    function withLog(e: TouchEvent) {
      delete a[a.push(tchLog(s, e, function (e) {
        return e.targetTouches;
      })) - 64];
      f && f(e);
    }
    return f ? withLog : prcs;
  }
  if (calls instanceof Array ? globalArr : calls = []) {
    //@ts-ignore
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

/** errorHandlers are  */
function touchesInit(src: HTMLElement,
  hardHandl?: hardH,
  softHandl?: [softH, softH, softH, softH],
  errorHandl?: [errorH, errorH, errorH] | typeof F[]) {
  //@ts-ignore
  src = src instanceof HTMLElement ? src : console.error("No src EL" +
    " at touchesInit beggining.");
  var hardHandler = hardHandl || F,
    softHandlers = softHandl || [F, F, F, F],
    errorHandlers = errorHandl || [F, F, F];
  type touchlog = [number,string,number][];
  /** placeholder of "new TchD()" *///@ts-ignore
  const newTchD = new TchD();
  var o: {a?: touchlog, tch?: {ch: Touch, cs?: TouchList}} = {},
    events: boolean[] = [],
    temp: tchsDat = [],
    added: tchsDat = [],
    removed: tchsDat = [],
    touches: touches = function () {
      var arr: touches;
      (arr = [] as any).count = 0;
      return arr;
    }(),
    identifiers: number[] = [-1],
    handlers: [handler, handler, handler, handler] = [
      onstart,
      onmove,
      onend,
      oncancel
    ];
  [events, temp, added, removed, touches, identifiers].map(function (e) {
    e.length = 0;
  });
    
  // console.log(o = test_touches(src, handlers, 1, function () {
  //   return [events, temp.length, added.length, removed.length,
  //     touches.length, identifiers].map(
  //     function (e, i) {
  //       if (typeof e == "number")
  //         return e;
  //       return e.join(",") + " ".slice(+!i);
  //     }
  //   );
  // }));
  src.ontouchstart = onstart;
  src.ontouchmove = onmove;
  src.ontouchend = onend;
  src.ontouchcancel = oncancel;
  // ontouches events handling
  function createTouch(tch: Touch, ev: TouchEvent, i: number) {
    if (i === UDF) {
      if ((i = identifiers.indexOf(tch.identifier)) >= 0)
        return errorHandlers[0](touches, tch, ev) ?
          !!+console.error("Can't add existing Touch") :
          !!+console.error("Assigning Touch", updateTouch(tch, ev, i));
    }
    for (i = 0; touches[i] !== null && i < touches.length;)
      i++;
    events[i] = !0;
    identifiers[i] = tch.identifier;
    touches[i] = added[i] = temp[i] = new TchD(src, tch, ev);
  }
  function updateTouch(tch: Touch, ev: TouchEvent, i: number) {
    if (i === UDF) {
      if ((i = identifiers.indexOf(tch.identifier)) < 0)
        return errorHandlers[1](touches, tch, ev) ?
          !!+console.error("Can't update unexisting Touch") :
          !!+console.error("Adding Touch", createTouch(tch, ev, i));
    }
    events[i] = !0;
    temp[i] = (touches[i] || newTchD).update(tch, ev);
  }
  function removeTouch(tch: Touch, ev: TouchEvent, i: number) {
    var j = identifiers.indexOf(tch.identifier);
    if (j < 0 && errorHandlers[2](touches, tch, ev))
      return console.error("Can't remove unexisting Touch");
    events[j] = !0;
    identifiers[j] = -1;
    removed[j] = temp[j] = (touches[j] || newTchD).update(tch, ev);
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
  function inputTouches(evId: number, evStr: string, ev: TouchEvent,
    method: typeof updateTouch | typeof createTouch | typeof removeTouch) {
    for (var i = touches.count = 0; i < touches.length;)
      touches.count += +!!touches[i++];
    hardHandler(touches, added, removed);
    events = [];
    added = [];
    removed = [];
    prcsTouches(evId, evStr, ev, method);
  }

  function checkEvent(tchs: TouchList) {
    for (var i = tchs.length; i-- > 0;)
      if (events[i])
        return !1;
    return !0;
  }
  function onstart(e: TouchEvent) {
    // checkEvent = each complete input contains only one event for each
    // touch ?
    // has 2 outcomes: assigning new start tchs : fire UI complete input;
    if (checkEvent(e.changedTouches))
    // start of existing | end/cancel of unexisting further throws error
      prcsTouches(0, "start", e, createTouch);
    else
      inputTouches(0, "start", e, createTouch);
  }
  function onmove(e: TouchEvent) {
    if (checkEvent(e.changedTouches))
      prcsTouches(1, "move", e, updateTouch);
    else
      inputTouches(1, "move", e, updateTouch);
  }
  function onend(e: TouchEvent) {
    // remove existing one else throw error, conditioned in updateRemoved...
    if (checkEvent(e.changedTouches))
      prcsTouches(2, "end", e, removeTouch);
    else
      inputTouches(2, "end", e, removeTouch);
  }
  function oncancel(e: TouchEvent) {
    if (checkEvent(e.changedTouches))
      prcsTouches(3, "cancel", e, removeTouch);
    else
      inputTouches(3, "cancel", e, removeTouch);
  }
  return o;
}
/** settings: allowed press time legth, @see {mouseInit.time} */
touchesInit.time = 350;
/** allowed press precision, @see {mouseInit.move} */
touchesInit.move = 13;

var mouseStamp = 0, test_debug = !1;
var WheelSroll = typeof WheelEvent == "undefined" ? Object : WheelEvent;
if (window.MouseWheelEvent === UDF)
  var MouseWheelEvent = Object;
function mouseInit() {
  if (!bd)
    return console.error("bd is null, UI wasn't initialized");
  bd.onwheel = bd.onmousewheel = function (e) {
    if (e.target !== canvas || !(e instanceof WheelSroll ||
      e instanceof MouseWheelEvent))
      return;
    test_debug && console.log("onwheel", +new Date / 100 | 0, e.deltaY ||
      -(e.wheelDelta || 0), +new Date, sc);
    var prev = sc, w = canvas.width / 2, h = canvas.height / 2;
    sc -= sc / (e.deltaY || -(e.wheelDelta || 0)) * 10;
    vX = (vX - w) * sc / prev + w;
    vY = (vY - h) * sc / prev + h;
    render();
  };
  var foreign = !1, pX = 0, pY = 0, moving = !1, taken = !1;
  bd.onmousedown = function (e) {
    moving = taken = !1;
    var x = e.pageX - canvas.offsetLeft, y = e.pageY - canvas.offsetTop;
    if (foreign = e.target !== canvas)
      over(e);
    else
      taken = e.buttons === 1 && move(x, y, e);
    mouseStamp = e.buttons === 1 ? Date.now() : 0;
    pX = gX = e.pageX - canvas.offsetLeft;
    pY = gY = e.pageY - canvas.offsetTop;
  }
  bd.onmousemove = function (e) {
    if (foreign)
      return over(e);
    if (!(e.buttons & 5))
      return;
    var x = e.pageX - canvas.offsetLeft, y = e.pageY - canvas.offsetTop;
    if (!moving && (Date.now() < mouseStamp + mouseInit.time &&
      Math.abs(gX - x) < mouseInit.move &&
      Math.abs(gY - y) < mouseInit.move || taken))
      return taken && move(x, y, e);
    moving = !0;
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
    var x = e.pageX - canvas.offsetLeft, y = e.pageY - canvas.offsetTop;
    if (Date.now() < mouseStamp + mouseInit.time &&
      Math.abs(gX - x) < mouseInit.move &&
      Math.abs(gY - y) < mouseInit.move && !taken && !moving)
      return press(x, y);
      // || console.log("press: x, y", gX - x, gY - y, "(moving)", moving, "!taken", !taken);
    else if (taken || !moving)
      return taken && move(x, y, e);
    // console.log("moving: x, y", gX - x, gY - y, "moving", moving, "(taken)", taken);
    vX += x - pX || 0;
    vY += y - pY || 0;
    pX = x;
    pY = y;
  };
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
/** settings: allowed press time legth, @see {touchesInit.time} */
mouseInit.time = 350;
/** allowed press precision, @see {touchesInit.move} */
mouseInit.move = 4;

var actionType = 0, moveScore = 0, moveCount = 0;
function touchGrab(all: touches, ev: Event) {
  if (!all[0] || !all[1])
    return console.error("");
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
    test_debug && console.log("ontouch zoom");
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
    // TODO: the default (actionType = 2) is supposed to detect either
    // zooming in/out or movement, It did it very stubbornly though
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
  if (changed[0] && changed[0].srcTarget !== canvas)
    over(changed[0]);
  else if (all.length > 1 && !actionType && all[0] && all[1] &&
    Date.now() < touchStamp + touchesInit.time) {
    moveScore = moveCount = 0;
    actionType = 4;
  }
  prevCount = all.count;
}
function thetouchmove(all: touches, changed: TchD[], ev: TouchEvent) {
  if (changed[0] && changed[0].srcTarget !== canvas)
    over(changed[0]);
  else if (actionType > 1 && all[0] && all[1])
    touchGrab(all, ev);
}
function thetouchend(all: touches, changed: TchD[], ev: TouchEvent) {
  if (all.count === 0)
    actionType = 0;
  if (changed[0] && changed[0].srcTarget !== canvas)
    over(changed[0]);
  else if (actionType > 1 && changed[0] && changed[1])
    touchGrab(all, ev);
  prevCount = all.count;
  //ev.cancelable && ev.preventDefault();
}
function thetouchcancel(all: touches, changed: TchD[], ev: TouchEvent) {
  console.error("Touches canceled");
  prevCount = touchStamp = actionType = 0;
  //ev.cancelable && ev.preventDefault();
}

declare interface Navigator {
  userAgentData?: object;
}
document.body.onload = function initDoc() {
  function resizeWindow() {
    var w = window.innerWidth,// * devicePixelRatio,
      h = window.innerHeight;// * devicePixelRatio;
    if (w > 4096 || h > 4096)
      if (w > h) {
        h = h * 4096 / w;
        w = 4096;
      } else {
        w = w * 4096 / h;
        h = 4096;
      }
    vX -= (canvas.width - w) / 2;
    vY -= (canvas.height - h) / 2;
    canvas.width = w;
    canvas.height = h;
    render();
  }

  window.onresize = resizeWindow;

  mouseInit();

  if (bd)
    touchesInit(bd, UDF, [thetouchstart, thetouchmove, thetouchend,
      thetouchcancel]);

  /** touch logs
   * @namespace init
   * @typedef {string} color
   */
  var logIdx = 0,
  prevClr = 0,
  /** @type {Array<color>} */
  clr = ["#ffffff", "#447c55", "#d11943"],
  /** @type {HTMLDivElement} */
  logSrc,
  touchErrors = false;
  (function () {
    // that's actualy very funny trick (overwriting existing function)
    // :D
    var error = console.error;
    return function () {
      for (var i = arguments.length, arr = [] as any[],
      el = document.createElement("span"); i-- > 0;)
        arr[i] = arguments[i];
      el.style.color = "#d11943";
      el.innerText = arr.join("");
      (GE(85) || GE(8) || el).appendChild(el);
      error.apply(console, arr);
    };
  });
  function spanLog(clrId, s) {
    if (logIdx && prevClr === clrId)
      return logSrc.childNodes[logIdx - 1].innerText += s;
    var el = document.createElement("span");
    el.style.color = clr[prevClr = clrId];
    el.innerText = s;
    if (logSrc.childNodes[logIdx])
      logSrc.replaceChild(el, logSrc.childNodes[logIdx]);
    else
      logSrc.appendChild(el);
    logIdx++;
  }
  function completeSpanLog() {
    while (logIdx < logSrc.childNodes.length)
      logSrc.removeChild(logSrc.childNodes[logIdx]);
  }

  (GE("info") || document.createElement("br")).onclick = function (e) {
    document.body.classList.remove("scroll");
    this instanceof Node && document.body.removeChild(this);
  };
  document.head.appendChild(document.createComment(navigator.userAgent +
    JSON.stringify(navigator.userAgentData || {})));
  for (var i = 0, ch = document.head.childNodes; i < ch.length; i++) {}
    if (ch[i].nodeName === "TITLE")
      (ch[i] as HTMLTitleElement).text = "D1R DBV editor";

  init();

  vX = 128;
  vY = 64;
  resizeWindow();
};

// Here because of tsconfig.json, bruh
declare var Promise: any;

type NCalcJS = typeof import("c:/Users/Ja/Jaaa_0/deltarealm/.d1r.dbv/code/\
ncalc.web");
var ncalcjs: NCalcJS | null = null;
try {
  //@ts-ignore
  if (!/^file|^content/.test(location.protocol))
    import("./code/ncalc.web.js").then(function (module) {
      ncalcjs = module;
    }).catch(console.error);
} catch (e) {
  console.error(e);
}
