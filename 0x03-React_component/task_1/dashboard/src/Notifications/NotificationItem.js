import PropTypes from "prop-types";

function NotificationItem({id, type='default', value='', html=null, markAsRead }) {
    const handleMarkAsRead = () => {
        if (markAsRead) {
            markAsRead();
        }
    };
    if (html) {
        return (
            <li onClick={handleMarkAsRead} data-notification-type={type} dangerouslySetInnerHTML={html}></li>
        );
    } else {
        return (
            <li onClick={handleMarkAsRead} data-notification-type={type}>{value}</li>
        );
    }
};

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    html: PropTypes.shape({ __html: PropTypes.string }),
    markAsRead: PropTypes.func
};

NotificationItem.defaultProps = {
    type: 'default',
    value: '',
    html: null,
    markAsRead: () => {}
};

export default NotificationItem;