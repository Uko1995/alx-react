import React from 'react';
import './Notifications.css';
import icon from '../assets/close-icon.png';
import  NotificationItem  from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

export default function Notifications({ listNotifications=[{}], displayDrawer=false }) {
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
                {(listNotifications && listNotifications.length === 0) ? (<NotificationItem value='No new notification for now'/>) : (
                    listNotifications.map(({id, type, value, html}) => (
                        <NotificationItem key={id} type={type} value={value} html={html} />
                    ))
                )}
            </div>
        )}
        </>
    )
};

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
}

