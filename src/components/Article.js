import React from 'react';
import styled from 'styled-components';

const Border = styled.div`
    padding: 80px;
    padding-left: 120px;
    padding-bottom: 20px;
    color: white;
    font-family: Josefin Sans;
`;

const Container = styled.div`
    background-color: rgba(254, 15, 0, 1)
`;

const Title = styled.div`
    font-weight: 700;
    font-size: 30px;
`;
const Author = styled.div`
    font-weight: 400;
    font-size: 30px;
`;
const Filter = styled.div`
    filter: grayscale(1);
`;

const p = styled.div`
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`;

const Article = ({ link, title, author, image }) => {
    return (
        <Container>
        <Border>
            <a href = {link}>
            <Filter><img style = {{height: 500, flex: 1, width: null, }} src = {image}></img></Filter>
            </a>
            <p><Title>{title}</Title></p>
            <p><Author>{author}</Author></p>
        </Border>
        </Container>
    )
};

export default Article;