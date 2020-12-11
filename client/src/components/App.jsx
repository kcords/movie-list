import React from 'react';
import MovieList from './MovieList.jsx';

const movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

const App = (props) => (
  <div className="movie-list">
    <span>MovieList</span>
    <MovieList />

  </div>
);

export default App;