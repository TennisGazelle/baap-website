import { Component } from 'react'
// import { ConfigTemplateCard } from './ConfigTemplateCard'
import Header from './Header'
import ConfigTemplateCard from './ConfigTemplateCard'

const vfxCardData = {
    cardTitle: "Video Editing",
    cardDescription: "Best Choice for when you just want to join together video files with Blender's advanced color grading tools and sound"
}

export class ConfigPage extends Component {
    render() {
        return <div>
            <Header color='black'/>
            <h2>
                What template would you like to begin?
            </h2>
            <ConfigTemplateCard details={vfxCardData}/>
        </div>
    }
}