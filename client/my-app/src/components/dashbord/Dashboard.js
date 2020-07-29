import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/auth';
import Task from '../tasks/Task';

const Dashboard = ({ userData, logout }) => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a href="#/" class="navbar-brand  mr-auto mt-2 mt-lg-0">
          TodoApp
        </a>
        <ul class="navbar-nav right">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {userData ? userData.user_name : ''}
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#" onClick={logout}>
                Log out
              </a>
            </div>
          </li>
        </ul>
      </nav>
      <Task userData={userData} />
      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">Name</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Todo name"
          />
        </div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1">Description</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="A description of what need to be done"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">
          Add todo
        </button>
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  userData: state.auth.user,
});

export default connect(mapStateToProps, { logout })(Dashboard);
