import React, { useState } from "react";

const EditTodoForm = ({ task, editTodo }) => {
  const [value, setValue] = useState(task.task);
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Update Task"
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};

export default EditTodoForm;
