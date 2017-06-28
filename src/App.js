import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import MainContainer from './Components/MainContainer';

class App extends Component {
  render() {
    return (
      <div className="section">
          <MainContainer/>
      </div>
    );
  }
}

export default App;
