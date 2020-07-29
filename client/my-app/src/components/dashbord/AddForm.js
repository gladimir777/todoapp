import React, { useState } from 'react';

const AddForm = () => {
  const [task, setTask] = useState({ name: '', description: '' });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">Name</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            name="name"
            value={task.name}
            onChange={(e) => handleChange(e)}
            placeholder="Todo name"
          />
        </div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1">Description</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="description"
            value={task.description}
            onChange={(e) => handleChange(e)}
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

export default AddForm;
