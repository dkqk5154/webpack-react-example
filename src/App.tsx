import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Button from "components/common/Button";
import { testFunction } from "test";
// import { ReactComponent as Logo } from "images/logo.svg";

const Styled = {
    Wrapper: styled.div`
        display: flex;
        gap: 12px;
        flex-direction: column;
        padding: 1rem;
        align-items: center;
        justify-content: center;
        font-size : 22px;
    `,
    Logo: styled.img`
        width: 180px;
        height : 120px;
        animation : ${() => keyframes`
            from {transform : rotate(0deg)}
            to { transform : rotate(360deg)}
        `}  infinite 3s linear ;
    `
};

const App = () => {
    const [count, setCount] = useState(0);

    const handleClickButton = (e: any) => {
        e.preventDefault();
        setCount((prevState) => prevState + 1);
    };

    return (
        <Styled.Wrapper>
            <Styled.Logo src={require("images/logo2.png").default} />
            <div>Hello, webpack! {testFunction(3, 2)} </div>
            <Button onClick={handleClickButton}>클릭 버튼 카운터 {count}</Button>
        </Styled.Wrapper>
    );
};

export default App;
