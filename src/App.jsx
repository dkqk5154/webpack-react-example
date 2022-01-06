import React, { useState } from "react";
import styled from "styled-components";
import Button from "./components/common/Button";

const Styled = {
  Wrapper: styled.div`
    display: flex;
    gap: 12px;
    flex-direction: column;
    border: 1px solid black;
    padding: 1rem;
    align-items: center;
    justify-content: center;
  `,
};

const App = () => {
  const [count, setCount] = useState(0);

  const handleClickButton = (e) => {
    e.preventDefault();
    setCount((prevState) => prevState + 1);
  };

  return (
    <Styled.Wrapper>
      <div>Hello, webpack! </div>
      <Button onClick={handleClickButton}>클릭 버튼 카운터 {count}</Button>
    </Styled.Wrapper>
  );
};

export default App;
