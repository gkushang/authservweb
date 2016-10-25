import React, {Component} from 'react';
import { reduxForm, Fields, Field} from 'redux-form';
import Input from '../presentational/Input';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchSecurityCode} from '../../actions/index';

export const validate = (values) => {
    const errors = {};

    console.log('values: ', values);

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

        console.log('props == ', this.props);

        const { handleSubmit, submitting, reset, pristine, value, onChange } = this.props;

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

        const renderError = (err) => (
            // <div className="col-lg-12 security-code-error "  data-hide="alert">
            //     <div className="security-code-error-txt alert alert-danger col-sm-12 fade in"  data-hide="alert">
            //         <button type="button" className="close" data-hide="alert">×</button>
            //         <strong>Error!</strong> {err}
            //     </div>
            // </div>

            <div className="security-code-error-txt alert alert-danger col-sm-12" >
                <button type="button" className="close alert-close">×</button>
                <strong>Error!</strong> {err.error}
            </div>

        );

        const renderStageField = () => (<Field
                name="stage"
                placeholder="ccp stage2"
                type="text"
                hintText="stage2"
                component={Input}/>
            );


        // {...this.props.user && this.props.user.accountNumber ? {input: {value:this.props.user.accountNumber }} : {}}
        //prefillValue={this.props.user && this.props.user.accountNumber || ''}

        // {...this.props.user && this.props.user.accountNumber ? {
        //     input: {
        //         value:this.props.user.accountNumber
        //     },
        //     initialValue: 'aa'
        // } : {}}

        const renderAccountField = () => (<Field
                    name="accountNumber"
                    placeholder="account number"
                    type="text"
                    component={Input}
                    defaultValue={this.props.user && this.props.user.accountNumber || ''}
            />
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

                        {this.props.securityCodeFetched.error ? renderError(this.props.securityCodeFetched) : ''}

                    </form>
                </div>

            </div>

        );
    }
}

// {this.props.securityCodeFetched.error ? renderError() : ''}
function mapStateToProps(state) {
    return {
        securityCodeChallenge: state.securityCodeChallenge,
        securityCodeFetched: state.securityCodeFetched,
        user: state.user
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