const urlRegex = require("url-regex");

module.exports = function validateURL(url) {
    return urlRegex({ strict: true }).test(url)
        ? { valid: true }
        : { valid: false, message: "Invalid URL format", suggestion: null };
};
