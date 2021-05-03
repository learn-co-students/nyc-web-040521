import React, { Component } from "react";
import HogDetails from './HogDetails'


class HogTile extends Component{

    constructor(){
        super()
        this.state = {
            showDetails: false
        }
    }

    // function show details when user clicks
    toggleDetails = () => {
        this.setState({
            showDetails: !this.state.showDetails
        })
    }

    render(){
        const hogImageTitle = this.props.displayHog.name.toLowerCase().replaceAll(" ", "_")
        // const hogImageTitle = this.props.displayHog.name.toLowerCase().split(" ").join("_")
        // console.log(hogImageTitle)
        const hogImagePath = require(`../hog-imgs/${hogImageTitle}.jpg`)
        return(
        <div onClick={() => this.toggleDetails()}>
            <img src={hogImagePath} />
            <p>{this.props.displayHog.name}</p>
            {
            this.state.showDetails
            ? <HogDetails {...this.props.displayHog} />
            /* <HogDetails details={this.props.displayHog}/> */
            : null 
            }
        </div>)
    }
}

export default HogTile