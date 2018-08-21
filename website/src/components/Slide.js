import React, { Component } from 'react';
import '../styles/content.css';

import Step from '../components/Step.js';
import StepData from '../data/slideSteps.json';

export default class Slide extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <div className="contentSection">
          <h1>Slide</h1>
          <Step data={StepData}></Step>
        </div>
    );
  }
}
