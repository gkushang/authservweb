import Constants from '../helpers/contants'
import popUser from '../../service/popUser'

export function selectChallenge(challenge) {
    const request = popUser().challenge(challenge);

    console.log('Request: ', request);

    return {
        type: Constants.CHALLENGE_SELECTED,
        payload: request
    }
}