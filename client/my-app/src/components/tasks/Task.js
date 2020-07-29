import React from 'react';
import TaskRow from './TaskRow';

const Task = ({ task }) => {
  const tableRow = task.map((item, index) => (
    <TaskRow key={item._id} item={item} index={index} />
  ));
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">State</th>
            <th scope="col">Done</th>
          </tr>
        </thead>
        <tbody>{tableRow}</tbody>
      </table>
    </>
  );
};

export default Task;
