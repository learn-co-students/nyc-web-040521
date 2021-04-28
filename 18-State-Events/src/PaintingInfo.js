import { Component } from "react"

class PaintingInfo extends Component{

    constructor(props){ // remember about props in constructor
        super()
        // console.log(props)
        this.state = {
            votes: props.artInfo.votes
        }
    }

    upVote = () => {
        this.setState({
            votes: this.state.votes + 1
            // votes: ++this.state.votes
        }, () => console.log("inside setState:", this.state.votes))
        console.log("outside setState:", this.state.votes)
    }

    render(){
        return(<div>
            <h2> Title:  {this.props.artInfo.title} </h2>
            <h3> Artist Name: {this.props.artInfo.artist.name} </h3>
            <h4> Votes: {this.state.votes} </h4>

            <button onClick={() => this.upVote()}> UpVote </button>
        </div>)
    }

    // state = {
    //     votes: this.props.artInfo.votes
    // }
}

export default PaintingInfo