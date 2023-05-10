// Select all card elements
const cards = document.querySelectorAll(".card");

// Select the status message element
const statusMsg = document.getElementById("status-msg");

// Create a reset button element
const resetButton = document.createElement("button");

resetButton.textContent = "Reset Game";
resetButton.style.display = "none";




let winningIndex = Math.floor(Math.random() * 3);