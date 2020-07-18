import React, { Component } from 'react'
import { v4 } from 'uuid'

export class newBoxFrom extends Component {
    constructor(props) {
        super(props)
        this.state = { height: '', width: '', color: '' }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit(evt) {
        evt.preventDefault()
        const newBox = { ...this.state, id: v4() }
        this.props.createBox(newBox)
        this.setState({ height: '', width: '', color: '' })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <lable htmlFor='height'>Height</lable>
                        <input
                            type='text'
                            name='Height'
                            value={this.state.height}
                            onChange={this.handleChange}
                            id='height'
                        />
                    </div>
                    <div>
                        <lable htmlFor='width'>Width</lable>
                        <input
                            type='text'
                            name='width'
                            value={this.state.width}
                            onChange={this.handleChange}
                            id='width'
                        />
                    </div>
                    <div>
                        <lable htmlFor='color'>Color</lable>
                        <input
                            type='text'
                            name='color'
                            value={this.state.color}
                            onChange={this.handleChange}
                            id='color'
                        />
                    </div>
                    <button>Create New Box</button>
                </form>
            </div>
        )
    }
}

export default newBoxFrom
