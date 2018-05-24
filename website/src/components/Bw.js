import React, { Component } from 'react';
import '../styles/content.css';

import Step from '../components/Step.js';
import StepData from '../data/bwSteps.json';

export default class Color extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <div className="contentSection">
          <h1>Black & White</h1>
          <Step data={StepData}></Step>
        </div>
    );
  }
}
