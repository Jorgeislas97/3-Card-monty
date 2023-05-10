const cards = document.querySelectorAll(".card");

function checkWinner(cardIndex) {
    if (gameOver) {
        return;
    }

    if (selectedBet === null) {
        statusMsg.textContent = "Place a bet first!";
        return;
    }

    let winningIndex = Math.floor(Math.random() * 3);
