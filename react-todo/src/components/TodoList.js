import React, { useReducer } from "react";
// import Todo from "./Todo";
// import TodoForm from "./TodoForm";
import { initialState, todoReducer } from "../reducers";

const TodoList = () => {

    const [state] = useReducer(todoReducer, initialState);
    console.log(state);
    return (
       
        <div>Todo List Component!
            {/* {state.map( todo => (
                <Todo
                key = {todo.id}
                {...todo}
                />
                
            ))} */}
        </div>
    )
    
}

export default TodoList;