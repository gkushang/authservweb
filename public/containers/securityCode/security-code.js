import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class SecurityCode extends Component {

    render() {
        return (
                <div>
                    <div className="container-fluid auth-panel">
                        <Field
                            className="myInput"
                            name="accountNumber"
                            type="text"
                            component="input"
                            placeholder="Account Number"/>

                        <Field
                            className="myInput"
                            name="stage2"
                            type="text"
                            component="input"
                            placeholder="Stage2X (CCP Stage)"/>

                        <Field
                            className="myInput"
                            name="stage2"
                            type="text"
                            component="input"
                            placeholder="Stage2X (CCP Stage)"/>

                        <button className="btn-primary btn-default">Security Code</button>


                    </div>
                </div>
        );
    }
}

export default reduxForm({
    form: 'fetchSecurityCode'
})(SecurityCode)
