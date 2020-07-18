import React, { Component } from 'react'
import Todo from './Todo'
import NewTodoList from './NewTodoList'

export class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: []
        }
        this.createNewTodo = this.createNewTodo.bind(this)
        this.removeTodo = this.removeTodo.bind(this)
    }

    createNewTodo(newTodo) {
        this.setState({ todos: [...this.state.todos, newTodo] })
    }

    removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    render() {
        const list = this.state.todos.map(todo => (<Todo key={todo.id} id={todo.id} todo={todo.task} remove={() => this.removeTodo(todo.id)} />))
        return (
            <div>
                {list}
                <NewTodoList createNewTodo={this.createNewTodo} />
            </div>
        )
    }
}

export default TodoList
