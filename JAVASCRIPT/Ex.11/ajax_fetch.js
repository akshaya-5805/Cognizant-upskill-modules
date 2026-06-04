function submitRegistration(data) {
    fetch("https://mockapi.com/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => alert("Registered!"))
      .catch(() => alert("Error"))
      .finally(() => setTimeout(() => console.log("Simulated delay"), 1000));
  }
  