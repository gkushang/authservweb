import React from 'react';

export default function(props) {
    return (
        <div className="input-row">
            <input type="text" {...props}/>
            {props.touched && props.error && <span className="error">{props.error}</span>}
        </div>
    )
}