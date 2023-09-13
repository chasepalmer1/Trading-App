import React from 'react';
import './NavBar.css'

const NavBar = (props) => {

    return (
        <>
            <div style={{display:"flex"}}>
                <h2 style={{margin:"0"}}>TradeHub</h2>
            </div>
            <div class="inner">
                <ul>
                    <a>Home</a>
                    <a>My Portfolio</a>
                    <a>Markets</a>
                </ul>
            </div>
        </>
    )

}

export default NavBar;