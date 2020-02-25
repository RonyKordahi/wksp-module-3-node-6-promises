// Exercise 4 - `getCurrentTemperature`
// -----------------------------------
// While it's useful to get the current temperature for a specific lat/lng,
// most often we want to provide the name of a place instead.
// 
// You already created a function that can do address ==> position,
// and one that can do position ==> temperature. For this exercise,
// re-use these two functions to create one that goes directly from address ==> temperature.
// 
// You can copy/paste your code from the previous exercises,
// or require them at the top of this file.
// Remember to _export_ them from their file, if you plan on _requiring_ them.



// Given an address as a string, returns the temperature
// Use the getCurrentTemperatureAtPosition function
const darksky = require("dark-sky");
const opencage = require("opencage-api-client");
const request = require('request-promise');

const DARKSKY = new darksky("47530ffe53e630910fdffd145cf419e9");

// Given a position (latitude and longitude), returns the position
function getCurrentTemperatureAtPosition(position) {
    const requestObj = {
        key: '3ed83def6974449fb056e306ffb080a1',
        q: position
    };

    opencage.geocode(requestObj)
        .then(data => {
            if (data.status.code == 200) {
                if (data.results.length > 0) {
                    const place = data.results[0];
                    return place;
                }
            }
        })
        .then(place => {
            DARKSKY 
                .latitude(place.geometry.lat)
                .longitude(place.geometry.lng)
                .get()
                .then(function(temp) {
                    console.log(temp.currently);
                })
                .then(data => {
                    console.log(data);
                })
        }
        )
}

getCurrentTemperatureAtPosition('1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8');