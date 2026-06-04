// Promise version
fetch("https://mockapi.com/events")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Async/Await version
async function getEvents() {
  try {
    const res = await fetch("https://mockapi.com/events");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}