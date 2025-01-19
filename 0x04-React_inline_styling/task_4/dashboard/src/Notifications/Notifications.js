import React from 'react';
import icon from '../assets/close-icon.png';
import  NotificationItem  from './NotificationItem';
import PropTypes, { bool } from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css, keyframes } from 'aphrodite';

const opacity = {
    from:{
        opacity: 0.5,
    },
    to: {
        opacity: 1,
    }
};

const bounce = {
    '0%': { transform: 'translateY(0px)'},
    '50%': { transform: 'translateY(-5px)' },
    '100%': { transform: 'translateY(5px)' }
};

const styles = StyleSheet.create({
    notifications: {
        border: '2px dashed #e01d3f',
        padding: '1em',
        width: '100%', // Full width
        maxWidth: '400px', // Restrict to 400px
        margin: '0 auto',
        position: 'absolute',
        right: '0', // Align properly
        fontSize: '1.5em',
        overflow: 'hidden', // Hide overflow
        fontFamily: 'Georgia, Times, Times New Roman, serif',
        "@media (max-width: 900px)": {
            boxSizing: 'border-box',
            width: '100%',
            maxWidth: '100%', // Ensure responsiveness
            height: '100vh',
            padding: 0,
            margin: 0,
            backgroundColor: 'white',
            border: 'none',
        },
    },
    
    button: {
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        background: 'transparent',
        border: 'none',
        fontSize: '2rem',
        cursor: 'pointer',
        maxWidth: '12.5em'
    },
    img: {
        height: '1.3em',
        width: '1.3em'
    },
    menuItem: {
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'right',
        right: '0',
        padding: '0.5em',
        borderTop: '1px solid #ddd',
        fontSize: '1.5em',
        ":hover": {
            cursor: 'pointer',
            animationName: [opacity, bounce],
            animationDuration: '1s, 0.5s',
            animationIterationCount: '3',
        }
    },
    defaultNotification: {
        color: 'blue',
        "@media (max-width: 900px)": {
            fontSize: '20px',
            listStyle: 'none',
            padding: '10px, 8px',
            borderBottom: '1px solid black',
        }
    },
    urgentNotification: {
        color: 'red',
        "@media (max-width: 900px)": {
            fontSize: '20px',
            listStyle: 'none',
            padding: '10px, 8px',
            borderBottom: '1px solid black',
        }
    },
    p: {
        fontSize: '1.4em',
    },
    menuItemP: {
        padding: '0.5em',
        ":hover": {
            backgroundColor: '#fff8f8'
        }
    }
});


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
        const { displayDrawer=bool, listNotifications=[] } = this.props;
        return (
            <>
            {!displayDrawer ? (
                <div className={css(styles.menuItem)}>
                    <p className={css(styles.menuItemP)}>Your notifications</p>
                </div>
            ) : (
                <div className={css(styles.notifications)}  >
                    <p className={css(styles.p)}>Here is the list of notifications</p>
                    <button className={css(styles.button)}
                        aria-label="Close"
                        onClick={()=>console.log("Close button has been clicked")}>
                        <img className={css(styles.img)} src={icon} alt="X" />
                    </button>
                    {(listNotifications && listNotifications.length === 0) ? (<NotificationItem  value='No new notification for now'/>) : (
                        listNotifications.map(({id, type, value, html}) => (
                            <NotificationItem className={css(type === 'default' ? styles.defaultNotification : styles.urgentNotification)} key={id} id={id} markAsRead={() => this.markAsRead(id)} type={type} value={value} html={html} />
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
