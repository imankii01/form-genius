module.exports = function validateDate(date, rules) {
    const parsedDate = Date.parse(date);
    if (isNaN(parsedDate)) return { valid: false, message: "Invalid date format" };

    const dateObj = new Date(parsedDate);
    if (rules.minDate && dateObj < new Date(rules.minDate)) return { valid: false, message: `Date must be after ${rules.minDate}` };
    if (rules.maxDate && dateObj > new Date(rules.maxDate)) return { valid: false, message: `Date must be before ${rules.maxDate}` };

    return { valid: true };
};
