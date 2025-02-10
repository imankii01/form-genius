module.exports = function validateNumber(value, rules) {
    if (isNaN(value)) return { valid: false, message: "Not a valid number" };

    const num = parseFloat(value);
    if (rules.min !== undefined && num < rules.min) return { valid: false, message: `Must be at least ${rules.min}` };
    if (rules.max !== undefined && num > rules.max) return { valid: false, message: `Cannot exceed ${rules.max}` };

    return { valid: true };
};
