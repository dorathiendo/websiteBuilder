import React, { Component } from 'react';
import TransitionGroup from "react-transition-group/TransitionGroup";

import logo from './logo.svg';


import Header from './components/Header.js';
import Main from './components/Main.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
          <Main />
      </div>
    );
  }
}

export default App;


