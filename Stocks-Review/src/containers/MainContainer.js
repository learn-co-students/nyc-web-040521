import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  constructor(){
    super()
    this.state = {
      stocks: [],
      portfolioStocks: [],
      filter: "all",
      sorted: "none"
    }
    
  }

  componentDidMount(){
    fetch("http://localhost:3000/stocks")
    .then(res => res.json())
    .then(data => {
      this.setState({
        stocks: data
      })
    })
  }

  buyStock = (stockObj) => {
    // debugger
    this.setState({
      portfolioStocks: [...this.state.portfolioStocks, stockObj]
    })
  }

  sellStock = (stockObj) => {
    // debugger

    // when you only want to sell one stock at a time
    // let index = this.state.portfolioStocks.findIndex(stock => stock.id === stockObj.id)
    // console.log(index)
    // let resultArray = [...this.state.portfolioStocks]
    // resultArray.splice(index,1)
    // this.setState({
    //   portfolioStocks: resultArray
    // })

    this.setState({
      portfolioStocks: this.state.portfolioStocks.filter(stock => stock.id !== stockObj.id )
      // portfolioStocks: this.state.portfolioStocks.filter(stock => !stock.id === stockObj.id )

    })
  }

  filterStocks = (type) => {
    // debugger
    this.setState({
      filter: type
    })
  }

  sortStocks = (sortType) => {
    // debugger
    this.setState({
      sorted: sortType,
      stocks: this.state.stocks.sort(
      (a,b) => sortType === "Price" ? a.price - b.price : a.name.localeCompare(b.name) )
    })
  }

  render() {

    let displayStocks = []

    // this.state.filter === "all" 
    // ? displayStocks = this.state.stocks 
    // : displayStocks = this.state.stocks.filter(stock => stock.type === this.state.filter)

    if(this.state.filter === "all"){
      displayStocks = this.state.stocks
    }else{
      displayStocks = this.state.stocks.filter(stock => stock.type === this.state.filter)
    }

    return (
      <div>
        <SearchBar 
        filterStocks={this.filterStocks} 
        sortStocks={this.sortStocks}
        sortedType={this.state.sorted} />

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={displayStocks} buyStock={this.buyStock} />

            </div>
            <div className="col-4">

              <PortfolioContainer portfolioStocks={this.state.portfolioStocks} sellStock={this.sellStock} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
