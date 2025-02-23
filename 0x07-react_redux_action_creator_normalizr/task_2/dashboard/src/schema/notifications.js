import * as notificationData from '../../notifications.json' assert { type: "json" };
import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
    author: user,
    context: message
});

const normalizedData = normalize(notificationData.default, [notification]);

export default function getAllNotificationByUser(userId="", normalizedData={}) {
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


console.log(getAllNotificationByUser("5debd764a7c57c7839d722e9", normalizedData));

export { normalizedData };