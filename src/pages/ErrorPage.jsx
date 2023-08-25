import { useRouteError } from "react-router-dom";

function ErrorPage(props) {
  const error = useRouteError();

  return (
    <>
      <h1>Something went wrong!</h1>
      <p>An unexpected error has occured!</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </>
  );
}

export default ErrorPage;
