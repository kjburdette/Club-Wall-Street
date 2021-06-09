import React from 'react'
import {Link} from 'react-router-dom';

export default function Home() {
    return (
        <div className="home-container">
            <div className="landing-div">
                <p className="landing-date">6.28.2022</p>
                <div className="landing-button">
                    <Link to="/signup">
                        <button>Sign Up Now</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
