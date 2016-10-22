import React, {Component} from 'react';
import ChallengeList from '../containers/challenge-list';
import UserInformation from '../containers/user-information';
import UserDetails from '../containers/user-details';

export default class App extends Component {
    render() {
        return (
            <div >
                <div>
                <header className='navbar navbar-default navbar-fixed-top'>
                    <h2> E2E Password Recovery & Auth Challenges </h2>
                </header>
                    </div>

                <ChallengeList />
                <UserInformation />
                <UserDetails />
            </div>
        );
    }
}
