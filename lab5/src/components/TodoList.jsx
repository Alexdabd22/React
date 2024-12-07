import React from "react";
import { useStore } from "effector-react";
import { $todos } from "../models/todo";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const todos = useStore($todos);

    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
};

export default TodoList;
