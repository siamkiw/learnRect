import React, { Component } from 'react'
import Dice from './Dice'
import './RollDice.css'

export class RollDice extends Component {
    static defaultProps = {
        side: ['one', 'two', 'three', 'four', 'five', 'six',]
    }
    constructor(props) {
        super(props)
        this.state = {
            dice1: 'one',
            dice2: 'two',
            isRolling: false
        }
        this.roll = this.roll.bind(this)
    }
    roll() {
        const ranDice1 = this.props.side[Math.floor((Math.random() * this.props.side.length))]
        const ranDice2 = this.props.side[Math.floor((Math.random() * this.props.side.length))]
        this.setState({ dice1: ranDice1, dice2: ranDice2, isRolling: true })
        setTimeout(() => {
            this.setState({ isRolling: false })
        }, 1000)
    }
    render() {
        return (
            <div className="RollDice">
                <div className="RollDice-container">
                    <Dice face={this.state.dice1} shake={this.state.isRolling} />
                    <Dice face={this.state.dice2} shake={this.state.isRolling} />
                </div>
                <button onClick={this.roll} disabled={this.state.isRolling}>
                    {this.state.isRolling ? "Rolling.." : "Roll Dice!!"}
                </button>
            </div>
        )
    }
}

export default RollDice
