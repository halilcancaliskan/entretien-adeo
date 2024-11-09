const express = require('express');
const horoscope = require('./horoscope');

const app = express();
const PORT = process.env.PORT || 3000;

// The route for GET request for horoscope
app.get('/horoscope', (req, res) => {
    const { birthdate } = req.query;

    if (!birthdate) {
        // If the birthdate is missing, return a 400 Bad Request
        return res.status(400).json({ error: "Birthdate query parameter is required" });
    }

    try {
        // Call the horoscope to get the zodiac sign
        const sign = horoscope.getZodiacSign(birthdate);
        // Return the zodiac sign
        return res.json({ sign });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

module.exports = app;
