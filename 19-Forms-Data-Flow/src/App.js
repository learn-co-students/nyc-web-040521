import NavBar from './NavBar'
import 'semantic-ui-css/semantic.min.css'
import PaintingList from './PaintingList'
import paintings from './paintings-array'
import { Component } from 'react'
import PaintingForm from './PaintingForm'

class App extends Component{

  constructor(){
    super()
    this.state = {
      text: "Morning!!!",
      list: true,
      // paintings: paintings,
      paintings
    }
  }
 
  changeText = () => {
    this.setState({
      text: "Evening!!!"
    })
  }

  changeView = () => {
    this.setState({
      list: !this.state.list
    })
  }

  addPainting = (newObj) => {
    // debugger
    // e.preventDefault()
    // let newPainting = {
    //   image: e.target[0].value,
    //   title: e.target[1].value,
    //   artist: {
    //     name: e.target[2].value
    //   },
    //   votes: 0
    // }

    let newPainting = {
      image: newObj.imageUrl,
      title: newObj.title,
      artist: {
        name: newObj.artistName
      },
      votes: 0
    }

    this.setState({
      paintings: [...this.state.paintings, newPainting],
      list: !this.state.list
    })

  }

  render(){
    return( <div>
            
             <NavBar color="red" />
             {/* <h3> Happy {this.state.text} </h3>

             <button onClick={() => this.changeText()}> Change text</button> */}
              {/* condition ? true : false */}
              <button onClick={() => this.changeView()}>See/Hide Painting Form</button>
              {
              this.state.list 
              ? <PaintingList paintingsArray={this.state.paintings} />
              : <PaintingForm addPainting={this.addPainting} />
              }
           </div>)
  }

}

export default App;
