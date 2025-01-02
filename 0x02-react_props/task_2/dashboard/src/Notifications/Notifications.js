import React from 'react';
import './Notifications.css';
import icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import  NotificationItem  from './NotificationItem';

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
                cursor: 'pointer'}}
                arial-label="Close"
                onClick={()=>console.log("Close button has been clicked")}>
                <img src={icon} alt="X" />
            </button>
            <NotificationItem type={'default'} value={'New course available'} />
            <NotificationItem type={'urgent'} value={'New resume available'} />
            <NotificationItem type={'urgent'} html={{ __html: getLatestNotification() }} />
        </div>
        </>
    )
}


