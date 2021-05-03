import React, { Component } from "react";
import HogDetails from './HogDetails'


class HogTile extends Component{

    constructor(){
        super()
        this.state = {
            showDetails: false
        }
    }

    toggleDetails = () => {
        this.setState({
            showDetails: !this.state.showDetails
        })
    }

    render(){
        const hogImageTitle = this.props.displayHog.name.toLowerCase().replaceAll(" ", "_")
        const hogImagePath = require(`../hog-imgs/${hogImageTitle}.jpg`)
        return(
        <div onClick={() => this.toggleDetails()}>
            <img src={hogImagePath} />
            <p>{this.props.displayHog.name}</p>
            {
            this.state.showDetails
            ? <HogDetails {...this.props.displayHog} hideHog={this.props.hideHog} />
            : null 
            }
        </div>)
    }
}

export default HogTile