import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link className="App-link" to="/">
            <h1 className="App-title">Wind River Ranch</h1>
          </Link>
        </header>
        <div className="navigation">
          <Link className="link-navigation" to="/about">About</Link>
          <Link className="link-navigation" to="/boarding">Boarding</Link>
          <Link className="link-navigation" to="/lessons">Lessons</Link>
          <Link className="link-navigation" to="/contact">Contact</Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
