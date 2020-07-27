import React, { Component } from 'react'

export class DogDetails extends Component {
    render() {
        return (
            <div>
                <h1>
                    {this.props.dog.name}
                </h1>
            </div>
        )
    }
}

export default DogDetails
