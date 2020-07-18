import React, { Component } from 'react'
import Box from './Box'
import NewBoxFrom from './NewBoxFrom'

export class BoxList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boxes: []
        }
        this.create = this.create.bind(this)
    }

    create(newBox) {
        this.setState({
            boxes: [...this.state.boxes, newBox]
        })
    }

    remove(id) {
        this.setState({
            boxes: this.state.boxes.filter(box => box.id !== id)
        })
    }
    render() {
        const boxes = this.state.boxes.map(box => (
            <Box key={box.id}
                id={box.id}
                width={box.width}
                height={box.height}
                color={box.color}
                removeBox={() => this.remove(box.id)}
            />
        ))
        return (
            <div>
                {boxes}
                <NewBoxFrom createBox={this.create} />
            </div>
        )
    }
}

export default BoxList
