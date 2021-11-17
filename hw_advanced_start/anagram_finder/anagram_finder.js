const AnagramFinder = function (word) {
    this.word = word;
    console.log("USER WORD:", this.word);
};

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    let failed = false;
    otherWords.forEach((otherWord) => {
        if (otherWord === this.word) {
            console.log("TRUE");
            failed = true;
        }
    });
    // CAN'T BREAK FROM A FOREACH LOOP !!!!!!!!!!
    if (failed === true) {
        const outputEmpty = [];
        console.log("ANAGRAM EXIT OUTPU:", outputEmpty);
        return outputEmpty;
    }
    this.word = this.word.toLowerCase().replace(" ", "").split("").sort();
    const output = otherWords.filter((otherWord) => {
        const otherWordLetters = otherWord.toLowerCase().replace(" ", "").split("").sort();
        console.log("OTHER WORD:", otherWordLetters);
        const wordLetters = this.word;
        // return otherWordLetters === wordLetters;
        return JSON.stringify(otherWordLetters) === JSON.stringify(wordLetters);
    });
    console.log("OUTPUT:", output);
    return output;
};

module.exports = AnagramFinder;
