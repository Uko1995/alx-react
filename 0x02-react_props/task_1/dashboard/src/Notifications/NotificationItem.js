export default function NotificationItem({ type, value, html }) {
    return (
        <>
            <li 
                data-notification-type={type}
                dangerouslySetInnerHTML={{__html: html || value}}
            />
        </>
    )
}