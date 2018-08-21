import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/header.css'

export default class Header extends Component {
    constructor(){
      super();
      this.state = {
        isMenuClosed: false
      }
      this.toggleMenu = this.toggleMenu.bind(this);
    }
    toggleMenu(){
      const currentState = this.state.isMenuClosed;
      this.setState({ isMenuClosed: !currentState });
    }
    render() {
        const isMenuClosed = this.state.isMenuClosed;
        return (
            <div className="header">
                <h1><Link to='/'>Film Dev Timer</Link></h1>
                <ul className={isMenuClosed ? 'nav menuClosed' : 'nav'}>
                  <button className="menuButton" onClick={this.toggleMenu}>Menu</button>
                    <li>
                        <Link to='/color'>Color</Link>
                    </li>
                    <li>
                        <Link to='/bw'>B&W</Link>
                    </li>
                    <li>
                        <Link to='/slide'>Slide</Link>
                    </li>
                </ul>
                <button className="menuButton" onClick={this.toggleMenu}>Menu</button>
            </div>
        );
    }
}
