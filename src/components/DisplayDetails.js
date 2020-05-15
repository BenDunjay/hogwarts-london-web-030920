import React from 'react'

const DisplayDetails = (props) => {

    const pigSpecialty = props.pig['highest medal achieved']

return (
    
   <div onClick={props.togglePig}><strong>
    <p>{(props.pig.greased ? "Greased" : "Not Greased")}</p>
    <p> Highest Medal Achieved: {props.pig.highestmedalachieved}</p>
    <p>Specialty: {pigSpecialty}</p>
    <p>Weight: {props.pig.weight}</p></strong>

    </div>
)

}


export default DisplayDetails