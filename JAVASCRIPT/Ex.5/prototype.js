function Event(name, seats) {
    this.name = name;
    this.seats = seats;
  }
  
  Event.prototype.checkAvailability = function () {
    return this.seats > 0;
  };
  
  const myEvent = new Event("Dance Night", 20);
  console.log(Object.entries(myEvent));
  