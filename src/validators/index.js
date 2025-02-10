const emailValidator = require("./email");
const phoneValidator = require("./phone");
const passwordValidator = require("./password");
const urlValidator = require("./url");
const numberValidator = require("./number");
const dateValidator = require("./date");
const usernameValidator = require("./username");
const addressValidator = require("./address");
const textValidator = require("./text");

module.exports = {
    email: emailValidator,
    phone: phoneValidator,
    password: passwordValidator,
    url: urlValidator,
    number: numberValidator,
    date: dateValidator,
    username: usernameValidator,
    address: addressValidator,
    text: textValidator
};
