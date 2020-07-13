import React, { Component } from 'react'
import { getRandomColor } from './helper'
import Box from './Box'



export class BocContainer extends Component {
    static defaultProps = {
        numBox: 200,
    }

    genBox() {
        let boxs = []
        for (let ix = 0; ix <= this.props.numBox; ix++) {
            boxs.push(< Box key={ix} color={getRandomColor()} />)
        }
        return boxs
    }

    render() {
        return (
            <div className="App">
                {this.genBox()}
            </div>
        )
    }
}


export default BocContainer
