const request = require('supertest');
const app = require('../index');
const horoscope = require('../horoscope');

// Test for the GET /horoscope endpoint
describe("GET /horoscope", () => {
    it("should return the correct zodiac sign", async () => {

        // Make a GET request to /horoscope with a birthdate parameter
        const response = await request(app).get('/horoscope').query({ birthdate: '1999-09-17' });
        expect(response.status).toBe(200);

        // Expect the response body is the correct zodiac sign
        expect(response.body.sign).toBe('Virgo');
    });
});
