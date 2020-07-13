import React, { Component } from 'react'
import './Box.css'
import { getRandomColor } from './helper'

export class Box extends Component {

    constructor(props) {
        super(props)
        this.state = {
            color: this.props.color,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    pickColor() {
        this.setState(curSt => {
            return { color: getRandomColor() }
        })
    }

    handleClick() {
        this.pickColor()
    }

    render() {
        return (
            <div
                onMouseEnter={this.handleClick}
                className="Box"
                style={{ backgroundColor: this.state.color }}>
            </div>
        )
    }
}

export default Box
