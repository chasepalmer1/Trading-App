import React from 'react'

const IndexTrack = (props) => {

    return (
        <div className={props.class}>
            <h3 style={{margin:"0 10% 0 0", color: "#EFEFEF", width: "100%"}}>{props.ticker}</h3>
            <div style={{display: "flex", justifyContent: "right", marginRight: "2%"}}>
                <h3>{props.price}</h3>
                <h3 className='num-neg'>{props.dayGain}</h3>
                <h3 className='num-neg'>{props.dayGainPerc}</h3> 
            </div>
        </div>
    )

}

export default IndexTrack;