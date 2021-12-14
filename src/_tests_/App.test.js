import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import { extractLocations, getEvents } from '../api';
import { mockData } from '../mock-data';

describe('<App /> component' , () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  test('render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  })

  test('render NumberOfEvents', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  })

  test('default number of events = 30', () => {
    expect(AppWrapper.state('numberOfEvents')).toBe(30);
  })

  //fails
  test('setNumber changes the state (number of events)', () => {
    const newNumber = 10;
    const newState = setNumber(newNumber);
    expect(AppWrapper.state('numberOfEvents')).toBe(newState);
  })
});

describe('<App /> integration', () => {
test('App passes "events" state as a prop to EventList', () => {
  const AppWrapper = mount(<App />);
  const AppEventsState = AppWrapper.state('events');
  expect(AppEventsState).not.toEqual(undefined);
  expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
  AppWrapper.unmount();
});

test('App passes "locations" state as a prop to CitySearch', () => {
  const AppWrapper = mount(<App />);
  const AppLocationsState = AppWrapper.state('locations');
  expect(AppLocationsState).not.toEqual(undefined);
  expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
  AppWrapper.unmount();
});

test('get list of events matching the city selected by the user', async () => {
  const AppWrapper = mount(<App />);
  const CitySearchWrapper = AppWrapper.find(CitySearch);
  const locations = extractLocations(mockData);
  CitySearchWrapper.setState({ suggestions: locations });
  const suggestions = CitySearchWrapper.state('suggestions');
  const selectedIndex = Math.floor(Math.random() * (suggestions.length));
  const selectedCity = suggestions[selectedIndex];
  await CitySearchWrapper.instance().handleItemClicked(selectedCity);
  const allEvents = await getEvents();
  const eventsToShow = allEvents.filter(event => event.location === selectedCity);
  expect(AppWrapper.state('events')).toEqual(eventsToShow);
  AppWrapper.unmount();
});

test('get list of all events when user selects "See all cities"', async () => {
  const AppWrapper = mount(<App />);
  const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
  await suggestionItems.at(suggestionItems.length - 1).simulate('click');
  const allEvents = await getEvents();
  expect(AppWrapper.state('events')).toEqual(allEvents);
  AppWrapper.unmount();
});

test('App passes numberOfEvents as a prop to NumberOfEvents', () => {
  const AppWrapper = mount(<App />);
  const AppNumberOfEventsState = AppWrapper.state('numberOfEvents');
  expect(AppNumberOfEventsState).not.toEqual(undefined);
  expect(AppWrapper.find(NumberOfEvents).props().numberOfEvents).toEqual(AppNumberOfEventsState);
  AppWrapper.unmount();
})

//fails
test('App passes setNumber as a prop to NumberOfEvents', () => {
  const AppWrapper = mount(<App />);
  const setNumber = AppWrapper.find('setNumber');
  expect(setNumber).not.toEqual(undefined);
  expect(AppWrapper.find(NumberOfEvents).props().setNumber()).toEqual(setNumber());
  AppWrapper.unmount();
})

//fails
  test('user can change the number of displayed events', () => {
    const AppWrapper = mount(<App />);
    const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
    const newNumber = 10;
    NumberOfEventsWrapper.find('#NumberOfEvents').simulate('change', newNumber);
    expect(AppWrapper.state('numberOfEvents')).toBe(10);
    AppWrapper.unmount();
  })

});