function greet(name = "Guest") {
    console.log(`Hello, ${name}`);
  }
  
  const event = { name: "Art Show", date: "2025-05-25" };
  const { name, date } = event;
  
  const copiedEvents = [...events]; // clone array
  