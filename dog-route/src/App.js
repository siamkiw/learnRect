import React, { Component } from 'react';
import Navbar from './Navbar'
import Routes from './Routes'
import whiskey from './image/whiskey.jpg'
import hazel from './image/hazel.jpg'
import tubby from './image/tubby.jpg'
import './App.css';

export class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  }
  render() {

    return (
      <div>
        <Navbar dogs={this.props.dogs} />
        <div className='container mb-5'>
          <Routes dogs={this.props.dogs} />
        </div>
      </div>


    )
  }
}

export default App
