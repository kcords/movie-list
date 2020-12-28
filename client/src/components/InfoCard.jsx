import React, { useState, useEvent } from 'react';

const InfoCard = (props) => {
  const { movie } = props;


  return (
    <div>
      <p>Released: {movie.release_date}</p>
      <p>Description: {movie.overview}</p>
      <p>Rating: {movie.vote_average}</p>
    </div>
  )
}

export default InfoCard;