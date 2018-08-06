// your Bomb code here!

import React,{ Component } from "react";

class Bomb extends Component {
    constructor(props){
        super(props)
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render(){
        let returnText = (this.state.secondsLeft === 0) ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
        return(<div>{returnText}</div>)
    }
}


export default Bomb;