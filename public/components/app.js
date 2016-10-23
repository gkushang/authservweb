import React, {Component} from 'react';
import ChallengeList from '../containers/challenges-list';

import Header from '../containers/header';

export default class App extends Component {
    render() {
        return (
            <div id="wrapper">
                <Header/>
                <ChallengeList />
            </div>
        );
    }
}
