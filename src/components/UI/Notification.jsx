import { useContext } from "react";
import classes from "./Notification.module.css";
import ReactDOM from 'react-dom';
import NotificationContext from "../../../store/notification-context";

const Notification = (props) => {
  const { status, message } = props;

  const notificationCtx = useContext(NotificationContext);

  let statusClasses = "";

  if (status === "success") {
    statusClasses = classes.success;
  }

  if (status === "error") {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  return ReactDOM.createPortal((
    <div className={cssClasses} onClick={notificationCtx.hideNotification}>
      <h2>{status}</h2>
      <p>{message}</p>
    </div>
  ), document.getElementById('notification'));
};

export default Notification;
