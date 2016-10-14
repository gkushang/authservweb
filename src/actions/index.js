import Constants from '../helpers/contants'

export function selectChallenge(challenge) {
    return {
        type: Constants.CHALLENGE_SELECTED,
        challenge: challenge
    }
}