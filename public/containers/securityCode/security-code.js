import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from '../presentational/Input';


class SecurityCode extends Component {

    render() {

        return (
            <form className="form-inline">
                <div className="container-fluid security-code-info">

                    <div className="form-group field">
                        <Field
                            className="form-control"
                            name="stage"
                            component={Input}
                            placeholder="Stage2 (CCP Stage)"/>
                    </div>

                    <div className="form-group field">
                        <Field
                            className="form-control"
                            name="accountNumber"
                            component={Input}
                            placeholder="Account Number"/>
                    </div>

                    <div className="form-group field">
                        <button type="submit" className="btn btn-primary">
                            <i className="fa fa-paper-plane" aria-hidden="true"></i>
                            Security Code
                        </button>
                    </div>

                    <div className="form-group security-code-show">
                        <div className="security-code-retrieved text-center">
                            8989
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default reduxForm({
    form: 'fetchSecurityCode'
})(SecurityCode)
