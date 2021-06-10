import React from 'react'
import {Link} from 'react-router-dom';

export default function Home() {
    return (
        <div className="home-container">
            <div className="landing-div">
                <p className="landing-date">6.28.2022</p>
                    <Link to="/signup">
                        <button className="landing-button">Sign Up Now</button>
                    </Link>
            </div>
        </div>
    )
}
