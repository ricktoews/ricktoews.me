import React, { useState, useRef, useContext } from 'react';
import Button from '@material-ui/core/Button';
import HomePost from './HomePost';
import Filter from '../Filter';
import { Context } from '../Store';
import { SET_FILTER, CLEAR_FILTER } from '../reducer';
import { withRouter } from 'react-router-dom';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';

const HOME_COLOR = { primary: '808080', secondary: 'f90' };

const homeTheme = createMuiTheme({
    typography: {
        useNextVariants: true
    },        
    palette: {
        primary: {
            main: '#' + HOME_COLOR.primary,
        },
        secondary: {
            main: '#' + HOME_COLOR.secondary,
        },
    },
});

const styles = () => {
  return ({
    root: {
      position: 'relative',
      backgroundColor: "#ffffff",
    },
    topTrim: {
      height: 12,
    },
    topTrimMobile: {
      height: 6,
    },
    shadowBarMobile: {
      position: 'absolute',
      top: '8px',
      left: '0px',
      width: 'calc(100% - 0px)',
      height: '34px',
      borderBottom: '1px solid ' + homeTheme.palette.primary.dark,
    },
    titleBar: {
      ...homeTheme.mixins.gutters(),
      height: 64,
      display: "flex",
      position: "relative",
      alignItems: "center",
      justifyContent: "space-between",
      fontSize: "18pt",
      marginBottom: "20px",
      backgroundColor: homeTheme.palette.primary.light
    },
    titleBarMobile: {
      ...homeTheme.mixins.gutters(),
      height: 36,
      display: "flex",
      position: "relative",
      alignItems: "center",
      fontSize: "16pt",
      color: homeTheme.palette.primary.contrastText,
      backgroundColor: homeTheme.palette.primary.light
    },
    filterIconWrapper: {
      position: 'absolute',
      top: 0,
      right: 10,
    },
    filterIcon: {
      fontSize: 35,
      cursor: 'pointer',
      color: homeTheme.palette.primary.dark
    },
    filterSelection: {
      position: 'absolute',
      zIndex: 100,
      top: 43,
      left: 10,
      width: 'calc(100% - 20px)',
      background: 'rgba(255,255,255,.9)',
      border: '1px solid ' + homeTheme.palette.secondary.dark,
      borderRadius: 5,
    },
    filterSelectionShow: {
      display: 'block'
    },
    filterSelectionHide: {
      display: 'none'
    },
    filterList: {
      margin: 0,
      padding: 0,
      fontSize: '10pt',
    },
    filterItem: {
      margin: 5,
      background: homeTheme.palette.secondary.light,
      color: homeTheme.palette.secondary.contrastText
    }
  });
};

function desktopMasthead(props) {
  const { classes } = props;
  const [ state, dispatch ] = useContext(Context);
  const [ filterState, setState ] = useState({ show: false });
  const primary = homeTheme.palette.primary;
  const filterSelectionRef = useRef(null);

  const filterItems = state.categories;

  const selectFilter = category => {
    dispatch({ type: SET_FILTER, payload: category });
    setState({ show: false });
    var filters = filterSelectionRef.current;
    filters.classList.add(classes.filterSelectionHide);
  }

  function toggle() {
    var newState = !filterState.show;
    setState({ show: newState });
    dispatch({ type: CLEAR_FILTER, payload: '' });
    var filters = filterSelectionRef.current;
    if (newState) {
      filters.classList.remove(classes.filterSelectionHide);
    } else {
      filters.classList.add(classes.filterSelectionHide);
    }
  }
 
  return (
    <div>
      <div className={ classes.topTrim } style={{backgroundColor: primary.dark}}></div>
      <div className={ classes.shadowBar }></div>
      <div className={ classes.titleBar }>
        { 'ricktoews.me' }
{/* Filter toggle icon */}
        <Filter toggle={toggle} theme={homeTheme}/>

{/* Filter selection tool */}
        <div ref={filterSelectionRef} className={ classes.filterSelection + ' ' + classes.filterSelectionHide }>
          <div className={ classes.filterList }>
            { filterItems.map((item, key) => <Button key={key} className={classes.filterItem} variant="contained" size="small" onClick={() => selectFilter(item)}>{item}</Button>) }
          </div>
        </div>

      </div>
    </div>
  )
}
const DesktopMasthead = withRouter(withStyles(styles)(desktopMasthead));


function HomeContent({ content }) {
  const [ state, dispatch ] = useContext(Context);

  var filter = state.filter || '';
  return (
    <div>
      <DesktopMasthead id={'home'}/>

      <div className="home-container">
        { content.filter(item => !filter || item.category === filter).map((post, key) => <HomePost key={key} post={post}/>)}
      </div>
    </div>
  );
}

export default HomeContent;
