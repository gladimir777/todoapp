import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { register } from '../../redux/actions/auth';

const Register = ({ register, auth, isAuthenticated, loading }) => {
  const [userData, setUserData] = useState({
    name: '',
    user_name: '',
    password: '',
  });

  const handleChange = (e) =>
    setUserData({ ...userData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userData.password || !userData.user_name || !userData.name) {
      return;
    }
    register(userData);
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
              <div className="form-group">
                <label>
                  <input
                    type="text"
                    id="form_name"
                    className="my_form-control"
                    name="name"
                    value={userData.name}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                  <small className="my_place">Name</small>
                  <div className="invalid-feedback">
                    Please enter the above field.
                  </div>
                </label>
              </div>

              <div className="form-group">
                <label>
                  <input
                    type="text"
                    id="form_user"
                    className="my_form-control"
                    name="user_name"
                    value={userData.userName}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                  <small className="my_place">Username</small>
                  <div className="invalid-feedback">
                    Please enter the above field.
                  </div>
                </label>
              </div>

              <div className="form-group">
                <label>
                  <input
                    type="password"
                    id="form_password"
                    className="my_form-control"
                    value={userData.password}
                    name="password"
                    onChange={(e) => handleChange(e)}
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
                  disabled={loading}
                >
                  {loading && (
                    <div
                      className="spinner-border text-dark float-right text-light"
                      role="status"
                    ></div>
                  )}
                  Register
                </button>
              </div>

              <div className="form-group mt-4 text-center">
                <Link to="/" className="forgot">
                  Login
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
  loading: state.auth.loadingRister,
});

export default connect(mapStateToProps, { register })(Register);
