import React, { Component } from 'react';
class Event extends Component {
  state = {
    collapsed: true
  }

  expandEvent = (event) => {
    const checkEvent = this.state.collapsed;
    
    if (checkEvent) {
      this.setState({
        collapsed: false
      })
    } else {
      this.setState({
        collapsed: true
      })
    }
  };

  render() {
    const { event } = this.props;

    return (
      <div className="event">
        <div className="event-description">{event.description}</div>
        <div className="event-time">{event.start.dateTime}</div>
        <div className="event-location">{event.location}</div>
        <button className="button__show-details" onClick={() => this.expandEvent(event)}>Show details</button>
      </div>
    );
  }
}

export default Event;
