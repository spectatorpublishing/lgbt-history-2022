import React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import NavBar from '../components/NavBar';
import MobileNavBar from '../components/MobileNavBar';

const Section = ({articles, header}) => {

    return(
        <main>
            {window.innerWidth <= 768 ? <MobileNavBar/> : <NavBar/>}
            <div>{header}</div>
        </main>
    );
};

export default Section;

const Mobile = styled.div`
    display: flex;
    @media (min-width: 769px) {
        display: none;
    }
`;

const Desktop = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
`;