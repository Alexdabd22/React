import React from 'react';
import { useNavigate } from 'react-router-dom';

const LaptopsPage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Ноутбуки</h1>
            <button onClick={() => navigate('/laptops/lenovo')}>Ноутбук Lenovo</button>
        </div>
    );
};

export default LaptopsPage;
