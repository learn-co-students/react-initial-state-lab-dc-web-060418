// your Bomb code here!
import React, { Component } from 'react';

class Bomb extends Component {

  constructor(props) {
    super(props)
    this.state = {secondsLeft: this.props.initialCount}
  }

  // incrementSecondsLeft = () => {
  //   const downOne = this.state.secondsLeft - 1
  //   this.setState({secondsLeft: downOne})
  // }

  returnStatement = (seconds) => {
    let returnValue = ""
    if (seconds > 0) {
      // this.incrementSecondsLeft()
      returnValue = `${this.state.secondsLeft} seconds left before I go boom!`
    } else {
      returnValue = `Boom!`
    }
    return returnValue
  }

  render() {



    return (
      <p>{this.returnStatement(this.state.secondsLeft)}</p>
    )
  }

}

export default Bomb
