const axios = require("axios");

module.exports = async function validateAddress(address) {
    const googleMapsAPIKey = "YOUR_GOOGLE_MAPS_API_KEY"; // Replace with a real API key
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${googleMapsAPIKey}`;

    try {
        const response = await axios.get(url);
        if (response.data.status === "OK") {
            return { valid: true, message: "Valid address" };
        }
        return { valid: false, message: "Invalid address" };
    } catch (error) {
        return { valid: false, message: "Error validating address" };
    }
};
