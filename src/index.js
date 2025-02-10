const validators = require('./validators');
const aiCorrector = require('./aiCorrector');

/**
 * Validates form inputs dynamically based on user-defined rules.
 * @param {Object} fields - User input fields { fieldName: value }
 * @param {Object} rules - Validation rules { fieldName: { rule1, rule2, ... } }
 * @returns {Object} - { valid: boolean, errors: {}, suggestions: {} }
 */
function validateForm(fields, rules = {}) {
    const errors = {};
    const suggestions = {};

    Object.keys(fields).forEach(field => {
        const value = fields[field];
        const fieldRules = rules[field] || {};
        const fieldType = detectFieldType(field, value, fieldRules);

        if (validators[fieldType]) {
            const result = validators[fieldType](value, fieldRules);
            if (!result.valid) {
                errors[field] = result.message;
                if (result.suggestion) {
                    suggestions[field] = aiCorrector.correct(value, fieldType);
                }
            }
        } else {
            errors[field] = "No validator found for this field type.";
        }
    });

    return { valid: Object.keys(errors).length === 0, errors, suggestions };
}

/**
 * Auto-detects the field type if rules are not provided.
 * @param {string} field
 * @param {string} value
 * @param {Object} fieldRules
 */
function detectFieldType(field, value, fieldRules) {
    if (fieldRules.type) return fieldRules.type; // User-defined type
    if (field.includes("email") || value.includes("@")) return "email";
    if (field.includes("phone") || /^[0-9+\-() ]+$/.test(value)) return "phone";
    if (field.includes("password")) return "password";
    if (field.includes("url") || value.startsWith("http")) return "url";
    if (!isNaN(value)) return "number";
    if (field.includes("date") || Date.parse(value)) return "date";
    if (field.includes("address")) return "address";
    return "text"; // Default to text validation
}

module.exports = validateForm;
