import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/footer.css'

export default class Footer extends Component {
    render(){
      return (
        <div className="footer">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Developer</li>
          </ul>
        </div>
      );
    }
}
