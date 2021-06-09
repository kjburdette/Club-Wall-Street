import React from 'react'
import cwscharacter from '../assets/cwscharacter.png';


export default function Error() {
    return (
        <div className="error-container">
            <img className="error-image" src={cwscharacter} alt=""/>
            <h1>404</h1>
            <h2>Oops! We couldn't find the page you were looking for!</h2>
        </div>
    )
}
