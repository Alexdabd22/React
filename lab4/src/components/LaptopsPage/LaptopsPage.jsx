import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const LaptopsPage = () => {
    const location = useLocation();
    const isNestedRoute = location.pathname !== '/computers-and-laptops/laptops';

    return (
        <div>
            {!isNestedRoute && (
                <>
                    <h1>Ноутбуки</h1>
                    <Link to="lenovo">Перейти до ноутбука Lenovo</Link>
                </>
            )}
            <Outlet />
        </div>
    );
};

export default LaptopsPage;
