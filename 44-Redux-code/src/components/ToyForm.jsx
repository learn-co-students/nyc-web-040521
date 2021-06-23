import React, { Component } from 'react';

class ToyForm extends Component {

  state = {
    name: '',
    image: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={(e) => this.props.handleSubmit(e, this.state)}className="add-toy-form">
          <h3>Create a toy!</h3>
          <input type="text" name="name" onChange={this.handleChange} placeholder="Enter a toy's name..." className="input-text"/>
          <br/>
          <input type="text" name="image" onChange={this.handleChange} placeholder="Enter a toy's image URL..." className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
