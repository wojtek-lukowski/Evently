Feature: Cuustom number of events

  Scenario: When user hasn’t specified a number, 30 is the default number
    Given the user did not set the desired number of events to be displayed at a time
    When the events are displayed
    Then 30 events will be displayed

  Scenario: User can change the number of events they want to see
    Given the user set the desired number of events to be displayed at a time
    When the events are displayed
    Then the desired (set by user) number of events will be displayed
