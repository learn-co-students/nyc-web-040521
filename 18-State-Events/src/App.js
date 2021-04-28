import NavBar from './NavBar'
import 'semantic-ui-css/semantic.min.css'
import PaintingList from './PaintingList'
import paintings from './paintings-array'
import { Component } from 'react'

class App extends Component{

  // declare a state
  constructor(){
    super()
    // console.log("Constructor")
    this.state = {
      text: "Morning!!!",
      list: true
    }
  }

  // state = {
  //   view: "Painting-App"
  // }

  // change a state
  changeText = () => {
    // console.log("Inside ChangeText function!!")
    this.setState({
      text: "Evening!!!"
    })
  }

  // not going to work
  // function changeText(){
  //   console.log("Inside ChangeText function!!")
  // }

  render(){
    // use a state
    // console.log(this.state.text)
    // console.log("Render")
    return( <div>
            
             <NavBar color="red" />
             <h3> Happy {this.state.text} </h3>

             <button onClick={() => this.changeText()}> Change text</button>
             {/* <button onClick={this.changeText}> Change text</button> */}


             <PaintingList paintingsArray={paintings} />
           </div>)
  }

}

export default App;
