import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Button from '@material-ui/core/Button';
import TripleBtn from './TripleBtn';
import PythagSquare from './PythagSquare';
import { getABC, calcACoords, calcBCoords } from './pythag-helpers';
import './arithmo.css';

const styles = theme => ({
	textField: {
		width:50,
	},
});

function CornerInput(props) {
  let corner = 1;
  let [abcs, setAbcs] = useState([]);
  let [triple, setTriple] = useState({a:4, b:3, c:5});
  const { classes } = props;

  const details = (cls) => {
    var areaInfo;

    if (cls === 'b-corner-area') {
      areaInfo = `B corner: ${triple.c - triple.a} squared: ${Math.pow(triple.c - triple.a, 2)}`;
    } else if (cls === 'b-area') {
      areaInfo = `B sides: 2 x ${triple.c - triple.a} x ${triple.a}: ${2*(triple.c-triple.a)*triple.a}`;
    } else {
      areaInfo = `A squared: ${Math.pow(triple.a, 2)}`;
    }
    console.log('handleHover', triple.a, triple.b, triple.c, areaInfo);
  }

  const handleChange = event => {
    corner = event.target.value;
    abcs = getABC(event.target.value);
    setAbcs(abcs);
  }

  const handleClick = event => {
    var el = event.target;
    el.style.left = (parseInt(el.style.left, 10) + 10) + 'px';
  }

  const chooseTriple = triple => {
    setTriple(triple);
  }

  const getRegionLabel = (row, col) => {
    let region = '';
    let bThick = triple.c - triple.a;
    if (row < bThick && col < bThick) { 
      region = 'b-corner-area'; 
    } else if (row < bThick || col < bThick) { 
      region = 'b-area'; 
    } else { 
      region = 'a-area'; 
    }
    return region;
  }


  return (
    <div>
    <article>
      <p className="general-content">Input side of corner square. For Pythagorean Triple primitives, the corner must be 2 or an odd square.</p>
      <input id="corner" 
        type="number" 
        onChange={handleChange}
        className={classes.textField}
      />
      <Button onClick={handleClick}><CheckCircle /></Button>
      <br style={{clear:"both"}}/>

      { abcs && abcs.map((abc, i) => {
        return <TripleBtn key={i} chooseTriple={chooseTriple} abc={abc}></TripleBtn>
      }) }

      <div className="a-b-c">
        { [...Array(triple.c)].map((e, i) => {
          return (<div className="row" key={i}>
           { [...Array(triple.c)].map((e2, i2) => {
             let regionLabel = getRegionLabel(i, i2);

             return (<PythagSquare details={details} region={regionLabel} key={i2}></PythagSquare> )
           } ) }
          </div>)
        })}
      </div>

      <br style={{clear:"both"}}/>
    </article>
    </div>

  );
}

export default withStyles(styles)(CornerInput);
