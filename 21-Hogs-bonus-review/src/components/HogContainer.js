import React, { Component } from "react";
import HogTile from "./HogTile";


class HogContainer extends Component{

    render(){
        return(<div>
            
           {this.props.hogs.map(hog => <HogTile displayHog={hog} hideHog = {this.props.hideHog} />)}
        </div>)
    }
}

export default HogContainer