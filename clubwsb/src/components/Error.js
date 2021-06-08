import React from 'react'
import notfound from '../assets/notfound.jpg';


export default function Error() {
    return (
        <div>
            <img src={notfound} alt=""/>
            <h1>404</h1>
        </div>
    )
}
