import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import theme from '../theme';

const Wrapper = styled.div`
    padding: 8rem; 
    @media only screen and (max-width: 768px){
        padding: 2rem;
    }
`;

const Border = styled.div`
    border-image: linear-gradient(45deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82) 1;
    border-width: 1rem;
    border-style: dashed;
    padding: 5rem 8rem 5rem 8rem;
    @media only screen and (max-width: 768px){
        padding: 2rem;
        border-width: 0.5rem;
    }
`;

const Title = styled.div`
    font-size: 4rem; 
    @media only screen and (max-width: 768px){
        font-size: 2.5rem;
    }
`;

const Bar = styled.div`
    align-items: center;
    display: flex;
    padding-bottom: 1.5rem;
`;

const Body = styled.div`
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
    @media only screen and (max-width: 768px){
        font-size: 1rem;
    }
`;

const Editor = styled.div`
    margin-top: 1.25rem;
    font-weight: bold;
    font-size: 1.25rem;
    @media only screen and (max-width: 768px){
        font-size: 1rem;
    }
`;

const Position = styled.div`
    font-size: 1.25rem;
    @media only screen and (max-width: 768px){
        font-size: 1rem;
    }
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
                    <Body>{p1}</Body>
                    <Body>{p2}</Body>
                    <Body>{p3}</Body>
                    <Body>Sincerely,</Body>
                    <Editor>Clara Ence Morse</Editor>
                    <Position>Editor</Position>
                    <Editor>Dia Gill</Editor>
                    <Position>Managing Editor</Position>
                    <Editor>Vilanna Wang</Editor>
                    <Position>Publisher</Position>
                </Container>
            </Border>
        </Wrapper>
    )
};

export default LetterEditor;