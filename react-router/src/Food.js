import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './Food.css'

export class Food extends Component {
    render() {
        const name = this.props.match.params.name
        const url = `https://source.unsplash.com/1600x900/?${this.props.name}`
        return (
            <div className='Food'>
                {/\d/.test(name) ? (
                    <Redirect to='/' />
                ) : (
                        <div>
                            <h1>i love to eat {name}</h1>
                            <img src={url} alt={name} />
                        </div>
                    )}
            </div>
        )
    }
}

export default Food
