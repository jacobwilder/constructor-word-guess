var Letter = require("./letter");

var Word = function(answer) {
    this.objectArr = [];

        for (var i = 0; i < answer.length; i++) {
            var letter = new Letter(answer[i]);
            this.objectArr.push(letter);
        }

    this.log = function() {
        var answerLog = "";
        for (var i = 0; i < this.objectArr.length; i++) {
            answerLog += this.objectArray[i] + " ";
        }
            console.log(answerLog + "\n");
    };
    
    this.checkGuess = function(userGuess) {
        for (var i = 0; i < this.objectArr.length; i++) {
            this.objectArr[i].guess(userGuess);
        }
    };
}

module.exports = Word;