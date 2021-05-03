import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.filter()}>
          Filter Greased Hogs
        </button>

        <select onChange={(e) => this.props.sort(e)}>
          <option disabled selected> Select Sort</option>
          <option value="name" > Sort by Name </option>
          <option value="weight"> Sort by Weight </option>
        </select>

        <button onClick={() => this.props.showHogs()}> Show default Hogs</button>
      </div>
    );
  }
}

export default Filter;
