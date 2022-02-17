const checkWord = (letters, answer) => {
  let collection = [];
  for (let i = 0; i < letters.length; i++) {
    let letterStatus = {letter: letters[i], found: false, match: false};
    if (letters[i] === answer[i]) {
      letterStatus.found = true;
      letterStatus.match = true;
    } else if (answer.includes(letters[i])) {
      letterStatus.found = true;
    }
    collection.push(letterStatus);
  }
  return collection;
};

module.exports = {
  checkWord
}
