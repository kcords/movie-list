import React, { useState, useEffect } from 'react';

const AddMovie = (props) => {
  const { newMovie, movies } = props;
  const [ enteredMovie, setEnteredMovie ] = useState('');

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