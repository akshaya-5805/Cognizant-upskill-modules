const eventList = document.querySelector("#eventList");

function displayEvent(event) {
  const card = document.createElement("div");
  card.textContent = `${event.name} - ${event.date}`;
  eventList.appendChild(card);
}