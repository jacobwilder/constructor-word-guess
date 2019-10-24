var Letter = function(value) {
    this.hiddenLet = value;
    this.guessed = false;
    this.showSecret = function() {
        if (this.hiddenLet === " ") {
            this.guessed = true;
            return " ";
        }
        else if(this.guessed === false) {
            return "_";
        }
        else {
            return this.hiddenLet;
        }
    }
    this.guess = function(guess) {
        if (guess === this.hiddenLet) {
            this.guessed = true;
        }
    };
}

module.exports = Letter