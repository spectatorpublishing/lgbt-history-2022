import React from 'react';
import styled from 'styled-components';
import HamburgerMenu from 'react-hamburger-menu';
import "../index.css";
import { Link } from 'react-router-dom';
import { sections } from '../data/sections';
import theme from '../theme';

const NavWrap = styled.div`
    text-align: center;
    padding-top: 0rem;
    height:5rem;
    justify-content: space-between;
    align-items:center;
    display:flex;
    position:sticky;
    top:0;
    left:0;
    flex-wrap: wrap;
    z-index:100;
    background-color: gray;
    a {
        padding: 0.5rem;
    }
    @media (min-width: 768px) {
       display:none;
    }
`;

const Logo = styled.div`
    z-index:100;
    position:relative;
    left:5%;
`;

const HamburgerWrapper = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: 2rem;
    z-index: 100;
`;

const Menu = styled.div`
    font-family: 'Barlow', sans-serif;
    background-color: gray;
    display: ${props => props.isOpen ? "flex" : "none"};
    flex-direction: column;
    position: absolute;
    top: 4rem;
    width: 100%;
    margin: 0 auto;
    padding-bottom: 1rem;
`;

const MenuItem = styled.div`
    padding: 0.5rem 1rem;
    a {
        text-decoration: none;
        color: white;
        font-weight: 700;
        font-size: 1.25rem;
    }
`;

const MobileNavBar = ({ handleClick }) => {

    const [open, setOpen] = React.useState(false);

    function handleOpen() {
        console.log(open)
        setOpen(!open)
    }

    return (
        <NavWrap>
            <Logo>
                <a href="https://www.columbiaspectator.com/" style={{
                }}><img style={{
                    height: "40px",
                    width: "40px",
                }} src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/LC75RL476NFG3P677LOBAW2MXE.png"></img></a>
            </Logo>
            <HamburgerWrapper>
                <HamburgerMenu
                    isOpen={open}
                    menuClicked={() => handleOpen()}
                    width={30}
                    height={20}
                    strokeWidth={5}
                    rotate={0}
                    color='white'
                    borderRadius={0}
                    animationDuration={0.5}
                    zIndex={100}
                    className="over"
                />
            </HamburgerWrapper>
            <Menu isOpen={open}>
                {sections.map((section, i) => (
                    <MenuItem onClick={() => handleOpen()}>
                        <Link onClick={() => handleClick(i+1)}>{section.title}</Link>
                    </MenuItem>
                ))}
            </Menu>
        </NavWrap>
    );
};

export default MobileNavBar;