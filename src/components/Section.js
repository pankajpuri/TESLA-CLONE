import React from "react";
import styled from "styled-components";

import Fade from "react-reveal/Fade";
import arrow from "./assests/images/downarrow.svg";
function Section({
    title,
    description,
    leftBtnText,
    rightBtnText,
    backgroundImg,
}) {
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
                <Button>
                    <ButtonGroup>
                        <LeftButton>{leftBtnText}</LeftButton>
                        {rightBtnText && (
                            <RightButton>{rightBtnText}</RightButton>
                        )}
                    </ButtonGroup>
                    <DownArrow
                        src={arrow}
                        style={{ height: "10px", width: "10px" }}
                    />
                </Button>
            </Fade>
        </Wrap>
    );
}

export default Section;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${(props) => `url("${props.bgImage}")`};
    display: flex;
    flex-direction: column;
    justify-content: space-between; // vertical
    align-items: center; // horizontal
`;
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const Button = styled.div``;
const ButtonGroup = styled.div`
    display: flex;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`;
const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: rgba(23, 26, 32, 0.8);
`;

const DownArrow = styled.img`
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`;
