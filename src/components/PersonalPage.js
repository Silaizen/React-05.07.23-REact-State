import React from 'react';

function PersonalPage(props) {
  return (
    <div>
      <h2>Personal side</h2>
      <h3>Data specifics:</h3>
      <p>PIB: {props.fullName}</p>
      <p>Telephone: {props.phone}</p>
      <p>Email: {props.email}</p>
      <p>Place of residence: {props.city}</p>

      <h3>Professional data:</h3>
      <p>Dosvid work: {props.experience}</p>
      <p>Newbies: {props.skills}</p>

      <img src={props.photo} alt="Фотографія" />
    </div>
  );
}

export default PersonalPage;