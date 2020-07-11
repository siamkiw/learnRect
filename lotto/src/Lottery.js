import React, { Component } from 'react'
import Ball from './Ball'

export class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        maxBalls: 6,
        maxNum: 40
    }

    constructor(props) {
        super(props)
        this.state = {
            nums: Array.from({ length: this.props.maxBalls })
        }
        this.handleClick = this.handleClick.bind(this)

    }
    generate() {
        this.setState((curState) => ({
            nums: curState.nums.map(n => Math.floor(Math.random() * this.props.maxNum) + 1)
        }))
    }
    handleClick() {
        this.generate()
    }

    render() {
        return (
            <div>
                <section className="Lottery">
                    <h1>{this.props.title}</h1>
                    <div>
                        {this.state.nums.map(n => (<Ball num={n} />))}
                    </div>
                </section>
                <button onClick={this.handleClick}>Generate</button>
            </div>
        )
    }
}

export default Lottery
