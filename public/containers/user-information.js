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
            // <div className="col-sm-8 well margin-well">
            //     <p className="user-info"><i className="fa fa-paypal"> </i> {this.props.authJson.type} </p>
            //     <p className="user-info"><i className="fa fa-envelope"> </i> {this.props.authJson.emailAddress}</p>
            //     <p className="user-info"><i className="fa fa-user-secret"> </i> {this.props.authJson.accountNumber}</p>
            //     <p className="user-info"><i className="fa fa-user"> </i> {this.props.authJson.firstName}</p>
            //     <p className="user-info"><i className="fa fa-home"> </i> {this.props.authJson.homeAddress1} </p>
            //     <p className="user-info"><i className="fa fa-mobile"> </i> {this.props.authJson.mobilePhone} </p>
            //     <p className="user-info"><i className="fa fa-phone"> </i> {this.props.authJson.homePhoneNumber} </p>
            //     <p className="user-info"><i className="fa fa-cc-visa"> </i> 7373 3939 3784 6268</p>
            //     <p className="user-info"><i className="fa fa-cc-mastercard"> </i> 7373 3939 3784 6268</p>
            //     <p className="user-info"><i className="fa fa-cc-amex"> </i> 7373 3939 3784 6268</p>
            //     <p className="user-info"><i className="fa fa-cc-discover"> </i> 7373 3939 3784 6268</p>
            //     <p className="user-info"><i className="fa fa-question-circle"> </i> {this.props.authJson.securityAnswer1} </p>
            //     <p className="user-info"><i className="fa fa-check-circle"> </i> {this.props.authJson.securityAnswer1} </p>
            //     <p className="user-info"><i className="fa fa-question-circle"> </i> {this.props.authJson.securityAnswer2} </p>
            //     <p className="user-info"><i className="fa fa-check-circle"> </i> {this.props.authJson.securityAnswer2} </p>
            // </div>

            <div className="container-fluid user-info-panel">
                <div className="col-sm-9">
                    <p className="user-info text-center page-header"><i className="fa fa-paypal"> </i> {this.props.authJson.type} </p>
                    <div className="row">
                        <div className="col-xs-8 col-sm-6">
                            <p className="user-info pull-left"><i className="fa fa-envelope"> </i> {this.props.authJson.emailAddress}</p>
                        </div>
                        <div className="col-xs-4 col-sm-6">
                            <p className="user-info pull-right"><i className="fa fa-user-secret"> </i> {this.props.authJson.accountNumber}</p>
                        </div>

                        <div className="col-xs-8 col-sm-6">
                            <p className="user-info"><i className="fa fa-user"> </i> {this.props.authJson.firstName}</p>
                        </div>
                        <div className="col-xs-4 col-sm-6">
                            <p className="user-info pull-right"><i className="fa fa-home"> </i> {this.props.authJson.homeAddress1} </p>
                            <p className="pull-right">{this.props.authJson.homeCity} </p>
                            <p className="pull-right">{this.props.authJson.homeCountry} </p>

                        </div>

                        <div className="col-xs-8 col-sm-6">
                            <p className="user-info"><i className="fa fa-mobile"> </i> {this.props.authJson.mobilePhone} </p>
                        </div>
                        <div className="col-xs-4 col-sm-6">
                            <p className="user-info pull-right"><i className="fa fa-phone"> </i> {this.props.authJson.homePhoneNumber} </p>
                        </div>

                        <div className="col-xs-8 col-sm-10 page-header text-center">
                            <p className="user-info"><i className="fa fa-question-circle"> </i> {this.props.authJson.securityAnswer1} </p>
                        </div>
                        <div className="col-xs-4 col-sm-6">
                            <p className="user-info pull-right"><i className="fa fa-check-circle"> </i> {this.props.authJson.securityAnswer1} </p>
                        </div>

                        <div className="col-xs-8 col-sm-6">
                            <p className="user-info"><i className="fa fa-question-circle"> </i> {this.props.authJson.securityAnswer2} </p>
                        </div>
                        <div className="col-xs-4 col-sm-6">
                            <p className="user-info pull-right"><i className="fa fa-check-circle"> </i> {this.props.authJson.securityAnswer2} </p>
                        </div>


                    </div>
                </div>
                </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        authJson: state.authJson
    }
}

export default connect(mapStateToProps)(UserInformation)


// <p className="list-group-item"><i className="fa fa-phone"> </i> 000-000-0000 </p>
//     <p className="list-group-item"><i className="fa fa-envelope"> </i> john@example.com</p>
// <p className="list-group-item"><i className="fa fa-cc-visa"> </i> 7373 3939 3784 6268</p>