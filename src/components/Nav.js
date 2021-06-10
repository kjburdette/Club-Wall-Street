import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div className="nav-container">
            <nav>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/signup" className="nav-link">Sign Up</Link>
            </nav>
        </div>
    )
}
