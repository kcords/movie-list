import React, { useState, useEvent } from 'react';

const InfoCard = (props) => {
  const { movie } = props;


  return (
    <div>
      <p>Released: {movie.release_date}</p>
      <p>Description: {movie.overview}</p>
      <p>Rating: {movie.vote_average}</p>
    </div>
  )
}

export default InfoCard;


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