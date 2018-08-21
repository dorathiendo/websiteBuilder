import React, { Component } from 'react';
import '../styles/step.css';

export default class Step extends Component {
  constructor(props){
    super(props);
    this.state = {
      stepIndex: 0,
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
    this.setState({ agitateTimer: (this.data.agitateTime)? this.data.agitateTime : 0 });
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  startTimer () {
    clearInterval(this.timer);
    if((this.data.type == "agitate") || (this.data.type == "agitateWait")){
      document.getElementById("agitate_sound").play();
    }
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
    if(this.data.type == "agitate"){
      if((this.state.count < this.data.maxTime) && (this.state.count >= this.data.maxTime - 15)){
        this.setState({agitateTimer: (this.state.agitateTimer - 1)});
        this.setState({instruction: 'Agitate'});
      } else if((this.state.count < this.data.maxTime - 15) && (this.state.invertTimer > 0)){
        this.setState({invertTimer: (this.state.invertTimer - 1)});
        this.setState({instruction: 'Wait'});
      } else if(this.state.count < 15){
        if(this.state.count == 14){
          document.getElementById("pour_sound").play();
        }
        this.setState({instruction: 'Pour Out'});
      } else {
        this.setState({agitateTimer: 15});
        this.setState({invertTimer: 30});
        this.setState({instruction: 'Invert 4x'});
      }
    } else if(this.data.type == 'agitateWait'){
      if((this.state.count < this.data.maxTime) && (this.state.count >= this.data.maxTime - 15)){
        this.setState({agitateTimer: (this.state.agitateTimer - 1)});
        this.setState({instruction: 'Agitate'});
      } else if(this.state.count < 15){
        this.setState({instruction: 'Pour Out'});
      } else {
        this.setState({instruction: 'Wait'});
      }
    } else {
      if(this.state.count < 15){
        if(this.state.count == 14){
          document.getElementById("pour_sound").play();
        }
        this.setState({instruction: 'Pour Out'});
      } else {
        this.setState({instruction: 'Wait'});
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
  increaseStepIndex(){
    var currentIndex = this.state.stepIndex + 1;
    if(currentIndex <= this.props.data.length){
      this.setState({ stepIndex: currentIndex });
      this.data = this.props.data[currentIndex];
      this.setState({ count: this.data.maxTime });
      clearInterval(this.timer);
    }
  }
  decreaseStepIndex(){
    var currentIndex = this.state.stepIndex - 1;
    if(currentIndex >= 1){
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
          <h2 className="timer">{this.toHHMMSS(this.state.count)}</h2>
          <h3 className="instruction">{this.state.instruction}</h3>
          <div className="buttonWrapper">
            <button onClick={this.startTimer}>Start</button>
          </div>
          <div className="buttonWrapper">
            <button onClick={this.decreaseStepIndex}>Prev</button>
            <button onClick={this.increaseStepIndex}>Next</button>
          </div>
        </div>

    );
  }
}
