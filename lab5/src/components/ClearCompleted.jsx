import React from "react";
import { clearCompletedTodos } from "../models/todo";

const ClearCompleted = () => {
    return (
        <button
            className="clear-button"
            onClick={clearCompletedTodos}
        >
            Видалити виконані завдання
        </button>
    );
};

export default ClearCompleted;
