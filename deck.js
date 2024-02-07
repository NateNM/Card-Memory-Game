const SUITS = ["♥", "♦", "♠", "♣"];
const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

class Deck {
    constructor() {
        this.cards = generateDeck();
    }

    shuffle() {
        this.cards.sort(() => Math.random() - 0.5);
    }
}


function generateDeck() {
    let deck = [];
    for (let suit of SUITS) {
        for (let value of VALUES) {
            let colour = (suit === "♥" || suit === "♦") ? "red" : "black";
            deck.push(new Card(value, suit, colour));
        }
    }
    deck.push(new Card("Joker", "🃏", "black"));
    deck.push(new Card("Joker", "🃏", "red"));

    return deck;
}

class Card {
    constructor(value, suit, colour) {
        this.value = value;
        this.suit = suit;
        this.colour = colour;
    }
}

const deck = new Deck();
// before
console.log(deck.cards); 

// after shuffle
deck.shuffle();
console.log(deck.cards)
