import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <h1>IQ-Test</h1>
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/verbal-reasoning" className="nav-link">Verbal Reasoning</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/logical-reasoning" className="nav-link">Logical Reasoning</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/memory" className="nav-link">Memory</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/spatial-reasoning" className="nav-link">Spatial Reasoning</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;