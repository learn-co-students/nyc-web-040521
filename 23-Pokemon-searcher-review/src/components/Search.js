import React from 'react'

const Search = props => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={(e) => props.searchPokemon(e.target.value)}/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
