import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import useElementSize from './hooks/useElementSize';
import './App.css';

function App() {
    const [count, setCount] = useState(0);
    const [elementWidth, setElementWidth] = useState(200);
    const [elementHeight, setElementHeight] = useState(200);
    const [size, elementRef] = useElementSize([elementWidth, elementHeight]);

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>

            <div className="controls">
                <button onClick={() => setElementWidth((prev) => prev + 50)}>
                    Збільшити ширину
                </button>
                <button onClick={() => setElementWidth((prev) => Math.max(prev - 50, 50))}>
                    Зменшити ширину
                </button>
                <button onClick={() => setElementHeight((prev) => prev + 50)}>
                    Збільшити висоту
                </button>
                <button onClick={() => setElementHeight((prev) => Math.max(prev - 50, 50))}>
                    Зменшити висоту
                </button>
            </div>

            {/* Елемент, розміри якого відстежуються */}
            <div
                ref={elementRef}
                className="tracked-element"
                style={{ width: elementWidth, height: elementHeight }}
            >
                <p>Tracked element Розміри :</p>
                <p>Ширина: {size.width}px</p>
                <p>Висота: {size.height}px</p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default App;
