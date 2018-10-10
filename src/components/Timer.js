import React, { Component } from 'react';
import '../style/Timer.css';
import { reset } from 'ansi-colors';

//need some variable that indicates whether on break timer or main timer 
//start on main timer - if on break timer, initial time will switch to 5
//when main timer is 00 and seconds is 00, break timer will switch on
//when break timer is 00 and seconds is 00, main timer will switch on
//reset button will reset the current session to start? but will leave break and main as initially set up? or, reset to 25 and 5? 
//pause button that turns on or off the countdown

export default class Timer extends Component {
  constructor(props) {
    super(props)
    this.startCountdown = this.startCountdown.bind(this);
    this.countDown = this.countDown.bind(this);
    this.state = {
      timeMin: props.timeMin,
      timeSec: '0' + 0,
      breakMin: 5,
    }

    // this.componentDidMount = this.componentDidMount.bind(this);
    // this.componentWillUnmount = this.componentWillUnmount.bind(this);
  }

  //reset the timer function 



  startCountdown() {
    //need to make unable to click start twice
    
    this.setState({
      timeSec: 59
    });

    setInterval(() => this.countDown(), 1000);
  }

  //check if timeSec is 0
  //need to reset to 59 after countdown reaches 00 and switch to break timer;

  countDown() {
    if (this.state.timeSec === 0 && this.state.timeMin === 0) {
      reset()
    } else if (this.state.timeSec === 0) {
      
        this.setState((state) => ({
          timeSec: 60,
          timeMin: state.timeMin - 1
        }));
      
      //if timeMin is 0, 
      //reset to 59 and decrease timeMin by 1
      
    }

    //add a 0 if less than 10 seconds are left
    this.setState((state) => ({
      timeSec: state.timeSec - 1
    }));
  }

  render() {




    return (
      <div id="timer">
        <h2>Session Left</h2>
        <div id="time-remaining">{this.state.timeMin}:{this.state.timeSec}</div>
        <button className="btn" onClick={this.startCountdown}><i className="fas fa-play"></i></button>
        <button className="btn"><i className="fas fa-pause"></i></button>
        <button className="btn"> <i className="fas fa-undo"></i></button>
      </div>
    );
  }
}