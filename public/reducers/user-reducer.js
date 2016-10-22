import Constants from '../helpers/contants';

export default function(state = null, action) {

    console.log('action: ', action.payload);

    switch (action.type) {

        case Constants.CHALLENGE_SELECTED :
            return action.payload.data;

        default :
            return state;
    }

}