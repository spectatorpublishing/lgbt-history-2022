import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import { sections } from '../data/sections';
import { Link } from 'react-router-dom';
import theme from '../theme';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 8rem;
    top: 0;
    right: 0;
    @media only screen and (max-width: 768px){
    }
`;

const MenuItem = styled.div`
    padding: 0.5rem 1rem;
    a {
        text-decoration: none;
        color: ${theme.colors.black};
    }
`;

const NavBar = ({ }) => {
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
                    <Link to={section.url}>{section.title}</Link>
                </MenuItem>
            ))}
        </Container>
    )
};

export default NavBar;