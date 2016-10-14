import React, {Component} from 'react';
import {connect} from 'react-redux';

class ChallengeDetails extends Component {

    render() {
        if (!this.props.challenge) {
            return (
                <div> </div>
            );
        }

        return (
            <ul className="list-group col-sm-4">
                {this.props.challenge.type}
            </ul>
        );
    }
}

function mapStateToProps(reducerState) {
    return {
        challenge: reducerState.activeChallenge
    }
}

export default connect(mapStateToProps)(ChallengeDetails)
