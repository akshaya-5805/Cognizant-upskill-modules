const events = [
    { name: "Yoga Day", date: "2025-06-01", seats: 5 },
    { name: "Old Event", date: "2024-01-01", seats: 0 },
  ];
  
  const today = new Date();
  
  events.forEach((event) => {
    const isUpcoming = new Date(event.date) > today;
    const hasSeats = event.seats > 0;
  
    if (isUpcoming && hasSeats) {
      console.log(`Available: ${event.name}`);
    } else {
      console.log(`Skipping: ${event.name}`);
    }
  });
  
  function register(event) {
    try {
      if (event.seats <= 0) throw new Error("No seats available");
      event.seats--;
      console.log(`Registered for ${event.name}`);
    } catch (e) {
      console.error(e.message);
    }
  }
  