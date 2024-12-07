import React from "react";
import { useStore } from "effector-react";
import { $todos } from "../models/todo";
import TodoItem from "./TodoItem";
import ClearCompleted from "./ClearCompleted";

const TodoList = () => {
    const todos = useStore($todos);

    return (
        <div>
            {todos.length === 0 ? (
                <p>Список порожній</p>
            ) : (
                todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
            )}
            <ClearCompleted />
        </div>
    );
};

export default TodoList;
