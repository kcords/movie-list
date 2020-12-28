import React, { useState, useEffect } from 'react';
import AddMovie from './AddMovie.jsx';
import MovieList from './MovieList.jsx';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect( () => {
    setMovies([
      {title: 'Mean Girls', watched: false},
      {title: 'Hackers', watched: false},
      {title: 'The Grey', watched: false},
      {title: 'Sunshine', watched: false},
      {title: 'Ex Machina', watched: false},
    ])
  }, []);

  const newMovie = (mov) => {
    const movieList = [...movies, mov];
    console.log('new movie list:', movieList)
    setMovies(movieList);
  }

  const toggleWatched = (ndx) => {
    const movieList = [...movies];
    const toggleMovie = {...movieList[ndx], watched: !movieList[ndx].watched};
    console.log(toggleMovie)
    movieList.splice(ndx, 1, toggleMovie)
    setMovies(movieList);
  }

  return (
    <div className="app-component">
      <header>MovieList</header>
      <MovieList
        movies={movies}
        toggleWatched={toggleWatched}
      />
      <AddMovie
        movies={movies}
        newMovie={newMovie}
      />

    </div>
  );
}

export default App;