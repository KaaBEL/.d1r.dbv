/// <reference path="Logic.ts" />

type Colors = keyof typeof Data.colors | "" | null;

class Color {
  static VER = "v.0.1.64T11";

  constructor () {
    throw new TypeError("Illegal constructor");
  }

  static colorlessRegexp = new RegExp("Struct|Glass Block|Glass Wedge|Solar \
Block|Solar Panel|Hinge|Piston|Ghost Block|Gauge|Dial|Digital Display|__plac\
eholder(?:84[0-26-9]|85[0-3])__");
  /** object is frost @constant */
  static NAME = Object.freeze(Data.generateNames("colors"));
  /** object is frost @constant */
  static ID = Object.freeze(Data.colors);
  static default = function getColor(name: string) {
    if (/Hydrogen Thruster/.test(name))
      return "Yellow";
    if (/Wheel|Battery|__placeholder84[456]__|Dynamo/.test(name))
      return "Light Gray";
    if (/Weight|Armou?r|Camera Block/.test(name))
      return "Dark Gray";
    if (/Hydrogen Tank/.test(name))
      return "Fuel";
    if (/Drill|Storage Rack/.test(name))
      return "Orange";
    if (/Ion Thruster/.test(name))
      return "Lime"
    if (/__placeholder776__|Afterburner/.test(name))
      return "Red";
    if (Color.colorlessRegexp.test(name))
      return null;
    return "White";
  };
}
