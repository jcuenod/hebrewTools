import React from "../../_snowpack/pkg/react.js";
const Link = ({url, children}) => /* @__PURE__ */ React.createElement("a", {
  className: "mx-1 text-blue-500 border-b-2 font-bold hover:text-blue-600 hover:border-blue-600",
  href: url
}, children);
const Footer = () => /* @__PURE__ */ React.createElement("div", {
  className: "flex flex-row p-1 mt-2 justify-center bg-gray-200 text-sm text-gray-900"
}, "Made with ♥ by ", /* @__PURE__ */ React.createElement(Link, {
  url: "https://jcuenod.github.io/"
}, "James Cuénod"), ". Want to contribute:", /* @__PURE__ */ React.createElement(Link, {
  url: "https://github.com/jcuenod/hebrewTools"
}, "code"), "/", /* @__PURE__ */ React.createElement(Link, {
  url: "https://donorbox.org/support-parabible"
}, "love"));
export default Footer;
