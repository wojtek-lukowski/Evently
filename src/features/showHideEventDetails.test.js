import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { shallow } from 'enzyme';
import EventList from '../EventList';
import Event from '../Event';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showHideEventDetails.feature');

defineFeature(feature, test => {

  test('An event element is collapsed by default', ({ given, when, then }) => {
    given('the user opens the app', () => {
    });
    
    let EventListWrapper;
    when('the events are displayed', () => {
      EventListWrapper = shallow(<EventList events={mockData} />);
      expect(EventListWrapper.find('.EventList')).toHaveLength(1);
      });
      
    let EventWrapper;
    then('all event elements should be collapsed', () => {
      EventWrapper = shallow(<Event event={mockData[0]} />);
      expect(EventWrapper.state('collapsed')).toBe(true);
    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
    let EventWrapper;
      given('the list of collapsed event elements has been displayed', () => {
        EventWrapper = shallow(<Event event={mockData[0]} />);
        expect(EventWrapper.state('collapsed')).toBe(true);
      });

      when('user clicks the Show Deatils button of an event card', () => {
        const ShowDetailsButton = EventWrapper.find('.button__show-details')
        ShowDetailsButton.simulate('click');
      });

      then('the element will expand showing the details of the event', () => {
        expect(EventWrapper.state('collapsed')).toBe(false);
      });
  });

  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    let EventWrapper;  
    given('the event element is expanded', () => {
      EventWrapper = shallow(<Event event={mockData[0]} />);
      EventWrapper.setState({ collapsed: false });
      });

      when('user clicks the Hide Deatils button of an event card', () => {
        const ShowDetailsButton = EventWrapper.find('.button__show-details')
        ShowDetailsButton.simulate('click');
      });

      then('the element will collapse', () => {
        expect(EventWrapper.state('collapsed')).toBe(true);
      });
  });

})
