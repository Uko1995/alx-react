import { LOGIN, LOGOUT, DISPLAY_NOTITFICATION_DRAWER, HIDE_NOTITFICATION_DRAWER } from './uiActionTypes.js';

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
        type: DISPLAY_NOTITFICATION_DRAWER
    };
}

export function hideNotificationDrawer() {
    return {
        type: HIDE_NOTITFICATION_DRAWER
    };
}


export const boundLogin = (email, password) => dispatch(login(email, password));
export const boundLogout = () => dispatch(logout());
export const boundDisplayNotificationDrawer = () => dispatch(displayNotificationDrawer());
export const boundHideNotificationDrawer = () => dispatch(hideNotificationDrawer());