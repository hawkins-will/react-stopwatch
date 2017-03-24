import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor(props){
    super()
    this.state = {
      counter: 0
    }
  }
  start() {
    this.timer = setInterval(()=> {
      this.state.counter++
      this.setState({counter: this.state.counter})}, 1000)
    }
  pause() {
    clearInterval(this.timer)
  }
  reset() {
    clearInterval(this.timer)
    this.setState({counter: 0})
  }
  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.counter}</h1>
        <div className="controls">
          <button onClick={() => this.reset()}>Reset</button>
          <button onClick={() => this.start()}>Start</button>
          <button onClick={() => this.pause()}>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
