import React, {useState} from "../_snowpack/pkg/react.js";
import {remove, transliterate} from "../_snowpack/pkg/hebrew-transliteration.js";
import Header from "./components/Header.js";
import SettingsBar from "./components/SettingsBar.js";
import InputText from "./components/InputText.js";
import CopyButton from "./components/CopyButton.js";
import TransformationTypes from "./transformationTypes.js";
const getOutputValue = ({text, transformationType, handleQametzQatan}) => {
  switch (transformationType) {
    case TransformationTypes.REMOVE_ACCENTS:
      return remove(text, {removeVowels: false, removeShinDot: false, removeSinDot: false});
      break;
    case TransformationTypes.REMOVE_ALL_POINTING:
      return remove(text, {removeVowels: true, removeShinDot: true, removeSinDot: true});
      break;
    case TransformationTypes.TRANSLITERATE:
      if (handleQametzQatan) {
        return transliterate(text, {qametsQatan: true});
      }
      return transliterate(text);
      break;
    default:
      console.error("Unhandled case:", transformationType);
      throw "we don't handle all cases";
  }
};
const App = () => {
  const [textState, setTextState] = useState("");
  const [transformationType, setTransformationType] = useState(TransformationTypes.REMOVE_ACCENTS);
  const [handleQametzQatan, setHandleQametzQatan] = useState(true);
  const output = getOutputValue({text: textState, transformationType, handleQametzQatan});
  const outputStyles = transformationType !== TransformationTypes.TRANSLITERATE ? {direction: "rtl", fontFamily: "SBL BibLit", fontSize: "1.875rem", lineHeight: "2.25rem"} : {fontSize: "1.5rem", lineHeight: "2rem"};
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col m-4 rounded shadow-lg bg-gray-100 md:mx-8 lg:mx-16"
  }, /* @__PURE__ */ React.createElement(SettingsBar, {
    transformationType,
    setTransformationType,
    handleQametzQatan,
    setHandleQametzQatan
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row rounded-b p-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-1/2 m-3"
  }, /* @__PURE__ */ React.createElement(InputText, {
    onChange: setTextState
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col w-1/2 border-l-2 border-gray-200"
  }, textState ? /* @__PURE__ */ React.createElement("div", {
    className: "flex-1 m-3",
    style: outputStyles
  }, output) : /* @__PURE__ */ React.createElement("div", {
    className: "flex-1 m-4 text-gray-400 text-xl",
    style: {direction: "ltr"}
  }, "Output"), /* @__PURE__ */ React.createElement("div", {
    className: "flex-0-1 flex justify-end"
  }, /* @__PURE__ */ React.createElement(CopyButton, {
    onClick: () => {
      navigator.clipboard.writeText(output);
    }
  }))))));
};
export default App;
