// Exercise 5 - `getDistanceFromIss`
// ---------------------------------
// Again here you should re-use two previously created functions, plus the `getDistance` function provided to you in `workshop.js`.
//
// One of the functions does address ==> position and the other simply does nothing ==> position.
// The `getDistance` function needs the two positions to compute the final value.

const request = require('request-promise');
const opencage = require("opencage-api-client");


// Euclidian distance between two points
function getDistance(pos1, pos2) {
    return Math.sqrt(Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2));
}

function getISS() {
    return request("http://api.open-notify.org/iss-now.json")
        .then(JSON.parse)
        .then(data => {
            return {lat: data.iss_position.latitude, lng: data.iss_position.longitude};
        })
        .then(data => {
            return data;
        })
        .catch (error => {
            console.log("ISS nope");
        });
}

function getAddress(address) {
    const requestObj = {
        key: '3ed83def6974449fb056e306ffb080a1',
        q: address
    };

    return opencage.geocode(requestObj) 
        .then(data => {
            if (data.status.code == 200) {
                if (data.results.length > 0) {
                    var place = data.results[0];
                    return place.geometry;
                }
            }
        })
}

// Given an address (a string), returns the distance between that address and the ISS
// You'll need to use getDistance, getIssPosition and getAddressPosition
function getDistanceFromIss(address) {
    const ISS = getISS();

    ISS.then(x => {
        const SPOT = getAddress(address);
        SPOT.then(y => {
            const distance = getDistance(x, y);
            console.log(distance);
        })
    })

    
}

getDistanceFromIss("1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8");