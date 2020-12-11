import React from 'react';

const MovieListItem = (props) => (
  <div className="movie-list-item">
    {props.movie.title}
  </div>
)

export default MovieListItem;