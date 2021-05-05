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

  searchPokemons = (userSearch) => {
    // debugger
    this.setState({
      searchTerm: userSearch
    })
  }

  // displayPokemons = () => {
  //   return this.state.pokemons.filter(pokemon => 
  //     pokemon.name.startsWith(this.state.searchTerm))
  // }

  addPokemon = (pokemonData) => {
    // debugger
    let newPokemon = {
      name: pokemonData.name,
      hp: pokemonData.hp,
      sprites: {
        front: pokemonData.frontUrl,
        back: pokemonData.backUrl
      }
    }

    // this.setState({
    //   pokemons: [...this.state.pokemons, newPokemon]
    // })

    // console.log(newPokemon)

    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(newPokemon)
    })
    .then(res => res.json())
    .then(newPoke => {
      this.setState({
        pokemons: [...this.state.pokemons, newPoke]
      })
    })

    // patch
    // fetch("http://localhost:3000/pokemon/:pokemon-id", {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type":"application/json"
    //   },
    //   body: JSON.stringify({
    //     hp: 89
    //   })
    // })
    // .then(res => res.json())
    // .then(updatePokemon => {
    //   // [{},{},{}]
    //   this.setState({
    //     pokemons: this.state.pokemons.map(pokemon => {
    //       if(pokemon.id === updatePokemon.id) return updatePokemon
    //       else return pokemon
    //     })
    //   })
    // })
  }

  render() {

    let displayPokemons = this.state.pokemons.filter(pokemon => 
      pokemon.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search searchPokemons={this.searchPokemons} />
        <br />
        {/* <PokemonCollection pokemons={this.displayPokemons()} /> */}
        <PokemonCollection pokemons={displayPokemons} />

      </Container>
    )
  }
}

export default PokemonPage
