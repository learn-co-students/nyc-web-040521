import { Component } from "react"

class PaintingInfo extends Component{

    constructor(props){
        super()
        this.state = {
            votes: props.artInfo.votes
        }
    }

    upVote = () => {
        this.setState({
            votes: this.state.votes + 1
        })
    }

    render(){
        return(<div>
            <h2> Title:  {this.props.artInfo.title} </h2>
            <h3> Artist Name: {this.props.artInfo.artist.name} </h3>
            <h4> Votes: {this.state.votes} </h4>

            <button onClick={() => this.upVote()}> UpVote </button>
        </div>)
    }
}

export default PaintingInfo