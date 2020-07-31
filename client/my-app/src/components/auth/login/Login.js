import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { login } from '../../../redux/actions/auth';
import FormInputs from '../FormInputs';

import './login.css';

const Login = ({ login, auth, isAuthenticated }) => {
  const [userData, setUserData] = useState({ user_name: '', password: '' });

  const handleChange = (e) =>
    setUserData({ ...userData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userData.user_name || !userData.password) {
      return;
    }
    login(userData);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="container myCtn">
      <div className="card">
        <div className="card-body">
          <div className="col-md-12">
            <h2 className="text-center mt-3">Sign in</h2>
            <form
              action=""
              id="contact-form"
              className="main-form needs-validation"
              onSubmit={(e) => handleSubmit(e)}
              noValidate
            >
              <FormInputs
                type="text"
                id="form_user"
                name="user_name"
                value={userData.userName}
                label="UserName"
                handleChange={(e) => handleChange(e)}
                required={true}
              />

              <div className="form-group">
                <label>
                  <input
                    type="password"
                    id="form_password"
                    className="my_form-control"
                    value={userData.password}
                    name="password"
                    onChange={handleChange}
                    required
                  />
                  <small className="my_place">Your password</small>
                  <div className="invalid-feedback">
                    Please enter the above field.
                  </div>
                </label>
              </div>

              <div className="form-group text-center">
                <button
                  type="submit"
                  className="btn btn-primary mt-3 mx-auto"
                  disabled={auth.loading}
                >
                  {auth.loading && (
                    <div
                      className="spinner-border text-dark float-right text-light"
                      role="status"
                    ></div>
                  )}
                  SIGN IN
                </button>
              </div>
              <div className="form-group mt-4 text-center">
                <Link to="/register" className="forgot">
                  Register
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
