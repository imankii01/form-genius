const emailValidator = require("email-validator");

const commonEmailCorrections = {
    "gmal.com": "gmail.com",
    "hotmial.com": "hotmail.com",
    "yaho.com": "yahoo.com"
};

module.exports = function validateEmail(email) {
    if (!emailValidator.validate(email)) {
        const suggestion = Object.keys(commonEmailCorrections).find(domain =>
            email.includes(domain)
        );
        return {
            valid: false,
            message: "Invalid email address",
            suggestion: suggestion ? email.replace(suggestion, commonEmailCorrections[suggestion]) : null
        };
    }
    return { valid: true };
};
