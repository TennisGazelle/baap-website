import { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo from '../imgs/logo.svg';

const HeaderStyle = styled.div`
    max-height: 70px;
    display: flex;
    box-shadow: 7px 7px 5px rgba(0, 0, 0, 0.25);
    vertical-align: middle;
`

const CornerLogo = styled.img`
    padding: 10px;
    height: 50px;
    width: auto;
`

const getBarStyleFromProps = (props) => {
    var style = {
        backgroundColor: "rgba(0,0,0,0)" // transparent
    }
    if (!props.isInvisible) {
        style.backgroundColor = props.color
    }
    return style;
}

const getTextStyleFromProps = (props) => {
    return {
        color: props.isInvisible ? 'black' : 'white',
        padding: '20px 20px'
    }
}

export class Header extends Component {
    render() {
        return <HeaderStyle style={getBarStyleFromProps(this.props)}>
            <CornerLogo src={logo} alt="Corner Logo to Home Page"/>
            <h3 style={getTextStyleFromProps(this.props)}>Blender as a Pipeline</h3>
        </HeaderStyle>
    }
}

Header.propTypes = {
    isInvisible: PropTypes.bool,
    color: PropTypes.string
}

export default Header;
