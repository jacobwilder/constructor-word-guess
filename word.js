var Letter = require("./letter");

var Word = function(letterArr) {
    this.letterArr = letterArr;
    this.testWord = [];
    this.wordStr = function() {
        for (var i=0; i<letterArr.length; i++) {
            var let = new Letter(letterArr[i]);
            this.testWord.push(let);
        }
    }
    this.showWord = function() {
        var wordDisplay = [];
        for (var i = 0; i < this.testWord.length; i++) {
            wordDisplay.push(this.testWord[i].displayLet());
        }
        return wordDisplay.join(" ");
    }
    this.checkGuess = function(userGuess) {
        for (var i = 0; i < this.testWord.length; i++) {
            this.testWord[i].check(userGuess);
        }
    }
}

module.exports = Word;