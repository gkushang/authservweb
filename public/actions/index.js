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