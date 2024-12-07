import { createStore, createEvent } from "effector";

// Події
export const addTodo = createEvent();
export const removeTodo = createEvent();
export const toggleTodo = createEvent();
export const editTodo = createEvent();
export const clearCompletedTodos = createEvent();
export const loadTodos = createEvent(); // Подія для завантаження збережених даних

// Стан
export const $todos = createStore(JSON.parse(localStorage.getItem("todos")) || [])
    .on(addTodo, (state, task) => {
        const newState = [...state, { id: Date.now(), task, completed: false }];
        localStorage.setItem("todos", JSON.stringify(newState));
        return newState;
    })
    .on(removeTodo, (state, id) => {
        const newState = state.filter(todo => todo.id !== id);
        localStorage.setItem("todos", JSON.stringify(newState));
        return newState;
    })
    .on(toggleTodo, (state, id) => {
        const newState = state.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        localStorage.setItem("todos", JSON.stringify(newState));
        return newState;
    })
    .on(editTodo, (state, { id, newTask }) => {
        const newState = state.map(todo =>
            todo.id === id ? { ...todo, task: newTask } : todo
        );
        localStorage.setItem("todos", JSON.stringify(newState));
        return newState;
    })
    .on(clearCompletedTodos, (state) => {
        const newState = state.filter(todo => !todo.completed);
        localStorage.setItem("todos", JSON.stringify(newState));
        return newState;
    })
    .on(loadTodos, () => {
        const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
        return savedTodos;
    });
