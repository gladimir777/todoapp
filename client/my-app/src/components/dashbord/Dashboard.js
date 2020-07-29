import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from '../../redux/actions/auth';
import Task from '../tasks/Task';
import AddForm from './AddForm';
import NavBar from './NavBar';

const Dashboard = ({ userData, logout, task, isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <NavBar logout={logout} userData={userData} />
      <Task task={task} />
      <AddForm />
    </>
  );
};

const mapStateToProps = (state) => ({
  userData: state.auth.user,
  task: state.auth.task,
  iasAuthenticated: state.auth.iasAuthenticated,
});

export default connect(mapStateToProps, { logout })(Dashboard);
