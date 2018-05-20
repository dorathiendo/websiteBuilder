import React, { Component } from 'react';
import '../styles/content.css';

import Step from '../components/Step.js';


export default class Color extends Component {
  constructor(props){
    super(props);
    this.state = {
      stepIndex: 1
    }
    this.increaseStepIndex = this.increaseStepIndex.bind(this);
    this.decreaseStepIndex = this.decreaseStepIndex.bind(this);

  }
  increaseStepIndex(){
    var currentIndex = this.state.stepIndex + 1;
    if(currentIndex <= 6){
      this.setState({ stepIndex: currentIndex });
    }
  }
  decreaseStepIndex(){
    var currentIndex = this.state.stepIndex - 1;
    if(currentIndex >= 1){
      this.setState({ stepIndex: currentIndex });
    }
  }
  render() {
    return (
        <div className="contentSection">
          <h1>Color</h1>
          <Step stepIndex={this.state.stepIndex} maxTime="10"></Step>
          {this.state.stepIndex > 1 &&
            <button onClick={this.decreaseStepIndex}>Prev</button>
          }
          <button onClick={this.increaseStepIndex}>Next</button>
        </div>

    );
  }
}
