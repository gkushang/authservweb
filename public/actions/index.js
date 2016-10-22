import Constants from '../helpers/contants';
import popUser from '../../service/popUser';

export function selectChallenge(challenge) {
    const user = popUser(challenge);

    console.log('user: ', user);

    return {
        type: Constants.CHALLENGE_SELECTED,
        payload: user
    }
}