import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
        <>
            <div style={{display:"flex"}}>
                <h2 style={{margin:"0"}}>TradeHub</h2>
            </div>
            <div class="inner">
                <ul>
                    <Link to="/">Paper-Trade</Link>
                    <Link to="/portTrack">Portfolio Tracker</Link>
                </ul>
            </div>
        </>
    )

}

export default NavBar;