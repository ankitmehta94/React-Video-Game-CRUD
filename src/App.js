import React, { Component } from 'react';
import './App.css';
import { Link, Match } from 'react-router';
import  GamesPage   from './GamesPage.js';
import  GamesFormPage   from './GamesFormPage.js';
console.log(GamesPage);
class App extends Component {
  render() {
    return (

      <div className="ui container">
            <div className="ui three item menu">
                <Link className="item" activeClassName="active" activeOnlyWhenExact to="/" >HOME</Link>
                <Link className="item" activeClassName="active" activeOnlyWhenExact to="/games" >GAMES</Link>
                <Link className="item" activeClassName="active" activeOnlyWhenExact to="/games/new" >ADD GAMES</Link>
            </div>

          <Match exactly pattern="/games" component={GamesPage}/>
          <Match pattern="/games/new" component={GamesFormPage}/>
          <Match pattern="/game/:_id" component={GamesFormPage}/>
      </div>

    );
  }
}

export default App;
