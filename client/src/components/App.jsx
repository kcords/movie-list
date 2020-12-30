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
    console.log(mov)
    axios.post('api/movies', mov)
      .then( response => {
        getMovies();
      })
  }

  // const newMovie = (mov) => {
  //   const newMov = {...mov, watched: false}
  //   const movieList = [...movies, newMov];
  //   // console.log('new movie list:', movieList)
  //   setMovies(movieList);
  // }

  const toggleWatched = (ndx) => {
    const movieList = [...movies];
    const toggleMovie = {...movieList[ndx], watched: !movieList[ndx].watched};
    // console.log(toggleMovie)
    movieList.splice(ndx, 1, toggleMovie)
    setMovies(movieList);
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