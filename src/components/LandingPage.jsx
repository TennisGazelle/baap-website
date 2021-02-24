import { Component } from 'react';
import pipeline_logo from '../imgs/pipeline.png'
import blender_logo from '../imgs/blender_logo.svg';
import tennisgazelle_logo from '../imgs/tennisgazelle_logo.png';
import styled from 'styled-components'
import RoundButton, { ButtonHolder } from './RoundButton'

const ImgContainer = styled.div`
    position: relative;
    max-width: 550px;
    min-width: 450px;
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

const ContentHolder = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const TitleHolder = styled.div`
    min-width: 450px;
    height: auto;
    // border-style: solid;
    // border-color: red;
    vertical-align: middle;
    justify-content: center;
`

export class LandingPage extends Component {
    render() {
        return <div>
            <ButtonHolder style={{ justifyContent:'flex-end', minHeight: '40px'}}>
                {/* <RoundButton style={{ order: 1 }} color="orange" onClick={() => {console.log('clicked orange')}}>LOG IN</RoundButton>
                <RoundButton style={{ order: 2 }} color="red" onClick={() => {console.log('clicked red')}}>SIGN UP</RoundButton> */}
            </ButtonHolder>

            <br/>

        <ContentHolder>
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
            <TitleHolder>
                <h1>BAAP</h1>
                <h4>Blender as a Pipeline</h4>
                <ButtonHolder >
                    <RoundButton color="BLACK" disabled>ONBOARD</RoundButton>
                    <a href="https://github.com/TennisGazelle/blender-pipeline/archive/v0.0.1.zip">
                        <RoundButton color="BLACK" >DOWNLOAD</RoundButton>
                    </a>
                    <a href="https://github.com/TennisGazelle/blender-pipeline/" target="_blank" rel="noreferrer">
                        <RoundButton color="BLACK">SOURCE</RoundButton>
                    </a>
                </ButtonHolder>
            </TitleHolder>
        </ContentHolder>
        </div>        
    }
}

// style={{borderStyle: 'solid', borderColor: 'green'}}