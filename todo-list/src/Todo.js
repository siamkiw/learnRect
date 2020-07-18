import React, { Component } from 'react'

export class Todo extends Component {
    static defaultProps = {
        todo: 'homework'
    }
    render() {
        return (
            <div>
                {this.props.todo}
                <button onClick={this.props.remove}>Remove</button>
            </div>
        )
    }
}

export default Todo
