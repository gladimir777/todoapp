import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { login } from '../../../redux/actions/auth';
import FormInputs from '../FormInputs';

import './login.css';
import Button from '../Button';

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
                label="User name"
                handleChange={handleChange}
                required={true}
              />

              <FormInputs
                type="password"
                id="form_password"
                name="password"
                value={userData.password}
                label="Your password"
                handleChange={handleChange}
                required={true}
              />

              <Button
                disabled={auth.loading}
                loading={auth.loading}
                label="SIGN IN"
                type="submit"
              />
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
