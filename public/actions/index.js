import Constants from '../helpers/contants';
import popUser from '../../service/popUser';

export function selectChallenge(challenge) {
    const user = popUser(challenge);

    return {
        type: Constants.CHALLENGE_SELECTED,
        payload: user
    }
}