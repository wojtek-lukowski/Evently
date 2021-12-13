import React, { Component } from 'react';
import './App.css';

class NumberOfEvents extends Component {

  state = {
    numberOfEvents: 32
  }

  setNumber = (newNumber) => {
    this.setState({
      numberOfEvents: newNumber
    })
  }

  render() {

    return (
      <div className="NumberOfEvents">
        <p className="number-of-events">Show</p>
      <input type="number" value={this.state.numberOfEvents} id="NumberOfEvents" onChange={(newNumber) => this.setNumber(newNumber)} />
      <p className="number-of-events">events</p>
      </div>
    );
  }
}

export default NumberOfEvents;