import { useContext, useEffect, useRef, useState } from "react";
import Card from "../UI/Card";
import classes from "./NewMeetupForm.module.css";
import NotificationContext from "../../../store/notification-context";

const NewMeetupForm = (props) => {
  const [isInvalid, setIsInvalid] = useState(false);
  
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  const notificationCtx = useContext(NotificationContext);

  

  const submitHandler = async (event) => {
    event.preventDefault();
    notificationCtx.showNotification({
      status: "loading",
      message: "Creating meetup...",
    });
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    if (
      !enteredTitle ||
      !enteredImage ||
      !enteredAddress ||
      !enteredDescription ||
      enteredTitle.trim() === "" ||
      !enteredImage.includes(".")
    ) {
      setIsInvalid(true);
      return;
    }
    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    try {
      const result = await props.onAddMeetup(meetupData);
      notificationCtx.showNotification({
        status: "success",
        message: "Successfully created meetup",
      });
    } catch (error) {
      notificationCtx.showNotification({
        status: "error",
        message: error.message || "Something went wrong",
      });
      return;
    }
    setIsInvalid(false);
    titleInputRef.current.value = "";
    imageInputRef.current.value = "";
    addressInputRef.current.value = "";
    descriptionInputRef.current.value = "";
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" id="title" required ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" id="image" required ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" id="address" required ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows={5}
            required
            ref={descriptionInputRef}
          />
          {isInvalid && <p className={classes.errorText}>Invalid Input</p>}
        </div>
        <div className={classes.actions}>
          <button type="submit">Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
