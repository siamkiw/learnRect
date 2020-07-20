import React, { Component } from 'react'
import './Todo.css'

export class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false,
            task: this.props.todo
        }
        this.toggleForm = this.toggleForm.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
    }
    static defaultProps = {
        todo: 'homework'
    }

    toggleForm() {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    handleUpdate(evt) {
        evt.preventDefault()
        this.props.updatedTodo(this.props.id, this.state.task)
        this.toggleForm()
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleToggle(evt) {
        this.props.toggle(this.props.id)
    }

    render() {
        let result;

        if (this.state.isEditing) {
            result = (
                <div>
                    <form onSubmit={this.handleUpdate}>
                        <input
                            type="text"
                            value={this.state.task}
                            name="task"
                            onChange={this.handleChange}
                        />
                        <button>Save</button>
                    </form>
                </div>
            )
        } else {
            result = (
                <div>
                    <button onClick={this.toggleForm}>Edit</button>
                    <button onClick={this.props.remove}>Remove</button>
                    <li className={
                        this.props.completed
                            ? 'completed'
                            : ''}
                        onClick={this.handleToggle}
                    >
                        {this.props.todo}
                    </li>
                </div>
            )
        }
        return result
    }
}

export default Todo
