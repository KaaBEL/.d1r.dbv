//@ts-check
/// <reference path="./editor.html.ts" />
"use strict";
/** @readonly */
var version__k_api_js = "v.0.2.28";
/** 3h_ @TODO check @see {Actions.API_VERSION} */
/** @typedef {HTMLElementTagNameMap} N @overload @returns {HTMLDivElement} */
/** @template {keyof N} K @overload @param {K} e @returns {N[K]} */
/** @overload @param {string} e @returns {HTMLElement} */
function EL(e) {
  return document.createElement(typeof e == "string" ? e : "div");
}
function GE(v){return document.getElementById(+v===v?(GE.i=v+1)-1:v===
  void 0?v=GE.i++:v)}GE.i=0;
// 7th generation GE (Get Element by id) starts with id 0
/** @type {HTMLCanvasElement} */
var canvas = function (canvas) {
  return canvas instanceof HTMLCanvasElement ?
    canvas :
    document.createElement("canvas");
}(GE()),
  ctx = canvas.getContext("2d") || new CanvasRenderingContext2D();

var test_log = [];
if (/http:..localhost:815[89]/.test(location.href))
  (function test_alphalunar() {
    /** @typedef {()=>void} F */
    /** @type {Console&{oldLog?:F,oldWarn?:F,oldError?:F}} */
    var NS = console;
    var oldLog = NS.log, oldError = NS.error;
    var oldWarn = NS.warn;
    function log() {
      var args = [].slice.call(arguments);
      test_log.push(args);
      oldLog.apply(NS, args);
    };
    log.old = oldLog;
    function warn() {
      var args = [].slice.call(arguments);
      test_log.push(["[c.w]:"].concat(args));
      oldWarn.apply(NS, args);
    };
    warn.old = oldWarn;
    function error() {
      var args = [].slice.call(arguments);
      test_log.push(["[c.err]:"].concat(args));
      oldError.apply(NS, args);
    }
    error.old = oldError;
    NS.log = log;
    NS.warn = warn;
    NS.error = error;
    NS.oldLog = oldLog;
    NS.oldWarn = oldWarn;
    NS.oldError = oldError;
  })();
// api v.0.0.29

// press is touch or click

// vX/vY = view x, y (position)
// fX/fY = from x, y (start view position)
// gX/gY = grab x, y (start press posistion)
// sc = scale
// pR = pixel ratio (computed)
// mouseStamp = press start
var vX = 0, vY = 64, fX, fY, gX, gY, sc = 64, pR = 1;
/**
 * @type {HTMLElement&{onmousewheel?:(this: GlobalEventHandlers,
 * ev:WheelEvent&{wheelDelta?:number})=>any}|null}
 */
var bd = GE(8);
// . mouseStamp = 0, tStart = 0, touch = null, touch_2 = null;

/** @type {((click?:true)=>void)|null} */
var touchdevice = null;

/** @deprecated signals UI API click on canvas */
var press = function press(x, y) {
  return console.debug(x, y);
};

/** @deprecated return true if move is used outside UI API */
var move = function move(x, y, e) {
  return Boolean(console.debug(x, y));
};

var contextmenu = function contextmenu(x, y, ev) {
  return console.debug(x, y);
};

/** @deprecated */
var over = function (ev) {
  return console.debug(ev);
};

var render = function render() {
  return;
};

var init = function init() {
  return;
};

/** @readonly */
var F = function () {}, UDF = void 0;

if (typeof TouchEvent == "undefined")
  //@ts-expect-error
  var TouchEvent = function TouchEvent() {};
if (typeof Touch == "undefined")
  //@ts-expect-error
  var Touch = function Touch() {};
var WheelSroll = typeof WheelEvent == "undefined" ? Object : WheelEvent;
if (window.MouseWheelEvent === UDF)
  /** @type {MouseWheelConstructor} *///@ts-expect-error
  var MouseWheelEvent = Object;
/** @TODO what the going on in here? */
if (typeof EventTarget != "function")
  //@ts-expect-error IE11 compatibility
  var EventTarget = Node;

var test_debug = false;

/**
 * @typedef {Exclude<keyof (MouseEvent|WheelEvent|PointerEvent),"initEvent"|
 * "initUIEvent"|"preventDefault"|"stopImmediatePropagation"|"composedPath"|
 * "stopPropagation"|"getModifierState"|"initMouseEvent">} ActionsDefault
 */
/** @typedef {new()=>MouseWheelEvent&safe} MouseWheelConstructor */
/** @typedef {MouseEvent&{wheelDelta:number}} MouseWheelEvent */
/** @typedef {WheelEvent|MouseWheelEvent} ScrollWheel */
/** @typedef {TouchEvent|MouseEvent|ScrollWheel|PointerEvent} ActionsEvent */
/**
 * @typedef AllActions @property {(Actions|null)[]} changed
 * @property {(Actions|null)[]&{count:number}} all @property {Actions} source
 */
/** @typedef {(x:number,y:number,actions:AllActions)=>void} ActionsExec */
/**
 * @typedef {(x:number,y:number,claims:AllActions&{claim:string,cancelable:
 * true,preventClaim:(custom?:string)=>void})=>void} ActionsClaim
 */
/**
 * @typedef {{immutable?:boolean,listeners?:AddEventListenerOptions,
 * start?:ActionsExec,move?:ActionsExec,end?:ActionsExec,claim?:ActionsClaim,
 * filterClaimed?:boolean,touchIndex0:boolean,target?:EventTarget|null,
 * wheelException?:boolean,mouseButton?:boolean,
 * preventTarget?:EventTarget|null}} ActionsOptions
 */
/** @callback ActionsHandler @param {ActionsEvent} ev @this {HTMLElement} */
/** UI API class/namespace, support either use of mouse or touches
 * @param {ActionsEvent} event @param {number} index
 * @param {Actions.State} state @param {Actions|null} previous
 * @param {Touch} [touch] */
function Actions(event, index, state, previous, touch) {
  /** @type {Touch|typeof Actions.default} */
  var source = touch || (event instanceof TouchEvent ?
    Actions.default :
    event);
  var offset = state.root instanceof HTMLElement ?
    state.root :
    {offsetLeft: 0, offsetTop: 0};
  /** @see {Event.type} */
  this.type = event.type;
  /** original event captured by root */
  this.event = event;
  // this.stage could be "start", "move", "end"
  this.identifier = touch ? touch.identifier : NaN;
  /** number of order in which touches were creater or other cursor */
  this.index = index;
  this.altKey = event.altKey;
  this.ctrlKey = event.ctrlKey;
  this.metaKey = event.metaKey;
  this.shiftKey = event.shiftKey;
  /** may provide gesture alternatives to mouse buttons and wheel */
  this.buttons = source instanceof Touch ? 0 : source.buttons;
  /** @type {number} */
  this.oldTimeStamp = previous ? previous.timeStamp : event.timeStamp;
  /** @type {number} */
  this.timeStamp = state.endTimeStamps[index] = event.timeStamp;
  /** @type {number} */
  this.startTimeStamp = previous ? previous.startTimeStamp : this.timeStamp;
  /** @type {EventTarget|null} @see {Event.target} */
  this.target = event.target;
  /** @type {EventTarget|null} */
  this.startTarget = previous ? previous.startTarget : event.target;
  this.pageX = source.pageX;
  this.pageY = source.pageY;
  this.clientX = source.clientX;
  this.clientY = source.clientY;
  /** @type {number} @see {Event.screenX} */
  this.screenX = source.screenX;
  /** @type {number} @see {Event.screenY} */
  this.screenY = source.screenY;
  this.force = touch ? touch.force : 1;
  this.radiusX = touch ? touch.radiusX : 1;
  this.radiusX = touch ? touch.radiusY : 1;
  this.movementX = previous ? this.screenX - previous.screenX : 0;
  this.movementY = previous ? this.screenY - previous.screenY : 0;
  /** @type {number} !not clientX but x relative to root offsetLeft * pR */
  this.x = (source.pageX - offset.offsetLeft) * pR;
  /** @type {number} !not clientX but y relative to root offsetTop * pR */
  this.y = (source.pageY - offset.offsetTop) * pR;
  /** @type {number} */
  this.startX = previous ? previous.startX : this.x;
  /** @type {number} */
  this.startY = previous ? previous.startY : this.y;
  this.moveX = previous ? this.x - previous.x : 0;
  this.moveY = previous ? this.y - previous.y : 0;
  /** short double for example, check naming in scratch projects */
  this.state = Actions.updateState(this, event, state, previous);
  /** @TODO it is possible for extra touches to exist due to missing touchend event */
  // this.expires = -1;
  Object.seal(this);
}
/** @readonly *///@ts-expect-error
Actions.API_VERSION = "0.3.8";
Actions.default = Object.freeze(
  /** @type {{[K in ActionsDefault]:(MouseEvent|ScrollWheel|PointerEvent)[K]}} */
  ({
    altKey: false,
    button: 0,
    buttons: 0,
    clientX: 0,
    clientY: 0,
    ctrlKey: false,
    layerX: 0,
    layerY: 0,
    metaKey: false,
    movementX: 0,
    movementY: 0,
    offsetX: 0,
    offsetY: 0,
    pageX: 0,
    pageY: 0,
    relatedTarget: null,
    screenX: 0,
    screenY: 0,
    shiftKey: false,
    x: 0,
    y: 0,
    detail: 0,
    view: null,
    which: 0,
    bubbles: false,
    cancelBubble: false,
    cancelable: false,
    composed: false,
    currentTarget: EL(),
    defaultPrevented: false,
    eventPhase: 0,
    isTrusted: false,
    returnValue: false,
    srcElement: EL(),
    target: EL(),
    timeStamp: 0,
    type: "none",
    NONE: 0,
    CAPTURING_PHASE: 1,
    AT_TARGET: 2,
    BUBBLING_PHASE: 3
  }));
/** shortens the code amount burder per precossing state.state string
 * @param {Actions} action @param {ActionsEvent} event
 * @param {Actions.State} state @param {Actions|null} previous */
Actions.updateState = function (action, event, state, previous) {
  var allowed = event.type.slice(0, 5) === "touch" ?
    state.touch :
    event.type.slice(0, 5) === "mouse" ? state.mouse : state.other;
  if (!previous) {
    var lastEnd = state.endTimeStamps[action.index],
      lastPosition = state.endPositions[action.index],
      x = action.x - (lastPosition || [0])[0],
      y = action.y - (lastPosition || [0, 0])[1];
    return lastEnd && lastEnd + allowed.doubleTime > event.timeStamp &&
      lastPosition && Math.sqrt(x * x + y * y) < allowed.shortMove ?
        "double " :
        "single ";
  }
  x = action.x - previous.startX, y = action.y - previous.startY;
  var both = previous.state.split(" "), click = both[0] || "single";
  /** is how the interactions evolves after start short|long|move|longmove */
  var hold = both[1] || "";
  var move = hold.slice(-4) === "move",
    longer = hold.slice(0, 4) === "long" || !move &&
      event.timeStamp > action.startTimeStamp + allowed.shortTime;
  // TODO: use of state.pixelRatio sounds like it could improve experience
  move = move || Math.sqrt(x * x + y * y) > allowed.shortMove;
  return click + " " +
    ((longer ? "long" : "") + (move ? "move" : "") || "short");
};
/** updates by mutating, or just mutates to create given Actions instance
 * @param {Actions|null} action @param {number} index
 * @param {Actions.State} state @param {ActionsEvent} event
 * @param {Actions|null} previous @param {Touch} [touch] */
Actions.update = function (action, index, state, event, previous, touch) {
  if (!action)
    throw new TypeError("action undefined at Actions.update");
  // the order of updating properties is depended by previous === action
  var source = touch || (event instanceof TouchEvent ?
    Actions.default :
    event);
  var offset = state.root instanceof HTMLElement ?
    state.root :
    {offsetLeft: 0, offsetTop: 0};
  var previousX = previous ? previous.screenX : NaN,
    previousY = previous ? previous.screenY : NaN;
  action.type = event.type;
  action.event = event;
  action.identifier = touch ? touch.identifier : NaN;
  action.index = index;
  action.altKey = event.altKey;
  action.ctrlKey = event.ctrlKey;
  action.metaKey = event.metaKey;
  action.shiftKey = event.shiftKey;
  action.buttons = source instanceof Touch ? 0 : source.buttons;
  action.oldTimeStamp =
    previous ? previous.timeStamp : event.timeStamp;
  action.timeStamp = event.timeStamp;
  action.startTimeStamp =
    previous ? previous.startTimeStamp : event.timeStamp;
  action.target = event.target;
  action.startTarget = previous ? previous.startTarget : event.target;
  action.pageX = source.pageX;
  action.pageY = source.pageY;
  action.clientX = source.clientX;
  action.clientY = source.clientY;
  action.screenX = source.screenX;
  action.screenY = source.screenY;
  action.force = touch ? touch.force : 1;
  action.radiusX = touch ? touch.radiusX : 1;
  action.radiusX = touch ? touch.radiusY : 1;
  action.movementX = previous ? action.screenX - previousX : 0;
  action.movementY = previous ? action.screenY - previousY : 0;
  previousX = previous ? previous.x : NaN;
  previousY = previous ? previous.y : NaN;
  action.x = (source.pageX - offset.offsetLeft) * pR;
  action.y = (source.pageY - offset.offsetTop) * pR;
  action.startX = previous ? previous.startX : action.x;
  action.startY = previous ? previous.startY : action.y;
  // in case of mutable version previous === action, old x, y need variables
  action.moveX = previous ? action.x - previousX : 0;
  action.moveY = previous ? action.y - previousY : 0;
  action.state = Actions.updateState(action, event, state, previous);
  return action;
};
/**
 * @param {Actions.State} state @param {AllActions["all"]} all
 * @param {ActionsEvent} ev */
Actions.touchGrab = function (state, all, ev) {
  var touch0 = all[0], touch1 = all[1];
  ev.cancelable && ev.preventDefault();
  if (!touch0 && touch1)
    touch0 = touch1;
  else if (!touch1 && touch0)
    touch1 = touch0;
  else if (!touch0 || !touch1)
    return console.error("touchGrab error");
  var canvas = state.target instanceof HTMLCanvasElement ?
    state.target :
    {width: window.innerWidth, height: window.innerHeight};
  var x0 = touch0.moveX, y0 = touch0.moveY;
  var x1 = touch1.moveX, y1 = touch1.moveY;
  if (state.grabAction.slice(0, 4) === "move") {
    var n = state.grabAction === "moveorzoom" ? 4 : 2;
    vX += (x0 + x1) / n;
    vY += (y0 + y1) / n;
  }
  if (state.grabAction.slice(-4) === "zoom") {
    test_debug && console.log("ontouch zoom");
    var prev = sc, w = canvas.width / 2, h = canvas.height / 2;
    sc +=
      ((touch0.pageX > touch1.pageX ? x0 - x1 : x1 - x0) +
      (touch0.pageY > touch1.pageY ? y0 - y1 : y1 - y0) || 0) *
        sc / (474 << +(state.grabAction === "moveorzoom"));
    vX = (vX - w) * sc / prev + w;
    vY = (vY - h) * sc / prev + h;
    // TODO: starting with "moveorzoom" is supposed to detect either
    // zooming in/out or movement, It did it very stubbornly though
    if (state.grabAction === "moveorzoom")
      ++state.grabCount > 4 ?
        state.grabAction =
          Math.abs(state.grabScore) > state.touch.shortMove / 2 ?
            state.grabScore > 0 ? "move" : "zoom" :
        "movezoom" :
      state.grabScore += Math.abs(x0 + x1 + y0 + y1) -
        Math.abs(x0 - x1 + y0 - y1) * 2;
  }
  render();
};
/** @param {EventTarget} root @param {ActionsOptions} options */
Actions.init = function (root, options) {
  if (!(root instanceof EventTarget))
    throw new TypeError("root is not instanceof EventTarget");
  var immutable = "immutable" in options && options.immutable,
    listeners = "listeners" in options ? options.listeners : null;
  /** @type {number[]} */
  var identifiers = [];
  /** @type {(Actions|null)[]} */
  var temp = [];
  /** @type {(Actions|null)[]&{count:number}} */
  var all = function () {
    /** @type {(Actions|null)[]&{count:number}} *///@ts-expect-error
    var arr = [];
    arr.count = 0;
    arr[-1] = null;
    arr[-2] = null;
    return arr;
  }();
  /** contains all touches + outdated ones for reusing the same object
   * over @type {(Actions|null)[]} */
  var mutable = [];
  /** @type {AllActions} @throws source.source is null *///@ts-expect-error
  var source =
    Object.seal({all: all, changed: temp, source: null});
  /** @TODO to be implemented managing user assigned Actions err listeners
   * @type {((ev,i,all,idx)=>void|boolean)[]} */
  var errorHandlers = [F, F, F, F];

  var state = new Actions.State(options);
  state.root = root;
  for (var p in options)
    delete options[p];
  var canvas = state.target instanceof HTMLCanvasElement ?
    state.target :
    {width: window.innerWidth, height: window.innerHeight};

  /** starts claim event it's own way, returns true if not prevented
   * @param {ActionsEvent} ev @param {string} claim @returns claimed */
  function dispatchClaim(ev, claim) {
    claim.length !== 4 &&
      console.warn("internal claims must have name lenght of 4!");
    /** alternative to this was constructing Actions.State with
     * this.grabAction = "movezoom" */
    var initial = state.claim;
    state.onclaim(source.source.x, source.source.y, Object.freeze({
      changed: temp,
      all: all,
      source: source.source,
      claim: claim,
      cancelable: true,
      preventClaim: function (custom) {
        state.claim = (typeof custom == "string" ?
          custom.length !== 4 && custom :
          state.claim !== initial && state.claim) || "custom";
      }
    }));
    state.claim === initial ? state.claim = claim : 0;
    return state.claim === claim;
  }
  /**
   * @param {keyof HTMLElementEventMap|"mousewheel"} type
   * @param {ActionsHandler} handler @param {EventTarget} [target] */
  function addEvent(type, handler, target) {
    /** @type {EventListener} *///@ts-expect-error
    var eventHandler = handler;
    if (state.wheelException && type === "wheel" && state.target) {
      (listeners || (listeners = {})).passive = false;
      state.target.addEventListener("wheel", eventHandler, listeners);
      return handler;
    }
    if (type.slice(0, 5) === "touch" && state.preventTarget)
      target = state.preventTarget;
    target = target || root;
    listeners ?
      target.addEventListener(type, eventHandler, listeners) :
      target["on" + type] = handler;
    return handler;
  }
  addEvent("touchstart", function (ev) {
    if (!(ev instanceof TouchEvent))
      throw new TypeError("not TouchEvent for touchstart handler");
    var action = temp[-9];
    for (var i = 0, changed = ev.changedTouches; i < changed.length; i++) {
      var touch = changed[i], j = identifiers.indexOf(touch.identifier);
      if (j >= 0) {
        if (errorHandlers[0] && errorHandlers[0](ev, i, all, j))
          continue;
        console.error("assigning touch");
        // continues existing identifier index
      } else
        // otherwise find it a new index
        for (j = 0; all[j] !== null && j < all.length;)
          j++;
      identifiers[j] = touch.identifier;
      all[j] = temp[j] = immutable ?
        Object.freeze(new Actions(ev, j, state, null, touch)) :
        mutable[j] ?
          Actions.update(mutable[j], j, state, ev, null, touch) :
          mutable[j] = new Actions(ev, j, state, null, touch);
      action ? 0 : source.source = (action = temp[j]) || source.source;
      for (j = all.count = 0; j < all.length;)
        all.count += +!!all[j++];
    }
    // #tstart beggining of created touches handling
    if (state.grabCount === 0)
      state.grabTime = Date.now();
    if (state.claim === "move" || state.claim === "unclaimed")
      if (
        all.length > 1 && all[0] && all[1] &&
        Date.now() < state.grabTime + state.touch.shortTime &&
        all[0].startTarget === state.target &&
        all[1].target === state.target
      ) {
        // ev.cancelable && ev.preventDefault();
        state.claim = "grab";
        state.grabAction = "movezoom";
        state.grabCount = 0;
        Actions.touchGrab(state, all, ev);
      }
    action ?
      !(state.filterClaimed && state.claim.length === 4) &&
        !(state.touchIndex0 && action.index !== 0) &&
        state.onstart(action.x, action.y, source) :
      console.error("very strange error, action is null0");
    Actions.log(temp, ev, "srt", state, source);
    state.grabCount = all.count;
    // end of touches handling
    for (j = temp.length = all.length; j-- > 0;)
      temp[j] = null;
  });
  addEvent("touchmove", function (ev) {
    if (!(ev instanceof TouchEvent))
      throw new TypeError("not TouchEvent for touchmove handler");
    var action = temp[-9];
    for (var i = 0, changed = ev.changedTouches; i < changed.length; i++) {
      var touch = changed[i], j = identifiers.indexOf(touch.identifier);
      if (j < 0) {
        if (errorHandlers[1] && errorHandlers[1](ev, i, all, -1))
          continue;
        console.error("adding touch");
        // find it a new index
        for (j = 0; all[j] !== null && j < all.length;)
          j++;
        identifiers[j] = touch.identifier;
      }
      // otherwise continues existing identifier index
      source.source = all[j] = temp[j] = immutable ?
        Object.freeze(new Actions(ev, j, state, all[j], touch)) :
        mutable[j] ?
          Actions.update(mutable[j], j, state, ev, all[j], touch) :
          mutable[j] = new Actions(ev, j, state, all[j], touch);
      action ? 0 : source.source = (action = temp[j]) || source.source;
      for (j = all.count = 0; j < all.length;)
        all.count += +!!all[j++];
    }
    // #tmove beggining of updated touches handling
    if (state.claim === "grab")
      (all[0] || all[1]) && Actions.touchGrab(state, all, ev);
    else if (
      source.source.state === "single move" &&
      state.claim === "unclaimed"
    ) {
      if (dispatchClaim(ev, "grab"))
        state.grabAction = "movezoom";
    }
    action ?
      !(state.filterClaimed && state.claim.length === 4) &&
        !(state.touchIndex0 && action.index !== 0) &&
        state.onmove(action.x, action.y, source) :
      console.error("very strange error, action is null1");
    Actions.log(temp, ev, "mov", state, source);
    // end of touches handling
    for (j = temp.length = all.length; j-- > 0;)
      temp[j] = null;
  });
  addEvent("touchend", addEvent("touchcancel", function (ev) {
    if (!(ev instanceof TouchEvent))
      throw new TypeError("not TouchEvent for touchend handler");
    var action = temp[-9];
    for (var i = 0, changed = ev.changedTouches; i < changed.length; i++) {
      var touch = changed[i], j = identifiers.indexOf(touch.identifier);
      if (j < 0) {
        if (!(errorHandlers[2] && errorHandlers[2](ev, i, all, -1)))
          continue;
        console.error("adding ghost/instant touch");
      }
      identifiers[j] = -1;
      temp[j] = immutable ?
        Object.freeze(new Actions(ev, j, state, all[j], touch)) :
        mutable[j] ?
          Actions.update(mutable[j], j, state, ev, all[j], touch) :
          mutable[j] = new Actions(ev, j, state, all[j], touch);
      action ? 0 : source.source = (action = temp[j]) || source.source;
      all[j] = null;
      for (j = all.length - 1; j >= 0 && !all[j]; j--)
        all.length--;
      for (j = all.count = 0; j < all.length;)
        all.count += +!!all[j++];
    }
    // #tend beggining of removed/canceled touches handling
    if (state.claim === "grab")
      (all[0] || all[1]) && Actions.touchGrab(state, all, ev);
    action ?
      !(state.filterClaimed && state.claim.length === 4) &&
        !(state.touchIndex0 && action.index !== 0) &&
        state.onend(action.x, action.y, source) :
      console.error("very strange error, action is null2");
    Actions.log(temp, ev, "end", state, source);
    // end of touches handling
    for (j = temp.length; j-- > 0; temp[j] = null)
      if (action = temp[j]) {
        state.endTimeStamps[j] = action.timeStamp;
        state.endPositions[j] = [action.x, action.y];
      }
    if ((state.grabCount = temp.length = all.length) === 0)
      state.claim = "unclaimed";
  }));
  addEvent("mousedown", addEvent("mouseenter", function (ev) {
    var action = all[-1] = source.source = immutable ?
      Object.freeze(new Actions(ev, -1, state, null)) :
      mutable[-1] ?
        Actions.update(mutable[-1], -1, state, ev, null) :
        mutable[-1] = new Actions(ev, -1, state, null);
    // #mstart beggining of mouse action
    if (action.type === "mouseenter" && action.buttons === 0)
      state.claim = "unclaimed";
    action ?
      !(state.filterClaimed && state.claim.length === 4) &&
        !(state.mouseButton && action.buttons !== 1) &&
        state.onstart(action.x, action.y, source) :
      console.error("very strange error, action is null3");
    state.endButtons = action.buttons;
    Actions.log(temp, ev, "dwn", state, source);
  }));
  addEvent("mousemove", function (ev) {
    var action = all[-1] = source.source = immutable ?
      Object.freeze(new Actions(ev, -1, state, all[-1])) :
      mutable[-1] ?
        Actions.update(mutable[-1], -1, state, ev, all[-1]) :
        mutable[-1] = new Actions(ev, -1, state, all[-1]);
    // #mmove beggining of mouse action
    if (
      source.source.state === "single move" &&
      state.claim === "unclaimed" && action.buttons === 1
    ) {
      dispatchClaim(ev, "move");
    } else if (state.claim === "unclaimed" && action.buttons === 4)
      state.claim = "move";
    if (state.claim === "move" && (action.buttons & 5)) {
      vX += action.moveX;
      vY += action.moveY;
      render();
    }
    action ?
      !(state.filterClaimed && state.claim.length === 4) &&
        !(state.mouseButton && action.buttons !== 1) &&
        state.onmove(action.x, action.y, source) :
      console.error("very strange error, action is null4");
    state.endButtons = action.buttons;
    Actions.log(temp, ev, "hvr", state, source);
  });
  addEvent("mouseup", addEvent("mouseleave", function (ev) {
    var action = all[-1] = source.source = immutable ?
      Object.freeze(new Actions(ev, -1, state, all[-1])) :
      mutable[-1] ?
        Actions.update(mutable[-1], -1, state, ev, all[-1]) :
        mutable[-1] = new Actions(ev, -1, state, all[-1]);
    // #mmove beggining of mouse action
    action ?
      !(state.filterClaimed && state.claim.length === 4) &&
        !(state.mouseButton && state.endButtons !== 1) &&
        state.onend(action.x, action.y, source) :
      console.error("very strange error, action is null5");
    state.endButtons = action.buttons;
    Actions.log(temp, ev, " up", state, source);
    // end of mouse handling
    if (action.buttons === 0)
      if (action.type !== "mouseleave" || state.claim !== "move")
        state.claim = "unclaimed";
  }));
  addEvent("onwheel" in root ? "wheel" : "mousewheel", function (ev) {
    if (!(ev instanceof WheelEvent) && !(ev instanceof MouseWheelEvent))
      throw new TypeError("not WheelEvent for wheel handler");
    if (ev.target !== state.target && state.target)
      return;
    test_debug &&
      console.log("onwheel t [dY|wD] sc ...[]=", +new Date / 10 | 0,
        ("deltaY" in ev ? ev.deltaY : -ev.wheelDelta) || 0, sc,
        ["X Y Z Mode X Y ".split(" ").map(function (e, i) {
          var key = (i > 3 ? "wheelDelta" : "delta") + e;
          return key in ev ? ev[key] : "";
        }).concat(window.devicePixelRatio)]);
    // detects Edge and IE11 scrolly/zooomy(lol) scroll
    // why? well... there's no F-ing js standard for touch/trackpads
    if ("wheelDelta" in ev) {
      var x = "wheelDeltaX" in ev ? ev.wheelDeltaX : UDF;
      if (!x && state.wheelScore < 32) {
        var delta = -ev.wheelDelta;
      } else {
        state.wheelScore = 32;
        var y = "wheelDeltaY" in ev ? ev.wheelDeltaY : UDF;
        vX += state.wheelOffset *
          (typeof x == "number" ? x || 0 : ev.deltaX ? +ev.deltaX : 0);
        vY += state.wheelOffset *
          (typeof y == "number" ? y || 0 : ev.deltaY ? +ev.deltaY : 0);
        return render();
      }
      if (state.wheelScore > 31 && ev instanceof WheelEvent)
        ev.cancelable && ev.preventDefault();
    } else
      delta = ev.deltaY;
    var canvas = state.target instanceof HTMLCanvasElement ?
      state.target :
      {width: window.innerWidth, height: window.innerHeight};
    var lastSc = sc, w = canvas.width / 2, h = canvas.height / 2;
    var delay = Date.now() - state.wheelTime;
    if (delay < 32) {
      sc -= sc * (delta && (delta > 0 ? 1 : -1)) / state.wheelDelta *
        delay / 32;
    } else
      sc -= sc * (delta && (delta > 0 ? 1 : -1)) / state.wheelDelta;
    state.wheelTime = Date.now();
    vX = (vX - w) * sc / lastSc + w;
    vY = (vY - h) * sc / lastSc + h;
    render();
  });
  addEvent("contextmenu", function (e) {
    for (var el = e.target; el instanceof Node;)
      if (!(el = el.parentNode))
        return;
      else if (el === state.preventTarget)
        break;
    if (!(e instanceof MouseEvent))
      return;
    var offset = state.root instanceof HTMLElement ?
      state.root :
      {offsetLeft: 0, offsetTop: 0};
    var x = (e.pageX - offset.offsetLeft) * pR,
      y = (e.pageY - offset.offsetTop) * pR;
    contextmenu(x, y, e);
  }, window);

  state.preventTarget && !(listeners && listeners.passive === false) &&
    console.log("jiuhus" + root.addEventListener("touchstart", F, {
      passive: false
    }));
  state.resize = function resizeWindow() {
    // TODO: change debug to log someday
    // or just add console.debug to alphalunar.js and remove the TODO?
    console.debug("%cresizing", "color:#58f");
    var w = window.innerWidth * pR,
      h = window.innerHeight * pR;
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
  "onresize" in window && !window.onresize ?
    window.onresize = state.resize :
    window.addEventListener("resize", state.resize);

  return state.generateAccessors(function () {
    throw new Error("Unimplemented");
  });
};
/** @param {ActionsOptions} options */
Actions.State = function (options) {
  /**
   * @template {keyof ActionsOptions} T @param {T} setting
   * @param {ActionsOptions[T]} fallback @returns {ActionsOptions[T]} */
  function checkOptions(setting, fallback) {
    return setting in options ? options[setting] : fallback;
  }
  /** vX, vY, sc, pR globals aen't getting removed yet */
  this.x = 0;
  /** vY */
  this.y = 0;
  /** sc */
  this.scale = 16;
  /** fX */
  this.fromX = 0;
  /** fY */
  this.fromY = 0;
  /** gX */
  this.grabX = 0;
  /** gY */
  this.grabY = 0;
  /** pR customisable @see {window.devicePixelRatio} */
  this.pixelRatio = 1;
  this.onstart = options.start || F;
  this.onmove = options.move || F;
  this.onend = options.end || F;
  this.oncancel = options.end || F;
  this.onclaim = options.claim || F;
  this.resize = function () {
    /** @type {(this:GlobalEventHandlers,ev:any)=>void} */
    (window.onresize).call(window,{});
  };
  /** @type {EventTarget} the element that gets events assigned */
  this.root = EL("unknown");
  /** @deprecated gesture "<single|double> <short|long|move|longmove>" */
  this.state = " ";
  /** so far only for one/two finger moving around "move"/"grab",
   * "custom" means the actons are in use outside API, "unclaimed"
   * !as an experiment string length 4 means it's claimed by API! */
  this.claim = "unclaimed";
  /** the top canvas element used for display of the editor,
   * detects all elements if null @type {EventTarget|null}
   * is responsible for preventing grab through elements above canvas */
  this.target = options.target || null;
  /** @type {(number|undefined)[]} previous end timeStamps per index */
  this.endTimeStamps = [];
  /** previous end positions per action index
   * @type {([number,number]|undefined)[]} */
  this.endPositions = [];
  /** stores the last Date.now() of active touches */
  this.grabTime = 0;
  this.grabCount = 0;
  /** "grab" properies refer to Actions.touchGrab, this is its mode */
  this.grabAction = "";
  this.grabScore = 0;
  this.endButtons = 0;
  /** stores the last Date.now() of (mouse)wheel event */
  this.wheelTime = 0;
  /** after reaching score of 32 touch/trackpad is detected */
  this.wheelScore = 0;

  this.touch = new Actions.State.Allowed(350, 13, 300);
  this.mouse = new Actions.State.Allowed(350, 2, 300);
  this.other = new Actions.State.Allowed(350, 9, 300);
  /** multiplier for scroll wheel's 120 per tick or sum of deltas */
  this.wheelDelta = 8;
  /** multiplier for touchpad move */
  this.wheelOffset = 1;
  /** filters out all actions "claimed by the API experiment" */
  this.filterClaimed = checkOptions("filterClaimed", true);
  /** filters out all actions that don't have all[0] as source.source */
  this.touchIndex0 = checkOptions("touchIndex0", true);
  /** filters out all actions that aren't left mouse button only */
  this.mouseButton = checkOptions("mouseButton", this.touchIndex0);
  /** onwheel and onmousewheel root exception because passive scrolling */
  this.wheelException = checkOptions("wheelException", true);
  /** lucky magic with main#8 element, prevents touchscreen zoom/scroll */
  this.preventTarget = checkOptions("preventTarget", null);
  Object.seal(this);
};
/** @this {Actions.State} @param {typeof F} destroy */
Actions.State.prototype.generateAccessors = function (destroy) {
  /**
   * @type {{get:<K extends keyof Actions.State>(key:K)=>Actions.State[K],
   * set:<K extends keyof Actions.State>(key:K,value:Actions.State[K])=>void,
   * keys:()=>(keyof Actions.State)[],destroy:typeof F}}
   */
  var accessors = {
    get: function (key) {
      return self[key];
    },
    set: function (key, value) {
      self[key] = value;
    },
    keys: function () {
      /** @type {(keyof Actions.State)[]} */
      var keys = [], p = keys[0];
      for (p in self)
        if (Object.prototype.hasOwnProperty.call(self, p))
          keys.push(p);
      return keys;
    },
    destroy: destroy
  }, self = this;
    return Object.freeze(accessors);
};
/** @param {number} time @param {number} move @param {number} doubleTime */
Actions.State.Allowed = function (time, move, doubleTime) {
  /** allowed time for active (started) action to get state...short" */
  this.shortTime = time;
  /** allowed distance for active action to get state "...short" */
  this.shortMove = move;
  /** allowed time between actions to get state "double..." */
  this.doubleTime = doubleTime;
  /** not used yet */
  this.doubleMove = -1;
  Object.seal(this);
};
Actions.State.Allowed.prototype.toString = function () {
  return "st:" + this.shortTime + "sm:" + this.shortMove + "dt:" +
    this.doubleTime + "dm:" + this.doubleMove + ";";
};
Actions.logX = 0;
Actions.logY = 0;
Actions.logMax = 32;
/** spaghetti Actions debugging utility
 * @param {(Actions|null)[]} tem typeof temp @param {ActionsEvent} evt
 * @param {string} typ @param {Actions.State} stat @param {AllActions} src */
Actions.log = function (tem, evt, typ, stat, src) {
  //for (var i = tem.length, obj; i-- > 0;)
  //  if (obj = tem[i])
  //    test_log.push({i: i, l: obj.identifier, x: obj.x, y: obj.y});
  var max = 16;
  //, alias = JSON.parse("{x:vX,y:vY,}".replace(/:/g, ':"').replace(/,/g, '",');
  //Actions.logMax-- > 0 && console.log
  (evt);
  //console.log
  (typ + " " + tem.map(function (e) {
    return e instanceof Actions ? "t" : e === null ? "_" : "" + e;
  }).join(","));
  //Actions.logMax-- < 1 &&
  //typ !== "end" &&
  /** list full actions with all properies */
  (1) || tem.forEach(function (e) {
    if (!e)
      return;
    var s = "TouchEnd[";
    for (var p in e)
      if (e.hasOwnProperty(p))
        s += p + ":" + (typeof e[p])[0] + "=" + (e[p] instanceof Object ?
          Object.getPrototypeOf(e[p]).constructor.name :
          "" + e[p]) + " ";
    console.log(s + "state.endTimeStamp:n=" +
      juhus.get("endTimeStamps") + "]");
  });
  /** live log into evil_input */
  var action = tem[0], inpLog =
    //action ? action.movementX + " " + action.movementY : "";
    action ? action.state + " " + juhus.get('claim') + " " +
      src.all.count + '(state+claim+temp.count)\n' : "";
    //action ? JSON.stringify(action.state) + (action.timeStamp | 0) + '\n' : "";
    //JSON.stringify(stat.endPositions);
  //if (Actions.logLivevil && action && "evil_input" in window) {
  //  var input = window.evil_input;
  //  (input instanceof HTMLInputElement ||
  //    input instanceof HTMLTextAreaElement ?
  //    input : EL("input")).value = inpLog;
  //}
  Actions.logX = src.source.x;
  Actions.logY = src.source.y;
};
//utilities.rend_UI = function () {
//  for (var i = test_log.length; i-- > 0;) {
//    ctx.beginPath();
//    ctx.strokeStyle = "#" + "f55 5f5 55f ff0 f0f 0ff".split(" ")[test_log[i].i || 0];
//    ctx.moveTo(test_log[i].x + 64, test_log[i].y);
//    ctx.arc(test_log[i].x, test_log[i].y, 64, 0, Math.PI * 2);
//    ctx.stroke();
//    ctx.beginPath();
//    ctx.strokeStyle = "#" + "f55 5f5 55f ff0 f0f 0ff".split(" ")[test_log[i].l || 0];
//    ctx.moveTo(test_log[i].x + 60, test_log[i].y);
//    ctx.arc(test_log[i].x, test_log[i].y, 60, 0, Math.PI * 2);
//    ctx.stroke();
//  }
//  test_log.length = 0;
//};
Actions.logLivevil = true;
Actions.logImmutable = (Date.now() / (24 * 3600 * 1000)) % 2 < 1;
console.log((Actions.logImmutable ? "Imm" : "M") + "utable today!");
var juhus = Actions.init(document, {
  target: canvas,
  immutable: Actions.logImmutable,
  filterClaimed: true,
  touchIndex0: true,
  preventTarget: bd
});
// v.0.2.16 for acode stuff

(document.body || EL()).onload = initDoc;
function initDoc() {
  /** also called first touch, used to initiate fullscreen */
  window.ontouchend = function () {
    touchdevice && touchdevice();
  };
  +function (info, clickHandler) {
    info ?
      info.onclick = clickHandler :
      clickHandler();
  }(GE("info"),
    /** @this {GlobalEventHandlers|void} @param {MouseEvent} [e] */
    function (e) {
      document.body.classList.remove("scroll");
      this instanceof Node && document.body.removeChild(this);
      e && touchdevice && touchdevice(true);
    }
  );

  init();

  juhus.get("resize")();
};
