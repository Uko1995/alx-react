import { fromJS } from 'immutable';
import {
    filterTypeSelected,
    getNotifications,
    getUnreadNotifications
} from './notificationSelectors';

import { notificationReducer } from '../reducers/notificatonReducer.js';
import {
    MARK_AS_READ,
    SET_TYPE_FILTER,
    NOTIFICATION_ACTION_FILTERS,
    FETCH_NOTIFICATIONS_SUCCESS
} from '../actions/notificationActionTypes';

describe('Notification Selectors', () => {
    let state;

    beforeEach(() => {
        const action = {
            type: FETCH_NOTIFICATIONS_SUCCESS,
            data: [
                { id: 1, type: "default", value: "New course available", isRead: false},
                { id: 2, type: "urgent", value: "New resume available", isRead: false },
                { id: 3, type: "urgent", value: "New data available", isRead: false}
            ]
        };

        state = notificationReducer(undefined, action);
    });

    test('filterTypeSelected should return the filter type', () => {
        expect(filterTypeSelected(state)).toEqual(NOTIFICATION_ACTION_FILTERS.DEFAULT);
    });

    test('getNotifications should return the list of notifications', () => {
        const notifications = getNotifications(state);
        expect(notifications).toEqual([
            { id: 1, type: "default", value: "New course available", isRead: false },
            { id: 2, type: "urgent", value: "New resume available", isRead: false },
            { id: 3, type: "urgent", value: "New data available", isRead: false }
        ]);
    });

    test('getUnreadNotifications should return only unread notifications', () => {
        expect(getUnreadNotifications(state)).toEqual([
            { id: 1, type: "default", value: "New course available", isRead: false },
            { id: 2, type: "urgent", value: "New resume available", isRead: false },
            { id: 3, type: "urgent", value: "New data available", isRead: false }
        ]);
    });

});
