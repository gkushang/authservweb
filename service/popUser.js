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
            type: challenge.type,
            "phoneNumber": "4089673035",
            "phoneNumberMasked": "(4**) *** - 3035",
            "addNewPhone": "4089673031",
            "addNewPhoneMasked": "(4**) *** - 3031",
            "password": "11111111",
            "accountType": "personal",
            "bizMonEstablished": 0,
            "bizYearEstablished": 0,
            "industry": 0,
            "bizType": 0,
            "citizenship": "US",
            "confirmEmail": true,
            "country": "US",
            "currency": "USD",
            "emailAddress": "auth-auto-25194715103781768@paypal.com",
            "firstName": "Auth-110_10",
            "homeAddress1": "2211 North 1st Street",
            "homeAddress2": "605601 Dodd Street",
            "homeCity": "San Jose",
            "homeCountry": "US",
            "homePhoneNumber": "+1 4089673035",
            "homeState": "CA",
            "homeZip": "95131",
            "lastName": "Login",
            "mobilePhone": "+1 4089673035",
            "securityAnswer1": "What was the name of your first school?",
            "securityAnswer2": "What was the name of your first pet?",
            "securityQuestion1": 1,
            "securityQuestion2": 2,
            "subCategory": 0,
            "workPhone": "+1 4805868637",
            "aveTransSize": 0,
            "aveMonthVolume": 0,
            "saleVenue": 0,
            "onlineRevenuePercentage": 0,
            "accountNumber": "2181838642205583674",
            "acceptUserLegalAgreement": true,
            "maskedEmailAddress": "*************************68@pa****.com",
            "creditcard": [
                {
                    "cardType": "Visa",
                    "country": "US",
                    "currency": "USD",
                    "expirationMonth": "06",
                    "expirationYear": "2025",
                    "startMonth": "08",
                    "startYear": "2015",
                    "issuerRefNumber": "62",
                    "cardNumber": "4046610339497251",
                    "cvv": "891",
                    "firstName": "Auth-110_10",
                    "lastName": null
                },
                {
                    "cardType": "AMEX",
                    "country": "US",
                    "currency": "USD",
                    "expirationMonth": "05",
                    "expirationYear": "2021",
                    "startMonth": "01",
                    "startYear": "2015",
                    "issuerRefNumber": "38",
                    "cardNumber": "340163562879358",
                    "cvv": "8223",
                    "firstName": "Auth-110_10",
                    "lastName": null
                },
                {
                    "cardType": "Master",
                    "country": "US",
                    "currency": "USD",
                    "expirationMonth": "05",
                    "expirationYear": "2018",
                    "startMonth": "08",
                    "startYear": "2015",
                    "issuerRefNumber": "21",
                    "cardNumber": "5465982480131743",
                    "cvv": "212",
                    "firstName": "Auth-110_10",
                    "lastName": null
                },
                {
                    "cardType": "Discover",
                    "country": "US",
                    "currency": "USD",
                    "expirationMonth": "01",
                    "expirationYear": "2023",
                    "startMonth": "04",
                    "startYear": "2015",
                    "issuerRefNumber": "95",
                    "cardNumber": "6011417357343102",
                    "cvv": "739",
                    "firstName": "Auth-110_10",
                    "lastName": null
                }
            ],
            "challenges": [
                "smsOneWay",
                "creditCard"
            ],
            "maskedCreditCards": [
                "Visa x-**51",
                "AMEX x-**58",
                "Master x-**43",
                "Discover x-**02"
            ],
            "creditCardNumber": "4046610339497251",
            "creditCardTypeAndNumber": "Visa x-51",
            "creditCardDescription": "Type in the full card number for your Visa x-**51."
        }
    };
};