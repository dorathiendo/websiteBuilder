import React, { Component } from 'react';
import '../styles/content.css';

export default class Step extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: this.props.maxTime
    }
    this.startTimer = this.startTimer.bind(this);
  }
  componentWillUnmount () {
    clearInterval(this.timer)
  }
  startTimer () {
    clearInterval(this.timer)
    this.timer = setInterval(this.tick.bind(this), 1000)
  }
  tick () {
    if(this.state.count <= 0){
      clearInterval(this.timer)
    } else {
      this.setState({count: (this.state.count - 1)})
    }
  }
  toHHMMSS(seconds) {
    var sec_num = parseInt(seconds, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return minutes+':'+seconds;
}
  render() {
    return (
        <div>
          <h1>Step {this.props.stepIndex}</h1>
          <h2 className="timer">{this.toHHMMSS(this.state.count)}</h2>
          <button onClick={this.startTimer}>Start</button>
        </div>

    );
  }
}
