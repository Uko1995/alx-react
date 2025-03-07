
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes.js';

export const login = (email='', password='') => {
    return {
        type: LOGIN,
        user: { email, password }
    };
}

export function logout() {
    return {
        type: LOGOUT
    };
}

export function displayNotificationDrawer() {
    return {
        type: DISPLAY_NOTIFICATION_DRAWER
    };
}

export function hideNotificationDrawer() {
    return {
        type: HIDE_NOTIFICATION_DRAWER
    };
}

export function loginSuccess() {
    return {
        type: LOGIN_SUCCESS
    };
}

export function loginFailure() {
    return {
        type: LOGIN_FAILURE
    };
}

export const loginRequest = (email, password) => {
    return async (dispatch) => {
        dispatch(login(email, password));

        try {
            const response = await fetch('http://localhost:3000/login-success.json');
            const data = await response.json();
            dispatch(loginSuccess(data));
        } catch (e) {
            dispatch(loginFailure());
        }
    };
};



export const boundLogin = (email, password) => dispatch(login(email, password));
export const boundLogout = () => dispatch(logout());
export const boundDisplayNotificationDrawer = () => dispatch(displayNotificationDrawer());
export const boundHideNotificationDrawer = () => dispatch(hideNotificationDrawer());
export const boundLoginSuccess = () => dispatch(loginSuccess());
export const boundLoginFailure = () => dispatch(loginFailure());