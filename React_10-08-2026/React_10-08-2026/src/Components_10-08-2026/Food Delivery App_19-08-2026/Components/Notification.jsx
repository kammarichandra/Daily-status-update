import { useNotification } from "../Context/NotificationContext";

function Notification() {
  const { notification } = useNotification();

  if (!notification) {
    return null;
  }

  return (
    <div className={`notification ${notification.type}`}>
      {notification.message}
    </div>
  );
}

export default Notification;