import BookingForm from "../BookingForm/BookingForm";
import Card from "../UI/Card";
import classes from "./Summary.module.css";
import React, { useState } from "react";

const Summary = (props) => {
  const summary = props.movie.summary.substring(
    3,
    props.movie.summary.length - 4
  );

  const [isConfirmed, setIsConfirmed] = useState(false);
  const bookHandler = (event) => {
    setIsConfirmed(true);
  };
  return (
    <React.Fragment>
      {" "}
      {isConfirmed && (
        <BookingForm onClose={props.onClose} movie={props.movie} />
      )}
      {!isConfirmed && (
        <div>
          <div className={classes.heading}>Movie Details</div>
          <li className={classes.movie}>
            <h2>
              {props.movie.name} <h3>({props.movie.language})</h3>
            </h2>
            <img src={props.movie.image} alt="logo" />
            <h3>Rating: {props.movie.rating}</h3>
            <h3>Runtme: {props.movie.averageRuntime} minutes</h3>
            <div className={classes.summaryHeading}>Summary:</div>
            <p className={classes.summary}>{summary}</p>
            <button className={classes.button} onClick={bookHandler}>
              Confirm
            </button>
          </li>
        </div>
      )}
    </React.Fragment>
  );
};
export default Summary;
