import React, { Component } from 'react';
import '../styles/content.css';

import Step from '../components/Step.js';
import StepData from '../data/colorSteps.json';

export default class Color extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <div className="contentSection">
          <h1>Color</h1>
          <Step data={StepData}></Step>
        </div>
    );
  }
}