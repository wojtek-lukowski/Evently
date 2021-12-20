import React, { Component } from 'react';
import './App.css';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {

  render() {
    const { numberOfEvents, setNumber } = this.props;
    const errorText = 'Number of events to display must be between 1 and 100';

    return (
      <div className="NumberOfEvents">
      { (numberOfEvents < 1 || numberOfEvents > 100) &&
          <ErrorAlert text={errorText}/>
      }
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