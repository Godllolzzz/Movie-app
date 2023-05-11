import classes from "./BookingForm.module.css";
import Card from "../UI/Card";
import React from "react";
import { useState } from "react";
import Confirmed from "./Confirmed";

const BookingForm = (props) => {
  const [isBooked, setIsBooked] = useState(false);
  const [userData, setUserData] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState();
  const [date, setDate] = useState("2023-05-11");
  const [showType, setShowType] = useState();
  const [ticketsQuantity, setTicketsQuantity] = useState();
  const [isNameTouched, setIsNameTouched] = useState(false);
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const [isAgeTouched, setIsAgeTouched] = useState(false);
  const [isTicketQuantityTouched, setIsTicketQuantityTouched] = useState(false);

  let formIsValid = false;
  let ageIsValid = false;
  let ticketQuantityIsValid = false;
  if (age > 17 && age <= 100) ageIsValid = true;
  if (ticketsQuantity > 0 && ticketsQuantity <= 10)
    ticketQuantityIsValid = true;

  if (
    name.trim !== "" &&
    email.includes("@") &&
    ageIsValid &&
    ticketQuantityIsValid
  )
    formIsValid = true;

  const nameChangeHandler = (events) => {
    setName(events.target.value);
  };
  const emailChangeHandler = (events) => {
    setEmail(events.target.value);
  };
  const ageChangeHandler = (events) => {
    setAge(events.target.value);
  };
  const dateChangeHandler = (events) => {
    setDate(events.target.value);
  };
  const showTypeChangeHandler = (events) => {
    setShowType(events.target.value);
  };
  const ticketQuantityChangeHandler = (events) => {
    setTicketsQuantity(events.target.value);
  };
  const nameBlurHandler = () => {
    setIsNameTouched(true);
  };
  const emailBlurHandler = () => {
    setIsEmailTouched(true);
  };
  const ageBlurHandler = () => {
    setIsAgeTouched(true);
  };
  const ticketQuantityBlurHandler = () => {
    setIsTicketQuantityTouched(true);
  };

  const formsubmitHandler = (events) => {
    events.preventDefault();
    const enteredData = {
      movie: props.movie.name,
      username: name,
      userEmail: email,
      userAge: age,
      date: date,
      showType: showType,
      ticketsQuantity: ticketsQuantity,
    };
    setUserData(enteredData);
    setIsBooked(true);
  };
  return (
    <React.Fragment>
      {isBooked && <Confirmed onClose={props.onClose} userData={userData} />}
      {!isBooked && (
        <div>
          <div className={classes.heading}>Booking Form</div>
          <Card>
            <form onSubmit={formsubmitHandler}>
              <div className={classes.section}>
                <label htmlFor="name">Movie Name: </label>
                <input type="text" value={props.movie.name} />
              </div>

              <div className={classes.section}>
                <label htmlFor="name">Name: </label>
                <input
                  type="text"
                  onChange={nameChangeHandler}
                  onBlur={nameBlurHandler}
                  id="name"
                />
              </div>
              {isNameTouched && name.trim() == "" && (
                <p className={classes.disabled}>Please enter your name.</p>
              )}
              <div className={classes.section}>
                <label htmlFor="email">E-Mail: </label>
                <input
                  type="email"
                  onChange={emailChangeHandler}
                  onBlur={emailBlurHandler}
                  id="email"
                />
              </div>
              {isEmailTouched && !email.includes("@") && (
                <p className={classes.disabled}>E-mail must contain '@'.</p>
              )}

              <div className={classes.section}>
                <label htmlFor="age">Age: </label>
                <input
                  type="number"
                  onChange={ageChangeHandler}
                  onBlur={ageBlurHandler}
                  id="age"
                />
              </div>
              {isAgeTouched && !ageIsValid && (
                <p className={classes.disabled}>
                  Age must be in between 18-100.
                </p>
              )}

              <div className={classes.section}>
                <label htmlFor="date">Select Date: </label>
                <input
                  type="date"
                  min="2023-05-11"
                  onChange={dateChangeHandler}
                  id="date"
                />
              </div>
              <div className={classes.section}>
                <label for="ShowType">Show Type:</label>
                <select
                  name="ShowType"
                  onChange={showTypeChangeHandler}
                  id="ShowType"
                >
                  <option selected={true} value="Morning">
                    Morning(9:00)
                  </option>
                  <option value="Afternoon">Afternoon(13:00)</option>
                  <option value="Evening">Evening(17:00)</option>
                  <option value="Night">Night(21:00)</option>
                </select>
              </div>
              <div className={classes.section}>
                <label htmlFor="tickets">Number of Tickets: </label>
                <input
                  type="number"
                  onChange={ticketQuantityChangeHandler}
                  onBlur={ticketQuantityBlurHandler}
                  id="tickets"
                />
              </div>
              {isTicketQuantityTouched && !ticketQuantityIsValid && (
                <p className={classes.disabled}>
                  Tickets Quantity must be less than 10.
                </p>
              )}

              {!formIsValid && (
                <button className={classes.buttondisabled} disabled={true}>
                  {" "}
                  Book Tickets
                </button>
              )}
              {formIsValid && (
                <button className={classes.button}> Book Tickets</button>
              )}
            </form>
          </Card>
        </div>
      )}
    </React.Fragment>
  );
};
export default BookingForm;
