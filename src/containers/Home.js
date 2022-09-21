import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import LetterEditor from '../components/LetterEditor';
import Credits from '../components/Credits';
import theme from '../theme';
import NavBar from '../components/NavBar';
import MobileNavBar from '../components/MobileNavBar';
import Rainbow from '../components/Rainbow';

const HomeContainer = styled.div`
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
    return (
        <HomeContainer>
            {window.innerWidth <= 768 ? <MobileNavBar/> : <NavBar/>}
            <Illustration>Illustration goes here (scroll down for more)</Illustration>
            <LetterEditor/>
            <Rainbow/>
            <Credits/>
        </HomeContainer>
    )
};

export default Home;