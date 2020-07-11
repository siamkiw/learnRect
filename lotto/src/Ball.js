import React, { Component } from 'react'
import './Ball.css'

export class Ball extends Component {
    render() {
        return (
            <div className="Ball">{this.props.num}</div>
        )
    }
}

export default Ball
