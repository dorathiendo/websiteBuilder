import React, { Component } from 'react';
import '../styles/content.css';

export default class Step extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: this.props.data.maxTime,
      agitateTimer: 15,
      invertTimer: 30,
      instruction: '-'
    }
    if(this.timer){
      clearInterval(this.timer)
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
      this.setState({count: (this.state.count - 1)});
      this.updateInstruction();
    }
  }
  updateInstruction(){
    if(this.props.data.type == "agitate"){
      if((this.state.count < this.props.data.maxTime) && (this.state.count >= this.props.data.maxTime - 15)){
        this.setState({agitateTimer: (this.state.agitateTimer - 1)});
        this.setState({instruction: 'Agitate'});
      } else if((this.state.count < this.props.data.maxTime - 15) && (this.state.invertTimer > 0)){
        this.setState({invertTimer: (this.state.invertTimer - 1)});
        this.setState({instruction: 'Wait'});
      } else if(this.state.count < 15){
        this.setState({instruction: 'Pour Out'});
      } else {
        this.setState({agitateTimer: 15});
        this.setState({invertTimer: 30});
        this.setState({instruction: 'Invert 4x'});
      }
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
          <h1>Step {this.props.stepIndex}: {this.props.data.name}</h1>
          <h2 className="timer">{this.toHHMMSS(this.state.count)}</h2>
          <h3 className="instruction">{this.state.instruction}</h3>
          <button onClick={this.startTimer}>Start</button>
        </div>

    );
  }
}
