var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userGuess = [];
var computerGuess = [];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
    "t", "u", "v", "x", "y", "z"
];

// picks random letter and prints to console
var rand = letters[Math.floor(Math.random() * letters.length)]; {
    console.log(rand);
    //pushes to global variable to be used for other functions
    computerGuess.push(rand);
}
//logs user guess and compares against computer guess
document.onkeyup = function (event) {
    var guess = event.key;
    //pushes to global variable to be used for other functions
    userGuess.push(guess.toLowerCase());
    console.log("User guess is " + guess);
    // counts wins prints them to console and to page.  Also resets game if game is won.
    if (userGuess[0] === computerGuess[0] || userGuess[1] === computerGuess[0] || userGuess[2] ===
        computerGuess[0] || userGuess[3] === computerGuess[0] || userGuess[4] === computerGuess[0] ||
        userGuess[5] === computerGuess[0] || userGuess[6] === computerGuess[0] || userGuess[7] ===
        computerGuess[0] || userGuess[8] === computerGuess[0]) {
        wins++;
        userGuess = [];
        computerGuess = [];
        console.log("winner winner chicken dinner");
        //selects random letter again and prints wins to screen
        var rand = letters[Math.floor(Math.random() * letters.length)]; {
            console.log(rand);
            computerGuess.push(rand);
            document.getElementById("wins").innerText = "Wins: " + wins;
            document.getElementById("letters").innerText = "Letters Guessed So Far: " + userGuess;

            if (guessesLeft === 0 && losses++ || wins++) {
                guessesLeft = 9;
                document.getElementById("guesses").innerText = "Guesses Left: " + guessesLeft;
            }
        }
        // if guess is wrong decreases guesses and prints to screen number of guesses remaining
    } else if (userGuess[0] !== computerGuess[0]) {
        guessesLeft--;
        document.getElementById("guesses").innerText = "Guesses Left: " + guessesLeft;
        document.getElementById("letters").innerText = "Letters Guessed So Far: " + userGuess;
    }
    // counts losses ,prints them to the console/page.  Also resets game.
    if (guessesLeft < 1) {
        losses++;
        userGuess = [];
        computerGuess = [];
        //picks random letter again and prints losses to screen
        var rand = letters[Math.floor(Math.random() * letters.length)]; {
            console.log(rand);
            computerGuess.push(rand);
            document.getElementById("losses").innerText = "Losses: " + losses;
        }
        if (guessesLeft === 0 && losses++ || guessesLeft === 0 && wins++) {
            guessesLeft = 9;
            document.getElementById("guesses").innerText = "Guesses Left: " + guessesLeft;
        }
    }
}