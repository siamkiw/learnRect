import React, { Component } from 'react'
import './Joke.css'

export class Joke extends Component {
    constructor(props) {
        super(props)
        this.handleUpvote = this.handleUpvote.bind(this)
        this.handleDownvote = this.handleDownvote.bind(this)
    }

    handleUpvote() {
        this.props.upvote(this.props.id, 1)
    }

    handleDownvote() {
        this.props.downvote(this.props.id, -1)
    }

    getColor() {
        if (this.props.votes >= 15) {
            return '#4caf50'
        } else if (this.props.votes >= 12) {
            return '#8bc34a'
        } else if (this.props.votes >= 9) {
            return '#cdd439'
        } else if (this.props.votes >= 6) {
            return '#ffc107'
        } else if (this.props.votes >= 0) {
            return '#ff9800'
        } else if (this.props.votes > 0) {
            return '#f44336'
        }
    }

    getEmoji() {
        if (this.props.votes >= 15) {
            return 'em em-rolling_on_the_floor_laughing'
        } else if (this.props.votes >= 12) {
            return 'em em-laughing'
        } else if (this.props.votes >= 9) {
            return 'em em-smiley'
        } else if (this.props.votes >= 6) {
            return 'em em-slightly_smiling_face'
        } else if (this.props.votes >= 3) {
            return 'em em-neutral_face'
        } else if (this.props.votes >= 0) {
            return 'em em-confused'
        } else {
            return 'em em-angry'
        }
    }


    render() {
        return (
            <div className='Joke'>
                <div className='Joke-buttons'>
                    <i className='fas fa-arrow-up' onClick={this.handleUpvote}></i>
                    <span className='Joke-votes' style={{ borderColor: this.getColor() }}>{this.props.votes}</span>
                    <i className='fas fa-arrow-down' onClick={this.handleDownvote}></i>
                </div>
                <div className='Joke-text'>{this.props.text}</div>
                <div className='Joke-smiley'>
                    <i className={this.getEmoji()} />
                </div>
            </div>
        )
    }
}

export default Joke
