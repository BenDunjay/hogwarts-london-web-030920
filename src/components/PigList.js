import React from 'react'

import Pig from "./Pig"

class PigList extends React.Component{

    render(){ 
        return (
            <div className="ui grid container"> {this.props.allPigs.map( pig => (<Pig pig={pig} hidePig={this.props.hiddenPig}/> )) }   </div>
        )
    }
}

export default PigList