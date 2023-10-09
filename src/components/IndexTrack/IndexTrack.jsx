import React from 'react'

const IndexTrack = (props) => {

    const testNum = (num) => {
        if (num > 0) {
            return true;
        }
    }

    return (
        <div className={props.class}>
            <a onClick={props.click}><h3 style={{margin:"0 10% 0 0", color: "#EFEFEF", width: "100%"}}>{props.ticker}</h3></a>
            <div style={{display: "flex", justifyContent: "right", marginRight: "2%"}}>
                <h3>{props.shares}</h3>
                <h3>{props.price}</h3>
                <h3 className={testNum(props.dayGain) ? "num":"num-neg"}>{props.dayGain}</h3>
                <h3 className={testNum(props.dayGainPerc) ? "num":"num-neg"}>{props.dayGainPerc}%</h3> 
            </div>
        </div>
    )

}

export default IndexTrack;