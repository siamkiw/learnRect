import React, { Component } from 'react'

export class Box extends Component {
    render() {
        return (
            <div>
                <div
                    style={{
                        height: `${this.props.height}em`,
                        width: `${this.props.width}em`,
                        background: this.props.color
                    }}>

                </div>
                <button onClick={this.props.removeBox}>Delete Box</button>
            </div>

        )
    }
}

export default Box
