const events = [];

events.push({ name: "Music Fest", category: "Music" });
events.push({ name: "Cooking Workshop", category: "Food" });

const musicEvents = events.filter(e => e.category === "Music");

const cards = events.map(e => `${e.name} Event Card`);
console.log(cards);