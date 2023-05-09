let cards = [false, false, false];

cards[math.floor(math.random() *3 )] = true;

function pickCard(index) {
    if (cards[index]) {
        alert("You Won!");
    } else {
        alert("You Lost!");
    }
}