export const extractLocations = (events) => {
  var extractLocations = events.map((event) => event.location);
  var locations = [...new Set(extractLocations)];
  return locations;
};

export const eventStart = (events) => {
  var start = events.map((event) => event.start);
  return start;
};