import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Button from "components/common/Button";
import { testFunction } from "test";
import Logo from "images/logo.svg";

const rotateAnimation = keyframes`
    from {transform : rotate(0deg)}
    to { transform : rotate(360deg)}
`;

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
    LogoWrapper: styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
    `,
    Logo: styled(Logo)`
        width: 100px;
        animation : ${rotateAnimation}  infinite 3s linear ;
    `,
    PngLogo: styled.img`
        width: 160px;
        animation : ${rotateAnimation}  infinite 2s linear ;
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
            <Styled.LogoWrapper>
                {/* <Styled.PngLogo src={require('images/logo2.png').default} /> */}
                <Styled.Logo />
            </Styled.LogoWrapper>

            <div>Hello, webpack! {testFunction(3, 2)} </div>
            <Button onClick={handleClickButton}>클릭 버튼 카운터 {count}</Button>
        </Styled.Wrapper>
    );
};

export default App;
