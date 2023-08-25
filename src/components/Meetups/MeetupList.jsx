import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

const MeetupList = (props) => {
  return (
    <ul className={classes.list}>
      {props.list.map((item) => (
        <MeetupItem
          key={item.id}
          title={item.title}
          image={item.image}
          id={item.id}
          address={item.address}
          description={item.description}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
