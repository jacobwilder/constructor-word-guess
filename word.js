var Letter = require("./letter");

var Word = function(letterArr) {
    this.letterArr = [];
    this.wordStr = function() {
        this.guessCheck();
    }
}