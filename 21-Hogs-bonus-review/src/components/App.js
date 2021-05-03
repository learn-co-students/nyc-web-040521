import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Filter from "./Filter";
import HogContainer from "./HogContainer";

class App extends Component {

  constructor(){
    super()
    this.state = {
      hogs: hogs.map(hog => {return{...hog, hidden: false} })
    }
  }

  filterHogs = () => {
    this.setState({
      hogs: this.state.hogs.filter(hog => hog.greased)
    })
  }

  showAllHogs = () => {
    this.setState({
      hogs: hogs.map(hog => {return{...hog, hidden: false} })
    })
  }

  sortHogs = (e) => {

    if(e.target.value === "name"){
      this.setState({
        hogs: [...this.state.hogs].sort((a,b) => a.name.localeCompare(b.name))
      })
    }else{
      this.setState({
        hogs: [...this.state.hogs].sort((a,b) => a.weight - b.weight)
      })
    }
    
  }

  hideHog = (hogName) => {
    // debugger
    // console.log(hogName)
    //find the hog from state of hogs
    // hidden key to false
    this.setState({
      hogs: this.state.hogs.map(hog => {
        if(hog.name === hogName) return {...hog, hidden: true}
        else return hog
      })
    })
    
  }


  render() {
    let displayHog = this.state.hogs.filter(hog => !hog.hidden)
    // let displayHog = this.state.hogs.filter(hog => hog.hidden === false)
    return (
      <div className="App">
        <Nav />
        <Filter 
        filter={this.filterHogs}
        showHogs={this.showAllHogs}
        sort={this.sortHogs}
         />
        <HogContainer hogs={displayHog} hideHog = {this.hideHog} />
      </div>
    );
  }
}

export default App;
