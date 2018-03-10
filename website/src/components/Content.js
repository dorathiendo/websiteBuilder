import React, { Component } from 'react';
import '../styles/content.css';

export default class Content extends Component {
    setStyle() {
        var styles = {}
        if(this.props.image) {
            // styles.background = 'linear-gradient(rgb(87, 94, 109, 0.5), rgb(87, 94, 109, 0.5)), url("' + this.props.image + '")';
        } else if(this.props.backgroundColor){
            styles.backgroundColor = this.props.backgroundColor;
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
        if(this.props.border){
            styles.border = this.props.border;
        }
        return styles
    }
    setBackgroundImage(){
      if(this.props.image){
          return <img className="backgroundImage" src={this.props.image} />
      }
    }
    render() {
        var className = (this.props.className) ? 'content ' + this.props.className : 'content';
        var styles = this.setStyle();
        return (
            <div>
                <div className={className} style={styles}>
                    {this.setBackgroundImage()}

                    <div className="childrenWrapper">
                    {(this.props.title) ? <h2>{this.props.title}</h2> : ''}
                    {this.props.children}
                    </div>
                </div>
            </div>

        );
    }
}
