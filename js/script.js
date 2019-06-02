// variables for the word, guessed letters, default turns, 
//    errors remaining

// what the app does: 
// 1. user submits a letter
// 2. check if letter is in a word (conditional if no letter, return(increment) error and 
// draw hangman and check if game over
// ...if letter is in word, )
// 3. display the current state of the game


//function should be 10 of less lines

//set up for JS

//variab declarations on top

 
//then HTML element refreneces

//then create all event listeners

//any additional functions to make it work (logic)



// ** when writing functions dont write function and 
//function but easier to read

//** all var on top */

// Create an array of random words for source of secret word
var words = [
    "cookies",
    "passion",
    "caramel",
    ];
var word = words[Math.floor(Math.random() * words.length)]
var trys = "myLives"; 
var guessingLetter = "";

var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}
var remainingLetters = word.length;


var inputString = "";
var inputEl = document.querySelector("input");
var pEl = document.getElementById("myLives");
var btnEl1 = document.getElementById("submit")

btnEl1.addEventListener("click", function(e) {
  var letterInput = inputEl.value;
  inputEl.value = ""; 
  guessingLetter = guessingLetter + letterInput;
  pEl.answerArray = guessingLetter;
});




