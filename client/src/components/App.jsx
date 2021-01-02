import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddMovie from './AddMovie.jsx';
import MovieList from './MovieList.jsx';

const App = () => {
  const [ movies, setMovies ] = useState([]);
  const [ addMode, setAddMode ] = useState(false);

  useEffect( () => {
    getMovies();
    console.log('LOADING MOVIES...')
  }, []);

  const getMovies = () => {
    axios.get('/api/movies')
      .then( response => {
        console.log(response)
        setMovies(response.data);
      })
  }

  const newMovie = (mov) => {
    const newMov = {...mov, watched: false};
    axios.post('api/movies', newMov)
      .then( () => getMovies() )
  }

  const updateMovie = (mov) => {
    axios.patch('api/movies', mov)
      .then( () => getMovies() )
  }

  const toggleWatched = (mov) => {
    const update = {id: mov.id, watched: !mov.watched}
    updateMovie(update);
  }

  return (
    <div className="app-component">
      <header>MovieList</header>
      {addMode
        ? <AddMovie
          movies={movies}
          newMovie={newMovie}
          setAddMode={setAddMode}
          />
        : <MovieList
          movies={movies}
          toggleWatched={toggleWatched}
          setAddMode={setAddMode}
          />
      }
      {/* <AddMovie
        movies={movies}
        newMovie={newMovie}
        setAddMode={setAddMode}
      />
      <MovieList
        movies={movies}
        toggleWatched={toggleWatched}
        setAddMode={setAddMode}
      /> */}
    </div>
  );
}

export default App;