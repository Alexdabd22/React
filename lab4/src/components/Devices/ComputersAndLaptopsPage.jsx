import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const ComputersAndLaptopsPage = () => {
    const location = useLocation();
    const isNestedRoute = location.pathname !== '/computers-and-laptops';

    return (
        <div>
            {!isNestedRoute && (
                <>
                    <h1>Комп’ютери та ноутбуки</h1>
                    <Link to="laptops">Перейти до ноутбуків</Link>
                </>
            )}
            <Outlet />
        </div>
    );
};

export default ComputersAndLaptopsPage;
