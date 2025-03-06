import { fromJS } from 'immutable';

export const filterTypeSelected = (state) => {
    const filterType = state.get('filter');
    return filterType;
}

export const getNotifications = (state) => {
    return state.get('notifications', fromJS([]));
}

export const getUnreadNotifications = (state) => {
    return (getNotifications(state).filter(notification => notification.isRead === false));
}