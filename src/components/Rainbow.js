import React, { useState } from 'react';
import styled from 'styled-components';
import { device } from '../device';
import theme from '../theme';
import Article from './Article';
import {
    eye_articles,
    sports_articles,
    opinion_articles,
    a_and_e_articles,
    uni_news_articles,
    city_news_articles
  } from "../data/articles";

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

export const stripes = [
    {
        "index": 1,
        "title": "News",
        "color": theme.colors.lightRed,
        "saturated": theme.colors.saturatedRed,
        "articles": uni_news_articles,
    },
    {
        "index": 2,
        "title": "Opinion",
        "color": theme.colors.lightOrange,
        "saturated": theme.colors.saturatedOrange,
        "articles": opinion_articles,
    },
    {
        "index": 3,
        "title": "Sports",
        "color": theme.colors.lightYellow,
        "saturated": theme.colors.saturatedYellow,
        "articles": sports_articles,
    },
    {
        "index": 4,
        "title": "A&E",
        "color": theme.colors.lightGreen,
        "saturated": theme.colors.saturatedGreen,
        "articles": a_and_e_articles,
    },
    {
        "index": 5,
        "title": "The Eye",
        "color": theme.colors.lightBlue,
        "saturated": theme.colors.saturatedBlue,
        "articles": uni_news_articles,
    },
    {
        "index": 6,
        "title": "Spectrum",
        "color": theme.colors.lightPurple,
        "saturated": theme.colors.saturatedPurple,
        "articles": uni_news_articles,
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