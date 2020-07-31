import React from 'react';

const FormInputs = ({
  type,
  name,
  value,
  handleChange,
  required,
  label,
  id,
}) => {
  return (
    <>
      <div className="form-group">
        <label>
          <input
            type={type}
            id={id}
            className="my_form-control"
            name={name}
            value={value}
            onChange={(e) => handleChange(e)}
            required={required}
          />
          <small className="my_place">{label}</small>
          <div className="invalid-feedback">{`Please enter the ${name}.`}</div>
        </label>
      </div>
    </>
  );
};

export default FormInputs;
