import React, { Component } from 'react'
import { v4 } from 'uuid'

export class NewTodoList extends Component {

    constructor(props) {
        super(props)
        this.state = { task: '' }
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
        const newTodo = { ...this.state, id: v4(), completed: false }
        this.props.createNewTodo(newTodo)
        this.setState({ task: '' })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='Task'>Todo : </label>
                        <input
                            onChange={this.handleChange}
                            type='text'
                            name='task'
                            value={this.state.task}
                            id='todo'
                        />
                    </div>
                    <button>Add Todo List</button>
                </form>
            </div>
        )
    }
}

export default NewTodoList
