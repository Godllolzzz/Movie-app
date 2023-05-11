import Card from "../UI/Card";
import classes from "./Confirmed.module.css";
const Confirmed = (props) => {
  const content = ` ${props.userData.username}(${props.userData.userAge}), your ${props.userData.ticketsQuantity} tickets are confirmed of ${props.userData.movie} for ${props.userData.showType} show on
          ${props.userData.date}.`;
  const key = props.userData.username;
  const value = `Name: ${props.userData.username}, Email: ${props.userData.userEmail}, Age: ${props.userData.userAge}, Movie Name: ${props.userData.movie}, Date: ${props.userData.date}, Ticket Quantity: ${props.userData.ticketsQuantity}, Show Type: ${props.userData.showType}`;
  localStorage.setItem(key, value);
  const clickHandler = (events) => {
    props.onClose();
  };
  return (
    <Card>
      <div className={classes.heading}>Confirmed</div>
      <section>
        <p className={classes.content}>{content}</p>
        <button className={classes.button} onClick={clickHandler}>
          Ok
        </button>
      </section>
    </Card>
  );
};
export default Confirmed;
