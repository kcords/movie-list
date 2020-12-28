import React, { useState, useEffect } from 'react';
import AddMovie from './AddMovie.jsx';
import MovieList from './MovieList.jsx';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect( () => {
    setMovies([
      {title: 'Mean Girls', watched: false, poster_path: '/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg', release_date: '1999-10-15', overview: 'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.'},
      {title: 'Hackers', watched: false, poster_path: '/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg', release_date: '1999-10-15', overview: 'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.'},
      {title: 'The Grey', watched: false, poster_path: '/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg', release_date: '1999-10-15', overview: 'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.'},
      {title: 'Sunshine', watched: false, poster_path: '/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg', release_date: '1999-10-15', overview: 'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.'},
      {title: 'Ex Machina', watched: false, poster_path: '/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg', release_date: '1999-10-15', overview: 'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.'},
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