import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import theme from '../theme';

const Title = styled.div`
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    overflow-wrap: break-word;
    font-size: 2.5rem;
    color: rgba(0, 117, 255, 0.8);
    @media only screen and (max-width: 768px){
        font-size: 1.75rem;
    }
`;

const Container = styled.div`
    background-color: white;
    height: 15rem;
    padding: 50px;
    @media only screen and (max-width: 768px){
    }
`;


const Body = styled.div`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
`;

const Spacing = styled.div`
    display: flex;
    flex-wrap: wrap;
    text-align: left;
`;


const SubDiv = styled.div`
    width: 33%;
    padding: 0.5rem;
    font-family: Josefin Sans;
    font-size: 1.2rem;
    @media only screen and (max-width: 768px){
        width: fit-content;
        font-size: 0.75rem;
    }
    @media (min-width: 768px){
        width: fit-content;
        font-size: 0.75rem;
    }
    color: rgba(0, 117, 255, 0.8);
`;
const Section = styled.div`
    padding-bottom:1em;
`;

const H = styled.div`
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
`;

const Row = styled.div`
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
    border-image: linear-gradient(45deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82) 1;
    border-width: 1rem;
    border-style: dashed;
    padding: 5rem 8rem 5rem 8rem;
    @media only screen and (max-width: 768px){
        padding: 2rem;
        border-width: 0.5rem;
    }
`;

const Credits = ({ }) => {
    return (
        <Container>
            <Border>
            <Title>
                THE COLUMBIA DAILY SPECTATOR STAFF WHO MADE THIS ISSUE POSSIBLE
            </Title>
            <Spacing>
            <Body>
                <Row>
                    <SubDiv>
                        <Section>
                            <H>Corporate Board</H>
                            <p>Clara Ence Morse, Editor-in-Chief</p>
                            <p>Dia Gill, Managing Editor</p>
                            <p>Vilanna Wang, Publisher</p>
                        </Section>
                        <Section>
                            <H>University News</H> 
                            <p>Irie Sentner, University News Editor</p> 
                            <p>Zachary Schermele, Deputy News Editor</p>    
                        </Section>
                        <Section>
                            <H>Arts and Entertainment</H>
                        </Section>
                        <Section>
                            <H>Illustrations</H> 

                        </Section>
                    </SubDiv>
                    <SubDiv>
                        <Section>
                            <H>Design and Development</H>
                            <p>Laura Castro Venegas, Head of Engineering</p>
                            <p>Philippe Wu, Head of Product</p>
                            <p>Marian Abuhazi, Engineering Manager</p>
                            <p>Maya Srikanth, Engineering Manager</p>

                        </Section>
                        <Section>
                            <H>Opinion</H>
                           
                        </Section>
                        <Section>
                            <H>Photo</H>
                            <p>Millie Felder, Photo Editor</p>
                        </Section>
                    </SubDiv>
                    <SubDiv>
                        <Section>
                            <H>Lead Illustration By</H>
                            <p>Ji Yoon Sim, Deputy Illustrations Editor</p>
                        </Section>
                        <Section>
                            <H>Copy</H>
                            <p>Olivia Vella, Head Copy Editor</p>
                            <p>Kaylene Su Yee Chong, Deputy Copy Editor</p>
                        </Section>
                        <Section>
                            <H>Spectrum</H>
                          
                        </Section>
                        <Section>
                            <H>Sports</H>
                        </Section>
                    </SubDiv>
                </Row>
            </Body>
            </Spacing>
            </Border>
        </Container>

    )
};

export default Credits;