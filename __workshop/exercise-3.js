// Exercise 3 - `getAddressPosition`
// ---------------------------------
// 1. Go to https://darksky.net/dev/ and read the documentation
// 2. Signup and get a free API key
// 3. Complete the code of the function.
// The `position` parameter is an object with `lat` and `lng`.
// 4. Make sure your function only returns a `Promise` for the current temperature
// (a number) and nothing else

const darksky = require("dark-sky");
const opencage = require("opencage-api-client");
const request = require('request-promise');

// Given a position (latitude and longitude), returns the position
function getCurrentTemperatureAtPosition(position) {
    const requestObj = {
        key: '1315122032774d06b34c570f3bd70f7b',
        q: position
    };

    return location()
        .then(function() {
            opencage.geocode(requestObj)
                .then(data => {
                    if (data.status.code == 200) {
                        if (data.results.length > 0) {
                            const place = data.results[0];
                            console.log(place.geometry);
                            return place;
                        }
                    }
                })
        })
        
    // darksky
}

console.log(getCurrentTemperatureAtPosition('1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8'));