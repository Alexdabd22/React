import React, { useEffect } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import ClearCompleted from "./components/ClearCompleted";
import { loadTodos } from "./models/todo";

const App = () => {
    useEffect(() => {
        loadTodos();
    }, []);

    return (
        <div className="container">
            <h1 className="title">To-Do List</h1>
            <AddTodo />
            <TodoList />
            <ClearCompleted />
        </div>
    );
};

export default App;
