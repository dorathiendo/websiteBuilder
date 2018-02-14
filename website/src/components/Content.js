import React, { Component } from 'react';
import '../styles/content.css'

export default class Content extends Component {
  render() {
    return (
        <div>
          <h1>Header</h1>
          <div className="contentWrapper">
            <div className="content">
              {this.props.title}
            </div>
            <div className="content">
              {this.props.title}
            </div>
          </div>
        </div>

    );
  }
}
