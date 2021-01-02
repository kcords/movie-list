import React, { useState, useEvent } from 'react';

const InfoCard = (props) => {
  const { movie } = props;


  return (
    <table>
      <tr>
        <td>Released:</td><td>{`${movie.release_date.split('-')[1]}/${movie.release_date.split('-')[2]}/${movie.release_date.split('-')[0]}`}</td>
      </tr>
      <tr>
        <td>Description:</td><td>{movie.overview}</td>
      </tr>
      <tr>
        <td>Rating:</td><td>{movie.vote_average}</td>
      </tr>
    </table>
  )
}

export default InfoCard;