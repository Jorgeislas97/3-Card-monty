// Select all card elements
const cards = document.querySelectorAll(".card");

// Select the status message element
const statusMsg = document.getElementById("status-msg");

// Create a reset button element
const resetButton = document.createElement("button");

const moneyGauge = document.getElementById("money-gauge");

const bet1 = document.getElementById("bet-1");

const bet100 = document.getElementById("bet-100");

let wallet = 100;

let selectedbet = null;

let gameover = false;

resetButton.textContent = "Reset Game";

resetButton.style.display = "none";

let winningIndex = Math.floor(Math.random() * 3);