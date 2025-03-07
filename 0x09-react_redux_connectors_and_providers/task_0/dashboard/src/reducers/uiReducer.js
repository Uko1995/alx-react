import { Map } from 'immutable';
import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN, LOGOUT, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/uiActionTypes.js';

export const initialState = {
    isNotificationDrawerVisible: false,
    isLoggedIn: false,
    user: {}
};


export const uiReducer = (state = Map(initialState), action) => {
    switch (action.type) {
        case DISPLAY_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', true);
        case HIDE_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', false);
        case LOGIN_SUCCESS:
            return {...state, isLoggedIn: true};
        case LOGIN_FAILURE:
        case LOGOUT:
            return state.set('isLoggedIn', false);
        default:
            break;
    }
    return state;
}

