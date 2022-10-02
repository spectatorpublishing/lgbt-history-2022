import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import { device } from '../device';
import LetterEditor from '../components/LetterEditor';
import Credits from '../components/Credits';
import theme from '../theme';
import NavBar from '../components/NavBar';
import MobileNavBar from '../components/MobileNavBar';
import Rainbow from '../components/Rainbow';
import Progress from '../components/Progress';

const HomeContainer = styled.div`
    font-family: 'Josefin Sans', sans-serif;
    @media only screen and (max-width: 768px){
    }
`;

const Illustration = styled.div`
    display: flex;
    background-color: lightgray;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 768px){
    }
`;

const Home = ({ }) => {
    const rainbowRef = useRef(null);
    const [id, setId] = useState(-1)

    const executeScroll = () => {
        return rainbowRef?.current?.scrollIntoView({ behavior: 'smooth' });
    }

    const changeColor = (color) => {
        return console.log(color)
    }

    return (
        <HomeContainer>
            {window.innerWidth <= 768 ? <MobileNavBar/> : <NavBar handleClick={executeScroll} changeColor={changeColor}/>}
            <Illustration>Illustration goes here (scroll down for more)</Illustration>
            <Progress/>
            <LetterEditor/>
            <div ref={rainbowRef} id={id} setId={setId}>
                <Rainbow/>
            </div>
            <Credits/>
        </HomeContainer>
    )
};

export default Home;