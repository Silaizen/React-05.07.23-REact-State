import React from 'react';

function Movie(props) {
  return (
    <div>
      <h2>Naming the movie: {props.title}</h2>
      <p>Director: {props.director}</p>
      <p>Year release: {props.year}</p>
      <p>studio: {props.studio}</p>
      <img src={props.poster} alt="Постер фільму" />
    </div>
  );
}

export default Movie;