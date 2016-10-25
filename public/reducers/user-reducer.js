import Constants from '../helpers/contants';

export default function(state = null, action) {
    console.log('action user reducer: ', action);
    switch (action.type) {

        case Constants.CHALLENGE_SELECTED :
            return (action.error ? action.error : action.payload.data);

        default :
            return state;
    }

}