import React, { Component } from 'react'

export default class MoreMoney extends Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: 0
        }
    }
 

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addBalance(Number.parseInt(this.state.amount));
        e.target.reset()
    }

    handleChange = (e) =>{
        this.setState({amount: e.target.value});
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}> 
                    <label htmlFor="num">Enter more money</label>
                    <input  onChange={this.handleChange} name="num" type="number" />
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}
