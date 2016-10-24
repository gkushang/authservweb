import Constants from '../helpers/contants';
import popUser from '../../service/popUser';

export function selectChallenge(challenge) {
    const user = popUser(challenge);
    return {
        type: Constants.CHALLENGE_SELECTED,
        payload: user
    }
}

export function selectSecurityCodeChallenge(securityCodeChallenge) {
    console.log('securityCodeChallenge action/index: ', securityCodeChallenge);

    return {
        type: Constants.SECURITY_CODE_CHALLENGE_SELECTED,
        payload: securityCodeChallenge
    }
}

export function fetchSecurityCode(securityCodeChallenge, params) {

    //fetch code for securityCodeChallenge.type & account stage from params;

    var code = {
        code: '7839'
    };

    return {
        type: Constants.SECURITY_CODE_CHALLENGE_FETCH,
        payload: code
    }
}
