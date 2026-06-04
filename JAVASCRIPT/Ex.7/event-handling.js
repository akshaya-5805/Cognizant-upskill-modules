document.querySelector("#registerBtn").onclick = () => {
    alert("You registered!");
  };
  
  document.querySelector("#categoryFilter").onchange = (e) => {
    console.log("Filter by:", e.target.value);
  };
  
  document.querySelector("#searchInput").onkeydown = (e) => {
    if (e.key === "Enter") {
      console.log("Searching for:", e.target.value);
    }
  };
  