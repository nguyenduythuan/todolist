import React from 'react';
import { TextField } from '@material-ui/core';
import PropsTypes from 'prop-types';

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

renderTextField.propTypes = {
  label: PropsTypes.string,
  input: PropsTypes.object,
  meta: PropsTypes.object,
};

export default renderTextField;
