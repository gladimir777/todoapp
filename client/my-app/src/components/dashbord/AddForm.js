import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../redux/actions/task';

const AddForm = ({ addTask, loading }) => {
  const [task, setTask] = useState({ name: '', description: '' });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task).then((e) => setTask({ name: '', description: '' }));
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            name="name"
            value={task.name}
            onChange={(e) => handleChange(e)}
            placeholder="Todo name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Description</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="description"
            value={task.description}
            onChange={(e) => handleChange(e)}
            placeholder="A description of what need to be done"
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={loading ? true : false}
        >
          {loading && (
            <div
              className="spinner-border text-dark float-right text-light"
              role="status"
            ></div>
          )}{' '}
          Add todo
        </button>
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.auth.taskLoading,
});

export default connect(mapStateToProps, { addTask })(AddForm);
