import React, {Component} from 'react';
import {connect} from 'react-redux';
import { selectChallenge } from '../actions/index'
import { bindActionCreators } from 'redux'

class ChallengeList extends Component {

    renderList() {
        return (
            this.props.challenges.map((challenge) => {
                return (
                    <li
                        key={challenge.type}
                        onClick={() => this.props.selectChallenge(challenge)}
                        className="list-group-item">
                        {challenge.type}
                    </li>
                )
            })
        )
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(reducerState) {
    return {
        challenges: reducerState.challenges
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectChallenge: selectChallenge}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeList)
