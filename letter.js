var Letter = function(secretLetter, isGuessed) {
    this.secretLetter = " ";
    this.isGuessed = false;
    this.showSecret = function() {
        if (secretLetter === " ") {
            return " ";
        }
        else if(!isGuessed) {
            return "_";
        }
        else {
            return this.secretLetter;
        }
    }
    this.guessCheck = function(userGuess) {
        if (userGuess === this.secretLetter) {
            this.isGuessed = true;
        }
    };
}

module.exports = Letter