import React from 'react'

import DisplayDetails from "./DisplayDetails"
import PigFront from "./PigFront"

class Pig extends React.Component{

    state = {
        clicked: false
    }

    toggleDetails = () => {
        const toggle = !this.state.clicked
        this.setState ({
    clicked: toggle
        })
    }

    render(){
        return (
            <div className="ui eight wide column"> 
            {this.state.clicked ? (<DisplayDetails pig={this.props.pig} togglePig={this.toggleDetails}/> 
            ) : (
            <PigFront name={this.props.pig.name}  hidePig={this.props.hidePig} togglePig={this.toggleDetails} />) }
            </div>
        )
    }
}

export default Pig