import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectChallenge} from '../actions/index';
import {bindActionCreators} from 'redux';
import UserInformation from '../containers/user-information';

class ChallengesList extends Component {

    renderList() {
        return (
            this.props.challenges.map((challenge) => {
                return (
                    <a
                        href="#"
                        key={challenge.type}
                        onClick={() => this.props.selectChallenge(challenge)}
                        className="list-group-item">
                        {challenge.type}
                    </a>
                )
            })
        )
    }

    render() {
        return (
                <div>
                    <div className="col-md-2">
                        {this.renderList()}
                    </div>
                    <UserInformation />
                </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        challenges: state.challenges
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectChallenge }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChallengesList)
