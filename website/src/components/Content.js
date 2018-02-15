import React, { Component } from 'react';
import '../styles/content.css';

export default class Content extends Component {
  render() {
    return (
        <div>
          <h1>Header</h1>
          <div className="contentWrapper">
            <div className="content">
              <img src={this.props.image} />
            </div>
            <div className="content">
              <h2>{this.props.title}</h2>
              {this.props.content}
            </div>
          </div>
        </div>

    );
  }
}
