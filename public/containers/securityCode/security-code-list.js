import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectChallenge} from '../../actions/index';
import {bindActionCreators} from 'redux';
import SecurityCode from './security-code';

class SecurityCodeList extends Component {

    renderList() {
        return (
            this.props.securityCodes.map((securityCode) => {
                return (
                    <a
                        href="#"
                        key={securityCode.type}
                        onClick={() => this.props.selectChallenge(securityCode)}
                        className="list-group-item">
                        {securityCode.type}
                    </a>
                )
            })
        )
    }

    render() {
        return (
            <div className="container-fluid security-code-panel">
                <div className="col-md-2">
                    {this.renderList()}
                </div>
                <SecurityCode />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        securityCodes: state.securityCodeList.securityCodes
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectChallenge }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SecurityCodeList)
