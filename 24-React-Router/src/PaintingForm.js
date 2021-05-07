// import { Component } from 'react'
import React from 'react'

class PaintingForm extends React.Component{

    constructor(){
        super()
        this.state = {
            title: "",
            artistName: "",
            imageUrl: ""
        }
    }

    handleFormValue = (e) => {
        // debugger
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        // console.log(this.props)
        return(<div>
            <form onSubmit={(e) => {
                e.preventDefault()
                this.props.addPainting(this.state)
                this.props.history.push("/paintings")
                }}>

                <input type="text" placeholder="imageUrl" name="imageUrl"
                onChange={(e) => this.handleFormValue(e)} value={this.state.imageUrl} />

                <input type="text" placeholder="Title" name="title"
                onChange={(e) => this.handleFormValue(e)} value={this.state.title} />

                <input type="text" placeholder="Artist Name" name="artistName"
                onChange={(e) => this.handleFormValue(e)} value={this.state.artistName} />

                <input type="submit" value="add Painting"/>
            </form>
        </div>)
    }
}

export default PaintingForm