import React, { useState, useEffect } from 'react';
const TMDB = require('../../../private/tmdb.js');

const AddMovie = (props) => {
  const { newMovie, movies } = props;
  const [ enteredMovie, setEnteredMovie ] = useState('');
  const IMG_URL_PREFIX = 'https://image.tmdb.org/t/p/w500/';

  return (
    <form>
      <input
        type="text"
        value={enteredMovie}
        onChange={ e => {
          e.preventDefault();
          setEnteredMovie(e.target.value)
        } }
      />
      <button
        disabled={enteredMovie===''}
        onClick={ e => {
          e.preventDefault();
          newMovie({title: enteredMovie, watched: false});
          setEnteredMovie('');
        } }
      >
        Add movie
      </button>
    </form>
  )
}

export default AddMovie;