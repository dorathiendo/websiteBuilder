import React, { Component } from 'react';
import '../styles/header.css'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>Logo</h1>
                <ul className="nav">
                    <li>
                        <a href="">Nav Button</a>
                        <ul className="subNav">
                            <li><a href="">Sub Nav</a></li>
                            <li><a href="">Sub Nav</a></li>
                            <li><a href="">Sub Nav</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="">Nav Button</a>
                        <ul className="subNav">
                            <li><a href="">Sub Nav</a></li>
                            <li><a href="">Sub Nav</a></li>
                            <li><a href="">Sub Nav</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="">Nav Button</a>
                    </li>
                </ul>
            </div>
        );
    }
}
