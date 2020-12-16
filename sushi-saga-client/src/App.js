import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import MoreMoney from './components/MoreMoney';

// Endpoint!
const API = "http://localhost:3001/sushis"

class App extends Component {

  state ={
    balance: 200,
    sushis: [],
    currentSushis: [],
    sushiIndex: 0,
    sushisEaten: []
  }

  async componentDidMount() {
    const response = await fetch(API);
    const sushis = await response.json();
    this.setState({sushis: sushis});
    this.getSushis(this.state.sushiIndex);
  }

  updateTable = () => {
    let x = this.state.sushisEaten;
    x.push("sushi")
    this.setState({sushisEaten: x})
  }

  getSushis = (index, cap = 4) => {
    const fourSushis = [];
    for(let i = index; i < index + cap; i++){
      fourSushis.push(this.state.sushis[i])
    }
    //this.setState({currentSushis: this.state.currentSushis.concat(fourSushis)})
    this.setState({currentSushis: fourSushis})
    this.setState({sushiIndex: this.state.sushiIndex + fourSushis.length})
  }

  changeBalance = (amount) => {
    this.setState({balance: this.state.balance - amount})
  }

  addBalance = (amount) => {
    this.setState({balance: this.state.balance + amount})
  }

  checkIndex = () => {
    if(this.state.sushiIndex >= this.state.sushis.length) this.setState({sushiIndex: 0}, this.addSushis)
  }

  addSushis = (numToAdd = 4) => {
    console.log(this.state.sushiIndex >= this.state.sushis.length)
    this.checkIndex()
    this.getSushis(this.state.sushiIndex, numToAdd);
  }

  render() {
    return ( 
      <div className="app">
        <MoreMoney addBalance={this.addBalance}/>
        <SushiContainer currentBalance={this.state.balance} updateTable={this.updateTable} changeBalance={this.changeBalance} addSushis={this.addSushis} theSushi={this.state.currentSushis}/>
        <Table theSushi={this.state.sushisEaten} currentBalance={this.state.balance}/>
      </div>
    );
  }
}

export default App;