import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  constructor(){
    super()
    this.state = {
      name: "",
      hp: "",
      frontUrl: "",
      backUrl: ""
    }
  }

  handleChange = (e) => {
    // debugger
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={() => this.props.addPokemon(this.state)}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name"
            value={this.state.name} 
            onChange={(e) => this.handleChange(e)} />

            <Form.Input fluid label="hp" placeholder="hp" name="hp"
            value={this.state.hp}
            onChange={(e) => this.handleChange(e)} />

            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl"
            value={this.state.frontUrl}
            onChange={(e) => this.handleChange(e)} />
            
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl"
            value={this.state.backUrl}
            onChange={(e) => this.handleChange(e)} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
