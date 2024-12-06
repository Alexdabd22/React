import { useState, useEffect } from 'react';

const useBreadcrumbs = () => {
    const [breadcrumbs, setBreadcrumbs] = useState([]);

    useEffect(() => {
        const breadcrumbData = [
            { name: 'Головна', link: '/' },
            { name: 'Комп’ютери та ноутбуки', link: '/computers-and-laptops' },
            { name: 'Ноутбуки', link: '/laptops' },
            { name: 'Ноутбук Lenovo', link: '/laptops/lenovo' },
        ];

        setBreadcrumbs(breadcrumbData);
    }, []);

    return breadcrumbs;
};

export default useBreadcrumbs;
