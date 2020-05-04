import React, { useContext, useEffect, useState } from 'react';
import { Context } from './Store';
import { CLEAR_FILTER, SET_FILTER } from './reducer';
import FilterListIcon from '@material-ui/icons/FilterList';
import './filter.css';

const filterStyle = {
  cursor: 'pointer'
}

function Filter({ color }) {
  const [ state, dispatch ] = useContext(Context);
  const [ filterState, setState ] = useState({ show: false });
  const filterItems = state.categories;

  function toggleShow() {
    setState({ show: !filterState.show });
    dispatch({ type: CLEAR_FILTER, payload: '' });
  }
 
  function selectFilter(e) {
    var el = e.target;
    var data = el.dataset || {};
    var filterValue = data.item;
    dispatch({ type: SET_FILTER, payload: filterValue });
  }

  return (
    <div style={{ position: 'relative' }}>
      <FilterListIcon onClick={toggleShow} color={color} style={filterStyle}/>
      <ul className="filter-list" style={{ display: (filterState.show ? 'block' : 'none') }}>
        { filterItems.map((item, key) => <li key={key} data-item={item} onClick={selectFilter}>{item}</li>) }
      </ul>
    </div>
  )
}

export default Filter;
