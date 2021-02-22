import { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Button = styled.button`
    height:40px;
    width:135px;
    border-radius:21px;
    border:none;
    box-shadow: 7px 7px 5px rgba(0, 0, 0, 0.25);
    transition: transform, 0.5s;
    transition: box-shadow, 0.5s;
    font-family: 'Avenir', Helvetica, sans-serif;

    &:hover {
        position:relative;
        box-shadow: 7px 7px 5px rgba(0, 0, 0, 0.15);
        transform: translate(-3px, -3px);
    }
`

const getStyleFromColor = (color) => {
    if (color === 'black') {
        return {
            backgroundColor: 'black',
            color: 'white'
        }
    } else {
        return {
            backgroundColor: color,
            color: 'white'
        }
    }
}

class RoundButton extends Component {

    render() {
        return <Button style={getStyleFromColor(this.props.color)}>
                {this.props.children}
            </Button>
        
    }
}

RoundButton.propTypes = {
    color: PropTypes.string.isRequired
};

export default RoundButton;