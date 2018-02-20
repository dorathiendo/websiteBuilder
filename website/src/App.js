import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';



class App extends Component {
  componentDidMount(){
    document.title = this.props.name;
  }
  render() {
    return (
      <div>
        <Header name={this.props.name}></Header>
          <Main />
          <Footer></Footer>
      </div>
    );
  }
}

export default App;
