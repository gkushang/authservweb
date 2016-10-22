var axios = require('axios');

module.exports = function popUser(challenge) {

    var popOptions = {
        challengeType: challenge.type.toLowerCase(),
        requestType: 'pop'
    };

    var authUserServe = {
        host: "https://jsonplaceholder.typicode.com/posts/1"
        // host: 'http://authserv-8375.ccg21.dev.paypalcorp.com/msmaster/users/pop'
    };


    // return axios.get(authUserServe.host, {
    //     params: {
    //         challengeType: popOptions.challengeType || popOptions
    //     }
    //});

    return {
        data: {
            "phoneNumber": "4089673035",
            "phoneNumberMasked": "(4••) ••• - 3035",
            "addNewPhone": "4089673031",
            "addNewPhoneMasked": "(4••) ••• - 3031",
            "password": "11111111",
            "accountType": "personal",
            "bizMonEstablished": 0,
            "bizYearEstablished": 0,
            "industry": 0,
            "bizType": 0,
            "citizenship": "US",
            "country": "US",
            "currency": "USD",
            "emailAddress": "auth-auto-3685383156871124@paypal.com",
            "maskedEmailAddress": "••••••••••••••••••••••••24@pa••••.com",
            "maskedEmailAlias": "••••i0@ya•••.com",
            "firstName": "Auth-50_110",
            "homeAddress1": "2211 North 1st Street",
            "homeAddress2": "41145 Edgemere Road",
            "homeCity": "San Jose",
            "homeCountry": "US",
            "homePhoneNumber": "+1 4089673032",
            "homeState": "CA",
            "homeZip": "95131",
            "lastName": "eBay",
            "mobilePhone": "+1 4089673035",
            "subCategory": 0,
            "workPhone": "+1 6125249252",
            "aveTransSize": 0,
            "aveMonthVolume": 0,
            "saleVenue": 0,
            "onlineRevenuePercentage": 0,
            "accountNumber": "1861875751221967502",
            "acceptUserLegalAgreement": true
        }
    };
};