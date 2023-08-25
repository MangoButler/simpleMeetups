import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/Meetups/NewMeetupForm";

function NewMeetupPage(props) {
  const navigate = useNavigate();

  async function addMeetupHandler(meetupData) {
    const response = await fetch(
      "https://react-http-48ff4-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong!");
    }
    navigate("/");
    return data;
  }

  return (
    <section>
      <h1>Add new Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
