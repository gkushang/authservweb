import React, {Component} from 'react';
import {connect} from 'react-redux';


export default class UserDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        var value = event.target.value.replace(/\D/g, '');
        // var newVal = '';
        //
        // if(val.length > 3 && val.length < 6) {
        //     newVal += val.substr(0, 3) + '-';
        //     val = val.substr(3);
        // }
        //
        // if(val.length > 6) {
        //     console.log(val);
        //     newVal += val.substr(0, 6) + '-';
        //     val = val.substr(6);
        // }
        //
        // newVal += val;

        var val;
        val = value.toString().replace(/\D/g, "");
        var len = val.length;
        function format() {
            if (len < 4) {
                return val;
            }

            else if (len > 3 && len < 6) {
                if (mask)
                    return "***-" + val.substr(3);
                else {
                    console.log('=====3 < len < 6');
                    return val.substr(0, 3) + "-" + val.substr(3);
                }
            } else if (len >= 5) {
                if (mask)
                    return "***-**-" + val.substr(5, 4);
                else
                    return val.substr(0, 3) + "-" + val.substr(3, 3) + "-" + val.substr(5, 4);
            }
        }

        this.setState({value: format()});
    }

    render() {
        return (
            <div>
                <input
                    placeholder="Account Number"
                />
                <input
                    placeholder="Email Address"
                    value={this.state.value}
                    onChange={this.handleChange}
                />

                <input
                    placeholder="Country Code"
                />
                <input
                    placeholder="Phone Number"
                />


            </div>
        );
    }
}

