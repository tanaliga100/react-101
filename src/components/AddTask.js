import React from "react";

import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (title <= 0 || author <= 0) {
      alert("Please fill in all fields");
      return;
    } else {
      onAdd({ title, author, reminder });
      setTitle("");
      setAuthor("");
      setReminder(false);
    }
  };
  return (
    <div
      className="container text-center justify-content-center"
      onSubmit={onSubmit}
    >
      <form onSubmit={onSubmit}>
        <fieldset>
          <legend>
            <h2 className="text-muted">What are we doing today ??? ...</h2>
          </legend>
          <div className="mb-3">
            <label htmlFor="disabledTextInput" className="form-label">
              {" "}
            </label>
            <input
              type="text"
              id="disabledTextInput"
              className="form-control"
              placeholder="What are your task/s ?..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="disabledTextInput" className="form-label">
              <i className="fas fa-tasks"></i>
            </label>
            <input
              type="text"
              id="disabledTextInput"
              className="form-control"
              placeholder="Give me your name..."
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <div className="form-check">
              <label htmlFor="disabledTextInput" className="form-label"></label>
              <label
                className="form-check-label"
                htmlFor="disabledFieldsetCheck"
              >
                Reminder
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="disabledFieldsetCheck"
                  checked={reminder}
                  value={reminder}
                  onChange={(e) => setReminder(e.currentTarget.checked)}
                />
              </label>
            </div>
          </div>
          <div className="d-grid gap-2 mx-">
            <button type="submit" className="btn btn-danger">
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default AddTask;
