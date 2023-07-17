import React from 'react';

function Pet(props) {
  return (
    <div>
      <h2>Home lover</h2>
      <h3>Information:</h3>
      <p>Type: {props.type}</p>
      <p>Name: {props.name}</p>
      <p>Year: {props.age}</p>
      <p>Description: {props.description}</p>
      <img src={props.image} alt="Фотографія" />
    </div>
  );
}

export default Pet;