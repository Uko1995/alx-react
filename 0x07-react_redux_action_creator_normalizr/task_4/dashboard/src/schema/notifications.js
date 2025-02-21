import * as notifications from '../../notifications.json' assert { type: "json" };


export default function getAllNotificationByUser(userId="") {
    const notificationsByUser = notifications.default
        .filter(notifications => notifications.author.id === userId)
        .map(notifications => notifications.context);
        
    return notificationsByUser;
}

console.log(getAllNotificationByUser("5debd764a7c57c7839d722e9"));