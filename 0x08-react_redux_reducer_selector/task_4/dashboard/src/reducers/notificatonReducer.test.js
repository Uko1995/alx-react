import { notificationReducer } from './notificatonReducer';
import { MARK_AS_READ, SET_TYPE_FILTER, NOTIFICATION_ACTION_FILTERS, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';
import { fromJS, toJS } from 'immutable';


it('should handle FETCH_NOTIFICATIONS_SUCCESS with normalized data', () => {
    const action = {
        type: FETCH_NOTIFICATIONS_SUCCESS,
        data: [
            { id: 1, type: "default", value: "New course available" },
            { id: 2, type: "urgent", value: "New resume available" },
            { id: 3, type: "urgent", value: "New data available" }
        ]
    };
    const expectedState = fromJS({
        notifications: [
            { id: 1, type: "default", value: "New course available", isRead: false },
            { id: 2, type: "urgent", value: "New resume available", isRead: false },
            { id: 3, type: "urgent", value: "New data available", isRead: false }
        ],
        filter: NOTIFICATION_ACTION_FILTERS.DEFAULT
    });
    expect(notificationReducer(undefined, action).toJS()).toEqual(expectedState.toJS());
});

it('should handle MARK_AS_READ with Immutable state', () => {
    const action = { type: MARK_AS_READ, index: 1 };
    const state = fromJS({
        notifications: [
            { id: 1, type: "default", value: "New course available", isRead: false },
            { id: 2, type: "urgent", value: "New resume available", isRead: false },
            { id: 3, type: "urgent", value: "New data available", isRead: false }
        ],
        filter: NOTIFICATION_ACTION_FILTERS.DEFAULT
    });
    const expectedState = fromJS({
        notifications: [
            { id: 1, type: "default", value: "New course available", isRead: true },
            { id: 2, type: "urgent", value: "New resume available", isRead: false },
            { id: 3, type: "urgent", value: "New data available", isRead: false }
        ],
        filter: NOTIFICATION_ACTION_FILTERS.DEFAULT
    });
    expect(notificationReducer(state, action).toJS()).toEqual(expectedState.toJS());
});

it('should handle SET_TYPE_FILTER with Immutable state', () => {
    const action = { type: SET_TYPE_FILTER, filter: NOTIFICATION_ACTION_FILTERS.URGENT };
    const initialState = fromJS({
        notifications: [],
        filter: NOTIFICATION_ACTION_FILTERS.DEFAULT
    });
    const expectedState = fromJS({
        notifications: [],
        filter: NOTIFICATION_ACTION_FILTERS.URGENT
    });
    expect(notificationReducer(initialState, action).toJS()).toEqual(expectedState.toJS());
});