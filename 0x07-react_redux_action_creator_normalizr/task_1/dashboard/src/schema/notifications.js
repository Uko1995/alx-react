import * as notificationData from '../../notifications.json' assert { type: "json" };
import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
    author: user,
    context: message
});

const normalizedData = normalize(notificationData.default, [notification]);

export default function getAllNotificationByUser(userId="") {
    const notificationsByUser = notificationData.default
        .filter(notifications => notifications.author.id === userId)
        .map(notifications => notifications.context);
        
    return notificationsByUser;
}




export { normalizedData };