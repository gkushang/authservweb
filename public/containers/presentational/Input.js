import React from 'react';
import TextField from 'material-ui/TextField';

export default (field) => {
    console.log('field: ', JSON.stringify(field, null, 2));

    return (
            <TextField
                floatingLabelText={field.placeholder}
                errorText = {field.meta.touched && field.meta.error}
                {...field.input}
            />
        );
};