import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div>
            <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/signup">Sign Up</Link>
            </nav>
        </div>
    )
}
