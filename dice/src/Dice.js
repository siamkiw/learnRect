import React, { Component } from 'react'
import './Dice.css'

export class Dice extends Component {
    render() {
        let shakeing = this.props.shake ? 'shake' : ''
        return (
            <i className={`Dice fas fa-dice-${this.props.face} ${shakeing}`}></i>
        )
    }
}

export default Dice
