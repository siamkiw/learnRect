import React, { Component } from 'react'
import './App.css';
import Food from './Food'
import { Route, Switch } from 'react-router-dom'
import FoodSearch from './FoodSearch'

export class App extends Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/food/:name' render={(routeProps) => <Food name='kale' {...routeProps} />} />
          <Route exact path='/food/:name/something/:foodname' render={(routeProps) => <Food name='kale' {...routeProps} />} />
          <Route exact path='/' render={(routeProps) => <FoodSearch {...routeProps} />} />
          <Route render={() => <h1>Not Found!</h1>} />
          {/* <Route exact path='/food/:name' component={Food} /> */}
        </Switch>
      </div>
    )
  }
}

export default App

