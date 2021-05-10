import { useState } from 'react'

const Painting = (props) => {
    // state for votes using hooks with initial value coming from props

    const [votes, incrementVotes] = useState(props.painting.votes)

    const handleClick = () => {
        let newVotes = votes + 1
        incrementVotes(newVotes)
    }

    return(<div>
        <img src={props.painting.image} />
        <h3>Title: {props.painting.title}</h3>
        <h4>Artist Name: {props.painting.artist.name}</h4>
        <p>Votes: {votes} </p>
        <button onClick={() => handleClick()}>Upvote</button>
    </div>)
}

export default Painting