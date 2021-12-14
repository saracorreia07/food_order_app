import classes from "./Card.module.css";

//wrapper component with HTML/CSS code
const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
  //whatever is passed in the Card component is used inside of Card, through {props.children}
};

export default Card;
