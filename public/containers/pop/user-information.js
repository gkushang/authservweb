import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserInformation extends Component {

    render() {

        console.log('props == ', this.props);

        const userInfo = this.props.user;

        console.log('userInfo == ', userInfo);

        if (!userInfo) {
            return (
                <div className="container-fluid auth-panel panel-color text-center user-info-action">
                    Select Challenge to Pop User
                </div>
            );
        } else if(!userInfo.user) {
            return (
                <div className="container-fluid auth-panel panel-color text-center text-danger user-info-action fade in">
                    <i className="fa fa-exclamation-triangle">  </i> Error retrieving user information
                </div>
            );
        }

        const challenges = userInfo.challenges.join(', ');

        return (
            <div className="container-fluid auth-panel panel-color">

                <div className="panel-heading text-info">
                    <p className="text-center user-info-title "><i className="fa fa-paypal"> </i> {userInfo.challenge.type}</p>
                </div>

                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-xs-8 col-sm-6">
                            <p className="user-info pull-left"><i className="fa fa-envelope"> </i> {userInfo.user.emailAddress}</p>
                        </div>
                        <div className="col-xs-4 col-sm-6">
                            <p className="user-info pull-right"><i className="fa fa-user-secret"> </i> {userInfo.user.accountNumber}</p>
                        </div>

                        <div className="col-xs-8 col-sm-6">
                            <p className="user-info"><i className="fa fa-user"> </i> {userInfo.user.firstName}</p>
                        </div>
                        <div className="col-xs-4 col-sm-6">
                            <p className="user-info pull-right"><i className="fa fa-home"> </i> {userInfo.user.homeAddress1} </p>
                            {/*<p className="pull-right">{this.props.authJson.homeCity} </p>*/}
                            {/*<p className="pull-right">{this.props.authJson.homeCountry} </p>*/}

                        </div>

                        <div className="col-xs-8 col-sm-6">
                            <p className="user-info"><i className="fa fa-mobile"> </i> {userInfo.user.mobilePhone} </p>
                        </div>
                        <div className="col-xs-4 col-sm-6">
                            <p className="user-info pull-right"><i className="fa fa-phone"> </i> {userInfo.user.homePhoneNumber} </p>
                        </div>

                        <div className="col-xs-4 col-sm-6">
                            <p className="user-info"><i className="fa fa-user-plus"> </i> {userInfo.user.accountType}</p>
                        </div>

                        <div className="col-xs-4 col-sm-6">
                            <p className="user-info pull-right"><i className="fa fa-desktop" aria-hidden="true"> </i> {userInfo.stage} </p>
                        </div>

                        <div className="col-xs-8 col-sm-6">
                            <p className="user-info"><i className="fa fa-question-circle"> </i> {userInfo.user.securityAnswer1} </p>
                        </div>
                        <div className="col-xs-4 col-sm-6">
                            <p className="user-info pull-right"><i className="fa fa-check-circle"> </i> {userInfo.user.securityAnswer1} </p>
                        </div>

                        <div className="col-xs-8 col-sm-6">
                            <p className="user-info"><i className="fa fa-question-circle"> </i> {userInfo.user.securityAnswer2} </p>
                        </div>
                        <div className="col-xs-4 col-sm-6">
                            <p className="user-info pull-right"><i className="fa fa-check-circle"> </i> {userInfo.user.securityAnswer2} </p>
                        </div>

                        <div className="col-xs-4 col-sm-6">
                            <p className="user-info"><i className="fa fa-hand-o-right"> </i> {userInfo.available} left</p>
                        </div>

                        <div className="col-xs-4 col-sm-6">
                            <p className="user-info pull-right"><i className="fa fa-list-ul" aria-hidden="true"> </i> {challenges} </p>
                        </div>

                        <p className="text-center page-header"><i className="fa"> </i>  </p>

                        <div className="col-xs-8 col-sm-6">
                            <p className="user-info"><i className="fa fa-cc-visa"> </i> 7373 3939 3784 6268</p>
                        </div>
                        <div className="col-xs-4 col-sm-6">
                            <p className="user-info pull-right"><i className="fa fa-cc-mastercard"> </i> 7373 3939 3784 6268</p>
                        </div>

                        <div className="col-xs-8 col-sm-6">
                            <p className="user-info"><i className="fa fa-cc-amex"> </i> 7373 3939 3784 6268</p>
                        </div>
                        <div className="col-xs-4 col-sm-6">
                            <p className="user-info pull-right"><i className="fa fa-cc-discover"> </i> 7373 3939 3784 6268</p>
                        </div>


                    </div>
                </div>
                </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        challenge: state.challenge
    }
}

export default connect(mapStateToProps)(UserInformation)