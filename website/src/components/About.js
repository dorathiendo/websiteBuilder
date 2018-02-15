import React, { Component } from 'react';
import AnimatedWrapper from "./AnimatedWrapper";
import '../styles/content.css';

class About extends Component {
  render() {
    return (
        <div>
          <h1>About</h1>
        </div>

    );
  }
}

const AboutComponent = AnimatedWrapper(About);
export default AboutComponent;