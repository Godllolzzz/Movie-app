import React from "react";

import Movie from "./Movie";
import { useState } from "react";

import classes from "./MoviesList.module.css";
import Summary from "../Summary/Summary";

const MovieList = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [selectMovie, setSelectMovie] = useState({});

  const clickHandler = (moviesData) => {
    setSelectMovie(moviesData);
    setIsClicked(true);
  };
  
  const counterClickHandler = () => {
    setIsClicked(false);
  }

  return (
    <React.Fragment>
      {isClicked && <Summary onClose = {counterClickHandler} movie={selectMovie} />}
      {!isClicked && <div className={classes.heading}>Movies List</div>}
      {!isClicked && (
        <ul className={classes["movies-list"]}>
          {props.movies.map((movie) => (
            <Movie
              key={movie.id}
              name={movie.name}
              image={movie.image}
              averageRuntime={movie.averageRuntime}
              rating={movie.rating}
              language={movie.language}
              summary={movie.summary}
              onButton={clickHandler}
            />
          ))}
        </ul>
      )}
    </React.Fragment>
  );
};

export default MovieList;
