import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import theme from '../theme';

const Title = styled.div`
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    color: rgba(0, 117, 255, 0.8);
`;

const Container = styled.div`
    background-color: white;
    height: 15rem;
    padding: 50px;
    @media only screen and (max-width: 768px){
    }
`;
const LetterWrap = styled.div`
    padding-top:5vh;
    border:solid 1px white;
    margin-top:5vh;
    margin-bottom: 2rem;
    @media (max-width: 768px) {
        margin-left:4%;
        margin-right:4%;
    }
`;

const Body = styled.div`
    display:flex;
    justify-content: center;
`;

const SubDiv = styled.div`
    width: 25vw;
    padding-left: 1rem;
    font-family: Josefin Sans;
    font-size: 1.5rem;
    @media ${device.tablet} {
        width: fit-content;
    }
    color: rgba(0, 117, 255, 0.8);
`;
const Section = styled.div`
    padding-bottom:1em;
    // flex-grow: 1;
`;

const Row = styled.div`
    flex-direction: row;
    display: flex;
    text-align: left;
    
    
    /*@media (max-width: 1000px) {
        font-size:0.75em;
    }
    @media (max-width: 768px) {
        margin-left:1.25em;
        font-size:1em !important;
        text-align: center;
    }*/
`;

const dep = styled.div`
    font-weight: 400;
`;

const Border = styled.div`
    border: 1px solid ${({ color }) => color || "CornflowerBlue"};
    padding: 4rem;
    padding-top: 5rem;
    @media only screen and (max-width: 768px){
        padding: 20px;
    }
`;

const Credits = ({ }) => {
    return (
        <Container>
            <Border>
            <Title>
                THE COLUMBIA DAILY SPECTATOR STAFF WHO MADE THIS ISSUE POSSIBLE
            </Title>
            <Body>
                <Row>
                
                
                    <SubDiv>
                        <Section>
                            <h3>Corporate Board</h3>
                
                        </Section>
                        <Section>
                            <h3>University News</h3>      
                        </Section>
                        <Section>
                            <h3>Arts and Entertainment</h3>
                        </Section>
                        <Section>
                            <h3>Illustrations</h3> 

                        </Section>
                    </SubDiv>
                    <SubDiv>
                        <Section>
                            <h3>Design and Development</h3>
            
                        </Section>
                        <Section>
                            <h3>Opinion</h3>
                           
                        </Section>
                        <Section>
                            <h3>Photo</h3>
                        </Section>
                    </SubDiv>
                    <SubDiv>
                        <Section>
                            <h3>Lead Illustration By</h3>
                            <p>Ji Yoon Sim, Deputy Illustrations Editor</p>
                        </Section>
                        <Section>
                            <h3>Copy</h3>
                          
                        </Section>
                        <Section>
                            <h3>Spectrum</h3>
                          
                        </Section>
                        <Section>
                            <h3>Sports</h3>
                          
                        </Section>
                    </SubDiv>
                    
                </Row>
                
                

            </Body>
            </Border>
        </Container>

    )
};

export default Credits;