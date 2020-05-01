import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
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
`;

export const ExampleComponent = ({ text }) => {
  return <Button>{text}</Button>
}
