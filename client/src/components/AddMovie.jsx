import React, { useState, useEffect } from 'react';
import axios from 'axios';
const TMDB = require('../../../private/tmdb.js');

const AddMovie = (props) => {
  const { newMovie, movies, setAddMode } = props;
  const [ enteredMovie, setEnteredMovie ] = useState('');
  const IMG_URL_PREFIX = 'https://image.tmdb.org/t/p/w500/';
  const [ dbMovies, setDbMovies ] = useState([]);

  const findMovies = () => {
    const searchCriteria = enteredMovie.split(' ').join('+');
    axios.get(`http://api.themoviedb.org/3/search/movie?api_key=${TMDB.key}&query=${searchCriteria}`)
      .then( res => res.data.results)
      .then( movieMatches => setDbMovies(movieMatches))
      .catch( error => console.log(error))
  }

  return (
    <div>
      <form>
        <input
          type="text"
          value={enteredMovie}
          onChange={ e => {
            e.preventDefault();
            setEnteredMovie(e.target.value);
          } }
        />
        <button
          disabled={enteredMovie===''}
          onClick={ e => {
            e.preventDefault();
            findMovies(enteredMovie);
            // newMovie({title: enteredMovie, watched: false});
            // setEnteredMovie('');
          } }
        >
          Search
        </button>
      <button
        className="add-btn"
        onClick={ e => {
          e.preventDefault();
          setAddMode(false);
        }}
      >
        Back to list
      </button>

      </form>
      {dbMovies.map( (movie, ndx) => (
        <div key={movie.id} className="movie-list-item" >
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}     className="movie-poster"
          />
          <span className="movie-title">
            {movie.title}
          </span>
          <button
            className="watched-btn"
            onClick={ e => {
              e.preventDefault();
              newMovie(movie);
              const movieList = dbMovies;
              movieList.splice(ndx, 1);
              setDbMovies(movieList);
            }}
          >
            Add to movie list
          </button>
        </div>
      ))}
    </div>

  )
}

export default AddMovie;


// {
//   "page": 1,
//   "results": [
//       {
//           "adult": false,
//           "backdrop_path": "/52AfXWuXCHn3UjD17rBruA9f5qb.jpg",
//           "genre_ids": [
//               18
//           ],
//           "id": 550,
//           "original_language": "en",
//           "original_title": "Fight Club",
//           "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
//           "popularity": 53.805,
//           "poster_path": "/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
//           "release_date": "1999-10-15",
//           "title": "Fight Club",
//           "video": false,
//           "vote_average": 8.4,
//           "vote_count": 20676
//       }
//   ],
//   "total_pages": 2,
//   "total_results": 22
// }




// import React, { useState, useEffect } from 'react';
// const TMDB = require('../../../private/tmdb.js');

// const AddMovie = (props) => {
//   const { newMovie, movies } = props;
//   const [ enteredMovie, setEnteredMovie ] = useState('');
//   const IMG_URL_PREFIX = 'https://image.tmdb.org/t/p/w500/';

//   return (
//     <form>
//       <input
//         type="text"
//         value={enteredMovie}
//         onChange={ e => {
//           e.preventDefault();
//           setEnteredMovie(e.target.value)
//         } }
//       />
//       <button
//         disabled={enteredMovie===''}
//         onClick={ e => {
//           e.preventDefault();
//           newMovie({title: enteredMovie, watched: false});
//           setEnteredMovie('');
//         } }
//       >
//         Add movie
//       </button>
//     </form>
//   )
// }

// export default AddMovie;