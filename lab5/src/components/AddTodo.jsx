import React, { useState } from "react";
import { addTodo } from "../models/todo";

const AddTodo = () => {
    const [task, setTask] = useState("");

    const handleAdd = () => {
        if (task.trim()) {
            addTodo(task);
            setTask("");
        }
    };

    return (
        <div className="todo-input">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Нове завдання"
            />
            <button onClick={handleAdd}>Додати</button>
        </div>
    );
};

export default AddTodo;
