var inquirer = require("inquirer");
var Word = require("./word");

var wordList = ["SPONGEBOB SQUAREPANTS", "PATRICK STAR", "SQUIDWARD TENTACLES", "SANDY CHEEKS", "LARRY THE LOBSTER", "PEARL KRABS", "EUGENE CRABS"];
var wordChoice = 0;
var chosenWord = "";
var gameWord = "";
var counter = 0;

function gameStart() {
    if (wordList.length<2) {
        wordList = ["SPONGEBOB SQUAREPANTS", "PATRICK STAR", "SQUIDWARD TENTACLES", "SANDY CHEEKS", "LARRY THE LOBSTER", "PEARL KRABS", "EUGENE CRABS"];
    }
    wordChoice = Math.floor(Math.random() * wordList.length);
    chosenWord = wordList[wordChoice];
    gameWord = new Word(chosenWord);
    gameWord.wordStr();
    if (wordChoice > -1) {
        wordList.splice(wordChoice, 1);
    }
    console.log("8 guesses left!")
    userPrompt();
}

function userPrompt() {
    if (counter < 8) {
        console.log(gameWord.showWord());
        inquirer.prompt([
            {
                type: "input",
                name: "letter",
                message: "Guess a letter!"
            }
        ]).then(function(data) {
            checkAnswer(data);
        });
    }
    else {
        console.log("Oh no! You're out of guesses!");
        console.log(chosenWord);
        chosenWord = "";
        gameWord = "";
        wordChoice = 0;
        counter = 0;
        startGame();
    }
}

function checkAnswer(data) {
    if ((data.letter.length === 1) && /^[a-zA-Z]+$/.test(data.letter)) {
        var format = data.letter.toUpperCase();
        var checker = gameWord.showWord();
        gameWord.checkGuess(format);
        if (temp === gameWord.showWord()) {
            console.log("Wrong letter! Guess again!");
            counter++;
            console.log((8 - counter) + " guesses remaining");
            userPrompt();
        }
        else {
            correctGuess();
        }
    }
    else {
        console.log("Please enter a letter!");
        userPrompt();
    }
}

function correctGuess() {
    console.log("You guessed correctly!");
    if (chosenWord.replace(/ /g, "") == (gameWord.showWord()).replace(/ /g, "")) {
        console.log(gameWord.showWord());
        console.log("You Win!!!");
        chosenWord = "";
        gameWord = "";
        wordChoice = 0;
        counter = 0;
        gameStart();
    }
    else {
        userPrompt();
    }
}

gameStart();