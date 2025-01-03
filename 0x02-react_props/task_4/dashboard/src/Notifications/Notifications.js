import React from 'react';
import './Notifications.css';
import icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import  NotificationItem  from './NotificationItem';
import PropTypes from 'prop-types';

export default function Notifications({ displayDrawer=false }) {
    return (
        <>
        <div className='menuItem'>
            <p>Your notifications</p>
        </div>
        {displayDrawer && (
            <div className="Notifications"  >
                <p>Here is the list of notifications</p>
                <button className='close-button'
                    aria-label="Close"
                    onClick={()=>console.log("Close button has been clicked")}>
                    <img src={icon} alt="X" />
                </button>
                <NotificationItem type={'default'} value={'New course available'} />
                <NotificationItem type={'urgent'} value={'New resume available'} />
                <NotificationItem type={'urgent'} html={{ __html: getLatestNotification() }} />
            </div>
        )}
        </>
    )
};

Notifications.propTypes = {
    displayDrawer: PropTypes.bool
}

