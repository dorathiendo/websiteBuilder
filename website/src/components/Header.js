import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/header.css'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>Film Dev Timer</h1>
                <ul className="nav brackets">
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/color'>Color</Link>
                    </li>
                    <li>
                        <Link to='/bw'>B&W</Link>
                    </li>
                </ul>
            </div>
        );
    }
}
