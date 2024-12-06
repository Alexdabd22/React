import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useBreadcrumbs = () => {
    const [breadcrumbs, setBreadcrumbs] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const pathnames = location.pathname.split('/').filter((x) => x);

        const breadcrumbData = [
            { name: 'Головна', link: '/' },
            ...pathnames.map((path, index) => {
                const link = '/' + pathnames.slice(0, index + 1).join('/');
                let name;

                switch (path) {
                    case 'computers-and-laptops':
                        name = 'Комп’ютери та ноутбуки';
                        break;
                    case 'laptops':
                        name = 'Ноутбуки';
                        break;
                    case 'lenovo':
                        name = 'Ноутбук Lenovo';
                        break;
                    default:
                        name = path;
                }

                return { name, link };
            }),
        ];

        setBreadcrumbs(breadcrumbData);
    }, [location]);

    return breadcrumbs;
};

export default useBreadcrumbs;
