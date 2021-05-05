import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(){
    super()
    this.state = {
      image: true
    }
  }

  changeImage = () => {
    this.setState({
      image: !this.state.image
    })
  }

  render() {
    // console.log(this.state.image)
    return (
      <Card>
        <div>
          <div className="image">
            <img alt="oh no!" 
            onClick={() => this.changeImage()}
            // onClick={this.changeImage}

            src={ this.state.image
                  ? this.props.pokemon.sprites.front 
                  : this.props.pokemon.sprites.back } />
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
