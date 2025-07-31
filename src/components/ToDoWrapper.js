import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";

const ToDoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };

  const toggelComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        id == todo.id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        id === todo.id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => id !== todo.id));
  };
  return (
    <div className="TodoWrapper">
      <h1>Get Things Done</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            task={todo}
            toggelComplete={toggelComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            key={todo.id}
          />
        )
      )}
    </div>
  );
};

export default ToDoWrapper;
