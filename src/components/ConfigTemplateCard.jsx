import { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// const images = require.context('../../public/imgs')

const Card = styled.div`
    height:  400px;
    width:   490px;
    box-shadow: 7px 7px 5px rgba(0, 0, 0, 0.25);
    transition: transform, 0.5s;
    transition: box-shadow, 0.5s;
    font-family: 'Avenir', Helvetica, sans-serif;

    &:hover {
        position: relative;
        box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.15);
        transform: translate(-3px, -3px);
    }
`

class ConfigTemplateCard extends Component {
    render() {
        // let imageData = import('../imgs/blender_video_edit_pic.jpeg')
        const imageData = require('imgs/blender_video_edit.png');

        const HeaderImage = styled.img`
            display: block;
            width: 100%;
            height: auto;
            src: url('${imageData}')
`

        return <Card>
            {/* <img src={imageData} alt="video editing pic"/> */}
            <HeaderImage/>
        </Card>
    }
}

ConfigTemplateCard.propTypes = {
    details: PropTypes.exact({
        cardTitle: PropTypes.string.isRequired,
        cardDescription: PropTypes.string.isRequired
    }).isRequired
}

export default ConfigTemplateCard;