import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import AppWrapper from './components/Form/AppWrapper';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="App-body">
          <div className="wrapper">
              <AppWrapper />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
