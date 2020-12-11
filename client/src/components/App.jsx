import React from 'react';
import MovieList from './MovieList.jsx';

const movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {movies}
  }

  render() {
    return (
      <div className="app-component">
        <header>MovieList</header>
        <MovieList movies={this.state.movies} />

      </div>
    );
  }

}

export default App;