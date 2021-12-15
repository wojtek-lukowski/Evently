Feature: Show/hide event details

  Scenario: An event element is collapsed by default
    Given the user opens the app
    When the events are displayed
    Then all event elements should be collapsed

  Scenario: User can expand an event to see its details
    Given the list of collapsed event elements has been displayed
    When user clicks the Show Deatils button of an event card
    Then the element will expand showing the details of the event

  Scenario: User can collapse an event to hide its details
    Given the event element is expanded
    When user clicks the Hide Deatils button of an event card
    Then the element will collapse
