// v.0.1.64T1
/// <reference path="../editor.html.ts" />
/** Definitons of Property item structs for code.js */
interface Slider {
  min: number;
  max: number;
  default: number[];
}
interface IntegerSlider {
  min: number;
  max: number;
  default: number[];
}
interface Dropdown {
  options: string[];
  default: number[];
}
interface NumberInputs {
  default: number[];
}
interface TextInputs {
  default: string[];
}
interface WeldGroups {
  idx: number;
  default: number[] | number[][];
}
interface ItemTs {
  "Slider": Slider;
  "Integer Slider": IntegerSlider;
  "Dropdown": Dropdown;
  "Number Inputs": NumberInputs;
  "Text Inputs": TextInputs;
  "WeldGroups": WeldGroups;
}
