import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/header.css'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>Logo</h1>
                <ul className="nav brackets">
                    <li>
                        <Link to='/about'>About</Link>
                        <ul className="subNav">
                            <li><a href="">Sub Nav</a></li>
                            <li><a href="">Sub Nav</a></li>
                            <li><a href="">Sub Nav</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="">Nav</a>
                        <ul className="subNav">
                            <li><a href="">Sub Nav</a></li>
                            <li><a href="">Sub Nav</a></li>
                            <li><a href="">Sub Nav</a></li>
                        </ul>
                    </li>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                </ul>
            </div>
        );
    }
}
