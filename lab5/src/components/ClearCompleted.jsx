import React from "react";
import { clearCompletedTodos } from "../models/todo";

const ClearCompleted = () => {
    const handleClear = () => {
        clearCompletedTodos();
    };

    return (
        <button onClick={handleClear} style={{ marginTop: "20px" }}>
            Видалити виконані завдання
        </button>
    );
};

export default ClearCompleted;
