import classes from './LoadingAlert.module.css'
import Loader from './Loader';


const LoadingAlert = (props) => {
    return <section className={classes.loadingAlert}>
        <h2>Please wait...</h2>
        <p>Loading...</p>
        <Loader/>
    </section>
};

export default LoadingAlert;