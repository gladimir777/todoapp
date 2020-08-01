import React from 'react';

const Button = ({ type, disabled, loading, label }) => {
  return (
    <>
      <div className="form-group text-center">
        <button
          type={type}
          className="btn btn-primary mt-3 mx-auto"
          disabled={disabled}
        >
          {loading && (
            <div
              className="spinner-border text-dark float-right text-light"
              role="status"
            ></div>
          )}
          {label}
        </button>
      </div>
    </>
  );
};

export default Button;
