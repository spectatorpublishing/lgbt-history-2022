import React from 'react';
import styled from 'styled-components';
import HamburgerMenu from 'react-hamburger-menu';
// import { fallDown as Menu } from 'react-burger-menu';
import "../index.css";
import { Link } from 'react-router-dom';
import { sections } from '../data/sections';
import theme from '../theme';

const MenuItem = styled.div`
    padding: 0.5rem 1rem;
    a {
        text-decoration: none;
        color: ${theme.colors.black};
    }
`;

const NavWrap = styled.div`
    text-align: center;
    padding-top: 0rem;
    height:10vh;
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

const Tab = styled.div`
    padding: 0.5rem 1rem;
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
    display: ${props => props.isOpen ? "flex" : "none"};
    flex-direction: column;
    position: absolute;
    top: 5rem;
    right: 0;
`;

const MobileNavBar = ({ current }) => {
    const [open, setOpen] = React.useState(false);

    function handleClick() {
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
                    menuClicked={() => handleClick()}
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
                {sections.map(section => (
                    <MenuItem>
                        <Link to={section.url}>{section.title}</Link>
                    </MenuItem>
                ))}
            </Menu>

        </NavWrap>
    );
};

export default MobileNavBar;