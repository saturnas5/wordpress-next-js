import React from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css';

const Navigation = ({ categories }) => {
    const parentCategories = categories.filter(category => category.parent === 0 && category.name !== "Uncategorized");

    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-4">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <Link href='/'>
                            <a className="nav-link">Home</a>
                        </Link>
                    </li>
                    {parentCategories.map(category => (
                        <li key={category.id} className="nav-item">
                            <Link href={category.slug}>
                                <a className="nav-link">{category.name}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
    );
};

export default Navigation;