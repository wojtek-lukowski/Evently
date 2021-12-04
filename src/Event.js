import React, { Component } from 'react';

class Event extends Component {
  
  render() {
    // const { event } = this.props;

    return (
      <div className="event">
        <div className="event-time"></div>
        <div className="event-name"></div>
        <div className="event-location"></div>
        <button className="button-show-details">Show details</button>
      </div>
    );
  }
}

export default Event;
