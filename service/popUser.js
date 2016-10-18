var axios = require('axios');

module.exports = function popUser(challenge) {

    var popOptions = {
        challengeType: challenge.type.toLowerCase(),
        requestType: 'pop'
    };

    var authUserServe = {
        host: 'http://authserv-8375.ccg21.dev.paypalcorp.com/msmaster/users/pop'
    };


    return axios.get(authUserServe.host, {
        params: {
            challengeType: popOptions.challengeType || popOptions
        }
    });

};