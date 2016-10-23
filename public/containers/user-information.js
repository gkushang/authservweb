import React, {Component} from 'react';
import {connect} from 'react-redux';


class UserInformation extends Component {
    render() {
        if (!this.props.authJson) {
            return (
                <div></div>
            );
        }

        return (
            <ul className="list-group col-md-8">
                <span>
                    Challenge: {this.props.authJson.type}
                </span>

                <span>
                    Email Address: {this.props.authJson.emailAddress}
                </span>

            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        authJson: state.authJson
    }
}

export default connect(mapStateToProps)(UserInformation)
