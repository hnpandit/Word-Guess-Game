// Rutgers Coding BootCamp - Full Stack Developer - Mon/Wed
// Word Guess Game (JavaScript) - Himanshu Pandit
// November 19, 2018

// Here we keep global variables
var txtWord = document.getElementById('user-text');
var txtRound = document.getElementById('num-round');
var txtGuess = document.getElementById('num-guess');
var txtGuessed = document.getElementById('guess-text');

var numRound = 0;
var numGuess = 10;
var gameOver = false;
const maxRounds = 2;

var wordGuessGame = {
    "words": [
      "arguments",
      "boolean",
      "for",
      "return",
      "var"
    ],

    "hints": [
        "Word starts with a and we can pass to function",
        "Word starts with b and it is one of the data types with two values",
        "Word starts wtih f and used for loops",
        "Word starts with r and used for coming out",
        "Word starts with v and this is how you declare variable"
    ],

    "details": [
        "arguments",
        "boolean",
        "for",
        "return",
        "var"
    ],

    "guesses": [
    ],
  
    startGame: function() {
        this.refreshDisplay();
    },

    updateCounters: function() {
        numGuess--;
        if (numGuess == 0)
        { 
            if (numRound == maxRounds - 1)
            {
                gameOver = true;
            }
            else
            {
                this.resetRound();
            }
        }
    },

    resetRound: function() {
        numGuess = 10;
        numRound = numRound + 1;
        txtWord.textContent = " ";
        wordGuessGame.guesses.length = 0;
        this.refreshDisplay();
    },

    refreshDisplay: function() {
        txtRound.textContent = numRound + 1;
        txtGuess.textContent = numGuess;
        //txtWord.textContent = txtWord.textContent + key.toLowerCase();
        
        for (var j=0; j < wordGuessGame.words[numRound].length; j++) 
        {
            txtWord.textContent = txtWord.textContent + "_" + " ";
        }

        var strGuesses;
        if ( wordGuessGame.guesses.length == 0)
        {
            strGuesses = "None";
        }
        else
        {
            strGuesses = "'";
            for (k=0; k < wordGuessGame.guesses.length; k++)
            {
                strGuesses = strGuesses + wordGuessGame.guesses[k].toUpperCase() + " ";
            }
            strGuesses = strGuesses + "'";
        }
        txtGuessed.textContent = strGuesses;
        },

    processUserInput: function(key) {
        this.updateCounters();
        this.refreshDisplay();
        this.guesses.push(key);    
    },
  };

// Start game here...
wordGuessGame.startGame();

// Next, we give JavaScript a function to execute when onkeyup event fires.
document.onkeyup = function(event) {
  if (event.which >= 65 && event.which <= 90) {
    if (gameOver)
    {
        alert("Game is over.");
    }
    else
    {
        wordGuessGame.processUserInput(event.key);
    } 
  }  
};