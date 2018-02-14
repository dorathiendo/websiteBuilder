import React, { Component } from 'react';
import '../styles/header.css'

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <ul>
          <li>Logo</li>
          <li>Nav Button</li>
          <li>Nav Button</li>
          <li>Nav Button</li>
        </ul>
      </div>
    );
  }
}
