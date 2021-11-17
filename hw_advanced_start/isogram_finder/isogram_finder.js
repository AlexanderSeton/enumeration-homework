const IsogramFinder = function (word) {
    this.word = word.toLowerCase().replace(" ", "").split("");
};

IsogramFinder.prototype.isIsogram = function () {
    const letters = [];
    const output = this.word.every((letter) => {
        if (letters.includes(letter) === false) {
            letters.push(letter);
            return letter;
        }
        letters.push(letter);
    });
    return output;
};

module.exports = IsogramFinder;
