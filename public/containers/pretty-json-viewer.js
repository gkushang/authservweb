import React, {Component} from 'react';
import {connect} from 'react-redux';


class PrettyJsonViewer extends Component {
    render() {
        if (!this.props.authJson) {
            return (
                <div></div>
            );
        }

        return (
            <ul className='list-group col-md-8'>
                {this.props.authJson}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        authJson: state.authJson
    }
}

export default connect(mapStateToProps)(PrettyJsonViewer)
