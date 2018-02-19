import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoApp from './components/ToDoApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
         <ToDoApp/>
      </div>
    );
  }
}

export default App;
