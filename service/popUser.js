var axios = require('axios');

module.exports = function popUser() {

    var challenge = function(challenge) {
        var popOptions = {
            challengeType: challenge.type.toLowerCase(),
            requestType: 'pop'
        };

        return _callAuthServeApi(popOptions)
    };

    var _callAuthServeApi = function(requestOptions) {

        var authUserServe = {
            host: 'http://authserv-8375.ccg21.dev.paypalcorp.com/msmaster/users/pop'
        };


       return axios.get(authUserServe.host, {
            params: {
                challengeType: requestOptions.challengeType || requestOptions
            }
        });
    };


    return {
        challenge: challenge
    }
};
