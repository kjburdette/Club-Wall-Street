import React from 'react'
import world from '../assets/world.png';
import stockfloor from '../assets/stockfloor.png';
import wallet from '../assets/wallet.png';



export default function About() {
    return (
        <div className="about-container">
            <div className="group-1">
                <div className="about-card">
                    <div className="about-image">
                        <img className="image-1" src={world} alt="" height="100%" width="100%"/>
                    </div>
                    <div className="about-text">
                        <h2>What's the Game About?</h2>
                        <p>Welcome to Club Wall Street! A free to play mobile game where you explore the virtual world of investing. Hang out with friends, play mini-games, and earn REAL crypto just for playing the game!</p>
                    </div>
                </div>
            </div>
            <div className="group-2">
                <div className="about-card2">
                    <div className="about-image">
                        <img src={stockfloor} alt="" height="100%" width="100%"/>
                    </div>
                    <div className="about-text">
                        <h2>View Stocks in REAL Time!</h2>
                        <p>Walk along the trade floor, check your favorite stocks, and get price updates live!</p>
                    </div>
                </div>
            </div>
            <div className="group-1">
                <div className="about-card">
                    <div className="about-image">
                        <img src={wallet} className="image-1" alt="" height="100%" width="100%"/>
                    </div>
                    <div className="about-text">
                        <h2>Earn Crypto Just for Playing!</h2>
                        <p>Easily connect your coinbase wallet, make deposits, and view your balance. All you have to do is play!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
