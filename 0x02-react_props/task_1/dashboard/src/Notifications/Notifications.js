import React from 'react';
import './Notifications.css';
import icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';

export default function Notifications() {
    return (
        <>
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <button style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'transparent',
                border: 'none',
                fontSize: '2rem',
                cursor: 'pointer'
            }}
            arial-label="Close"
            onClick={()=>console.log("Close button has been clicked")}>

                <img src={icon} alt="X" />
            </button>
            <ul>
      	        <li data="default">New course available</li>
      	        <li data="urgent">New resume available</li>
      	        <li data="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
        </div>
        </>
    )
}


