import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import { device } from '../device';
import { sections } from '../data/sections';
import { Link } from 'react-router-dom';
import theme from '../theme';

const Container = styled.div`
    font-family: 'Barlow', sans-serif;
    font-weight: bold;
    text-align: right;
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 8rem;
    top: 2rem;
    right: 1rem;
    @media only screen and (max-width: 768px){
    }
`;

// const VertNav = styled.div`
//     font-family: 'Barlow', sans-serif;
//     font-weight: bold;
//     text-align: right;
//     position: fixed;
//     right: 1vw;
//     top:3vh;
//     font-weight:700;
//     z-index:100;
//     @media only screen and (max-width: 768px){
//     }
// `;

const MenuItem = styled.div`
    padding: 1rem 2rem;
    cursor: pointer;
    a {
        text-decoration: none;
        color: ${theme.colors.white};
    }
    a:hover {
        color: #ACBAED;
    }
`;

const NavBar = ({handleClick}) => {
    return (
        <Container>
            <MenuItem>
                <a href="https://www.columbiaspectator.com/" style={{
                }}><img style={{
                    height: "38px",
                    width: "36px",
                }} src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/LC75RL476NFG3P677LOBAW2MXE.png"></img></a>
            </MenuItem>
            {sections.map(section => (
                <MenuItem>
                    <Link onClick={handleClick}>{section.title}</Link>
                </MenuItem>
            ))}
        </Container>
    )
};

export default NavBar;