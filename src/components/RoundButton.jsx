import { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Button = styled.button`
    height:50px;
    width:140px;
    border-radius:21px;
    border:none;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);
    &:hover {
        box-shadow: 10px 10px 6px rgba(0, 0, 0, 0.15);
        transition: 0.5s;
        border: 1px;
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