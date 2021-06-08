import React from 'react'
import logo from '../assets/logo.png';
import {Link} from 'react-router-dom';

export default function Home() {
    return (
        <div className="home-container">
            <div className="landing-div">
            <p>6.28.2021</p>
            <Link to="/signup">
                <button>Sign Up Now</button>
            </Link>
            </div>
        </div>
    )
}
