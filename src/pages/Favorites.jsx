import { useContext } from "react";
import MeetupList from "../components/Meetups/MeetupList";
import FavoritesContext from "../../store/favorites-context";
import ErrorAlert from "../components/UI/ErrorAlert";
import { useNavigate } from "react-router-dom";

function FavoritesPage(props) {
  const favoritesCtx = useContext(FavoritesContext);
  const favoritesList = favoritesCtx.favorites;
  const navigate = useNavigate();

  const visitAllMeetups = () => {
    navigate("/");
  };

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = (
      <ErrorAlert
        message={"No Favorites here yet, start adding some!"}
        title={"Nothing here yet!"}
        btn={"See All Meetups"}
        onResolve={visitAllMeetups}
      />
    );
  } else {
    content = <MeetupList list={favoritesList} />;
  }
  return (
    <section>
      <h1>Favorites Page</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
