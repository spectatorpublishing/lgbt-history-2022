import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import theme from '../theme';

const Container = styled.div`
    background-color: lightblue;
    height: 15rem;
    @media only screen and (max-width: 768px){
    }
`;

const LetterEditor = ({ }) => {
    return (
        <Container>
            LetterEditor
        </Container>
    )
};

export default LetterEditor;