import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Stuff from './components/stuff'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to This Test</h2>
        </div>
        <Stuff />
      </div>
    );
  }
}

export default App;
