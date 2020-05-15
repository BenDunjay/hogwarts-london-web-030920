import React from 'react'

const PigFront = (props) => {

    const findImage = (pigName) => {
        let pictureName = pigName.toString().toLowerCase().split(' ').join('_')

        let pigPic = require(`../hog-imgs/${pictureName}.jpg`)
        return pigPic

    }

    return (
        <div>
        <img onClick={props.togglePig} src={findImage(props.name)}    ></img>
        <p>Name: {props.name}</p>
        <button onClick={ () => props.hidePig(props.name)}> Hide Me!</button>
        </div>
    )
}


export default PigFront