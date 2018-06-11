import React, { Component } from 'react';

export default class Counter extends Component {
  state={
    counter:0
  }
  get currentCounterPlusOne (){
    return this.state.counter+1
  }
  handleIncrement =()=>{
    // this.setState({
    //   counter: this.state.counter+1
    // })
    // this.setState({
    //   counter: this.state.counter+1
    // })
    // this.setState({
    //   counter: this.state.counter+1
    // })

    this.setState((state)=>{
      return {
        counter: state.counter+1
      }
    })
    this.setState((state)=>{
      return {
        counter: state.counter+1
      }
    })
    this.setState((state)=>{
      return {
        counter: state.counter+1
      }
    })

    console.log(this.state.counter)
  }
  handleDecrement =()=>{
    this.setState({
      counter: this.state.counter-1
    })
  }
  
  handleReset =()=>{
    this.setState({
      counter: 0
    })
  }
  render() {
    return (
      <section className="Counter">
        <h1>Count: {this.state.counter}</h1>
        <button onClick={this.handleIncrement} className="full-width">Increment</button>
        <button onClick={this.handleDecrement} className="full-width">Decrement</button>
        <button onClick={this.handleReset} className="full-width">Reset</button>
        <h1>Count: {this.currentCounterPlusOne}</h1>
      </section>
    );
  }
}
