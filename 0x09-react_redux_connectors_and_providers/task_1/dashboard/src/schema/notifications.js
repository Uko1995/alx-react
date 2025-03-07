import * as notificationData from '../../notifications.json' with { type: "json" };
import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
    author: user,
    context: message
});

//export const normalizedData = normalize(notificationData.default, [notification]);

export function getAllNotificationByUser(userId="", normalizedData={}) {
    if (!userId || !normalizedData) {
        return [];
    }
    const notificationsByUser = [];
    for ( const key in normalizedData.entities.notifications) {
        const notification = normalizedData.entities.notifications[key];
        if (notification.author === userId) {
            notificationsByUser.push(notification);
        }
    }
       
    return notificationsByUser;
}

export const notificationsNormalizer = (data) => {
    const norm = normalize(data, [notification]);
    return norm;
}