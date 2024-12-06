import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
    const location = useLocation();
    const paths = location.pathname.split('/').filter((path) => path);

    const breadcrumbs = [
        { name: 'Головна', path: '/' },
        ...paths.map((path, index) => ({
            name: path
                .replace('computers-and-laptops', 'Комп’ютери та ноутбуки')
                .replace('laptops', 'Ноутбуки')
                .replace('lenovo', 'Ноутбук Lenovo'),
            path: '/' + paths.slice(0, index + 1).join('/'),
        })),
    ];

    return (
        <nav>
            <ol className="breadcrumb">
                {breadcrumbs.map((crumb, index) => (
                    <li key={index} className="breadcrumb-item">
                        {index < breadcrumbs.length - 1 ? (
                            <Link to={crumb.path}>{crumb.name}</Link>
                        ) : (
                            <span>{crumb.name}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
