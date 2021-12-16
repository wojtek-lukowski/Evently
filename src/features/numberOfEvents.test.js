import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import EventList from '../EventList';
import App from '../App';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/numberOfEvents.feature');

defineFeature(feature, test => {
  test('When user hasn’t specified a number, 30 is the default number', ({ given, when, then }) => {
    given('the user did not set the desired number of events to be displayed at a time', () => {
    });

    let EventListWrapper;
    when('the events are displayed', () => {
      EventListWrapper = shallow(<EventList events={mockData} />);
      expect(EventListWrapper.find('.EventList')).toHaveLength(1);
    });

    let AppWrapper;
    then('30 events will be displayed', () => {
      AppWrapper = mount(<App />);
      expect(AppWrapper.state('numberOfEvents')).toBe(30);
    });
  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {
    
    let AppWrapper;
    given('the user set the desired number of events to be displayed at a time', () => {
      AppWrapper = shallow(<App />);
      AppWrapper.setState({ numberOfEvents: 10 });
    });

    when('the events are displayed', () => {
    });

    then('the desired (set by user) number of events will be displayed', () => {
      expect(AppWrapper.state('numberOfEvents')).toBe(10);
    });
  });

})