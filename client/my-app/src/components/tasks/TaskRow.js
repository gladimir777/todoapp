import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { updateTask } from '../../redux/actions/task';

const TaskRow = ({ item, index, updateTask }) => {
  const [check, setCheck] = useState(item.state);
  const [id, setId] = useState('');

  useEffect(() => {
    if (id || check) {
      updateTask(id, check);
    }
  }, [id, check, updateTask]);

  const handleCheck = (id, index) => {
    setCheck(!check);
    setId(id);
  };

  return (
    <>
      <tr className={`${item.state ? 'done' : ''}`}>
        <th scope="row">{index + 1}</th>
        <td>{item.name}</td>
        <td>{item.description}</td>
        <td>{!item.state ? 'To do' : 'Done'}</td>
        <td>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value={check}
              checked={check}
              onChange={(e) => handleCheck(item._id, index)}
              id="defaultCheck1"
            />
          </div>
        </td>
      </tr>
    </>
  );
};

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, { updateTask })(TaskRow);
