import React, { useState, useEffect } from 'react';

const FilterBar = (props) => {
  const {
    updateSearchFilter,
    watchStateFilter,
    setWatchStateFilter
  } = props;

  return(
    <form autoComplete="on" >
      <label>
        <input
          type="text"
          placeholder="Type search text here"
          className="search-input"
          name="filter"
          onChange={ (e) => updateSearchFilter(e.target.value) }
        />
      </label>
      <label className="radio-btn-label">
        All
        <input
          type="radio"
          id="all"
          name="status"
          value="all"
          checked={watchStateFilter === 'all'}
          onChange={ (e) => setWatchStateFilter(e.target.value) }
        />
      </label>
      <label className="radio-btn-label">
        Watched
        <input
          type="radio"
          id="watched"
          name="status"
          value="watched"
          checked={watchStateFilter === 'watched'}
          onChange={ (e) => setWatchStateFilter(e.target.value) }
        />
      </label>
      <label className="radio-btn-label">
        Unwatched
        <input
          type="radio"
          id="unwatched"
          name="status"
          value="unwatched"
          checked={watchStateFilter === 'unwatched'}
          onChange={ (e) => setWatchStateFilter(e.target.value) }
        />
      </label>
    </form>
  )
}

export default FilterBar;