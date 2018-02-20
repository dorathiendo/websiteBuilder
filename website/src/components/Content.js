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
        if(this.props.color){
            styles.color = this.props.color;
        }
        if(this.props.padding){
            styles.padding = this.props.padding;
        }
        if(this.props.minHeight){
            styles.minHeight = this.props.minHeight;
        }
        return styles
    }

    render() {
        return (
            <div>
                <div className="content" style={this.setStyle()}>
                    {(this.props.title) ? <h2>{this.props.title}</h2> : ''}
                    {this.props.children}
                </div>
            </div>

        );
    }
}
