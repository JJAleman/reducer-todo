import React, { useState, useReducer } from "react";
import { todoReducer, initialState } from "../reducers";

const TodoForm = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [newTodo, setNewTodo] = useState();

  const handleChange = e => {
    setNewTodo(e.target.value);
  };

  return (
    <div>
      Hi I'm the Form!
      <input
        type="text"
        name="todo"
        placeholder="New Todo"
        value={newTodo}
        onChange={handleChange}
      />
      <button
        onClick={() => {
          dispatch({ type: "ADD_TODO", payload: newTodo });
          setNewTodo({
            todos: [
              ...state,
              {
                item: "",
                completed: false,
                id: new Date()
              }
            ]
          });
        }}
      >
        +
      </button>
    </div>
  );
};

export default TodoForm;