import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectChallenge} from '../actions/index';
import {bindActionCreators} from 'redux';

class ChallengeList extends Component {

    renderList() {
        return (
            this.props.challenges.map((challenge) => {
                return (
                    <li
                        key={challenge.type}
                        onClick={() => this.props.selectChallenge(challenge)}
                        className='list-group-item'>
                        {challenge.type}
                    </li>
                )
            })
        )
    }

    render() {
        return (
            <div className='list-title'>
                <ul className='list-group col-sm-2'>
                    {this.renderList()}
                </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeList)
