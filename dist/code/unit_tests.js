//@ts-nocheck
/// <reference path="./editor.js" />
"use strict";
/** global version of project when last changes were done */
var version_unit_tests_js = "0.2.49";
/** @TODO rename this file to bug_tests.js */
var utst_ = true;
function BError (message) {
  (utst_consoleError || console.error)(this.message = message);
  debugger;
};
console.log("DevTools bug tests v." + version_unit_tests_js + " start:");
console.time("Timestamp");
console.time("Succesful kinda tests, took");
// TEST: enableLogicEditing //
press = F;
try {
  console.log(Data.dispose());
  ship = Edit.save(Ship.fromObject({}));
  enableLogicEditing();
  if (ship.getMode().mode !== "Logic")
    throw new BError("ship.prop not in correct mode");
  ship.blocks.forEach(function (e) {
    if (!(e instanceof Block && Logic.VALUE[Block.ID[e.internalName]]))
      throw new BError("contains other than logic blocks");
  });
} catch (e) {utst_ =
  console.error("enableLogicEditing:");console.error(e);}
// TEST: enableShipEditing //
press = F;
try {
  enableShipEditing();
  if (ship.getMode().mode !== "Ship")
    throw new BError("did not pass the test");
} catch (e) {utst_ =
  console.error("enableShipEditing:");console.error(e);}
// add testing positions swap and correct ship after moving logic blocks
// TEST: Block.arrayFromObjects //
var utst_consoleWarn = console.warn, utst_arr1 = ["juhus","Item2","Item1"];
try {
  console.warn = function () {
    var str = [].map.call(arguments, String).join("");
    new RegExp(utst_arr1.pop() + "[^]+at: ?0").test(str) ||
      (utst_ = new BError("Unexpected warning(s)!? : " + str));
  };
  Block.arrayFromObjects({"Item1":84,"Item2":83});
  Block.arrayFromObjects({name:"kurczus",position:{0:1,1:3,2:7},juhus:69});
  console.warn = utst_consoleWarn;
  if (Block.NAME[11] !== "cockpit_cruiser")
    throw new BError("Moly Sterakdary why is there wrong Block of ID 11?");
  var utst_arr0 = Block.arrayFromObjects([
    {"n":"NOPE",internalName:"__unknown__",properties:
      {invalidName:"cockpit_cruiser"}
    },{name:"__unknown__",properties:{invalidName:"juhus"}}]);
  if (utst_arr0[0].internalName !== "cockpit_cruiser")
    throw new BError("incorrectly revalidated block name");
  if (utst_arr0[1].internalName === "juhus" && !(Block.ID["juhus"] >= 0))
    throw new BError("incorrectly revalidated invalid name");
  utst_arr0 = Ship.fromObject({b:[{n:"Wedge 1x2",p:[0,-1],f:1,r:3,
    properties:{weldGroup:3}}]}).blocks;
  if (!utst_arr0[0].properties.color)
    throw new BError("block color not defaulted");
  if (JSON.stringify(utst_arr0[0].position) !== "[0,0,-2]")
    throw new BError("incorrectly set db3 block position");
  if (utst_arr0[0].properties.weldGroup !== 3)
    throw new BError("incorrectly assigned weld group");
  if (utst_arr0[0].rotation[2] !== 0)
    throw new BError("incorrectly parsed db3 rotation");
  if (utst_arr0[0].rotation[1] !== false)
    "if not boolean, default to false as for now";
  if (utst_arr1.length)
    utst_ = new BError("Unpresent warning(s) 0x00");
} catch (e) {utst_ =
  console.error("Block.arrayFromObjects:");console.error(e);}
console.warn = utst_consoleWarn;
// TEST: Command.list[].items() //
var utst_i = 0, utst_errorCatcher = function () {
  var str = [].map.call(arguments, function (e) {
    return "" + (e instanceof Error && e.stack || e);
  }).join(""), utst_accepatableErrors = /Import.*Export.*DBV/i.test(
    Command.list[utst_i].name) && new RegExp("SyntaxError: (Unexpected end o\
f JSON input|Syntaktick. chyba)|Error: unexpected end of data|Error: The arr\
ay \"c\" property is required").test(str);
  if (utst_accepatableErrors)
    return console.debug("Acccepted Imp/Exp DBV err: " + arguments[0]);
  if (!utst_arr2.length || !utst_arr2.pop().test(str))
    utst_ = new BError("Unexpected error(s)!? : " + "itemsInit<\""
      + Command.list[utst_i].name + "\">:" + str);
  else
    console.debug("Expected error: " + [].slice.call(arguments).join(" "));
}, utst_fns = [];
function utst_testCommands() {
  for (utst_i = Command.list.length; utst_i-- > 0;) {
    var utst_fn = Command.list[utst_i].items, utst_div = EL();
    console.error = utst_errorCatcher;
    typeof utst_fn == "function" && utst_fn(utst_div);
    for (var utst_j = utst_div.childNodes.length; utst_j-- > 0;) {
      var utst_el0 = utst_div.childNodes[utst_j];
      if (utst_el0 instanceof HTMLLIElement && utst_el0.firstChild)
        utst_el0 = utst_el0.firstChild;
      console.error = utst_errorCatcher;
      if (utst_el0 instanceof HTMLElement &&
        typeof (utst_fn = utst_el0.onclick) == "function")
        utst_fns.push(utst_fn) && utst_fn();
    }
  }
}
var utst_consoleError = console.error, utst_arr2 = [
  // v.0.2.31 for unknown reason err is gone after changes in Ship.checkDBE
  //Error: The array "c" property is required for "wedge" block\./
  /Error: unexpected end of data/,
  /Error: box2d shipGrid is required for safe export/,
  /Error: unexpected end of data/
];
try {
  console.error = utst_errorCatcher;
  utst_testCommands();
  ship = Edit.save(Ship.fromObject(B64Key.decode(
    B64Key.b64ToU8arr("gAALU3RhcnRlclNoaXCAAQBnyR+wATjRE/MIg+/jGIhC4AC4AAgsI\
pEBBBAEDoFSLDKADKAEIFCSGTKAEQAAABClwmuwSAQAIUQIkAEAGAEAACghWoXSoJToICaAFiADA\
HBCYCgRSlIIIQC0ABkAgBMCWIQEEZlkABkAAAAnAAAAEQAACi9AC5ABAAAA4AQAQBVKgBYAQAYAA\
MAJAIA4VBApQAqQAQA4AQAgKwDIAACcAAAARAAAABBoATIAAAAAnAAA2AAQKAFaAAAZAAAAJwAA4\
lABtAAZAAAAJwAAJAUAGQAAACcAAAARAAAKDUALkAEAAADgBABAFU6AFgBABgAAwAkAgDiAAJACZ\
AAATgAAyAsARgAAAECMCo1BIxEAhBAhQAYAYAQAAGCFWBVOg1Oig7gALoAMAMAJsTCcCCcphBAXw\
AWQAQA4IRawCAkiYWQQhUABUAAQaEQiAwBBoBAoxSIDyABKAAIlTviFogQ="))));
  utst_testCommands();
  expensiveRenderer();
  Logic.rend = !1;
  if (utst_arr2.length)
    utst_ = new BError("Unpresent error(s) 0x02", utst_arr2);
} catch (e) {utst_ = (console.error =
  utst_consoleError)("itemsInit<\"" + Command.list[utst_i].name + "\">:");
  console.error(e);
}
console.error = utst_consoleError;
// TEST: Ship.toDBV //
/** @TODO the test for ^ */
// TEST: Ship.fromMSSSS Ship.toMSSSS //
/** @TODO the test for fragile ^ */
// TEST: Edit.historyAt //
try {
  ship = Edit.save(Ship.fromObject({n: "UndoRedoTest", "ls": 0}));
  ship.history = [
    new Edit("Ship.prototype.placeBlock", "[0,0,4,853]", 2),
    new Edit("Edit.undo", "[0]", 3),
    new Edit("Ship.prototype.removeBlocks", "[[3]]", 2),
    new Edit("Ship.prototype.removeBlocks", "[[4]]", 2),
    new Edit("Ship.prototype.removeBlocks", "[[5]]", 2),
    new Edit("Edit.undo", "[0]", 3),
    new Edit("Ship.prototype.removeBlocks", "[[8]]", 2),
    new Edit("Edit.oldUIColor", "[[9],13]", 2),
    new Edit("Edit.oldUIColor", "[[8],13]", 2)
  ];
  Edit.historyAt(ship, 8);
} catch (e) {utst_ =
  console.error("Edit.historyAt:");console.error(e);}
// TEST: Ship.fromObject //
utst_arr1 = ["ControlBlock check1", "ControlBlock check1"];
try {
  console.timeEnd("Timestamp");
  console.warn = function () {
    var str = [].map.call(arguments, String).join("");
    new RegExp(utst_arr1.pop() || "^Unexpected warning!$").test(str) ||
      (utst_ = new BError("Unexpected warning(s)!? : " + str));
  };
  ship = Ship.fromObject(B64Key.decode(B64Key.b64ToU8arr("gIAEDEFOT05fU2h1dH\
RsZQAEXVy0aoC/TzvnFnWt0z4R4pYUZx2CorwBRXLToKjrQJPehCK9CdKboLhB4MUPQVwDhrgGiG\
uAuAaIa4C1XkER14AjrgFBjHHEFUWbA4oxBxTVDSjWu1FsOeBYccQw3YRiywPBlnFsGcGWcTR3YG\
gxji0HODKK5gYEzYXmQnOhrhXKGhDENSCIa0DR5oKjywFFigOOFQcczw0obnxxxDXgqGsSmGvBE1\
uuied3AltbMCw0NSw0NSw2OCwwLDQ1LDAsNDUsMTEzLDcxLDAsNDUsMCw0NSwwLDQ1LDAsNDUsMT\
g0LDY4LDI1Miw2OSwzMjEsNDQsMzIxLDQ0LDMyMSw0NCwzMjEsNDQsMzIxLDQ0LDMyMSw0NCwzMj\
EsNDQsMzIxLDQ0LDM2NSw1OSwzMjEsNDQsNDI0LDcwLDQ5NCw2NCw1NTgsNzAsNjI4LDQ5LDY3Ny\
w2Miw3MzksNTYsNzk1LDY3LDg2Miw2Miw5MjQsNjIsOTg2LDYyLDEwNDgsNjIsMTExMCw2NSwxMT\
c1LDU5LDEyMzQsNjIsMTI5Niw2MiwxMzU4LDY1LDE0MjMsNjUsMTQ4OCw2NSwxNTUzLDY1LDE2MT\
gsNDQsMzIxLDQ0LDMyMSw0NCwzMjEsNDQsMTY2Miw3MCwxNzMyLDYyLDE3OTQsMzksMTgzMyw1Ni\
wxODg5LDY2LDE5NTUsNjEsMzIxLDQ0LDMyMSw0NCwzMjEsNDQsMzIxLDQ0XSwie1wiY29sb3JcIj\
pcIk9yYW5nZVwiLFwiY29udHJvbFwiOltdLFwid2VsZEdyb3VwXCI6MH17XCJjb2xvclwiOlwiRG\
FyayBHcmF5XCIsXCJjb250cm9sXCI6WzExMjVdLFwibm9kZUluZGV4XCI6WzNdLFwid2VsZEdyb3\
VwXCI6MH17XCJjb2xvclwiOlwiRGFyayBHcmF5XCIsXCJjb250cm9sXCI6WzE4MDAwXSxcIm5vZG\
VJbmRleFwiOlsyLDFdLFwid2VsZEdyb3VwXCI6MH17XCJjb2xvclwiOlwiRGFyayBHcmF5XCIsXC\
Jjb250cm9sXCI6WzExMjVdLFwibm9kZUluZGV4XCI6WzRdLFwid2VsZEdyb3VwXCI6MH17XCJjb2\
xvclwiOlwiV2hpdGVcIixcImNvbnRyb2xcIjpbWzAsMCwwLDBdXSxcIm5vZGVJbmRleFwiOls1XS\
xcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcIjpcIldoaXRlXCIsXCJjb250cm9sXCI6W10sXCJ3ZW\
xkR3JvdXBcIjowfXtcImNvbG9yXCI6XCJcIixcImNvbnRyb2xcIjpbMSwwXSxcIm5vZGVJbmRleF\
wiOlszNF0sXCJ3ZWxkR3JvdXBcIjowfXtcImNvbG9yXCI6XCJXaGl0ZVwiLFwiY29udHJvbFwiOl\
tdLFwibm9kZUluZGV4XCI6WzIzLDIyLDIxLDIwXSxcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcIj\
pcIldoaXRlXCIsXCJjb250cm9sXCI6W10sXCJub2RlSW5kZXhcIjpbMTksMThdLFwid2VsZEdyb3\
VwXCI6MH17XCJjb2xvclwiOlwiTGlnaHQgR3JheVwiLFwiY29udHJvbFwiOls3NTAwXSxcIm5vZG\
VJbmRleFwiOlsyNF0sXCJ3ZWxkR3JvdXBcIjowfXtcImNvbG9yXCI6XCJMaWdodCBHcmF5XCIsXC\
Jjb250cm9sXCI6W10sXCJ3ZWxkR3JvdXBcIjowfXtcImNvbG9yXCI6XCJXaGl0ZVwiLFwiY29udH\
JvbFwiOlswXSxcIm5vZGVJbmRleFwiOlsxN10sXCJ3ZWxkR3JvdXBcIjowfXtcImNvbG9yXCI6XC\
JcIixcImNvbnRyb2xcIjpbXSxcIm5vZGVJbmRleFwiOlsxMV0sXCJ3ZWxkR3JvdXBcIjowfXtcIm\
NvbG9yXCI6XCJXaGl0ZVwiLFwiY29udHJvbFwiOlsyNzAwMF0sXCJub2RlSW5kZXhcIjpbNyw2XS\
xcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcIjpcIkJsYWNrXCIsXCJjb250cm9sXCI6WzBdLFwibm\
9kZUluZGV4XCI6WzM3XSxcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcIjpcIkJsYWNrXCIsXCJjb2\
50cm9sXCI6WzBdLFwibm9kZUluZGV4XCI6WzM2XSxcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcIj\
pcIkJsYWNrXCIsXCJjb250cm9sXCI6WzBdLFwibm9kZUluZGV4XCI6WzM4XSxcIndlbGRHcm91cF\
wiOjB9e1wiY29sb3JcIjpcIldoaXRlXCIsXCJjb250cm9sXCI6WzBdLFwibm9kZUluZGV4XCI6Wz\
M1XSxcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcIjpcIldoaXRlXCIsXCJjb250cm9sXCI6WzExMj\
VdLFwibm9kZUluZGV4XCI6WzMxXSxcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcIjpcIlwiLFwiY2\
9udHJvbFwiOlsxLDBdLFwibm9kZUluZGV4XCI6WzMzXSxcIndlbGRHcm91cFwiOjB9e1wiY29sb3\
JcIjpcIldoaXRlXCIsXCJjb250cm9sXCI6WzBdLFwibm9kZUluZGV4XCI6WzMyXSxcIndlbGRHcm\
91cFwiOjB9e1wiY29sb3JcIjpcIldoaXRlXCIsXCJjb250cm9sXCI6WzBdLFwibm9kZUluZGV4XC\
I6WzI1XSxcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcIjpcIldoaXRlXCIsXCJjb250cm9sXCI6Wz\
ExMjVdLFwibm9kZUluZGV4XCI6WzI3XSxcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcIjpcIldoaX\
RlXCIsXCJjb250cm9sXCI6WzExMjVdLFwibm9kZUluZGV4XCI6WzMwXSxcIndlbGRHcm91cFwiOj\
B9e1wiY29sb3JcIjpcIldoaXRlXCIsXCJjb250cm9sXCI6WzExMjVdLFwibm9kZUluZGV4XCI6Wz\
I4XSxcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcIjpcIldoaXRlXCIsXCJjb250cm9sXCI6WzExMj\
VdLFwibm9kZUluZGV4XCI6WzI5XSxcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcIjpcIkJsYWNrXC\
IsXCJjb250cm9sXCI6W10sXCJ3ZWxkR3JvdXBcIjowfXtcImNvbG9yXCI6XCJXaGl0ZVwiLFwiY2\
9udHJvbFwiOltdLFwibm9kZUluZGV4XCI6WzE2LDE1LDE0LDEzXSxcIndlbGRHcm91cFwiOjB9e1\
wiY29sb3JcIjpcIldoaXRlXCIsXCJjb250cm9sXCI6WzBdLFwibm9kZUluZGV4XCI6WzEyXSxcIn\
dlbGRHcm91cFwiOjB9e1wiY29sb3JcIjpcIlwiLFwiY29udHJvbFwiOltdLFwid2VsZEdyb3VwXC\
I6MH17XCJjb2xvclwiOlwiXCIsXCJjb250cm9sXCI6W10sXCJub2RlSW5kZXhcIjpbMTBdLFwid2\
VsZEdyb3VwXCI6MH17XCJjb2xvclwiOlwiV2hpdGVcIixcImNvbnRyb2xcIjpbNDUwMF0sXCJub2\
RlSW5kZXhcIjpbOSw4XSxcIndlbGRHcm91cFwiOjB9e1wiY29sb3JcIjpcIldoaXRlXCIsXCJjb2\
50cm9sXCI6W10sXCJub2RlSW5kZXhcIjpbMjZdLFwid2VsZEdyb3VwXCI6MH0iXQ==".replace(
  / /g, ""))));
  Edit.applyCommand(Edit.save(ship), ship.fixPositionAdjustment, !0);
  enableLogicEditing();
  enableShipEditing();
  if (
    Ship.fromObject(JSON.parse(JSON.stringify(ship))).blocks.map(
    function (e) {
      var s = e.internalName;
      return s.slice(0, 2) + s.slice(-4, -2) + (+Block.ID[s]).toString(36);
    }) + "" === 'Smo 1je,Tinstki,Bloloj7,SmaTaky,Medstkk,Smo 1je,LarTal0,Lar\
Tal0,LarTal0,Tinstki,Sepatlz,SlaSljc,SlaSljc,SlaSljc,SlaSljc,SlaSljc,Wed 1j9\
,SlaSljc,SlaSljc,Pisstm0,SlaSljc,Numhbmu,GPSnsmp,Reahekq,Smatel1,Conmbml,Sma\
anlx,Larstkp,Conmbml,Conmbml,Conmbml,Conmbml,Tinstkm,Hininly,Conmbml,Conlomb\
,Tinstkm,Tinstkm,Tinstkm,Tinstkm,Smo 1je,CorCoj6,SlaSljc,SlaSljc,Numhbmu,Spe\
nsmm,Sollolw,Smaanlx,Smastkn,DocDom3,SlaSljc,Smo 1je,Smornjd'
  ) {
    throw new BError("incorrect block types");
  }
  if (utst_arr1.length)
    utst_ = new BError("Unpresent warning(s) 0x01");
} catch (e) {utst_ =
  console.error("Ship.fromObject:");console.error(e);}
console.warn = utst_consoleWarn;
// TEST: Bin.wMsbfBits, Bin.rMsbfBits //
B64Key.buffer = new Uint8Array(256);
B64Key.i = B64Key.j = 0;
var utst_arr3 = [], utst_rng = Edit.randSFC32(6969);
for (var utst_1; utst_arr3.length < 220;) {
  utst_1 = utst_rng() * 31 + 2 | 0;
  utst_arr3.push(utst_1, utst_rng() * 0xffffffff >>> 32 - utst_1);
}
utst_arr3.push("mid");
for (utst_1 = 220; utst_1-- > 0; utst_1--)
  utst_arr3.push(Bin.wMsbfBits(B64Key, utst_arr3[utst_1 - 1],
    utst_arr3[utst_1]));
B64Key.i = B64Key.j = 0;
for (utst_1 = 220; utst_1-- > 0; utst_1--)
  if (utst_arr3[utst_1] !==
    (utst_rng = Bin.rMsbfBits(B64Key, utst_arr3[utst_1 - 1])))
    throw new BError("Not functional Bin.r/wMsbfBits at:" + utst_1);
[
  B64Key.i + " " + B64Key.j + "/" + B64Key.buffer.length
].concat(utst_arr3.map(function (e, i) {
  return i & 1 ? "0x" + e.toString(16) : e
}));
// TEST: Color.ID //
function utst_compactNumbers(numArray) {
  for (var i = 0, string = ""; i < numArray.length; i++) {
    if (numArray[i] === -1) {
      string += "$";
      continue;
    }
    var s = "" + numArray[i];
    if (("" + +s) !== s) {
      string += "!";
      continue;
    }
    string += String.fromCharCode(s.charCodeAt(0) + 17) + s.slice(1);
  }
  return string;
}
var utst_arr4 = [];
for (var utst_p in Block.NAME) {
  var utst_color = Color.getDefault(Block.NAME[utst_p]);
  // utst_arr4.push(Block.NAME[utst_p], utst_color);
  utst_arr4.push(+utst_p, +utst_color !== utst_color ?
    -1 : Color.ID[utst_color]);
}
if (utst_compactNumbers(utst_arr4) !== "AABACADAEAFAGAHAIAJAB0AB1AD2AD3AD4AD\
5AD6AD7AD8AD9AE0AE1AE2AE3AE4AE5AE6AE7AE8AE9AF0AF1AF2AF11AG90AG91AG92AG93AG94\
AG95AG96AG97AG98AG99AH00$H01$H02$H03AH38EH39EH40EH41EH42B3H43B3H44B3H45B3H46\
BH54B5H55B5H56B5H57BH58CH59BH60FH61FH62FH70FH71AH72AH73AH74AH75AH76GH86CH87C\
H88$H89$H90$H91AH92$H93CH94$H95AH96AH98AH99AI02AI03AI04AI05AI06AI07AI08AI09A\
I10AI11AI12AI13AI14AI15AI16AI17AI18AI19AI20AI21AI22AI23AI24AI25$I26$I27$I28A\
I34AI35AI36AI37AI38AI39AI40$I41$I42$I43AI44BI45BI46BI47$I48$I49$I50$I51$I52$\
I53$I54AI55AI56AI57AJ69AB023AB025AB026CB027AB028AB029CB030$B033AB034EB035GB0\
36B3B037BB038EB039B5B040HB043AB044AB045AB046AB047AB048AB049FB050FB051C6B052!\
B053AB054$B055$B058AB060AB281$B282$B283$B284$B285$B286$B287$B288$B289$B290$B\
291$B292$B293CB294$B295$B296BB297BB298$B299$B300$B301$B302BB303$B304$B305$B3\
06CB307CB308CB309CB311$B314$B315$B316$B317$B322$B323$B324$B325$B326$B327$B32\
8$B329$B330$B331$B334$B335$B336$B338$B339$B340$B341$B342$B344$B345$B394$B395\
$B426$B427$B428$B429$B430$B431$B432$B433$B434$B435$B436$B437$B438$B439$B440$\
B441BB442BB443$B444$B458$B459$B460$B461$B462$B490$B491$B492$B493$B494$B495$B\
496$B522CB523CB524CB525CB526CB527CB528CB529CB530CB531CB532CB533CB534CB535CB5\
36CB537CB538$B539$B554$B555$B556$B557$B558$B559$B560$B561$B586$B587$B588$B58\
9$B590$B591$B592$B593$B594BB595$B596$B597$B598$B599$B600$B601FB618FB619FB620\
FB621$B622$B623$B624$B625$B626$B627$B628$B629$B630$B631$B632$B633$B634$B635$\
B636$B637$B638$B650$B651$B652$B653$B654$B655$B656$B657$B658$B659$B660$B661$B\
662$B663$B664$B665$B666$B667$B668$B682$B683$B684$B685$B686$B687$B688$B689$B6\
90CB691CB692CB693CB694CB695CB696CB697CB698CB699CB700CB701CB702CB703CB704CB70\
5CB706CB707CB708CB709CB710CB711CB712CB713CB714CB715CB716CB717CB718CB719CB720\
CB721CB722CB723CB724CB725CB726CB727CB728CB729CB730CB731CB732CB733CB734CB735C\
B736$B737$B738$B739$B740$B741$B742$B743$B744$B745$B746$B747$B748$B749$B750$B\
751$B752$B753$B754$B755$B756$B757$B758$B759$B760$B761$B762$B763$B764CB765CB7\
66CB767CB768CB769C_aNA")
  console.warn("Color.ID is not the same as v.0.48.1");
// END OF TESTS //
// TEST: DefaultUI.reflowBlockBars DefaultUI.getSelectedTile ideas
// - set inventory items to custom default items
// - set slected tile and opened folder, reflow blockbars
// - check if getSelectedTIle returns correct type
if (utst_)
  console.timeEnd("Succesful kinda tests, took");
else {
  console.groupCollapsed("Unsuccessful bug testing!");
  console.error("NOT...");
  console.timeEnd("Succesful kinda tests, took");
  console.groupEnd();
  // optionally platform that can't log new Error nicely should be detected
  if (!"initial solution")
    new BError("Unsuccessful indeed!");
  else
    console.error(new Error("Unsuccessful indeed!"));
}
