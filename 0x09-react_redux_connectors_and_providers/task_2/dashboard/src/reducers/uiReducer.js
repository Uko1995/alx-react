import { Map } from 'immutable';
import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN, LOGOUT, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/uiActionTypes.js';

export const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: null
};


export const uiReducer = (state = Map(initialState), action) => {
    switch (action.type) {
        case DISPLAY_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', true);
        case HIDE_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', false);
        case LOGIN_SUCCESS:
            return state.set('isUserLoggedIn', true);
        case LOGIN:
            return state.set('isUserLoggedIn', true).set('user', action.user);
        case LOGIN_FAILURE:
            return state.set('isUserLoggedIn', false);
        case LOGOUT:
            return state.set('isUserLoggedIn', false).set('user', null);
        default:
            return state;
    }
}

