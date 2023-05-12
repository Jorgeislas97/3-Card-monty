// Select all card elements
const cards = document.querySelectorAll(".card");
// Select the $1 bet button
const bet1 = document.getElementById("bet-1");
// Select the $100 bet button
const bet100 = document.getElementById("bet-100");
// Select the money gauge element
const moneyGauge = document.getElementById("money-gauge");
// Select the status message element
const statusMsg = document.getElementById("status-msg");
// Create a reset button element
const resetButton = document.createElement("button");

// Initialize the wallet value
let wallet = 100;
// Initialize the selected bet value
let selectedBet = null;
// Initialize the game over status
let gameOver = false;

// Set the text and styles for the reset button
resetButton.textContent = "Reset Game";
resetButton.style.display = "none";
// click event listener to reset the game state
resetButton.addEventListener("click", () => {
    wallet = 100;
    updateWallet();
    statusMsg.textContent = "";
    resetButton.style.display = "none";
    gameOver = false;
    selectedBet = null;
});
// the reset button to the DOM
document.body.appendChild(resetButton);

// Function to update the wallet and game state
function updateWallet() {
    moneyGauge.textContent = `$${wallet}`;
    if (wallet === 0) {
        statusMsg.textContent = "You lost!";
        resetButton.style.display = "inline";
        gameOver = true;
    } else if (wallet < 0) {
        statusMsg.textContent = "RUN!!!";
        resetButton.style.display = "inline";
        gameOver = true;
    }
}

// Function to check if the player has won or lost
function checkWinner(cardIndex) {
    if (gameOver) {
        return;
    }

    if (selectedBet === null) {
        statusMsg.textContent = "Place a bet first!";
        return;
    }

    let winningIndex = Math.floor(Math.random() * 3);

    // Reduce winning odds to 1% when betting $100
    if (selectedBet === 100) {
        if (Math.random() > 0.01) {
            winningIndex = (cardIndex + 1) % 3;
        }
    }

    if (cardIndex === winningIndex) {
        wallet += selectedBet;
        statusMsg.textContent = "You won!";
    } else {
        wallet -= selectedBet;
        statusMsg.textContent = "You lost!";
    }

    updateWallet();
    selectedBet = null;
}

// Add click event listeners to each card
cards.forEach(card => {
    card.addEventListener("click", () => {
        checkWinner(parseInt(card.getAttribute("data-index")));
    });
});

// Add click event listener to the $1 bet button
bet1.addEventListener("click", () => {
    selectedBet = 1;
    statusMsg.textContent = "You bet $1";
});

// Add click event listener to the $100 bet button
bet100.addEventListener("click", () => {
    selectedBet = 100;
    statusMsg.textContent = "You bet $100";
});
