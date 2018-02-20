import React, { Component } from 'react';
import '../styles/content.css';

export default class Content extends Component {
    setStyle() {
        var styles = {}
        if(this.props.backgroundColor){
            styles.backgroundColor = this.props.backgroundColor
        }
        if(this.props.image){
            styles.backgroundImage = 'url("' + this.props.image + '")';
        }
        return styles
    }

    render() {
        return (
            <div>
                <div className="content" style={this.setStyle()}>
                    <h2>{this.props.title}</h2>
                    {this.props.children}
                </div>
            </div>

        );
    }
}
