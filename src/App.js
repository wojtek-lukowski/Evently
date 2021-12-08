import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import { mockData } from './mock-data';
import NumberOfEvents from './NumberOfEvents';

class App extends Component {

  state = {
    events: []
  }

  render() {
    return (
      <div className="App">
        <CitySearch />
        <NumberOfEvents />
        <EventList events={this.state.events}/>
      </div>
    );
  }
}

export default App;
