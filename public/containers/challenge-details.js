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
            <ul className='list-group col-md-8'>
                {this.props.challenge}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        challenge: state.activeChallenge
    }
}

export default connect(mapStateToProps)(ChallengeDetails)
