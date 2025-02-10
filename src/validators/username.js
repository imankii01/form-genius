module.exports = function validateUsername(username, rules) {
    const minLength = rules.minLength || 3;
    const maxLength = rules.maxLength || 15;
    const usernameRegex = /^[a-zA-Z0-9_]+$/;

    if (username.length < minLength) return { valid: false, message: `Username must be at least ${minLength} characters` };
    if (username.length > maxLength) return { valid: false, message: `Username must be at most ${maxLength} characters` };
    if (!usernameRegex.test(username)) return { valid: false, message: "Username can only contain letters, numbers, and underscores" };

    return { valid: true };
};
