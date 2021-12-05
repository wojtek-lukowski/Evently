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
      <input type="number" value={this.state.numberOfEvents} id="NumberOfEvents" onChange={(newNumber) => this.setNumber(newNumber)} />
      </div>
    );
  }
}

export default NumberOfEvents;