import './ConfigPage.css';
import { Component } from 'react'
// import { ConfigTemplateCard } from './ConfigTemplateCard'
import Header from './Header'
import ConfigTemplateCard from './ConfigTemplateCard'
// import { render } from '@testing-library/react'
import ScrollMenu from 'react-horizontal-scrolling-menu'

const vfxCardData = {
    cardTitle: "Video Editing",
    cardDescription: "I already have all my video files, I just want to edit them.",
    cardKey: "vfx",
    imgAlt: "Screenshot of Video Editing Workflow",
}

const modelingCardData = {
    cardTitle: "3D Modeling",
    cardDescription: "I only have 3D models, I only want to turnstile render them.",
    cardKey: "model",
    imgAlt: "Screenshot of 3D Model",
}

const animationCardData = {
    cardTitle: "Blender Project",
    cardDescription: "I have a Blender file.  Help me render, and edit.",
    cardKey: "blender",
    imgAlt: "Screenshot of Blender Workflow",
}

const list = [
    animationCardData,
    modelingCardData,
    vfxCardData
]

const selected = "3D Animation";

// const ConfigScrollMenuItem = ({cardData, selected}) => {
//     return <ConfigTemplateCard details={cardData} selected={selected}/>;
// };

export const ConfigScrollMenu = (list, selected) => 
    list.map(datum => {
        const {cardTitle} = datum;
        console.log(cardTitle)
        // return <div className={`menu-item ${selected ? 'active' : ''}`} key={cardTitle}>
        //     <h2>{cardTitle}</h2>
        // </div>
        return <ConfigTemplateCard details={datum} key={cardTitle} selected={cardTitle === selected}/>
    });


const Arrow = ({ text, className }) => {
    return (
      <div
        className={className}
      >{text}</div>
    );
  };

const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

export class ConfigPage extends Component {

    constructor(props) {
        super(props);
        this.menuItems = ConfigScrollMenu(list, selected);
    }

    state = {
        selected
    };

    onSelect = key => {
        this.setState({ selected: key });
    }

    render() {
        const menu = this.menuItems;

        return <div>
            <Header color='black'/>
            <h2>
                What template would you like to begin?
            </h2>

            <ScrollMenu 
                data={menu}
                arrowLeft={ArrowLeft}
                arrowRight={ArrowRight}
                selected={selected}
                onSelect={this.onSelect}
                alignCenter
            />


            {/* <ConfigTemplateCard details={animationCardData}/>
            <ConfigTemplateCard details={modelingCardData}/>
            <ConfigTemplateCard details={vfxCardData}/> */}
        </div>
    }
}