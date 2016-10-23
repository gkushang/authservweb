import {combineReducers} from 'redux';
import ChallengesReducer from './challenges-reducer';
import UserReducer from './user-reducer';

const rootReducer = combineReducers({
    challengesList: ChallengesReducer,
    securityCodeList: ChallengesReducer,
    authJson: UserReducer
});

export default rootReducer;
