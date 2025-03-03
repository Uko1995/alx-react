import { notificationReducer } from './notificatonReducer';
import { MARK_AS_READ, SET_TYPE_FILTER, NOTIFICATION_ACTION_FILTERS, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
    const initialState = { notifications: [], filter: NOTIFICATION_ACTION_FILTERS.DEFAULT };

    it('should return the initial state when no action is passed', () => {
        expect(notificationReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
        const action = {
            type: FETCH_NOTIFICATIONS_SUCCESS,
            data: [
                { id: 1, type: "default", value: "New course available" },
                { id: 2, type: "urgent", value: "New resume available" },
                { id: 3, type: "urgent", value: "New data available" }
            ]
        };
        const expectedState = {
            notifications: [
                { id: 1, type: "default", value: "New course available", isRead: false },
                { id: 2, type: "urgent", value: "New resume available", isRead: false },
                { id: 3, type: "urgent", value: "New data available", isRead: false }
            ],
            filter: NOTIFICATION_ACTION_FILTERS.DEFAULT
        };
        expect(notificationReducer(initialState, action)).toEqual(expectedState);
    });

    it('should handle MARK_AS_READ', () => {
        const action = { type: MARK_AS_READ, index: 2 };
        const state = {
            notifications: [
                { id: 1, type: "default", value: "New course available", isRead: false },
                { id: 2, type: "urgent", value: "New resume available", isRead: false },
                { id: 3, type: "urgent", value: "New data available", isRead: false }
            ],
            filter: NOTIFICATION_ACTION_FILTERS.DEFAULT
        };
        const expectedState = {
            notifications: [
                { id: 1, type: "default", value: "New course available", isRead: false },
                { id: 2, type: "urgent", value: "New resume available", isRead: true },
                { id: 3, type: "urgent", value: "New data available", isRead: false }
            ],
            filter: NOTIFICATION_ACTION_FILTERS.DEFAULT
        };
        expect(notificationReducer(state, action)).toEqual(expectedState);
    });

    it('should handle SET_TYPE_FILTER', () => {
        const action = { type: SET_TYPE_FILTER, filter: NOTIFICATION_ACTION_FILTERS.URGENT };
        const expectedState = {
            notifications: [],
            filter: NOTIFICATION_ACTION_FILTERS.URGENT
        };
        expect(notificationReducer(initialState, action)).toEqual(expectedState);
    });
});