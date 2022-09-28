import React, { useState } from 'react';
import styled from 'styled-components';
import { device } from '../device';
import theme from '../theme';

const TitleClosed = styled.div`
    font-size: 4rem;
    font-weight: bold;
    font-family: 'Josefin-sans', sans-serif; 
    color: white;
    margin: 2rem;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    position: relative;
    float: right;
    display: flex;
    // justify-content: center;
    align-self: center;
`;

const TitleOpen = styled.div`
    font-size: 3rem;
    font-weight: bold;
    font-family: 'Josefin-sans', sans-serif; 
    color: white;
    margin: 2rem;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    position: relative;
    float: right;
`

const Container = styled.div`
    background-color: lavender;
    // height: 120vh;
    display: flex;
    @media only screen and (max-width: 768px){
    }   
`;

const Flag = styled.div`
    background-clip: content-box;
    margin: 2rem;
    flex-direction: row;
    display: flex;
    height: 120vh;
    width: 100%;
`;

const RedClosed = styled.div`
    background-color: ${theme.colors.lightRed};
    // overflow: hidden;
    height: auto;
    width: auto;
    flex-grow: 1;
    &:hover {
        background-color: ${theme.colors.saturatedRed};
    }
`;

const RedOpen = styled.div`
    background-color: ${theme.colors.saturatedRed};
    // overflow: hidden;
    height: auto;
    width: 50%;
    flex-grow: 1;
`;

const OrangeClosed = styled.div`
    background-color: ${theme.colors.lightOrange};
    height: auto;
    width: auto;
    flex-grow: 1;
    &:hover {
        background-color: ${theme.colors.saturatedOrange};
    }
`;

const OrangeOpen = styled.div`
    background-color: ${theme.colors.saturatedOrange};
    height: auto;
    width: 50%;
    flex-grow: 1;
`;

const YellowClosed = styled.div`
    background-color: ${theme.colors.lightYellow};
    height: auto;
    width: auto;
    flex-grow: 1;
    &:hover {
        background-color: ${theme.colors.saturatedYellow};
    }
`;

const YellowOpen = styled.div`
    background-color: ${theme.colors.saturatedYellow};
    height: auto;
    width: 50%;
    flex-grow: 1;

`;

const GreenClosed = styled.div`
    background-color: ${theme.colors.lightGreen};
    height: auto;
    width: auto;
    flex-grow:1;
    &:hover {
        background-color: ${theme.colors.saturatedGreen};
    }
`;

const GreenOpen = styled.div`
    background-color: ${theme.colors.saturatedGreen};
    height: auto;
    width: 50%;
    flex-grow: 1;
`;

const BlueClosed = styled.div`
    background-color: ${theme.colors.lightBlue};
    height: auto;
    width: auto;
    flex-grow: 1;
    &:hover {
        background-color: ${theme.colors.saturatedBlue};
    }
`;
const BlueOpen = styled.div`
    background-color: ${theme.colors.saturatedBlue};
    height: auto;
    width: 50%;
    flex-grow: 1;
`;

const PurpleClosed = styled.div`
    background-color: ${theme.colors.lightPurple};
    height: auto;
    width: auto;
    flex-grow: 1;
    &:hover {
        background-color: ${theme.colors.saturatedPurple};
    }
`;

const PurpleOpen = styled.div`
    background-color: ${theme.colors.saturatedPurple};
    height: auto;
    width: 50%;
    flex-grow: 1;
`;

const Rainbow = ({ }) => {
    const [ currentOpen, setCurrentOpen ] = useState(-1);

return (
    <Container>
        <Flag>
            {currentOpen === 1 
                ? <RedOpen onClick={() => setCurrentOpen(-1)}><TitleOpen>News</TitleOpen></RedOpen> 
                : <RedClosed onClick={() => setCurrentOpen(1)}><TitleClosed>News</TitleClosed></RedClosed>}
            {currentOpen === 2 
                ? <OrangeOpen onClick={() => setCurrentOpen(-1)}><TitleOpen>Opinion</TitleOpen></OrangeOpen> 
                : <OrangeClosed onClick={() => setCurrentOpen(2)}><TitleClosed>Opinion</TitleClosed></OrangeClosed>}
            {currentOpen === 3 
                ? <YellowOpen onClick={() => setCurrentOpen(-1)}><TitleOpen>Sports</TitleOpen></YellowOpen> 
                : <YellowClosed onClick={() => setCurrentOpen(3)}><TitleClosed>Sports</TitleClosed></YellowClosed>}
            {currentOpen === 4 
                ? <GreenOpen onClick={() => setCurrentOpen(-1)}><TitleOpen>Arts</TitleOpen></GreenOpen> 
                : <GreenClosed onClick={() => setCurrentOpen(4)}><TitleClosed>Arts</TitleClosed></GreenClosed>}
            {currentOpen === 5 
                ? <BlueOpen onClick={() => setCurrentOpen(-1)}><TitleOpen>Entertainment</TitleOpen></BlueOpen> 
                : <BlueClosed onClick={() => setCurrentOpen(5)}><TitleClosed>Entertainment</TitleClosed></BlueClosed>}
            {currentOpen === 6 
                ? <PurpleOpen onClick={() => setCurrentOpen(-1)}><TitleOpen>The Eye</TitleOpen></PurpleOpen> 
                : <PurpleClosed onClick={() => setCurrentOpen(6)}><TitleClosed>The Eye</TitleClosed></PurpleClosed>}
        </Flag>
    </Container>
)};

export default Rainbow;