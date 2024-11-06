import { useState } from 'react';
import useElementSize from './hooks/useElementSize';
import './App.css';

function App() {
    const [elementWidth, setElementWidth] = useState(200);
    const [elementHeight, setElementHeight] = useState(200);
    const [size, elementRef] = useElementSize([elementWidth, elementHeight]);

    return (
        <>
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
        </>
    );
}

export default App;
