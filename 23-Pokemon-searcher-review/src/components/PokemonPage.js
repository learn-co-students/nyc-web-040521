import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  constructor(){
    super()
    this.state = {
      pokemons: [],
      searchTerm: ""
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
    .then(pokemons => {
      this.setState({
        // pokemons: pokemons
        pokemons
      })
    })
  }

  searchPokemon = (userSearch) => {
    this.setState({
      searchTerm: userSearch
    })
  }

  addPokemon = (pokemonDataObj) => {
    // debugger
    let newPokemon = {
      name: pokemonDataObj.name,
      hp: pokemonDataObj.hp,
      sprites: {
        front: pokemonDataObj.frontUrl,
        back: pokemonDataObj.backUrl
      }
    }

    this.setState({
      // pokemons: [newPokemon, ...this.state.pokemons]
      pokemons: [...this.state.pokemons, newPokemon]

    })

  }

  render() {
    // console.log(this.state.pokemons)

    // let displayPokemons = this.state.pokemons.filter(pokemon => pokemon.name.toLowerCase().startsWith(this.state.searchTerm.toLowerCase()))

    let displayPokemons = this.state.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search searchPokemon={this.searchPokemon} />
        <br />
        <PokemonCollection pokemons={displayPokemons} />
      </Container>
    )
  }
}

export default PokemonPage
