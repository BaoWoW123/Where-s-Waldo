import React from "react";
import waldo from '../images/waldoHead.png';
import wizard from '../images/wizard.png'
import odlaw from '../images/odlaw.png';
const Header = (props) => {

    const updateTimer = () => {

    }
    return (
        <div className="header">
            <div className="timer">
                Timer: {props.time} seconds
            </div>
        <img className='waldo' src={waldo}/>
        <img className='wizard' src={wizard}/>
        <img className='odlaw' src={odlaw}/>
        </div>


    )
}

export default Header;