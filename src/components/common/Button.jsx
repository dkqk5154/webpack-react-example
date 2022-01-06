import React from "react";
import styled from "styled-components";

const Styled = {
  Button: styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #338eff;
    padding: 8px 12px;
    border-radius: 6px;
    color: white;
    border: 0px;
    outline: none;
  `,
};

const Button = ({ children, onClick }) => {
  return <Styled.Button onClick={onClick}>{children}</Styled.Button>;
};

export default Button;
