// Exercise 2 - `getAddressPosition`
// ---------------------------------
// 1. Complete the code of this function to return a `Promise` for a lat/lng object
// 2. Use the [OpenCage Data API](https://opencagedata.com/) to do this
//     - Sign up for an account (free) and follow the various guides to get started.
//     - [NodeJs tutorial](https://opencagedata.com/tutorials/geocode-in-nodejs)
//     - missing from the above is the need for the `key` in the request object.
//     - disregard the `.env` guidelines for now.
// 3. Once you have it working, pass it a few address to see what the responses look like.
// 4. Make sure to only return an object with lat/lng and not the whole response

const opencage = require("opencage-api-client");

function getAddressPosition(address) {
    const requestObj = {
        key: '3ed83def6974449fb056e306ffb080a1',
        q: address
    };

    opencage.geocode(requestObj) 
        .then(data => {
            if (data.status.code == 200) {
                if (data.results.length > 0) {
                    var place = data.results[0];
                    return place;
                }
            }
        })
        .then(data => {
            console.log(data.geometry);
        })
        .catch(error => {
            console.log("nope", error);
        })
}

getAddressPosition("1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8")