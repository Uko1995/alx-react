import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';


export default function Notifications() {
    return (
        <>
            <div className='Notifications' id='notifications' >
                <p>Here is the list of notifications</p>
                <ul>
                    <li data-priority='default'>New course available</li>
                    <li data-priority='urgent'>New resume available</li>
                    <li data-priority='urgent' className='danger'  dangerouslySetInnerHTML={{__html: getLatestNotification(),}}></li>
                </ul>
                <button style={
                    {
                        float: 'right',
                        marginTop: '-50px',
                        border: 'none',
                    }
                } aria-label='Close' onClick={console.log('Close button has been clicked')}>
                    <img src={closeIcon} alt='closeIcon' />   
                </button>
            </div>
        </>
    )
}