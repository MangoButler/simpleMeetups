import { useContext } from "react";
import classes from "./MainFooter.module.css";
import NotificationContext from "../../../store/notification-context";
import Notification from "../UI/Notification";

const MainFooter = () => {
  const notificationCtx = useContext(NotificationContext);
  const notification = notificationCtx.notification;

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          message={notification.message}
        />
      )}
      <footer className={classes.footer}>
        <p>
          <i>&copy;TheMixer</i>
        </p>
      </footer>
    </>
  );
};

export default MainFooter;
