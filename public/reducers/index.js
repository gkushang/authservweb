import {combineReducers} from 'redux';
import ChallengesReducer from './challenges-reducer';
import UserReducer from './user-reducer';

const rootReducer = combineReducers({
    challenges: ChallengesReducer,
    authJson: UserReducer
});

export default rootReducer;
