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




//** all var on top */

/// create an array of words & varibles

var wordList = ["cake", "brownies"];

var underScore = [];

var rightLetters = [];

var wrongLetters = [];

var correctAnswer = wordList[Math.floor(Math.random() * wordList.length)];
var resetButton = document.getElementById("reset");
var input = document.getElementById('input');
// Dom Manipulation
//give El after word to say its an element
var docUnderScore = document.getElementsByClassName('underScore');
var docrightLetters = document.getElementsByClassName('rightLetters');
var docwrongLetters = document.getElementsByClassName('wrongLetters');
// Main 
//===========================================================
// Create underscores based on length of word
var makeUnderScore = function () {
  for (var i = 0; i < correctAnswer.length; i++) {
    underScore.push('_');
    docUnderScore[0].textContent = underScore.join(' ');
    
  }
  return (underScore);
}
//console.log(makeUnderScore());

//===============================================================
//// Get users guess/input

document.addEventListener('keypress', (event) => {
  var keyword = String.fromCharCode(event.keyCode);
  
  //// If user guess is right 
  if (correctAnswer.indexOf(keyword) > -1) {
    //// add to rightWord to right array
    rightLetters.push(keyword);
    
    //// replace underscore with right letter
    underScore[correctAnswer.indexOf(keyword)] = keyword;
    
    docUnderScore[0].textContent = underScore.join(' ');
    
    console.log(underScore);
    
    //// Check to see if user word matches guesses
    if(underScore.join('') == correctAnswer) {
      alert('You Win');
    }
  } 
  else {
    ////  if wrong push to wrong array
    wrongLetters.push(keyword)
    docwrongLetters[0].textContent = wrongLetters.join(',');
    // console.log(wrongLetters)
    
  }
  
});
resetButton.addEventListener("click", function(e){
  var reset = input.value;
  resetButton.reset();
});
docUnderScore[0].innerHTML = underScore.join(' ');
makeUnderScore();