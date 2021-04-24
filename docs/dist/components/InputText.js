import React from "../../_snowpack/pkg/react.js";
const callWithEventTargetValue = (callback) => (e) => callback(e.target.value);
const InputText = ({onChange}) => /* @__PURE__ */ React.createElement("textarea", {
  style: {fontFamily: "SBL BibLit", direction: "rtl", minHeight: "16rem"},
  className: "w-full min-h-full bg-gray-100 outline-none text-3xl ",
  onChange: callWithEventTargetValue(onChange),
  defaultValue: ""
});
export default InputText;
