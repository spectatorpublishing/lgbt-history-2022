import React from 'react';
import styled from 'styled-components';
import "../index.css";
import theme from '../theme';

const Flag = styled.div`
  width: 100vw;
  aspect-ratio: 8;
  background:
    conic-gradient(at 5% 50%, #0000 221.25deg, white 222deg 318deg, #0000 318.25deg),
    conic-gradient(at 8% 50%, #0000 221.25deg, #ffa6b9 222deg 318deg, #0000 318.25deg),
    conic-gradient(at 11% 50%, #0000 221.25deg, #00d2ff 222deg 318deg, #0000 318.25deg),
    conic-gradient(at 14% 50%, #0000 221.25deg, #753000 222deg 318deg, #0000 318.25deg),
    conic-gradient(at 17% 50%, #0000 221.25deg, black 222deg 318deg, #0000 318.25deg),
    linear-gradient(
        ${theme.colors.saturatedRed} 0 16.66%, 
        ${theme.colors.saturatedOrange} 0 33.33%, 
        ${theme.colors.saturatedYellow} 0 50%, 
        ${theme.colors.saturatedGreen} 0 66.66%, 
        ${theme.colors.saturatedBlue} 0 83.33%, 
        ${theme.colors.saturatedPurple} 0);
`;

const Progress = ({ }) => {
    return (
        <Flag/>
    );
};

export default Progress;