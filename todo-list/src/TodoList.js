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
        this.updateTodo = this.updateTodo.bind(this)
        this.toggleCompletion = this.toggleCompletion.bind(this)
    }

    createNewTodo(newTodo) {
        this.setState({ todos: [...this.state.todos, newTodo] })
    }

    removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    updateTodo(id, updatedTask) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, task: updatedTask }
            }
            return todo
        })
        this.setState({
            todos: updatedTodos
        })
    }

    toggleCompletion(id) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo
        })
        this.setState({
            todos: updatedTodos
        })
    }

    render() {
        const list = this.state.todos.map(todo => (
            <Todo
                key={todo.id}
                id={todo.id}
                todo={todo.task}
                completed={todo.completed}
                remove={() => this.removeTodo(todo.id)}
                updatedTodo={this.updateTodo}
                toggle={this.toggleCompletion}
            />
        ))

        return (
            <div>
                <h1>Todo list</h1>
                <ul>
                    {list}
                </ul>
                <NewTodoList createNewTodo={this.createNewTodo} />
            </div>
        )
    }
}

export default TodoList
