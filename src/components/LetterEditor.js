import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import theme from '../theme';

const Title = styled.div`
    font-size: 2rem;
    font-weight: bold;
`;

const Container = styled.div`
    background-color: lightblue;
    @media only screen and (max-width: 768px){
    }
`;

const letter = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices metus vehicula purus fringilla venenatis. Fusce eget lorem at justo congue molestie sed in ligula. Nullam molestie lobortis arcu, quis congue nisi cursus ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent pretium tellus et arcu tincidunt ornare. Aliquam efficitur semper quam, in interdum sem laoreet non. Donec in nisi et felis fermentum fringilla. Fusce at nisl arcu.

Sed et justo id elit aliquam fermentum. Nullam viverra mattis turpis, a porttitor mi cursus sed. Sed vitae nisl tortor. Fusce accumsan viverra ex sit amet lobortis. Vivamus orci enim, auctor et facilisis vitae, volutpat non diam. Morbi orci nulla, facilisis ac porta eleifend, dignissim a metus. Quisque dolor nunc, lacinia feugiat nisi ac, varius suscipit tellus. Curabitur massa metus, ultrices non rutrum sed, pretium vitae ante.

Nunc mollis risus at metus varius blandit. Aliquam felis ante, euismod ut convallis in, volutpat et magna. Proin tincidunt nisl non lectus molestie blandit. Mauris lacus odio, convallis a tortor vitae, consectetur pretium felis. Aenean volutpat ultricies nunc, vitae mattis nulla eleifend sit amet. Praesent molestie leo nec metus vehicula, ac rhoncus ipsum vulputate. Nunc vel tortor a mi tempor commodo. Nulla euismod metus erat, ac consectetur nibh vulputate quis. Phasellus condimentum feugiat est a dictum.

Pellentesque sagittis enim eget luctus luctus. In placerat erat id lacus ullamcorper posuere. Pellentesque aliquam vulputate blandit. Maecenas laoreet nisi vel enim aliquet, eu aliquet sapien faucibus. Duis sed diam at est luctus vulputate non vitae tortor. Ut consectetur at eros in iaculis. Curabitur quam felis, porta aliquet neque sit amet, placerat tristique leo. Nulla facilisi.

Sed finibus ullamcorper sem in volutpat. Fusce ac justo mattis, pharetra urna in, consequat risus. Vivamus et sem commodo, tincidunt risus et, faucibus mauris. Donec sit amet rutrum velit, vel iaculis felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras ornare bibendum ante ut iaculis. Curabitur pretium, dui a iaculis eleifend, lectus mauris hendrerit lacus, quis auctor elit felis nec ante. Donec in sapien ipsum. Duis faucibus laoreet magna et blandit. Sed ornare odio sit amet nulla euismod viverra.
`;

const LetterEditor = ({ }) => {
    return (
        <Container>
            <Title> LetterEditor </Title>
            <div> {letter} </div>
        </Container>
    )
};

export default LetterEditor;