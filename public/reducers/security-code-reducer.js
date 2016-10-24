import Constants from '../helpers/contants';

export default function(state = {}, action) {
  switch (action.type) {

        case Constants.SECURITY_CODE_CHALLENGE_SELECTED :
            return action.payload;

        default :
            return state;
    }

}