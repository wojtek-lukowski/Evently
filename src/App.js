import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
import { WarningAlert } from './Alert';
import Header from './Header';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';


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

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return { city, number };
    })
    return data;
  }

  render() {

    return (
      <div className="App">
         { !navigator.onLine ? (<WarningAlert text='You are offline. The events may not be updated.' />) : (<WarningAlert text=' ' />)}
        <Header />
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} setNumber={this.setNumber}/>
        <ScatterChart width={730} height={250}
          margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="city" name="city" type="category" />
          <YAxis dataKey="number" name="number of events" type="number" allowDecimals={false} />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter data={this.getData()} fill="var(--purple-dark)" />
        </ScatterChart>
        <EventList events={this.state.events}/>
      </div>
    );
  }
}

export default App;
