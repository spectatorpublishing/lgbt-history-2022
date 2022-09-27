import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import theme from '../theme';

const Wrapper = styled.div`
    padding: 120px; 
`;

const Border = styled.div`
    border: 1px solid ${({ color }) => color || "CornflowerBlue"};
    padding: 80px;
    padding-left: 150px;
    padding-right: 150px;
`;

const Title = styled.div`
    font-size: 70px; 
    font-family: Josefin Sans;
    font-weight: 400;
    line-height: 70px;
    color: rgba(0, 117, 255, 0.7);
`;

const Bar = styled.div`
    align-items: center;
    display: flex;
    padding-bottom: 20px;
`;

const Body = styled.div`
    font-family: Josefin Sans;
    font-weight: 400;
    line-height: 20px;
    font-size: 20px;
    color: rgba(0, 117, 255, 0.8);
`;

const p = styled.div`
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`;

const Editor = styled.div`
    font-weight: 700;
    font-size: 20px;
    color: rgba(0, 117, 255, 0.8);
`;

const Position = styled.div`
    margin-top: -18px;
    font-weight: 400;
    font-size: 20px;
`;

const Container = styled.div`
    background-color: white;
    font-family: Josefin Sans;
    color: rgba(0, 117, 255, 0.8);
    @media only screen and (max-width: 768px){
    }
`;

const p1 = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices metus vehicula purus fringilla venenatis. Fusce eget lorem at justo congue molestie sed in ligula. Nullam molestie lobortis arcu, quis congue nisi cursus ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent pretium tellus et arcu tincidunt ornare. Aliquam efficitur semper quam, in interdum sem laoreet non. Donec in nisi et felis fermentum fringilla. Fusce at nisl arcu.

Sed et justo id elit aliquam fermentum.
`;

const p2 = `
Nullam viverra mattis turpis, a porttitor mi cursus sed. Sed vitae nisl tortor. Fusce accumsan viverra ex sit amet lobortis. Vivamus orci enim, auctor et facilisis vitae, volutpat non diam. Morbi orci nulla, facilisis ac porta eleifend, dignissim a metus. Quisque dolor nunc, lacinia feugiat nisi ac, varius suscipit tellus. Curabitur massa metus, ultrices non rutrum sed, pretium vitae ante.

Nunc mollis risus at metus varius blandit. Aliquam felis ante, euismod ut convallis in, volutpat et magna. 
`;

const p3 = `

Proin tincidunt nisl non lectus molestie blandit. Mauris lacus odio, convallis a tortor vitae, consectetur pretium felis. Aenean volutpat ultricies nunc, vitae mattis nulla eleifend sit amet. Praesent molestie leo nec metus vehicula, ac rhoncus ipsum vulputate. Nunc vel tortor a mi tempor commodo. Nulla euismod metus erat, ac consectetur nibh vulputate quis. Phasellus condimentum feugiat est a dictum.

Pellentesque sagittis enim eget luctus luctus. In placerat erat id lacus ullamcorper posuere. Pellentesque aliquam vulputate blandit. Maecenas laoreet nisi vel enim aliquet, eu aliquet sapien faucibus. Duis sed diam at est luctus vulputate non vitae tortor. Ut consectetur at eros in iaculis. Curabitur quam felis, porta aliquet neque sit amet, placerat tristique leo. Nulla facilisi.

`;

const LetterEditor = ({ }) => {
    return (
        <Wrapper>
        <Border>
        <Container>
            <Bar><Title> LETTER FROM THE EDITOR </Title></Bar>
            <Body><p>{p1}</p></Body>
            <Body><p>{p2}</p></Body>
            <Body><p>{p3}</p></Body>
            <Body><p>Sincerely,</p></Body>
            <Editor><p>Clara Ence Morse</p></Editor>
            <Position><p>Editor</p></Position>
            <Editor><p>Dia Gill</p></Editor>
            <Position><p>Managing Editor</p></Position>
            <Editor><p>Vilanna Wang</p></Editor>
            <Position><p>Publisher</p></Position>
        </Container>
        </Border>
        </Wrapper>
    )
};

export default LetterEditor;