const typo = require("typo-js");

const dictionary = new typo("en_US");

module.exports = function validateText(text) {
    const words = text.split(" ");
    const correctedWords = words.map(word => {
        if (!dictionary.check(word)) {
            return dictionary.suggest(word)[0] || word;
        }
        return word;
    });

    return {
        valid: true,
        correctedText: correctedWords.join(" ")
    };
};
