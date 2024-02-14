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


let flippedCards = [];

// Adding click event listener to each box
boxes.forEach(box => {
    box.addEventListener('click', function() {
        // Check if the clicked card is already flipped or if two cards are already flipped
        if (!this.classList.contains('flip') && flippedCards.length < 2) {
            this.classList.toggle('flip');
            flippedCards.push(this);
            
            // If two cards are flipped, check for a match
            if (flippedCards.length === 2) {
                const card1Value = flippedCards[0].querySelector('.front').getAttribute('data-value').slice(0,-1);
                const card1Colour = flippedCards[0].querySelector('.front').getAttribute('data-colour');
                console.log(card1Colour, card1Value)

                const card2Value = flippedCards[1].querySelector('.front').getAttribute('data-value').slice(0,-1);
                const card2Colour = flippedCards[1].querySelector('.front').getAttribute('data-colour');
                console.log(card2Colour, card2Value)

                if (card1Value === card2Value && card1Colour === card2Colour) {
                    flippedCards.forEach(card => {
                        card.classList.add('match'); // Apply matched class
                    });

                    console.log("Win!!!")
                    flippedCards = []
                } else {
                    // No match
                    // You can add your logic for handling no match here
                    // For example, flip the unmatched cards back after a short delay
                    setTimeout(() => {
                        flippedCards.forEach(card => card.classList.toggle('flip'));
                        flippedCards = [];
                    }, 1000); // Adjust the delay time as needed

                switchTurn()
                updateTurnMessage()
                }
            }
        }
    });
});

// Quit button
const quitButton = document.getElementById("quitBtn");

quitButton.addEventListener("click", function(){
    const confirmQuit = confirm("Are you sure you want to quit the game?");

    if (confirmQuit) {
        window.alert("It's sad to see you go but come back soon!!!")
        window.close();
    }
});


// Restart Button
const restartButton = document.getElementById("restartBtn");

restartButton.addEventListener("click", function() {
    const confirmRestart = confirm("Are you sure you want to restart the game?")

    if (confirmRestart) {
        window.location.reload()
    }
})



// Get the modal
const modal = document.getElementById('modal');

// Get the button that opens the modal
const startGameBtn = document.getElementById('startGameBtn');

// Get the <span> element that closes the modal
const closeBtn = document.getElementsByClassName('close')[0];

// When the page loads, show the modal
window.onload = function() {
  modal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// When the user clicks "Start Game", get player names and start the game
startGameBtn.addEventListener('click', function() {
  const player1Name = document.getElementById('player1Name').value;
  const player2Name = document.getElementById('player2Name').value;
  
  // You can do something with the player names, like start the game
  console.log('Player 1 Name:', player1Name);
  console.log('Player 2 Name:', player2Name);

  // Close the modal
  modal.style.display = 'none';
});



// Get player names 
// Get player name inputs from modal
const player1NameInput = document.getElementById('player1Name');
const player2NameInput = document.getElementById('player2Name');

// Get player name display elements
const player1NameDisplay = document.getElementById('player1NameDisplay');
const player2NameDisplay = document.getElementById('player2NameDisplay');

// Update player names based on input from modal
document.getElementById('startGameBtn').addEventListener('click', function() {
  player1NameDisplay.textContent = player1NameInput.value || 'Player 1';
  player2NameDisplay.textContent = player2NameInput.value || 'Player 2';
});



let currentPlayer = 1; // Start with player 1
const player1TurnMsg = document.getElementById('player1Turn');
const player2TurnMsg = document.getElementById('player2Turn');

// Function to update turn message
function updateTurnMessage() {
  if (currentPlayer === 1) {
    player1TurnMsg.textContent = "It's your turn";
    player2TurnMsg.textContent = "";
  } else {
    player1TurnMsg.textContent = "";
    player2TurnMsg.textContent = "It's your turn";
  }
}

// Function to switch turns
function switchTurn() {
  currentPlayer = currentPlayer === 1 ? 2 : 1;
  updateTurnMessage();
}

updateTurnMessage();
