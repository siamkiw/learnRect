import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card'

import './Deck.css'

const API_URL = 'https://deckofcardsapi.com/api/deck'

export class Deck extends Component {
    constructor(props) {
        super(props)
        this.state = {
            deck: null,
            drawn: []
        }
        this.getCard = this.getCard.bind(this)
    }
    async componentDidMount() {
        let deck = await axios.get(`${API_URL}/new/shuffle`)
        console.log(deck.data);
        this.setState({ deck: deck.data })
    }
    async getCard() {
        let deck_id = this.state.deck.deck_id
        try {
            let cardUrl = `${API_URL}/${deck_id}/draw/`
            let cardRes = await axios.get(cardUrl)
            if (!cardRes.data.success) {
                throw new Error('No card remaining')
            }
            let card = cardRes.data.cards[0]
            this.setState(st => ({
                drawn: [
                    ...st.drawn,
                    {
                        id: card.code,
                        image: card.image,
                        name: `${card.value} of ${card.suit}`
                    }
                ]
            }))
            console.log(card);
        } catch (error) {
            alert(error)
        }

    }
    render() {
        const cards = this.state.drawn.map(c => (
            <Card image={c.image} alt={c.name} key={c.id} />
        ))
        return (
            <div>
                <h1 className='Deck-title'>Card Dealer</h1>
                <h2 className='Deck-title subtitle'>A little demo with React</h2>
                <button className='Deck-btn' onClick={this.getCard}>Get Card</button>
                <div id='Deck-cardarea'>
                    {cards}
                </div>
            </div>
        )
    }
}

export default Deck
