import React from "react";

import classes from "./Movie.module.css";

const Movie = (props) => {
  const bookHandler = (events) => {
    const moviesData = {
      id: props.id,
      image: props.image,
      name: props.name,
      averageRuntime: props.averageRuntime,
      rating: props.rating,
      language: props.language,
      summary: props.summary,
    };
    props.onButton(moviesData);
  };
  return (
    <React.Fragment>
      {" "}
      <li className={classes.movie}>
        <div className={classes.innerDiv}><h2>
          {props.name} <h3>({props.language})</h3>
        </h2>
        <img 
          src={props.image} 
          alt="logo" 
        />
        <h3>Rating: {props.rating}</h3>
        <h3>Runtme: {props.averageRuntime} minutes</h3>
        <button className={classes.button} onClick={bookHandler}>
          Book Now
        </button></div>
        
      </li>
    </React.Fragment>
  );
};

export default Movie;
