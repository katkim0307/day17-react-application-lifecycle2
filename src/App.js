import React, {Component} from 'react';

class Lifecycle2 extends Component {
  constructor() {
    super();
    this.state={
      count: 0,
      intervalID: 0,
      pause: false,
    };
  };

  componentDidMount () {
    // start our ticker
    let intervalID = setInterval(() => this.setState({count: this.state.count+1}), 1000);
    this.setState ({ intervalID: intervalID })
  };

  // shouldComponentUpdate (nextProps, nextState) {
  //   // We only want to show #s that are multiples of 3
  //   // return this.state.count%3===0;
  //   return nextState.count%3 === 0;
  // };

  pauseOnOff = () => {
    this.setState ({pause: !this.state.pause});
    if(!this.state.pause) {
      clearInterval(this.state.intervalID);
    } 
    else {
      this.componentDidMount(); 
    }
  };

  clear = () => {
    this.setState ({ count: 0 })
  };

  render() {
    let {count, pause} = this.state;
    return (
      <div>
        <p>The ticker is: {count}</p>
        <button type="button" onClick={this.pauseOnOff}>{pause ? 'Resume':'Pause'}</button>
        <button type="button" onClick={this.clear}>Reset</button>
      </div>
    )
  };
};

export default Lifecycle2;