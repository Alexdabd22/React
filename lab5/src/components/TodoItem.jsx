import React, { useState } from "react";
import { toggleTodo, removeTodo, editTodo } from "../models/todo";

const TodoItem = ({ todo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTask, setNewTask] = useState(todo.task);

    const handleEdit = () => {
        if (isEditing && newTask.trim()) {
            editTodo({ id: todo.id, newTask });
        }
        setIsEditing(!isEditing);
    };

    return (
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
            {isEditing ? (
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
            ) : (
                <span
                    style={{
                        textDecoration: todo.completed ? "line-through" : "none",
                        cursor: "pointer",
                    }}
                    onClick={() => toggleTodo(todo.id)}
                >
          {todo.task}
        </span>
            )}
            <div>
                <button onClick={handleEdit}>{isEditing ? "Зберегти" : "Редагувати"}</button>
                <button onClick={() => removeTodo(todo.id)}>Видалити</button>
            </div>
        </div>
    );
};

export default TodoItem;
