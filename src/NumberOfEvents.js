import React, { Component } from 'react';
import './App.css';

class NumberOfEvents extends Component {

  render() {
    const { numberOfEvents, setNumber } = this.props;

    return (
      <div className="NumberOfEvents">
      <p className="number-of-events">Show</p>
      <input type="number" min="5" max="50" step="5"
      value={numberOfEvents} id="NumberOfEvents" onChange={(e) => setNumber(e)} 
      />
      <p className="number-of-events">events</p>
      </div>
    );
  }
}

export default NumberOfEvents;