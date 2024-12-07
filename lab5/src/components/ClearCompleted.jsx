import React from "react";
import { useStore } from "effector-react";
import { $todos, clearCompletedTodos } from "../models/todo";

const ClearCompleted = () => {
    const todos = useStore($todos);

    const handleClear = () => {
        clearCompletedTodos();
    };

    return (
        <div>
            {todos.length === 0 ? (
                <p className="all-done-message">Всі завдання виконано!</p>
            ) : (
                <button className="clear-button" onClick={handleClear}>
                    Видалити виконані завдання
                </button>
            )}
        </div>
    );
};

export default ClearCompleted;
