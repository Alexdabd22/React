import React from 'react';
import { useNavigate } from 'react-router-dom';

const Devices = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Комп’ютери та ноутбуки</h1>
            <button onClick={() => navigate('/laptops')}>Ноутбуки</button>
        </div>
    );
};

export default Devices;
