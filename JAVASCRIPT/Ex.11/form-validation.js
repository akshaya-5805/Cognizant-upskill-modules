document.querySelector("#registerForm").onsubmit = (e) => {
    e.preventDefault();
    const { name, email, event } = e.target.elements;
  
    if (!name.value || !email.value) {
      document.querySelector("#errorMsg").textContent = "Please fill all fields.";
      return;
    }
  
    console.log(name.value, email.value, event.value);
  };
  