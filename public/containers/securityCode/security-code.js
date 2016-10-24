import React, {Component} from 'react';
import { reduxForm, Fields, Field} from 'redux-form';
import Input from '../presentational/Input';
import { connect } from 'react-redux';

export const validate = (values) => {
    const errors = {};

    if(!values.stage) {
        errors.stage =  'Required*';
    }

    if(!values.accountNumber) {
        errors.accountNumber =  'Required*';
    }

    return errors;
};

class SecurityCode extends Component {


    render() {

        const { handleSubmit, submitting, reset, pristine} = this.props;

        const fetchSecurityCode = () => {
            console.log('fetch now');
        };

        const renderButton = () => (
            <div>
                <button type="submit" className="btn btn-primary" disabled={ pristine || submitting }>
                    <i className="fa fa-paper-plane" aria-hidden="true"> </i>
                    Security Code
                </button>
            </div>
            );

        const renderStageField = () => (<Field
                name="stage"
                placeholder="Stage2 (CCP Stage)"
                type="text"
                component={Input}/>
            );

        const renderAccountField = () => (<Field
                    name="accountNumber"
                    placeholder="Account"
                    type="text"
                    component={Input}/>
            );

        return (

            <div className="security-code-fetch">
            <form className="form-inline" onSubmit={handleSubmit(fetchSecurityCode)}>

                <div className="form-group col-sm-4">
                    {renderStageField()}
                </div>

                <div className="form-group col-sm-4">
                    {renderAccountField()}
                </div>

                <div className="form-group security-code-retrieved col-sm-1">
                    <label>8889</label>
                </div>

                <div className="form-group col-sm-2 security-code-btn pull-right">
                    {renderButton()}
                </div>



            </form>
                </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        securityCodeChallenge: state.securityCodeChallenge
    }
}

SecurityCode = reduxForm({
    form: 'securityCodeForm',
    validate
}, () => {})(SecurityCode);

export default connect(mapStateToProps)(SecurityCode)