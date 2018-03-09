import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/content.css';

export default class ServiceLink extends Component {
    constructor(props){
      super(props);
      this.state = {
        showContent: 'hiddenContent'
      }
    }
    showHiddenContent(){
      this.setState({
        showContent: (this.state.showContent === 'hiddenContent') ? 'hiddenContent showHiddenContent' : 'hiddenContent'
      })
    }
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <Link to={this.props.link}><button>More</button></Link>
            </div>

        );
    }
}

//<h3>{this.props.title}</h3>
//<button onClick={this.showHiddenContent.bind(this)}>More</button>
//<div className={this.state.showContent}>
//    <button className="close black" onClick={this.showHiddenContent.bind(this)}>X</button>
//    {this.props.children}
//</div>