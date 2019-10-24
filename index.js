var inquirer = require("inquirer");
var Word = require("./word");

var letterArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wordList = ["SPONGEBOB SQUAREPANTS", "PATRICK STAR", "SQUIDWARD TENTACLES", "SANDY CHEEKS", "LARRY THE LOBSTER", "PEARL KRABS", "EUGENE CRABS"];
var randomIndex = Math.floor(Math.random() * wordList.length);
var randomWord = wordList[randomIndex];
var targetWord = new Word(randomWord);
var requireWord = false;
var incorrectLetters = [];
var correctLetters = [];
var guessesLeft = 8;

function gameStart() {
    if (requireWord) {
        randomIndex = Math.floor(Math.random() * wordList.length);
        randomWord = wordList[randomIndex];
        targetWord = new Word(randomWord);
        requireWord = false;
    }

    var completeWord = [];
    targetWord.objectArr.forEach(completeCheck);

    if (completeWord.includes(false)) {
        inquirer.prompt([{
            type: "input",
            message: "Guess a letter!",
            name: "userInput"
        }]).then(function (input) {
                if (!letterArr.includes(input.userInput) || input.userInput.length > 1) {
                    console.log("\nTry Again!\n");
                    gameStart();
                } else if (incorrectLetters.includes(input.userInput) || correctLetters.includes(input.userInput) || input.userInput === "") {
                    console.log("\nUh Oh! Incorrect choice or you tried the same letter!\n");
                    gameStart();
                } else {
                    var wordCheckArr = [];

                    targetWord.checkGuess(input.userInput);

                    targetWord.objectArr.forEach(wordCheck);
                    if (wordCheckArr.join("") === completeWord.join("")) {
                        console.log("\n--------------------\n");
                        console.log("\nIncorrect\n");
                        console.log("\n--------------------\n");

                        incorrectLetters.push(input.userInput);
                        guessesLeft--;
                    } else {
                        console.log("\n--------------------\n");
                        console.log("\nCorrect!\n");
                        console.log("\n--------------------\n");
                        correctLetters.push(input.userinput);
                    }

                    targetWord.log();

                    console.log("\n--------------------\n");
                    console.log("Guesses Left: " + guessesLeft + "\n");
                    console.log("\n--------------------\n");
                    console.log("\n--------------------\n");
                    console.log(
                        "Letters Guessed: " + incorrectLetters.join(" ") + "\n"
                    );
                    console.log("\n--------------------\n");
                    if (guessesLeft > 0) {
                        gameStart();
                    } else {
                        console.log("You lose!\n");
                        resetGame();
                    }

                    function wordCheck (key) {
                        wordCheckArr.push(key.guessed);
                    }
                }
        });   
    }  else {
        console.log("You Win!\n");

        resetGame();
    }

    function completeCheck(key) {
        completeWord.push(key.guessed);
    }
}
        function resetGame() {
            inquirer
              .prompt([
                {
                  type: "list",
                  message: "Would you like to:",
                  choices: ["Play Again", "Exit"],
                  name: "restart"
                }
              ])
              .then(function(input) {
                if (input.restart === "Play Again") {
                  requireWord = true;
                  incorrectLetters = [];
                  correctLetters = [];
                  guessesLeft = 8;
                  gameStart();
                } else {
                  return;
                }
              });
          }
gameStart();
