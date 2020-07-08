import React, { Component } from 'react'

export class Clicker extends Component {
    constructor() {
        super()
        this.state = { num: 1 }
        this.genRandomNumber = this.genRandomNumber.bind(this)
    }
    genRandomNumber() {
        const ranNumber = Math.floor(Math.random() * 9) + 1
        this.setState({ num: ranNumber })
    }
    render() {
        return (
            <div>
                <h1>Number is {this.state.num}</h1>
                {this.state.num === 7
                    ? <h1>YOU WIN!!</h1>
                    : <button onClick={this.genRandomNumber}>Randeom Number</button>
                }

            </div>
        )
    }
}

export default Clicker
