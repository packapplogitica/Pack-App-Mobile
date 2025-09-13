import { notifications } from '@mantine/notifications';
import { IconCircleX, IconCheck } from '@tabler/icons-react';

// Función para mostrar notificaciones
export const showNotification = ({ title, message, type = "error" ,notificationStyles}) => {
  notifications.show({
    title,
    message,
    icon: type === "success" ? <IconCheck /> : <IconCircleX />,
    color: type === "success" ? "green" : "red",
    styles: notificationStyles
  });
};
