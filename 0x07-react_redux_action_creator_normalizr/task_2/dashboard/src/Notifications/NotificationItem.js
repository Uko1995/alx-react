import PropTypes from "prop-types";
import React from "react";
import './Notifications.js';

const NotificationItem = React.memo(({id, type, value, html, markAsRead, className }) => {
    type = type || 'default';
    value = value || '';
    html = html || null;

    const handleMarkAsRead = () => {
        if (markAsRead) {
            markAsRead();
        }
    };
    if (html) {
        return (
            <li onClick={handleMarkAsRead} className={className} data-notification-type={type} dangerouslySetInnerHTML={html}></li>
        );
    } else {
        return (
            <li className={className} onClick={handleMarkAsRead} data-notification-type={type}>{value}</li>
        );
    }
}, (prevProps, nextProps) => {
    return (
        prevProps.id === nextProps.id &&
        prevProps.type === nextProps.type &&
        prevProps.value === nextProps.value &&
        prevProps.html === nextProps.html &&
        prevProps.markAsRead === nextProps.markAsRead
    );
});

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    html: PropTypes.shape({ __html: PropTypes.string }),
    markAsRead: PropTypes.func,
    className: PropTypes.string
};

export default NotificationItem;