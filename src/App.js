import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import boot from './Boot.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={boot} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Patricia{'\''}s Website</h1>
          </Link>
        </header>
        <div className="navigation">
          <Link className="link-navigation" to="/test-page">Button 1</Link>
          <button>Button 2</button>
          <button>Button 3</button>
          <button>Button 4</button>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
