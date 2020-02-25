// Exercise 3 - `getAddressPosition`
// ---------------------------------
// 1. Go to https://darksky.net/dev/ and read the documentation
// 2. Signup and get a free API key
// 3. Complete the code of the function.
// The `position` parameter is an object with `lat` and `lng`.
// 4. Make sure your function only returns a `Promise` for the current temperature
// (a number) and nothing else

const darksky = require("dark-sky");

const DARKSKY = new darksky("47530ffe53e630910fdffd145cf419e9");

// Given a position (latitude and longitude), returns the position
function getCurrentTemperatureAtPosition(lat, lng) {

    DARKSKY 
        .latitude(lat)
        .longitude(lng)
        .get()
        .then(function(temp) {
            console.log(temp.currently.temperature);
        })
}

getCurrentTemperatureAtPosition('45.55445', "-74.329");