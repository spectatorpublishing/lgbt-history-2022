import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import theme from '../theme';

const Title = styled.div`
    font-size: 2rem;
    font-weight: bold;
`;

const Container = styled.div`
    background-color: lavender;
    height: 15rem;
    @media only screen and (max-width: 768px){
    }
`;

const Rainbow = ({ }) => {
    return (
        <Container>
            <Title>
                Rainbow
            </Title>
        </Container>
    )
};

export default Rainbow;