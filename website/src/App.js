import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header.js';
import Content from './components/Content.js';


class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div className="contentSection">
          <Content title="Here is some content."></Content>
        </div>
      </div>
    );
  }
}

export default App;
