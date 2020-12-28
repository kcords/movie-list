import React, { useState, useEffect } from 'react';
import MovieListItem from './MovieListItem.jsx';
import FilterBar from './FilterBar.jsx';

const MovieList = (props) => {
  const { movies, toggleWatched, setAddMode } = props;
  const [ filteredMovies, setFilteredMovies ] = useState(filteredMovies);
  const [ searchFilter, setSearchFilter ] = useState('');
  const [ watchStateFilter, setWatchStateFilter ] = useState('all');

  // useEffect( () => {
  //   movies.filter( (movie) => {
  //     movie.title.includes(searchFilter);
  //   });
  // }, [searchFilter])

  useEffect( () => {
    // console.log(props.movies, movies)
  }, [toggleWatched])

  const updateSearchFilter = (string) => {
    setSearchFilter(string);
  }

  return (
    <div className="movie-list">
      <FilterBar
        updateSearchFilter={updateSearchFilter}
        watchStateFilter={watchStateFilter}
        setWatchStateFilter={setWatchStateFilter}
        setAddMode={setAddMode}
      />

      {
        movies.length
          ? movies.map( (movie, index) => (
            movie.title.toLowerCase().includes(searchFilter.toLowerCase())
            && (watchStateFilter === 'all'
              || movie.watched && watchStateFilter === 'watched'
              || !movie.watched && watchStateFilter === 'unwatched')
                ? <MovieListItem
                  movie={movie}
                  index={index}
                  className={"movie-list-item"}
                  key={movie.title}
                  toggleWatched={toggleWatched}
                />
                : null
            )
          )
          : <p>No movies have been added to the library.</p>
      }
    </div>
  );
}

export default MovieList;