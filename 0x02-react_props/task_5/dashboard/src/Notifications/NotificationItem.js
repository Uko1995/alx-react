import PropTypes from "prop-types";

function NotificationItem({ type='default', value='', html=null }) {
    if (html) {
        return (
            <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
        );
    } else {
        return (
            <li data-notification-type={type}>{value}</li>
        );
    }
};

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    html: PropTypes.shape({ __html: PropTypes.string })
};

export default NotificationItem;