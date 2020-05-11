import React, { useContext, useEffect, useState } from 'react';
import { Context } from './Store';
import { CLEAR_FILTER, SET_FILTER } from './reducer';
import { withStyles } from '@material-ui/core/styles';
import FilterListIcon from '@material-ui/icons/FilterList';

const styles = theme => ({
  filterIconWrapper: {
    position: 'absolute',
    top: 0,
    right: 10,
  },
  filterIcon: {
    fontSize: 35,
    cursor: 'pointer',
    color: theme.palette.primary.dark
  },
  filterList: {
    position: 'absolute',
    zIndex: 100,
    width: 200,
    top: 20,
    left: -190,
    backgroundColor: '#fff',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    fontSize: '20pt',
    '& li': {
      padding: 6,
      cursor: 'pointer',
      borderLeft: '1px solid black',
      borderRight: '1px solid black',
      borderBottom: '1px solid black',
      color: '#333'
    },
    '& li:first-child': {
      borderTop: '1px solid black',
    },
    '& li:hover': {
      backgroundColor: '#ccc'
    }
  },
});


function Filter(props) {
console.log('Filter props', props.theme);
  const { classes } = props;
  const { toggle } = props;
  const [ state, dispatch ] = useContext(Context);
  const [ filterState, setState ] = useState({ show: false });
  const filterItems = state.categories;
  const primary = props.theme.palette.primary;

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
    <div className={ classes.filterIconWrapper }>
      <FilterListIcon onClick={toggle} className={ classes.filterIcon } style={{ color: primary.dark }} />
      <ul className={ classes.filterList } style={{ display: (filterState.show ? 'none' : 'none') }}>
        { filterItems.map((item, key) => <li key={key} data-item={item} onClick={selectFilter}>{item}</li>) }
      </ul>
    </div>
  )
}

export default withStyles(styles)(Filter);
