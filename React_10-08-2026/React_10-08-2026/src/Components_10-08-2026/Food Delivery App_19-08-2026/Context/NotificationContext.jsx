import { createContext, useContext, useState} from "react";

let NotificationContext = createContext();

export function NotificationProvider({ children }) {
  let [notification, setNotification] = useState(null);

  let showNotification = (message, type = "success") => {

    setNotification({ message,type });

    setTimeout(() => {
      setNotification(null);
    }, 2500);

  };

  return (
    <NotificationContext.Provider
      value={{ notification, showNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotification() {
  return useContext(NotificationContext);
}