const boxes = document.querySelectorAll(".box");


// Adding card attributes to each box element
for (let i = 0; i < boxes.length; i++) {
    const card = deck.cards[i];
    const cardFront = boxes[i].querySelector(".front");
    if (card.value == "Joker") {
        cardFront.setAttribute("data-value", card.value);
    } else {
        cardFront.setAttribute("data-value", card.value + card.suit);
    }
    cardFront.setAttribute("data-colour", card.colour)
    cardFront.textContent = card.suit;
}


// Adding click event listener to each box
boxes.forEach(box => {
    box.addEventListener('click', function() {
        this.classList.toggle('flip');
    });
});
