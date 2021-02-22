import { Component } from 'react';
import pipeline_logo from '../imgs/pipeline.png'
import blender_logo from '../imgs/blender_logo.svg';
import tennisgazelle_logo from '../imgs/tennisgazelle_logo.png';
import styled from 'styled-components'
import RoundButton from './RoundButton'

const ImgContainer = styled.div`
    position: relative;
    max-width: 550px;
    min-width: 200px;
    height: 225px;
    // border-style: solid;
    // border-color: green;
`;

const PipelineImage = styled.img`
    position: absolute;
    display: block;
    width: 100%;
    height: auto;
    z-index: 1;
`;

const SubImgContainer = styled.div`
    position: absolute;
    width: 225px;
    height: 190px;

    left: 25%;
    top: 5%;
    align-items: center;
    // border-style: solid;
    // border-color: red;
`;

const BlenderImage = styled.img`
    position: absolute;
    left: 0;
    display: block;

    width: 100%;
    height: auto;

    z-index: 2;
`;

const TGImage = styled.img`
    position: absolute;
    display; block;
    bottom: 0;
    right: 0;
    width: 20%;
    z-index: 3;
`;

const ButtonHolder = styled.div`
    display:flex;
    flex-wrap:wrap;
`

export class LandingPage extends Component {
    render() {
        return <div>
            <ButtonHolder style={{ justifyContent:'flex-end' }}>
                <RoundButton style={{ order: 1 }} color="orange">LOG IN</RoundButton>
                <RoundButton style={{ order: 2 }} color="red">SIGN UP</RoundButton>
            </ButtonHolder>

        <ImgContainer>
            <PipelineImage src={pipeline_logo} alt="Background Image of Pipeline" />            
            <SubImgContainer>
                <a href="https://blender.org" target="_blank" rel="noreferrer">
                    <BlenderImage src={blender_logo} alt="Blender Logo"/>
                </a>
                <a href="https://tennisgazelle.com/" target="_blank" rel="noreferrer">
                    <TGImage src={tennisgazelle_logo} alt="Website Author Logo" />
                </a>
            </SubImgContainer>
        </ImgContainer>

        <ButtonHolder>
            <RoundButton color="BLACK">ONBOARD</RoundButton>
            <RoundButton color="BLACK">GENERATE</RoundButton>
        </ButtonHolder>
        </div>        
    }
}