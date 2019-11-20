import React, { useReducer } from "react";
import Todo from "./Todo";
import { initialState, todoReducer } from "../reducers";

const TodoList = (props) => {

    const [state] = useReducer(todoReducer, initialState);
    console.log(state);
    return (
       
        <div>Todo List Component!
            {props.todos.map( todo => (
                <Todo
                key = {todo.id}
                {...todo}
                />
                
            ))}
        </div>
    )
    
}

export default TodoList;