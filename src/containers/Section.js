import React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import NavBar from '../components/NavBar';
import MobileNavBar from '../components/MobileNavBar';
import Article from '../components/Article';

const Container = styled.div`
    font-family: 'Josefin Sans', sans-serif;
    background-color: lightgray;
    height: 100vh;
    padding: 160px;
`;

const SectionTitle = styled.div`
    font-size: 2rem;
    font-weight: bold;
`;

const Section = ({articles, header}) => {
    return(
        <Container>
            {window.innerWidth <= 768 ? <MobileNavBar/> : <NavBar/>}
            <SectionTitle>{header}</SectionTitle>
            {articles.map(article => (
                <Article
                    link={article.article_link}
                    title={article.article_title}
                    author={article.article_authors}
                    image={article.image_url}
                />
            ))}
        </Container>
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