import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
           this.props.portfolioStocks.map(stock => 
           <Stock key={stock.key} stock={stock} tradeStock={this.props.sellStock} />)
          //  <Stock key={stock.key} stock={stock} sellStock={this.props.sellStock} />)

          }
      </div>
    );
  }

}

export default PortfolioContainer;
