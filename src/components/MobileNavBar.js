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
    background-color: white;
    a {
        padding: 0.5rem;
    }
    @media (min-width: 769px) {
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
    background-color: white;
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
        color: #909095;
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
                }} src="https://summer-fellowship-2022.s3.amazonaws.com/grey_crown.png"></img></a>
            </Logo>
            <HamburgerWrapper>
                <HamburgerMenu
                    isOpen={open}
                    menuClicked={() => handleOpen()}
                    width={30}
                    height={20}
                    strokeWidth={5}
                    rotate={0}
                    color='#909095'
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