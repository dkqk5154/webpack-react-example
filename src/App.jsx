import React from "react";
import styled from "styled-components";

const Styled = {
  Wrapper: styled.div`
    display: flex;
    border: 1px solid black;
    padding: 1rem;
    align-items: center;
    justify-content: center;
  `,
};

const App = () => <Styled.Wrapper>Hello, webpack!</Styled.Wrapper>;

export default App;
