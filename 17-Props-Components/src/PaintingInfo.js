import { Component } from "react"

// const PaintingInfo = (props) => {
//     // console.log(props)
//     return(<div>
//         <h2> Title: {props.artInfo.title} </h2>
//         <h3> Artist Name: {props.artInfo.artist.name} </h3>
//     </div>)
// }

class PaintingInfo extends Component{

    render(){
        console.log(this.props)
        return(<div>
            <h2> Title:  {this.props.artInfo.title} </h2>
            <h3> Artist Name: {this.props.artInfo.artist.name} </h3>
        </div>)
    }
}

export default PaintingInfo