import React, {Component} from 'react';
import ChallengeList from '../containers/challenge-list';
import ChallengeDetails from '../containers/challenge-details';

export default class App extends Component {
    render() {
        return (
            <div className='navbar navbar-default'>
                <h2>
                    E2E Password Recovery & Auth Challenges
                </h2>

                <ChallengeList />
                <ChallengeDetails />
            </div>
        );
    }
}
