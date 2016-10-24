import Constants from '../helpers/contants';

export default function(state = null, action) {
    switch (action.type) {

        case Constants.CHALLENGE_SELECTED :
            return action.payload.data;

        default :
            return state;
    }

}