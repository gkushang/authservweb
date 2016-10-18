import Constants from '../helpers/contants';

export default function(state = null, action) {

    switch (action.type) {

        case Constants.CHALLENGE_SELECTED :
            return JSON.stringify(action.payload.data, null, 4);

        default :
            return state;
    }

}