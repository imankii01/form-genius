const typo = require("typo-js");

const dictionary = new typo("en_US");

module.exports = {
    correct: (input, fieldType) => {
        const words = input.split(" ");
        const correctedWords = words.map(word => {
            if (!dictionary.check(word)) {
                return dictionary.suggest(word)[0] || word;
            }
            return word;
        });
        return correctedWords.join(" ");
    }
};
