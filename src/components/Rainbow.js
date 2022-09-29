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

const Modal = styled.div`
    display: flex;
    flex-grow: 1;
    width: ${props => props.open ? '50%' : 'auto'};
`;

const Color = styled.div`
    background-color: ${props => props.open ? props.saturated : props.color};
    height: auto;
    flex-grow: 1;
    &:hover {
        background-color: ${props => props.saturated};
    }
`;

const Stripe = ({ open, color, saturated, title }) => {
    return (
        <Color open={open} color={color} saturated={saturated}>
            <Title>{title}</Title>
        </Color>
    )
}

export const stripes = [
    {
        "index": 1,
        "title": "News",
        "color": theme.colors.lightRed,
        "saturated": theme.colors.saturatedRed,
    },
    {
        "index": 2,
        "title": "Opinion",
        "color": theme.colors.lightOrange,
        "saturated": theme.colors.saturatedOrange,
    },
    {
        "index": 3,
        "title": "Sports",
        "color": theme.colors.lightYellow,
        "saturated": theme.colors.saturatedYellow,
    },
    {
        "index": 4,
        "title": "A&E",
        "color": theme.colors.lightGreen,
        "saturated": theme.colors.saturatedGreen,
    },
    {
        "index": 5,
        "title": "The Eye",
        "color": theme.colors.lightBlue,
        "saturated": theme.colors.saturatedBlue,
    },
    {
        "index": 6,
        "title": "Spectrum",
        "color": theme.colors.lightPurple,
        "saturated": theme.colors.saturatedPurple,
    },
];

const Rainbow = ({ }) => {
    const [currentOpen, setCurrentOpen] = useState(-1);

    const isOpen = (number) => {
        return currentOpen === number;
    }

    return (
        <Container>
            <Flag >
                {stripes.map(stripe => (
                    <Modal
                        open={isOpen(stripe.index)}
                        onClick={() => setCurrentOpen(isOpen(stripe.index) ? -1 : stripe.index)}>
                        <Stripe
                            title={stripe.title}
                            open={isOpen(stripe.index)}
                            color={stripe.color}
                            saturated={stripe.saturated}>
                            <Title open={isOpen(stripe.index)} />
                        </Stripe>
                    </Modal>
                ))}
            </Flag>
        </Container>
    )
};

export default Rainbow;