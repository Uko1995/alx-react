import React from 'react';
import './Notifications.css';
import icon from './close-icon.png';
import { getLatestNotification } from './utils';

export function Notifications() {
    return (
        <>
        <div className='Notifications'>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority='default'>New course available</li>
                <li data-priority='urgent'>New resume available</li>
                <li data-priority='urgent' dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
            <button arial-label='Close' style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'transparent',
                border: 'none',
                fontSize: '2rem',
                cursor: 'pointer'
            }}>
                <img src={icon} alt='close-icon' onClick={ () => console.log('Close button has been clicked')} />
            </button>
        </div>
        </>
    )
}