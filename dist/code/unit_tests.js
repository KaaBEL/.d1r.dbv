//@ts-nocheck
/// <reference path="./editor.js" />
"use strict";
/** global version of project when last changes were done */
var version_unit_tests_js = "0.2.25";
/** @TODO rename this file to bug_tests.js */
var utst_ = true;
function BError (message) {
  console.error(this.message = message);
  debugger;
};
console.log("DevTools bug tests v." + version_unit_tests_js + " start:");
console.time("Timestamp");
console.time("Succesful kinda tests, took");
// TEST: enableLogicEditing //
press = F;
try {
  ship = Ship.fromObject({});
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
    var str = [].map.call(arguments, String).join("");
    if (!utst_arr2.length || !utst_arr2.pop().test(str))
      utst_ = new BError("Unexpected error(s)!? : " + str);
    else
      console.debug("Expected error: " + str);
  };
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
      utst_el0 instanceof HTMLElement &&
        typeof (utst_fn = utst_el0.onclick) == "function" && utst_fn();
    }
  }
}
var utst_consoleError = console.error, utst_arr2 = [
  /Error: The array "c" property is required for "wedge" block\./,
  /SyntaxError: (Unexpected end of JSON input|Syntaktick. chyba)/,
  /SyntaxError: (Unexpected end of JSON input|Syntaktick. chyba)/,
  /Error: unexpected end of data/,
  /Error: Can do only \.DBV grids for now :\(/,
  /SyntaxError: (Unexpected end of JSON input|Syntaktick. chyba)/,
  /SyntaxError: (Unexpected end of JSON input|Syntaktick. chyba)/,
  /Error: unexpected end of data/
];
try {
  console.error = utst_errorCatcher;
  utst_testCommands();
  ship = Ship.fromObject(B64Key.decode(
    B64Key.b64ToU8arr("gAALU3RhcnRlclNoaXCAAQBnyR+wATjRE/MIg+/jGIhC4AC4AAgsI\
pEBBBAEDoFSLDKADKAEIFCSGTKAEQAAABClwmuwSAQAIUQIkAEAGAEAACghWoXSoJToICaAFiADA\
HBCYCgRSlIIIQC0ABkAgBMCWIQEEZlkABkAAAAnAAAAEQAACi9AC5ABAAAA4AQAQBVKgBYAQAYAA\
MAJAIA4VBApQAqQAQA4AQAgKwDIAACcAAAARAAAABBoATIAAAAAnAAA2AAQKAFaAAAZAAAAJwAA4\
lABtAAZAAAAJwAAJAUAGQAAACcAAAARAAAKDUALkAEAAADgBABAFU6AFgBABgAAwAkAgDiAAJACZ\
AAATgAAyAsARgAAAECMCo1BIxEAhBAhQAYAYAQAAGCFWBVOg1Oig7gALoAMAMAJsTCcCCcphBAXw\
AWQAQA4IRawCAkiYWQQhUABUAAQaEQiAwBBoBAoxSIDyABKAAIlTviFogQ=")));
  utst_testCommands();
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
// TEST: Edit.historyAt //
try {
  ship = Ship.fromObject({n: "UndoRedoTest", "ls": 0});
  ship.history = [
    new Edit(Ship.prototype.placeBlock, "[0,0,4,853]", 2),
    new Edit(Edit.undo, "[0]", 3),
    new Edit(Ship.prototype.removeBlocks, "[[3]]", 2),
    new Edit(Ship.prototype.removeBlocks, "[[4]]", 2),
    new Edit(Ship.prototype.removeBlocks, "[[5]]", 2),
    new Edit(Edit.undo, "[0]", 3),
    new Edit(Ship.prototype.removeBlocks,"[[8]]", 2),
    new Edit(Edit.oldUIColor,"[[9],13]", 2),
    new Edit(Edit.oldUIColor,"[[8],13]", 2)
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
  ship.fixPositionAdjustment(!0);
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
