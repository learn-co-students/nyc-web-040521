import NavBar from './NavBar'
import 'semantic-ui-css/semantic.min.css'
import PaintingList from './PaintingList'
import paintings from './paintings-array'
import { Component } from 'react'
import PaintingForm from './PaintingForm'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Demo from './demoComponent'

class App extends Component{

  constructor(){
    super()
    this.state = {
      text: "Morning!!!",
      list: true,
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
    return( 
      <BrowserRouter>
      <div>
            
            <NavBar color="red" />

          
      <Switch>

        

        <Route exact path="/paintings" 
        render={(routerProps) => <PaintingList {...routerProps} paintingsArray={this.state.paintings}  />} />

        <Route exact path="/paintings/form" 
        render={(routerProps) => <PaintingForm {...routerProps} addPainting={this.addPainting}/>} />

        {/* <Route path="/test" component={PaintingInfo} /> */}

        {/* <Route path="/paintings" component={PaintingList} /> */}
        {/* <Route path="/paintings" 
        component={() => <PaintingList paintingsArray={this.state.paintings}  />} /> */}
        {/* <Route path="/paintings/:id" component={Demo} />  // when part of the route is dynamic  */}
        <Route component={Demo} />  

      </Switch>
         
          
            {/* <button onClick={() => this.changeView()}>See/Hide Painting Form</button> */}
            {/* {
            this.state.list 
            ? <PaintingList paintingsArray={this.state.paintings} />
            : <PaintingForm addPainting={this.addPainting} />
            } */}
                 
        </div>
      </BrowserRouter>
    )
  }

}

export default App;
