import React, { Component } from "react";


class HogDetails extends Component{

    render(){
        return(<div>
            <ul>
                <li>Specialty: {this.props.specialty} </li>
                <li>Greased: {this.props.greased ? "This Hog is Greased!" : "This Hog isn't Greased!"} </li>
                <li>Weight: {this.props.weight}</li>
                <li>Highest medal achieved: {this.props["highest medal achieved"]} </li>
            </ul>
            <button onClick={() => this.props.hideHog(this.props.name)}> Hide this Hog </button>
        </div>)
    }
}

export default HogDetails