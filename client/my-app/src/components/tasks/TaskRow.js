import React, { useState } from 'react';

const TaskRow = ({ item, index }) => {
  const [check, setCheck] = useState(false);

  const handleCheck = (e, index) => {
    setCheck(!check);
    console.log('check', index);
  };

  return (
    <>
      <tr>
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
              onChange={(e) => handleCheck(e, index)}
              id="defaultCheck1"
            />
          </div>
        </td>
      </tr>
    </>
  );
};

export default TaskRow;
