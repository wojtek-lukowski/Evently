import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<EventList /> component' , () => {
let EventWrapper, event;
beforeAll(() => {
  event = mockData[0];
  EventWrapper = shallow(<Event event={event}/>);
})

test('renders event card', () => {
  expect(EventWrapper.find('.event')).toHaveLength(1);
});

test('event card renders event description/title', () => {
  expect(EventWrapper.find('.event-description')).toHaveLength(1);
  });

test('event card renders time', () => {
expect(EventWrapper.find('.event-time')).toHaveLength(1);
});

test('event card renders location', () => {
  expect(EventWrapper.find('.event-location')).toHaveLength(1);
  });

test('event card renders "show details" button', () => {
  expect(EventWrapper.find('.button__show-details')).toHaveLength(1);
  });

  test('event card is collapsed by default', () => {
    expect(EventWrapper.state('collapsed')).toBe(true);
  })

  test('user can expand events to see the details', () => {
    EventWrapper.setState({ collapsed: true });
    EventWrapper.find('.button__show-details').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(false);
  })

  test('user can collapse events to hide the details', () => {
    EventWrapper.setState({ collapsed: false });
    EventWrapper.find('.button__show-details').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(true);
  })

});