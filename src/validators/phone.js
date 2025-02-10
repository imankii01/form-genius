const phone = require("phone");

module.exports = function validatePhone(number, rules) {
    const { valid, phoneNumber } = phone(number);
    return valid
        ? { valid: true }
        : { valid: false, message: "Invalid phone number", suggestion: phoneNumber || null };
};
