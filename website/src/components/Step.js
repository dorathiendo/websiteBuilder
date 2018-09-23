import React, { Component } from 'react';
import '../styles/step.css';

export default class Step extends Component {
  constructor(props){
    super(props);
    this.state = {
      stepIndex: 0,
      isAgitateStep: true,
      agitateTimer: 15,
      invertTimer: 30,
      instruction: '-'
    }
    this.data = this.props.data[this.state.stepIndex];
    if(this.timer){
      clearInterval(this.timer)
    }
    this.startTimer = this.startTimer.bind(this);
    this.increaseStepIndex = this.increaseStepIndex.bind(this);
    this.decreaseStepIndex = this.decreaseStepIndex.bind(this);
  }
  componentDidMount(){
    this.setState({ count: this.data.maxTime });
    // this.setState({ agitateTimer: (this.data.agitateTime)? this.data.agitateTime : 0 });
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  startTimer () {
    clearInterval(this.timer);
    if((this.data.type == "agitate") || (this.data.type == "agitateWait")){
      document.getElementById("agitate_sound").play();
      this.setState({instruction: 'Agitate'});
    }
    this.timer = setInterval(this.tick.bind(this), 1000);
  }
  tick () {
    if(this.state.count <= 0){
      document.getElementById("done_sound").play();
      this.setState({instruction: 'Done'});
      clearInterval(this.timer)
    } else {
      this.setState({count: (this.state.count - 1)});
      this.updateInstruction();
    }
  }
  updateInstruction(){
    switch(this.data.type){
      case 'agitate':
        if(this.state.isAgitateStep && this.state.agitateTimer > 1){
            const curAgitateTimer = this.state.agitateTimer - 1;
            this.setState({agitateTimer: curAgitateTimer});
        } else if(this.state.isAgitateStep && this.state.agitateTimer == 1) {
            this.setState({instruction: 'Wait'});
            document.getElementById("wait_sound").play();
            this.setState({isAgitateStep: false});
        } else if(this.state.invertTimer > 1) {
            const curInvertTimer = this.state.invertTimer - 1;
            this.setState({invertTimer: curInvertTimer});
        } else {
            this.setState({instruction: 'Invert'});
            document.getElementById("invert_sound").play();
            this.setState({invertTimer: 30});
        }
        console.log(`Count: ${this.state.count}, agitateTime: ${this.state.agitateTimer}, invertTimer: ${this.state.invertTimer}`);
        break;
      case 'agitateWait':
        if(this.state.isAgitateStep && this.state.agitateTimer > 1){
            const curAgitateTimer = this.state.agitateTimer - 1;
            this.setState({agitateTimer: curAgitateTimer});
        } else if(this.state.isAgitateStep && this.state.agitateTimer == 1) {
            this.setState({instruction: 'Wait'});
            document.getElementById("wait_sound").play();
            this.setState({isAgitateStep: false});
        }
        break;
      case 'wait':
        this.setState({instruction: 'Wait'});
        break;
      default:
        break;
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
  increaseStepIndex(){
    var currentIndex = this.state.stepIndex + 1;
    if(currentIndex < this.props.data.length){
      this.setState({ stepIndex: currentIndex });
      this.data = this.props.data[currentIndex];
      this.setState({ count: this.data.maxTime });
      clearInterval(this.timer);
    }
  }
  decreaseStepIndex(){
    var currentIndex = this.state.stepIndex - 1;
    if(currentIndex >= 0){
      this.setState({ stepIndex: currentIndex });
      this.data = this.props.data[currentIndex];
      this.setState({ count: this.data.maxTime });
      clearInterval(this.timer);
    }
  }
  selectOptions(){
    var maxTime = this.data.maxTime;
    if(this.data.options){
      var options;
      if(this.data.options.push){
        var op = this.data.options.push.map((a) => {
          return <option value={a.amount}>{a.label}</option>
        });
        options = <select onChange={(e) => {
          let c = maxTime * parseFloat(e.target.value);
          this.setState({ count: c });
        }}>{op}</select>
      }
      if(this.data.options.customTime){
        options = <input type="text" size="50" placeholder={this.data.options.customTime.label}
          onChange={(e) => {
            let c = parseFloat(e.target.value) * 60;
            this.setState({ count: c});
          }} />
      }
      if(this.data.options.temp){
        var op = this.data.options.temp.map((a) => {
          return <option value={a.amount}>{a.label}</option>
        });
        options = <select onChange={(e) => {
          this.setState({ count: e.target.value })
        }}>{op}</select>
      }
      return (
        <div>{options}</div>
      )
    }
  }
  render() {
    return (
        <div className="step">
          <h1>Step {this.state.stepIndex + 1}: {this.data.name}</h1>
          {this.selectOptions()}
          { this.data.maxTime > 0 &&
            <h2 className="timer">{this.toHHMMSS(this.state.count)}</h2>
          }
          <h3 className="instruction">{this.state.instruction}</h3>
          <div className="buttonWrapper">
            {this.data.maxTime > 0 &&
              <button onClick={this.startTimer}>Start</button>
            }
          </div>
          <div className="buttonWrapper">
            <button onClick={this.decreaseStepIndex}>Prev</button>
            <button onClick={this.increaseStepIndex}>Next</button>
          </div>
        </div>

    );
  }
}
