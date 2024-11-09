const horoscope = require('horoscope');

// Function to get the correct zodiac sign
const getZodiacSign = (birthdate) => {
    // Check the format YYYY-MM-DD
    if (!/^\d{4}-\d{2}-\d{2}$/.test(birthdate)) {
        throw new Error("Invalid birthdate format");
    }

    const date = new Date(birthdate);

    // Check if the date is valid
    if (isNaN(date.getTime())) {
        throw new Error("Invalid birthdate format");
    }

    const month = date.getMonth() + 1; // get total months, 0 to 11 (total 12)
    const day = date.getDate(); // get totzl day in a month (1 to 31)

    // use the horoscope library to get the zodiac sign
    const sign = horoscope.getSign({ month, day });

    // if no sign found, error
    if (!sign) {
        throw new Error("Could not determine zodiac sign");
    }

    // return the zodiac sign
    return sign;
};

module.exports = { getZodiacSign };
