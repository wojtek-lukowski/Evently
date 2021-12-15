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
    const { collapsed } = this.state;
    console.log('event state collapsed:', this.state.collapsed);

    return (
      <div className="event">
        
        <div className="event-summary">
          <h3>{event.summary}</h3></div>
        <div className="event-time">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z" fill="white"/>
          <path d="M13 7H11V12.414L14.293 15.707L15.707 14.293L13 11.586V7Z" fill="white"/>
        </svg>
          {event.start.dateTime}</div>
        <div className="event-location">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 2C9.87827 2 7.84344 2.84285 6.34315 4.34315C4.84285 5.84344 4 7.87827 4 10C4 11.892 4.402 13.13 5.5 14.5L12 22L18.5 14.5C19.598 13.13 20 11.892 20 10C20 7.87827 19.1571 5.84344 17.6569 4.34315C16.1566 2.84285 14.1217 2 12 2V2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
          {event.location}</div>
        <button className="button__show-details" onClick={() => this.expandEvent(event)}>{collapsed ? "Show details" : "Hide details"}</button>
        
        {!collapsed &&
            // <div className={`event-details ${this.state.collapsed ? "hide" : "show"}`}>
            <div className="event-details">
              <div className="event-description">{event.description}</div>
            </div>
          }
      </div>
    );
  }
}

export default Event;
