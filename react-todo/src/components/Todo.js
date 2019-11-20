import React, { useReducer } from "react";
import { todoReducer, initialState } from "../reducers";

const Todo = () => {

    const [dispatch] = useReducer(todoReducer, initialState)

    return(
        <div
        onClick = {() => {
            dispatch({ type: "TOGGLE_DONE" });
        }}
    >{initialState}</div>
    );
};

export default Todo;