import React, {Component} from 'react';
import { reduxForm, Fields, Field} from 'redux-form';
import Input from '../presentational/Input';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchSecurityCode} from '../../actions/index';

export const validate = (values) => {
    const errors = {};

    if(!values.stage) {
        errors.stage =  'Required';
    }

    if(!values.accountNumber) {
        errors.accountNumber =  'Required';
    }

    return errors;
};

class SecurityCode extends Component {


    render() {

        const { handleSubmit, submitting, reset, pristine} = this.props;

        const renderButton = () => (
            <div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={ pristine || submitting } >
                    <i className="fa fa-paper-plane" aria-hidden="true"> </i>
                    Security Code
                </button>
            </div>
            );

        const renderStageField = () => (<Field
                name="stage"
                placeholder="ccp stage2"
                hintText="stage2xxxx"
                type="text"
                component={Input}/>
            );

        const renderAccountField = () => (<Field
                    name="accountNumber"
                    placeholder="account number"
                    type="text"
                    component={Input}/>
            );

        const handleFetch = (params) => {
            this.props.fetchSecurityCode(this.props.securityCodeChallenge, params);
        };

        return (

            <div>
            <div className="security-code-fetch panel-color">
            <form className="form-inline" onSubmit={handleSubmit(handleFetch)}>

                <div className="form-group col-sm-4">
                    {renderStageField()}
                </div>

                <div className="form-group col-sm-4">
                    {renderAccountField()}
                </div>


                <div className="form-group col-sm-1 security-code-btn ">
                    {renderButton()}
                </div>


                <div className="form-group security-code-retrieved pull-right col-sm-2">

                    <label>{this.props.securityCodeFetched.code || ''}</label>
                        </div>


            </form>
            </div>

                </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        securityCodeChallenge: state.securityCodeChallenge,
        securityCodeFetched: state.securityCodeFetched
    }
}

SecurityCode = reduxForm({
    form: 'securityCodeForm',
    validate
}, () => {})(SecurityCode);


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchSecurityCode }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SecurityCode)