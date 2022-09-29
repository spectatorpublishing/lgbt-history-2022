import React, { useState } from 'react';
import styled from 'styled-components';
import { device } from '../device';
import theme from '../theme';

const Title = styled.div`
    font-size: ${props => props.open ? '3rem' : '4rem'};
    font-weight: bold;
    color: white;
    margin: 4rem;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    position: relative;
    float: right;
    display: flex;
    align-self: center;
`;

const Container = styled.div`
    background-color: lavender;
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

const Red = styled.div`
    background-color: ${props => props.open ? theme.colors.saturatedRed : theme.colors.lightRed};
    height: auto;
    width: ${props => props.open ? '50%' : 'auto'};
    flex-grow: 1;
    &:hover {
        background-color: ${theme.colors.saturatedRed};
    }
`;

const Orange = styled.div`
    background-color: ${props => props.open ? theme.colors.saturatedOrange : theme.colors.lightOrange};
    height: auto;
    width: ${props => props.open ? '50%' : 'auto'};
    flex-grow: 1;
    &:hover {
        background-color: ${theme.colors.saturatedOrange};
    }
`;

const Yellow = styled.div`
    background-color: ${props => props.open ? theme.colors.saturatedYellow : theme.colors.lightYellow};
    height: auto;
    width: ${props => props.open ? '50%' : 'auto'};
    flex-grow: 1;
    &:hover {
        background-color: ${theme.colors.saturatedYellow};
    }
`;


const Green = styled.div`
    background-color: ${props => props.open ? theme.colors.saturatedGreen : theme.colors.lightGreen};
    height: auto;
    width: ${props => props.open ? '50%' : 'auto'};
    flex-grow:1;
    &:hover {
        background-color: ${theme.colors.saturatedGreen};
    }
`;

const Blue = styled.div`
    background-color: ${props => props.open ? theme.colors.saturatedBlue : theme.colors.lightBlue};
    height: auto;
    width: ${props => props.open ? '50%' : 'auto'};
    flex-grow: 1;
    &:hover {
        background-color: ${theme.colors.saturatedBlue};
    }
`;

const Purple = styled.div`
    background-color: ${props => props.open ? theme.colors.saturatedPurple : theme.colors.lightPurple};
    height: auto;
    width: ${props => props.open ? '50%' : 'auto'};
    flex-grow: 1;
    &:hover {
        background-color: ${theme.colors.saturatedPurple};
    }
`;

const Rainbow = ({ }) => {
    const [ currentOpen, setCurrentOpen ] = useState(-1);

return (
    <Container>
        <Flag>
            {currentOpen === 1 
                ? <Red open onClick={() => setCurrentOpen(-1)}><Title open>News</Title></Red> 
                : <Red onClick={() => setCurrentOpen(1)}><Title>News</Title></Red>}
            {currentOpen === 2 
                ? <Orange open onClick={() => setCurrentOpen(-1)}><Title open>Opinion</Title></Orange> 
                : <Orange onClick={() => setCurrentOpen(2)}><Title>Opinion</Title></Orange>}
            {currentOpen === 3 
                ? <Yellow open onClick={() => setCurrentOpen(-1)}><Title open>Sports</Title></Yellow> 
                : <Yellow onClick={() => setCurrentOpen(3)}><Title>Sports</Title></Yellow>}
            {currentOpen === 4 
                ? <Green open onClick={() => setCurrentOpen(-1)}><Title open>Arts</Title></Green> 
                : <Green onClick={() => setCurrentOpen(4)}><Title>Arts</Title></Green>}
            {currentOpen === 5 
                ? <Blue open onClick={() => setCurrentOpen(-1)}><Title open>Entertainment</Title></Blue> 
                : <Blue onClick={() => setCurrentOpen(5)}><Title>Entertainment</Title></Blue>}
            {currentOpen === 6 
                ? <Purple open onClick={() => setCurrentOpen(-1)}><Title open>The Eye</Title></Purple> 
                : <Purple onClick={() => setCurrentOpen(6)}><Title>The Eye</Title></Purple>}
        </Flag>
    </Container>
)};

export default Rainbow;