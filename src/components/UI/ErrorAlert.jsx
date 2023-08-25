import classes from "./ErrorAlert.module.css";

const ErrorAlert = (props) => {
  return (
    <section className={classes.errorAlert}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
      {props.onResolve && props.btn && (
        <button onClick={props.onResolve}>{props.btn}</button>
      )}
    </section>
  );
};

export default ErrorAlert;
