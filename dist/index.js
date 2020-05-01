function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = _interopDefault(require('styled-components'));

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  background: royalBlue;\n  padding: 1rem 3rem;\n  color: #fff;\n  margin: 1rem;\n  border-radius: 10rem;\n  border: none;\n  box-sizing: border-box;\n  font-size: 1.2rem;\n  font-weight: 500;\n  box-shadow: 0px 1px 15px #333;\n  &:hover {\n    background: #fff;\n    color: royalBlue;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Button = styled.button(_templateObject());
var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React.createElement(Button, null, text);
};

exports.ExampleComponent = ExampleComponent;
//# sourceMappingURL=index.js.map
