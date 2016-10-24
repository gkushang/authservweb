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


        return (

                <div className="container-fluid">

                    <div className="form-group fetch-security-code col-sm-2">

                        <button type="submit" className="btn btn-primary" disabled={ pristine || submitting }>
                            <i className="fa fa-paper-plane" aria-hidden="true"> </i>
                            Security Code
                        </button>

                    </div>

                    <div>
                        <div className="form-group security-code-retrieved col-sm-2">
            <div className="show-code">
                            <span>4444</span>
            </div>
                        </div>
                    </div>
                    <div className="row">
                        <form className="form-inline" onSubmit={handleSubmit(fetchSecurityCode)}>
                        <div className="form-group col-sm-3">
                            <Field
                                name="stage"
                                placeholder="Stage2 (CCP Stage)"
                                type="text"
                                component={Input}/>
                        </div>

                        <div className="form-group col-sm-3">
                            <Field
                                name="accountNumber"
                                placeholder="Account Number"
                                type="text"
                                component={Input}/>
                        </div>

                        </form>
                    </div>
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