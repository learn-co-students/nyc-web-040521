import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor(){
    super()
    this.state = {
      front: true
    }
  }

  toggleImage = () => {
    this.setState({
      front: !this.state.front
    })
  }

  render() {
    // console.log(this.props)
    return (
      <Card>
        <div>
          <div className="image">
            <img alt="oh no!"
            onClick={() => this.toggleImage()}
            src={this.state.front
              ? this.props.pokemon.sprites.front
              : this.props.pokemon.sprites.back} />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
