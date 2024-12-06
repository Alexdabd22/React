import React from 'react';
import { Link } from 'react-router-dom';
import useBreadcrumbs from '../hooks/useBreadcrumbs';

const Breadcrumb = () => {
    const breadcrumbs = useBreadcrumbs();

    return (
        <nav>
            <ol className="breadcrumb">
                {breadcrumbs.map((crumb, index) => (
                    <li key={index} className="breadcrumb-item">
                        {index < breadcrumbs.length - 1 ? (
                            <Link to={crumb.link}>{crumb.name}</Link>
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
