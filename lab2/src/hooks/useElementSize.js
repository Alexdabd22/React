import { useState, useEffect, useRef } from 'react';

function useElementSize(dependencies = []) {
    const elementRef = useRef(null);
    const [size, setSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const handleResize = () => {
            if (elementRef.current) {
                setSize({
                    width: elementRef.current.offsetWidth,
                    height: elementRef.current.offsetHeight,
                });
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // викликаємо при першому рендері

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [elementRef, ...dependencies]);

    return [size, elementRef];
}

export default useElementSize;
