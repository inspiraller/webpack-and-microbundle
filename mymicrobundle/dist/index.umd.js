(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
  typeof define === 'function' && define.amd ? define(['react'], factory) :
  (global = global || self, global.mymicrobundle = factory(global.react));
})(this, (function (React) {
  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  const MyMicroBundle = _ref => {
    let {
      session
    } = _ref;
    return /*#__PURE__*/React__default["default"].createElement("div", {
      id: "microbundle"
    }, "Session = ", session);
  };

  return MyMicroBundle;

}));
//# sourceMappingURL=index.umd.js.map
