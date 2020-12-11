import React from 'react';
import MovieListItem from './MovieListItem.jsx'

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ''
    }

    this.searchFilter = this.searchFilter.bind(this);
  }

  searchFilter(event) {
    event.preventDefault();
    this.setState({filter: event.state.value})
    console.log(this.state)
  }

  render() {
    return (
      <div className="movie-list">
        <form autoComplete="on" onSubmit={this.searchFilter} >
          <label>
            <input type="text" placeholder="Search..." className="search-input" name="filter" /> {/* NEED TO ADD: value={} */}
          </label>
          <button className="search-input" > Go </button>
        </form>
        {
          this.props.movies.map( (movie) => <MovieListItem movie={movie} className={"movie-list-item"} key={movie.title} /> )
        }
        {/* {'test', console.log(props.movies.length)}
        <span>{ if (props.movies.length) {
            'No movies available using provided criteria.'
          }
        }</span> */}
      </div>
    );
  }
}

export default MovieList;