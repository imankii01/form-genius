const validateForm = require("ai-form-guardian");

const testData = {
    email: "john.doe@gmal.com",
    phone: "+123 456 7890",
    password: "pass",
    website: "htt://invalid-url.com",
    age: "17",
    customField: "some data"
};

const validationRules = {
    password: { minLength: 8 },
    website: { type: "url" }, // User-defined type override
    age: { type: "number", min: 18, max: 99 },
    customField: { type: "text" } // Supports any new field
};

console.log(validateForm(testData, validationRules));
