const boxes = document.querySelectorAll(".box");

for (let i = 0; i < boxes.length; i++) {
    const card = deck.cards[i];
    if (card.value == "Joker") {
        boxes[i].setAttribute("data-value", card.value);
    } else {
        boxes[i].setAttribute("data-value", card.value + card.suit);
    }
    boxes[i].setAttribute("data-colour", card.colour)
    boxes[i].textContent = card.suit;
}