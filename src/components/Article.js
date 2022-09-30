import React from 'react';
import styled from 'styled-components';

const Border = styled.div`    
    margin: 3rem;
    color: white;
    alignItems: 'center';
    justifyContent: 'center';
    font-family: Josefin Sans;
`;

const Title = styled.div`
    font-weight: 700;
    font-size: 1.5rem;
`;
const Author = styled.div`
    font-weight: 400;
    font-size: 1rem;
`;

const Image = styled.div`
    display: flex;
    img {
        filter: grayscale(100%); 
        align-items: 'center';
        justifyContent: 'center';
        height: null;
        width: 100%;
        transition-duration:0.5s;
    }
    img:hover {
        filter: grayscale(0%);
    }
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
        <Border>
            <a href = {link}>
            <Image><img src = {image}></img></Image>
            </a>
            <p><Title>{title}</Title></p>
            <p><Author>{author}</Author></p>
        </Border>
    )
};

export default Article;