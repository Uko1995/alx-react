import { notificationsNormalizer } from '../schema/notifications.js';
import { Map, setIn, fromJS } from 'immutable';
import { MARK_AS_READ, SET_TYPE_FILTER, NOTIFICATION_ACTION_FILTERS, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes.js';

export const notificationReducer = (state = Map({ notifications: [], filter: NOTIFICATION_ACTION_FILTERS.DEFAULT}), action) => {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS:
            const normData = notificationsNormalizer(action.data);
            const updateNotifications = Object.values(normData.entities.notifications).map(notification => ({
                ...notification,
                isRead: false
            }));
            return state.merge({notifications: updateNotifications});


        case MARK_AS_READ:
            return state.setIn(['notifications', (action.index)-1, 'isRead'], true);

        case SET_TYPE_FILTER:
            return state.set('filter', action.filter);

        default:
            return state;
    }
}
