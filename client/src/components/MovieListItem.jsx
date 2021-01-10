import React, { useState, useEffect } from 'react';
import InfoCard from './InfoCard.jsx'
const TMDB = require('../../../private/tmdb.js');
const IMG_URL_PREFIX = 'https://image.tmdb.org/t/p/w200/';

const MovieListItem = (props) => {
  const { movie, index, toggleWatched } = props;
  const [ displayInfo, setDisplayInfo ] = useState(false);

  return (
    <div
      className="movie-list-item"
    >
      <img src={`${IMG_URL_PREFIX}${movie.poster_path}`} className="movie-poster" />
      <span className="movie-title">{movie.title}</span>
      <span className="year-span">{movie.release_date.split('-')[0]}</span>
      <button
        className="btn watched-btn"
        onClick={ e => {
          e.preventDefault();
          toggleWatched(movie);
        }}
      >
        {movie.watched ? 'Watched' : 'Unwatched'}
      </button>
      { displayInfo ? <InfoCard movie={movie} className="info-card" /> : null }
      <button className="btn watched-btn" onClick={ e => setDisplayInfo(!displayInfo) }>
        { displayInfo ? 'Close' : 'More...'}
      </button>
      <i class="fas fa-trash">1</i>
    </div>
  )
}

export default MovieListItem;