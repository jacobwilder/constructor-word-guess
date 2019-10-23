var Letter = function(secretLetter, isGuessed) {
    this.secretLetter = "";
    this.isGuessed = false;
    this.inputCheck = function(userInput) {
        if (userInput === secretLetter) {
            return this.isGuessed = true;
        }
    }
    this.guessCheck = function() {
        if (this.isGuessed === true) {
            return secretLetter;
        }
        else {
            return "_";
        }
    };
}

module.exports = Letter