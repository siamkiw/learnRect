import React, { Component } from 'react'
import Coin from './Coin'

export class FlipBoard extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            headsCount: 0,
            tailsCount: 0,
            imgCoin: ''
        }
        this.flipCoin = this.flipCoin.bind(this)
    }

    flipCoin() {
        const flip = {
            head: 'https://tinyurl.com/react-coin-heads-jpg',
            tail: 'https://tinyurl.com/react-coin-tails-jpg'
        }
        let isHead = Math.random() < 0.5
        const coin = isHead ? flip.head : flip.tail
        this.setState({
            imgCoin: coin,
            count: this.state.count + 1,
            headsCount: this.state.headsCount + (isHead ? 1 : 0),
            tailsCount: this.state.tailsCount + (!isHead ? 1 : 0)
        })
    }

    render() {
        return (
            <div className="App">
                <h1>Let's flip a Coin!</h1>
                <Coin imgCoin={this.state.imgCoin} />
                <button onClick={this.flipCoin}>FLIP ME!</button>
                <p>
                    {`Out of ${this.state.count} flip, there have been ${this.state.headsCount} heads and ${this.state.tailsCount} tails.`}
                </p>
            </div>
        )
    }
}

export default FlipBoard
