import React, { useState } from 'react';
import InfoCard from './InfoCard.jsx'
const TMDB = require('../../../private/tmdb.js');
const IMG_URL_PREFIX = 'https://image.tmdb.org/t/p/w500/';

const MovieListItem = (props) => {
  const { movie, index, toggleWatched } = props;
  const [ watchedStatus, setWatchedStatus ] = useState(movie.watched ? 'Watched' : 'Unwatched')
  const [ displayInfo, setDisplayInfo ] = useState(false);

  return (
    <div
      className="movie-list-item"
      onClick={ e => setDisplayInfo(!displayInfo) }
    >
      <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} className="movie-poster" />
      <span className="movie-title">{movie.title}</span>
      {/* <span>{`(${movie.release_date.split('-')[0]})`}</span> */}
      <button
        className="watched-btn"
        onClick={ e => toggleWatched(index) }
      >
        {watchedStatus}
      </button>
      { displayInfo ? <InfoCard movie={movie} className="info-card" /> : null }

    </div>
  )
}

export default MovieListItem;