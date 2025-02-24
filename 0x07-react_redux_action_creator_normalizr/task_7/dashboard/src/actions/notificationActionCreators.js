import { MARK_AS_READ, SET_TYPE_FILTER, NOTIFICATION_ACTION_FILTERS } from './notificationActionTypes.js';

export function markAsRead(index) {
    return {
        type: MARK_AS_READ,
        index: index
    };
}

export function setNotificationFilter(filter) {
    return {
        type: SET_TYPE_FILTER,
        filter: filter
    };
}

export const boundMarkAsRead = (index) => dispatch(markAsRead(index));
export const boundSetNotificationFilter = (filter) => dispatch(setNotificationFilter(filter));