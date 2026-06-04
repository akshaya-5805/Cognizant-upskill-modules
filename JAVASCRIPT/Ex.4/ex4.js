function addEvent(name, date, category) {
    return { name, date, category, seats: 10 };
  }
  
  function registerUser(event) {
    if (event.seats > 0) event.seats--;
  }
  
  function createCategoryTracker(category) {
    let count = 0;
    return function () {
      count++;
      console.log(`Registrations in ${category}: ${count}`);
    };
  }
  
  const musicTracker = createCategoryTracker("Music");
  
  function filterEventsByCategory(events, callback) {
    return events.filter(callback);
  }
  