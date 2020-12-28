import React, { useState, useEffect } from 'react';
import MovieListItem from './MovieListItem.jsx';
import FilterBar from './FilterBar.jsx';

const MovieList = (props) => {
  const { movies, toggleWatched } = props;
  const [ filteredMovies, setFilteredMovies ] = useState(filteredMovies);
  const [ searchFilter, setSearchFilter ] = useState('');
  const [ watchStateFilter, setWatchStateFilter ] = useState('all')

  // useEffect( () => {
  //   movies.filter( (movie) => {
  //     movie.title.includes(searchFilter);
  //   });
  // }, [searchFilter])

  useEffect( () => {
    console.log(props.movies, movies)
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
      />

      {
        movies.length
          ? movies.map( (movie, index) => (
            movie.title.includes(searchFilter)
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
      {/* {'test', console.log(props.movies.length)}
      <span>{ if (props.movies.length) {
          'No movies available using provided criteria.'
        }
      }</span> */}
    </div>
  );
}


// class MovieList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       filter: ''
//     }

//     this.searchFilter = this.searchFilter.bind(this);
//   }

//   searchFilter(event) {
//     event.preventDefault();
//     this.setState({filter: event.state.value})
//     console.log(this.state)
//   }

//   render() {
//     return (
//       <div className="movie-list">
//         <form autoComplete="on" onSubmit={this.searchFilter} >
//           <label>
//             <input type="text" placeholder="Search..." className="search-input" name="filter" /> {/* NEED TO ADD: value={} */}
//           </label>
//           <button className="search-input" > Go </button>
//         </form>
//         {
//           this.props.movies.map( (movie) => <MovieListItem movie={movie} className={"movie-list-item"} key={movie.title} /> )
//         }
//         {/* {'test', console.log(props.movies.length)}
//         <span>{ if (props.movies.length) {
//             'No movies available using provided criteria.'
//           }
//         }</span> */}
//       </div>
//     );
//   }
// }

export default MovieList;