import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
import { WarningAlert } from './Alert';
import Header from './Header';

class App extends Component {

  state = {
    events: [],
    locations: [],
    numberOfEvents: 30,
    currentLocation: 'all'
  }

  async componentDidMount() {
    const { numberOfEvents } = this.state;
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, numberOfEvents),
          locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  updateEvents = (location, numberOfEvents) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, this.state.numberOfEvents),
      });
    });
  }
  
  setNumber = (e) => {
    const newNumber = parseInt(e.target.value);
    this.setState({
      numberOfEvents: newNumber
    })
    this.updateEvents(this.state.currentLocation, this.state.numberOfEvents);
  }

  render() {

    return (
      <div className="App">
         { !navigator.onLine ? (<WarningAlert text='You are offline. The events may not be updated.' />) : (<WarningAlert text=' ' />)}
        <Header />
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} setNumber={this.setNumber}/>
        <EventList events={this.state.events}/>
      </div>
    );
  }
}

export default App;
