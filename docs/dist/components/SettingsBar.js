import React, {useState} from "../../_snowpack/pkg/react.js";
import TransformationTypes from "../transformationTypes.js";
import ToggleButton from "./ToggleButton.js";
const transformationButtonStyles = `
  m-2
  px-2
  py-1
  border-b-2
  text-sm
  font-bold
  outline-none
`;
const selectedTransformationButtonStyles = transformationButtonStyles + `
  text-blue-500
  border-blue-500
  hover:text-blue-600
  hover:border-blue-600
`;
const deselectedTransformationButtonStyles = transformationButtonStyles + `
  text-gray-400
  border-gray-400
  hover:text-gray-600
  hover:border-gray-600
`;
const SettingsBar = ({transformationType, setTransformationType, handleQametzQatan, setHandleQametzQatan}) => /* @__PURE__ */ React.createElement("div", {
  className: "flex flex-row p-2 rounded-t border-b-2 border-gray-200"
}, /* @__PURE__ */ React.createElement("button", {
  className: transformationType === TransformationTypes.REMOVE_ACCENTS ? selectedTransformationButtonStyles : deselectedTransformationButtonStyles,
  onClick: () => setTransformationType(TransformationTypes.REMOVE_ACCENTS)
}, "REMOVE ACCENTS"), /* @__PURE__ */ React.createElement("button", {
  className: transformationType === TransformationTypes.REMOVE_ALL_POINTING ? selectedTransformationButtonStyles : deselectedTransformationButtonStyles,
  onClick: () => setTransformationType(TransformationTypes.REMOVE_ALL_POINTING)
}, "REMOVE POINTING"), /* @__PURE__ */ React.createElement("button", {
  className: transformationType === TransformationTypes.TRANSLITERATE ? selectedTransformationButtonStyles : deselectedTransformationButtonStyles,
  onClick: () => setTransformationType(TransformationTypes.TRANSLITERATE)
}, "TRANSLITERATE"), /* @__PURE__ */ React.createElement("div", {
  className: "px-2 py-1 flex flex-col justify-center",
  style: {opacity: transformationType === TransformationTypes.TRANSLITERATE ? 1 : 0}
}, /* @__PURE__ */ React.createElement(ToggleButton, {
  checked: handleQametzQatan,
  onChange: setHandleQametzQatan,
  text: "Qametz Qatan"
})));
export default SettingsBar;
