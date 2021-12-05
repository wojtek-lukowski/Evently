import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component' , () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  })

  test('renders the input field', () => {
    expect(NumberOfEventsWrapper.find('.NumberOfEvents')).toHaveLength(1);
  })

  test('default number of events = 32', () => {
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(32);
  })

  test('user can change the number of events', () => {
  const newNumber = 10;
  NumberOfEventsWrapper.find('#NumberOfEvents').simulate('change', newNumber);
  expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(10);
  })
})