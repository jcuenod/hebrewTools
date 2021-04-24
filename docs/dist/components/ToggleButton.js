import React, {useState} from "../../_snowpack/pkg/react.js";
const callWithEventTargetChecked = (callback) => (e) => {
  console.log(e);
  callback(e.target.checked);
};
const checkedStyles = "absolute block w-4 h-4 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out bg-blue-500 transform translate-x-full";
const uncheckedStyles = "absolute block w-4 h-4 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out bg-gray-100";
const ToggleButton = ({text, checked, onChange}) => /* @__PURE__ */ React.createElement("label", {
  for: "toggle",
  class: "flex flex-row content-center cursor-pointer"
}, /* @__PURE__ */ React.createElement("span", {
  class: "relative"
}, /* @__PURE__ */ React.createElement("span", {
  class: "block w-10 h-6 bg-gray-200 rounded-full shadow-inner"
}), /* @__PURE__ */ React.createElement("span", {
  class: checked ? checkedStyles : uncheckedStyles
}, /* @__PURE__ */ React.createElement("input", {
  id: "toggle",
  type: "checkbox",
  class: "absolute opacity-0 w-0 h-0",
  checked,
  onChange: callWithEventTargetChecked(onChange)
}))), /* @__PURE__ */ React.createElement("span", {
  class: "flex items-center ml-3 text-sm select-none font-bold " + (checked ? "text-gray-500" : "text-gray-400")
}, text));
export default ToggleButton;
