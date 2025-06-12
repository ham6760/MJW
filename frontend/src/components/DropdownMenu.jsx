// DropdownMenu.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DropdownMenu = ({ icon, label, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li className={`nav-item dropdown ${isOpen ? 'show' : ''}`} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} >
            <a className="nav-link dropdown-toggle-split" href="#" role="button">
                <div className="image-container">
                    <img className="image" src={icon} alt={label} />
                </div>
            </a>
            <ul className={`dropdown-menu dropdown-menu-dark dropdown-menu-end ${isOpen ? 'show' : ''}`}>
                {items.map((item, index) => (
                    <li key={index}>
                        <Link className="dropdown-item" to={item.to}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </li>
    );
};

export default DropdownMenu;
