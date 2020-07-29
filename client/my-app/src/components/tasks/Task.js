import React from 'react';
import { connect } from 'react-redux';

const Task = ({ userData }) => {
  const tableRow = userData
    ? userData.taks.map((item, index) => (
        <tr key={item._id}>
          <th scope="row">{index + 1}</th>
          <td>{item.name}</td>
          <td>{item.description}</td>
          <td>{!item.state ? 'To do' : 'Done'}</td>
        </tr>
      ))
    : null;
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">State</th>
          </tr>
        </thead>
        <tbody>{tableRow}</tbody>
      </table>
    </>
  );
};

export default Task;
