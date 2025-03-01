import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN, LOGOUT, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/uiActionTypes';

export const initialState = {
    isNotificationDrawerVisible: false,
    isLoggedIn: false,
    user: {}
};


const uiRedicer = (state = initialState, action) => {
    switch (action.type) {
        case DISPLAY_NOTIFICATION_DRAWER:
            return {...state, isNotificationDrawerVisible: true};
        case HIDE_NOTIFICATION_DRAWER:
            return {...state, isNotificationDrawerVisible: false};
        case LOGIN_SUCCESS:
            return {...state, isLoggedIn: true};
        case LOGIN_FAILURE:
        case LOGOUT:
            return {...state, isLoggedIn: false};
        default:
            break;
    }
    return state;
}

export default uiRedicer;
