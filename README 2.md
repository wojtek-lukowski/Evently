# evently

Evently is a serverless progressive web app bringing to you latest info on events happening on cities aorundf the world.


SHOW/HIDE AN EVENT'S DETAILS

User story:

As a user, I want to be able to expand and collapse the events cards, so that I will am able to look at these that are of the most interest for me.


Scenario 1: An event element is collapsed by default
Given the events have been listed
When user selects a city
Then all event elements should be collapsed

Scenario 2: User can expand an event to see its details
Given the list of collapsed event elements has been displayed
When user selects an element
Then the element will expand showing the details of the event

Scenario 3: User can collapse an event to hide its details
Given the event element is expanded
When user clicks on it
Then the element will collapse

FEATURE 3: SPECIFY NUMBER OF EVENTS
User Story: 
As a user I want to be able to set the number of events to be displayed, so that  I do not use too much mobile data and I am not overwhelmed by seeing too many events at a time.
Scenario 1: When user hasn’t specified a number, 32 is the default number
Given the user did not set the desired number of events to be displayed at a time
When the events are displayed
Then 32 events will be displayed

Scenario 2: User can change the number of events they want to see
Given the user set the desired number of events to be displayed at a time
When the events are displayed
Then the desired (set by user) number of events will be displayed

FEATURE 4: USE THE APP WHEN OFFLINE
As a user, I want to be able to re-check the list of the events (to refresh my memory) even if I am off-line, so that I do not waste my mobile data for loading the same information couple of times.
Scenario 1: Show cached data when there’s no internet connection
Given the user opened the app
When there is no internet connection
Then the cache data will be displayed

Scenario 2: Show error when user changes the settings (city, time range)
Given the user opened the app and there is no internet connection
When user changes the settings (e.g. city)
Then the error will be displayed

FEATURE 5: DATA VISUALIZATION
As a visually oriented person, I want my app to show the graphs with data, so that I can immediately understand the most crucial part of it, without the need to read whole text. 
Scenario 1: Show a chart with the number of upcoming events in each city
Given the user selected the city
When the list of events is displayed
Then there will be also graphs/charts showing the number of upcoming events
