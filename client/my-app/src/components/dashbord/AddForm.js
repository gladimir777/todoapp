import React from 'react';

const AddForm = () => {
  return (
    <>
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

export default AddForm;
