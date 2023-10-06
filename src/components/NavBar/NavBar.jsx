import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = (props) => {

    return (
        <div>
            <div style={{display:"flex"}}>
                <h2 style={{margin:"0", width:"20%"}}>TradeHub</h2>
                <div style={{display:"flex", width:"80%", alignItems: "center", justifyContent: "right"}}>
                    <h3 style={{margin:"0"}}>{props.displayContent}</h3>
                </div>
            </div>
            <div class="inner">
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/paperTrade">Paper-Trade</Link>
                    <Link to="/portTrack">Portfolio-Tracker</Link>
                </ul>
            </div>
        </div>
    )

}

export default NavBar;