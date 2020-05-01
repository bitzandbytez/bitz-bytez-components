import React from 'react';
import styled from 'styled-components';

let _ = t => t,
    _t;
const Button = styled.button(_t || (_t = _`
  background: royalBlue;
  padding: 1rem 3rem;
  color: #fff;
  margin: 1rem;
  border-radius: 10rem;
  border: none;
  box-sizing: border-box;
  font-size: 1.2rem;
  font-weight: 500;
  box-shadow: 0px 1px 15px #333;
  &:hover {
    background: #fff;
    color: royalBlue;
  }
`));
const ExampleComponent = ({
  text
}) => {
  return /*#__PURE__*/React.createElement(Button, null, text);
};

export { ExampleComponent };
//# sourceMappingURL=index.modern.js.map
