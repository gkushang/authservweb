import { combineReducers } from 'redux';
import ChallengesReducer from './challenges-reducer';
import ActiveChallengeReducer from './active-challenge';

const rootReducer = combineReducers({
    challenges: ChallengesReducer,
    activeChallenge: ActiveChallengeReducer
});

export default rootReducer;
