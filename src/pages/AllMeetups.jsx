import { useEffect, useState } from "react";
import MeetupList from "../components/Meetups/MeetupList";
import ErrorAlert from "../components/UI/ErrorAlert";
import LoadingAlert from "../components/UI/LoadingAlert";

// const dummy_data = [
//   {
//     id: "m1",
//     title: "BBQ in the Waterfall Hills",
//     image:
//       "https://images.unsplash.com/photo-1659357699168-33f00bc28c8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
//     address: "Waterfall Hills Base Station, 4222 WFHills",
//     description: "Hiking up the hills to see the Waterfalls",
//   },
//   {
//     id: "m2",
//     title: "Picnic by the Lakeside",
//     image:
//       "https://plus.unsplash.com/premium_photo-1674409427334-0ae5280381ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1539&q=80",
//     address: "Lakeside Park, 1234 Lakeside Ave",
//     description: "Enjoy a relaxing day by the tranquil lakeside",
//   },
//   {
//     id: "m3",
//     title: "Exploring Ancient Ruins",
//     image:
//       "https://images.unsplash.com/photo-1603566541830-972ff1b4b2cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     address: "Mystic Ruins, 5678 Archaeology Rd",
//     description: "Embark on an adventure to uncover ancient mysteries",
//   },
//   {
//     id: "m4",
//     title: "Camping under the Starry Sky",
//     image:
//       "https://images.unsplash.com/photo-1527492662722-dbaf97270863?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//     address: "Starry Meadow Campground, 7890 Starlight Ln",
//     description: "Experience the magic of camping under the starry night sky",
//   },
// ];

function AllMeetupsPage(props) {
  const [isloading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  const [fetchingError, setfetchingError] = useState(null);
  const [reload, setReload] = useState(false);

  const resolveErrorHandler = () => {
    setReload((prevState) => !prevState);
    setIsLoading(true);
  };
  useEffect(() => {
    fetch("https://react-http-48ff4-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        let meetupList = [];
        for (let key in data) {
          meetupList.push({
            id: key,
            ...data[key],
          });
        }
        setIsLoading(false);
        setLoadedMeetups(meetupList);
        setfetchingError(null);
      })
      .catch((error) => {
        setfetchingError(error.message || "Unexpected Error");
        setIsLoading(false);
      });
  }, [reload]);

  if (isloading) {
    return <LoadingAlert />;
  }

  if (fetchingError) {
    return (
      <ErrorAlert message={fetchingError} title={'Fetching Error'} btn={'Retry'} onResolve={resolveErrorHandler} />
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList list={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
