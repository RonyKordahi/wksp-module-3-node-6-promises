// Exercise 1 - `getIssPosition`
// -----------------------------
//   1. Install the request-promise module with `yarn`
//      making sure it's added to `package.json`.
//   2. Complete the code of this function so that it returns
//      the position of the ISS as a `Promise`.
//   3. Use the data from http://api.open-notify.org/iss-now.json to do your work
//   4. The ISS API returns the position keys as `latitude` and `longitude`.
//      Return them as `lat` and `lng` instead.

// require the 'request-promise' module.
const request = require('request-promise');

// Returns the current position of the ISS
function getIssPosition() {
    return request("http://api.open-notify.org/iss-now.json")
        .then(JSON.parse)
        .then(data => {
            console.log(`longitute: ${data.iss_position.longitude}`);
            console.log(`latitude: ${data.iss_position.latitude}`);
        })
        .catch(err => console.log(err))
}

getIssPosition();