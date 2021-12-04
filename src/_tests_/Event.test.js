import React from 'react';
import { shallow } from 'enzyme';
import EventList from '../EventList';
import Event from '../Event';
import { mockData } from '../mock-data';
import eventStart from '../api';

describe('<EventList /> component' , () => {
let EventWrapper, start;
beforeAll(() => {
  EventWrapper = shallow(<Event />);
})

test('renders event', () => {
  expect(EventWrapper.find('.event')).toHaveLength(1);
});

test('event card renders time', () => {
expect(EventWrapper.find('.event-time')).toHaveLength(1);
});

test('event card renders name', () => {
  expect(EventWrapper.find('.event-name')).toHaveLength(1);
  });

test('event card renders location', () => {
  expect(EventWrapper.find('.event-location')).toHaveLength(1);
  });

  test('event card renders "show details" button', () => {
    expect(EventWrapper.find('.button-show-details')).toHaveLength(1);
    });

});