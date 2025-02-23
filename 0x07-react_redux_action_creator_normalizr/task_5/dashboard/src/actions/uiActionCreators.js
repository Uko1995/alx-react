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


console.log(login('ukowuatt@gmail.com','123456'));
console.log(logout());
console.log(displayNotificationDrawer());
console.log(hideNotificationDrawer());