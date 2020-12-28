import React, { useState } from 'react';

const MovieListItem = (props) => {
  const { movie, index, toggleWatched } = props;
  const [ watchedStatus, setWatchedStatus ] = useState(movie.watched ? 'Watched' : 'Unwatched')

  return (
    <div className="movie-list-item">
      {movie.title}
      <button
        className="watched-btn"
        onClick={ e => toggleWatched(index) }
      >
        {watchedStatus}
      </button>
    </div>
  )

}

export default MovieListItem;