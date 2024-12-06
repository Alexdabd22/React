import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1>Головна сторінка</h1>
            <Link to="computers-and-laptops">Перейти до Комп’ютери та ноутбуки</Link>
        </div>
    );
};

export default HomePage;
