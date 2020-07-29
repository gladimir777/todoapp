import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/auth';
import Task from '../tasks/Task';
import AddForm from './AddForm';
import NavBar from './NavBar';

const Dashboard = ({ userData, logout }) => {
  return (
    <>
      <NavBar logout={logout} userData={userData} />
      <Task userData={userData} />
      <AddForm />
    </>
  );
};

const mapStateToProps = (state) => ({
  userData: state.auth.user,
});

export default connect(mapStateToProps, { logout })(Dashboard);
