import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import PigList from "./PigList"

class App extends Component {

  state = {
    allPigs: hogs,
    hiddenPigs: [],
    hidePig: false
  }

  hidePig = pigName => {
    let newPigs = []
    
    this.state.allPigs.map(pig => pig.name === pigName ? pig  : newPigs.push(pig) )

    this.setState({allPigs: newPigs})
  }

  // hidePig = pig => {
   
  //   this.setState({ hiddenPigs: [...this.state.hiddenPigs, pig],
  //                   allPigs: })
  // }  was in the process of trying to correct the above method!

  allPigs = () => {
    this.setState({
      allPigs: hogs
    })
  }

  filterGreasedPigs = () => {
    let greasedPigs = this.state.allPigs.filter(pig => pig.greased === false)
    this.setState({
      allPigs: greasedPigs
    })
  }

sortPigsName = () => {
  let sortedPigs = this.state.allPigs.sort((a,b) => (a.name > b.name) ? 1 : -1) 
  this.setState({
    allPigs: sortedPigs
  })

}

sortPigWeight = () => {
  let weightyPigs = this.state.allPigs.sort((a,b) => (a.weight > b.weight) ? -1 : 1) 
  this.setState({
    allPigs: weightyPigs
  })
}



  
  render() {
    console.log(this.state.allPigs)
    return (
      <div className="App">
        <Nav />
        <button onClick={this.filterGreasedPigs}> Filter Greasy Pigs</button>
        <button onClick={this.sortPigWeight}> Filter Pigs By Weight</button>
        <button onClick={this.sortPigsName}> Filter Pigs By Name</button>
        <button onClick={this.allPigs}> All Pigs</button>
        <HelloWorld />

        <PigList allPigs={this.state.allPigs} hiddenPig={this.hidePig}/>
      </div>
    );
  }
}

export default App;
