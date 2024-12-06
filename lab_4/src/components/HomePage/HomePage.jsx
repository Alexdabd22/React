import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Головна сторінка</h1>
            <button onClick={() => navigate('/computers-and-laptops')}>
                Комп’ютери та ноутбуки
            </button>
        </div>
    );
};

export default HomePage;
