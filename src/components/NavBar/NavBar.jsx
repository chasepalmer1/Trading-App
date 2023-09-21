import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
        <div>
            <div style={{display:"flex"}}>
                <h2 style={{margin:"0"}}>TradeHub</h2>
            </div>
            <div class="inner">
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/paperTrade">Paper-Trade</Link>
                    <Link to="/portTrack">Portfolio Tracker</Link>
                </ul>
            </div>
        </div>
    )

}

export default NavBar;