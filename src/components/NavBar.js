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
    width: 10rem;
    top: 2rem;
    right: 1rem;
    @media only screen and (max-width: 768px){
    }
`;

const MenuItem = styled.div`
    padding: 1rem 2rem;
    cursor: pointer;
    a {
        text-decoration: none;
        color: black;
        img {
            filter: invert(100%);
        }
    }
    a:hover {
        color: #ACBAED;
    }
`;

const NavBar = ({ handleClick }) => {
    return (
        <Container>
            <MenuItem>
                <a href="https://www.columbiaspectator.com/" style={{
                }}><img style={{
                    height: "38px",
                    width: "36px",
                }} src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/LC75RL476NFG3P677LOBAW2MXE.png"></img></a>
            </MenuItem>
            {sections.map((section, i) => (
                <MenuItem>
                    <Link onClick={() => handleClick(i+1)}>{section.title}</Link>
                </MenuItem>
            ))}
        </Container>
    )
};

export default NavBar;