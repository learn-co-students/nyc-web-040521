import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" 
        checked={props.sortedType === "Alphabetically"  ? true : false} 
        onChange={(e) => props.sortStocks(e.target.value)}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" 
        checked={props.sortedType === "Price" ? true : false} 
        onChange={(e) => props.sortStocks(e.target.value)}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => props.filterStocks(e.target.value)}>
          <option value="all">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
