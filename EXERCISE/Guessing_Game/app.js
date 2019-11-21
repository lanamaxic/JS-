/*
Guessing Game:

Specifications:
1. The computer should generate a random number between 1-10
2. The user should be allowed to guess a number.

3 Variables Required:
1. userGuess - this is the number the user picks
2. computerChoice - this is the winning number, randomly selected by the computer
3. guessCount - this is the number of guesses allowed until Game Over.
*/

//add a while (true) loop and next the game logic (if conditional chain) inside this loop
//add a break after winner and after you lose!
//let userGuess = +prompt("Please enter a number between 1 and 10");
//alert("You've picked the number " + userGuess + ".");
//let computerChoice = 7;
//let guessCount = 3;

// if (userGuess < 0 || userGuess > 10) {
//   alert("Try again! You must choose a number between 1 and 10.");
// } else {
//   if (guessCount >= 1) {

//     if (userGuess < 4) {
//   alert("Good try! Try guessing a higher number next time."); 
//     } if (userGuess >= 8) {
//       alert("Shoot, so close! Try guessing a bit lower.");
//     } if(userGuess === computerChoice) {
//     alert("Ding, ding, ding! We have a winner!");
//     }
//   }
// }



let computerGuess = Math.round(Math.random() * 10 + 1);
let guessCount = 3;
console.log(computerGuess);

while (true) {
  let userGuess = parseInt(prompt("Please pick a number between 1 and 10"));
  if (userGuess < 1 || userGuess > 10) {
    alert("Please guess between 1 and 10");
    
  } else {
    
    if (guessCount > 1) {
  
      if (userGuess === computerGuess) {
        alert("Winner winner taco dinner!");
        break;
      } else if (userGuess > computerGuess) {
        guessCount--;
        alert("Please guess lower. You have " + guessCount + " guesses remaining.");
        
      } else {
        guessCount--;
        alert("Please guess higher. You have " + guessCount + " guesses remaining.");
    }
  
    } else {
      alert("Sorry, you failed to guess the number in three attempts. The number was 0!");
      break;
    }
  } 
}


//another solution

let rndNum = randomNum(0, 10);
function randomNum(min, max) {
    result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
}

function guessingGame() {
    let numberToGuess = rndNum;
    let count = 1;
    let guess = parseInt(prompt('Guess a number 1-10.'));

    while ((guess !== numberToGuess) && (count < 3)) {
        guess = parseInt(prompt('Wrong. Try again.'))
        count++;
    }

    if ((guess === numberToGuess) && (count <= 3)) {
        alert(`Success, the number was ${numberToGuess}! Attempts: ${count}`);
    } else {
        alert(`Sorry, you failed to guess the number in three attempts. The number was ${numberToGuess}!`);
    }
}

guessingGame();