import React, { Component } from "react";
import HogTile from "./HogTile";


class HogContainer extends Component{

    render(){
        // console.log(this.props)
        return(<div>
            
           {this.props.hogs.map(hog => <HogTile displayHog={hog} />)}
        </div>)
    }
}

export default HogContainer