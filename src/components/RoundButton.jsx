import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const ButtonWrapper = styled.div`
    padding:10px;
`

const Button = styled.button`
    height:  40px;
    width:   135px;
    border-radius: 20px;
    border: none;
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

const ButtonHolder = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content: center;
`

const getStyleFromProps = (props) => {
    var style = {
        backgroundColor: props.color,
        color: props.fontColor || 'white'
    }

    if (props.disabled) {
        style = {
            ...style,
            backgroundImage: 'repeating-linear-gradient(45deg, ' + props.color + ' 0 10px, grey 10px 20px)',
            disabled: true,
            color: 'white'
            // "&:hover": {} // todo figure out how to make this configurable for disabled
        }
    }

    return style;
}

class RoundButton extends Component {

    render() {
        return <ButtonWrapper>
            <Button style={getStyleFromProps(this.props)}>
                {this.props.children}
            </Button>
        </ButtonWrapper>
        
    }
}

RoundButton.propTypes = {
    color: PropTypes.string.isRequired,
    disabled: PropTypes.bool
};

export default RoundButton;

export {
    ButtonHolder
};