import React from 'react';
import './Notifications.css';
import icon from '../assets/close-icon.png';
import  NotificationItem  from './NotificationItem';
import PropTypes, { bool } from 'prop-types';
import NotificationItemShape from './NotificationItemShape';


class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.markAsRead = this.markAsRead.bind(this);
    }
    markAsRead = (id) => {
        console.log(`Notification ${id} has been marked as read`);
    };

    shouldComponentUpdate({listNotifications}) {
        return (
            listNotifications.length > this.props.listNotifications.length
        );
    }

    render() {
        const { displayDrawer=false, listNotifications=[] } = this.props;
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
                    {(listNotifications && listNotifications.length === 0) ? (<NotificationItem  value='No new notification for now'/>) : (
                        listNotifications.map(({id, type, value, html}) => (
                            <NotificationItem key={id} id={id} markAsRead={() => this.markAsRead(id)} type={type} value={value} html={html} />
                        ))
                    )}
                </div>
            )}
            </>
        )
    }
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
}

export default Notifications;
