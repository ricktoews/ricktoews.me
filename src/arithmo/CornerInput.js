import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CheckCircle from '@material-ui/icons/CheckCircle';
import PythagSandbox from './PythagSandbox';
import Button from '@material-ui/core/Button';
import TripleBtn from './TripleBtn';
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

      <PythagSandbox triple={triple}></PythagSandbox>

    </article>
    </div>

  );
}

export default withStyles(styles)(CornerInput);
