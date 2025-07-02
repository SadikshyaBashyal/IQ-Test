import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen((prev) => !prev);
    };

    const handleNavClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <h1><Link to="/" className='title-link'>IQ-Test</Link></h1>
                </div>
                <button
                    className={`menu-toggle${menuOpen ? ' open' : ''}`}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                    aria-controls="navbar-nav"
                    onClick={handleMenuToggle}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                <ul className={`navbar-nav${menuOpen ? ' show' : ''}`} id="navbar-nav">
                    <li className="nav-item">
                        <Link to="/verbal-reasoning" className="nav-link" onClick={handleNavClick}>Verbal Reasoning</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/logical-reasoning" className="nav-link" onClick={handleNavClick}>Logical Reasoning</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/memory" className="nav-link" onClick={handleNavClick}>Memory</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/spatial-reasoning" className="nav-link" onClick={handleNavClick}>Spatial Reasoning</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link" onClick={handleNavClick}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;