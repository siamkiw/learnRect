import React, { Component } from 'react'
import './Coin.css'

export class Coin extends Component {


    showCoin() {
        const imgCoin = this.props.imgCoin
            ? <img className="Coin" src={`${this.props.imgCoin}`} alt="coin"></img>
            : ''
        return imgCoin
    }

    render() {
        return (
            <div>
                {this.showCoin()}
            </div>
        )
    }
}

export default Coin
