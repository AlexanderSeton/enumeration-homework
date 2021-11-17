const PangramFinder = function (phrase) {
  this.phrase = phrase.toLowerCase();
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
};

PangramFinder.prototype.isPangram = function () {
  const output = this.alphabet.every((letter) => {
    return this.phrase.includes(letter);
  });
  return output;
};

module.exports = PangramFinder;
