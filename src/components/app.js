import React, {Component} from "react";
import ChallengeList from "../containers/challenge-list";
import ChallengeDetails from "../containers/challenge-details";

export default class App extends Component {
    render() {
        return (
            <div>E2E Password Recovery & Auth Challenges
                <ChallengeList />
                <ChallengeDetails />
            </div>
        );
    }
}
