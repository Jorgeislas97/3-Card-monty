const cards = document.querySelectorAll(".card");
const bet1 = document.getElementById("bet-1");
const bet100 = document.getElementById("bet-100");
const moneyGauge = document.getElementById("money-gauge");
const statusMsg = document.getElementById("status-msg");
const resetButton = document.createElement("button");

let wallet = 100;
let selectedBet = null;
let gameOver = false;

resetButton.textContent = "Reset Game";
resetButton.style.display = "none";
resetButton.addEventListener("click", () => {
    wallet = 100;
    updateWallet();
    statusMsg.textContent = "";
    resetButton.style.display = "none";
    gameOver = false;
    selectedBet = null;
});
document.body.appendChild(resetButton);

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

cards.forEach(card => {
    card.addEventListener("click", () => {
        checkWinner(parseInt(card.getAttribute("data-index")));
    });
});

bet1.addEventListener("click", () => {
    selectedBet = 1;
    statusMsg.textContent = "You bet $1";
});

bet100.addEventListener("click", () => {
    selectedBet = 100;
    statusMsg.textContent = "You bet $100";
});
