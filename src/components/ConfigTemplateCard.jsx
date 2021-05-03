import { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SplitPane from 'react-split-pane';
import videoEditingBlenderPic from '../imgs/blender_video_edit.png';
import modelingPic from '../imgs/modeling.jpeg';
import blenderPic from '../imgs/blender_use.png';

const Card = styled.div`
    height:  250px;
    width:   400px;
    border-radius: 20px;
    box-shadow: 7px 7px 5px rgba(0, 0, 0, 0.25);
    transition: transform, 0.5s;
    transition: box-shadow, 0.5s;
    font-family: 'Avenir', Helvetica, sans-serif;
    margin: 5px 10px;
    text-align: center;
    outline: 5px  black;

    &:hover {
        position: relative;
        box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.15);
        transform: translate(-3px, -3px);
    }
`

const WhiteText = styled.h1`
    font-size: 50px;
    background-color:grey;
    color:white;
`

class ConfigTemplateCard extends Component {
    render() {
        const pic = require('../imgs/blender_video_edit.png')
        console.log(pic)
        console.log(this.props.details)

        var backgroundImage;

        if (this.props.details.cardKey === 'vfx') {
            backgroundImage = <img src={videoEditingBlenderPic} class="center" width="200" alt={this.props.details.imgAlt}/>
        } else if (this.props.details.cardKey === 'model') {
            backgroundImage = <img src={modelingPic} width="200" class="center" alt={this.props.details.imgAlt}/>
        } else if (this.props.details.cardKey === 'blender') {
            backgroundImage = <img src={blenderPic} width="200" class="center" alt={this.props.details.imgAlt}/>
        }

        return <Card>
            <SplitPane split="horizontal">
                {/* <Pane initialSize="200px">You can use a Pane component</Pane> */}
                {backgroundImage}
                <WhiteText>{this.props.details.cardTitle}</WhiteText>
                    <i style={{display: "inline-block"}}>{this.props.details.cardDescription}</i>
             </SplitPane>

        </Card>
    }
}

ConfigTemplateCard.propTypes = {
    details: PropTypes.exact({
        cardTitle: PropTypes.string.isRequired,
        cardDescription: PropTypes.string.isRequired,
        cardKey: PropTypes.string.isRequired,
        imgAlt: PropTypes.string.isRequired
    }).isRequired,
    image: PropTypes.node,
    selected: PropTypes.bool
}

export default ConfigTemplateCard;