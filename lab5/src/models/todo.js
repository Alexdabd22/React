import { createStore, createEvent } from "effector";

// Події
export const addTodo = createEvent();
export const removeTodo = createEvent();
export const toggleTodo = createEvent();
export const editTodo = createEvent();
export const clearCompletedTodos = createEvent();

// Стан
export const $todos = createStore([])
    .on(addTodo, (state, task) => [...state, { id: Date.now(), task, completed: false }])
    .on(removeTodo, (state, id) => state.filter(todo => todo.id !== id))
    .on(toggleTodo, (state, id) =>
        state.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    )
    .on(editTodo, (state, { id, newTask }) =>
        state.map(todo => todo.id === id ? { ...todo, task: newTask } : todo)
    )
    .on(clearCompletedTodos, (state) => state.filter(todo => !todo.completed));
