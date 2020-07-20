import React, { Component } from 'react'
import axios from 'axios'

export class GithubUserInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imgUrl: '',
            name: ''
        }
    }

    async componentDidMount() {
        const url = `https://api.github.com/users/${this.props.username}`
        let response = await axios.get(url)
        let data = response.data
        console.log(data);
        this.setState({ imgUrl: data.avatar_url, name: data.login })
    }
    render() {
        return (
            <div>
                <h1>GITHUB USER INFO</h1>
                <img src={this.state.imgUrl} />
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}

export default GithubUserInfo
