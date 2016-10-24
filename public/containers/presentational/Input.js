import React from 'react';
import TextField from 'material-ui/TextField';

export default (field) => {
    console.log('field: ', JSON.stringify(field, null, 2));

    return (
            <TextField
                floatingLabelText={field.placeholder}
                errorText = {field.meta.touched && field.meta.error}
                className="security-field"
                errorStyle={{"font-size": "10px"}}
                style={{
                    "padding-bottom": "5px",
                    "float" :"top",
                    "font-size": "10px"
                }}
                {...field.input}
            />
        );
};