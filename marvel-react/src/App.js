import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import Character from './containers/Character';
import JeopardyDisplay from './containers/Jeopardy';

class App extends Component {
  render() {
    // debugger;
    return (
      <div>
        <JeopardyDisplay />
        <Character />
        </div>
    );
  }
}

export default App;
