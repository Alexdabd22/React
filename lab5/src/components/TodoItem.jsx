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
        <li className="todo-item">
            {isEditing ? (
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    className="todo-edit-input"
                />
            ) : (
                <span
                    onClick={() => toggleTodo(todo.id)}
                    style={{
                        textDecoration: todo.completed ? "line-through" : "none",
                        cursor: "pointer",
                    }}
                >
                    {todo.task}
                </span>
            )}
            <div>
                <button onClick={handleEdit} className="edit-button">
                    {isEditing ? "Зберегти" : "Редагувати"}
                </button>
                <button onClick={() => removeTodo(todo.id)} className="delete-button">
                    Видалити
                </button>
            </div>
        </li>
    );
};

export default TodoItem;
