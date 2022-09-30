import React, { useState } from 'react';
import styled from 'styled-components';
import { device } from '../device';
import theme from '../theme';
import Article from './Article';
import { stripes } from '../data/sections';

const VerticalTitle = styled.div`
    font-size: 3rem;
    font-weight: bold;
    color: white;
    margin: 3rem;
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
    height: 100vh;
    width: 100%;
`;

const Modal = styled.div`
    display: flex;
    flex-grow: 1;
    width: ${props => props.open ? '100%' : 'auto'};
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
`

const Color = styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${props => props.open ? props.saturated : props.color};
    height: auto;
    flex-grow: 1;
    &:hover {
        background-color: ${props => props.saturated};
    }
    overflow: scroll;
    transition-duration:0.5s;
`;

const Stripe = ({ open, color, saturated, title, articles }) => {
    return (
        <Color open={open} color={color} saturated={saturated}>

            { open ? <Column>
                {articles.map(article => (
                    <Article
                        link={article.article_link}
                        title={article.article_title}
                        author={article.article_authors}
                        image={article.image_url}
                    />
                ))}
            </Column> : null}

            <Column>
                <VerticalTitle>{title}</VerticalTitle>
            </Column>

        </Color>
    )
}

const Rainbow = ({ currentOpen, setCurrentOpen }) => {

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
                            saturated={stripe.saturated}
                            articles={stripe.articles}>
                        </Stripe>
                    </Modal>
                ))}
            </Flag>
        </Container>
    )
};

export default Rainbow;