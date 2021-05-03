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
      hogs: hogs
    }
  }

  // state = {
  //   hogs: hogs
  // }

  filterHogs = () => {
    // debugger
    // console.log(this.state)
    this.setState({
      hogs: this.state.hogs.filter(hog => hog.greased)
    })
  }

  showAllHogs = () => {
    this.setState({
      hogs: hogs
    })
  }

  sortHogs = (e) => {
    // debugger
    // what to sort? => ny providing value to option tag
    // how to sort?

    if(e.target.value === "name"){
      this.setState({
        hogs: [...this.state.hogs].sort((a,b) => a.name.localeCompare(b.name))
        // hogs: this.state.hogs.sort((a,b) => a.name < b.name ? -1 : 1)
      })
    }else{
      this.setState({
        hogs: [...this.state.hogs].sort((a,b) => a.weight - b.weight)
      })
    }
    
  }


  render() {
    // console.log(hogs)
    return (
      <div className="App">
        <Nav />
        <Filter 
        filter={this.filterHogs}
        showHogs={this.showAllHogs}
        sort={this.sortHogs}
         />
        <HogContainer hogs={this.state.hogs} />
      </div>
    );
  }
}

export default App;
