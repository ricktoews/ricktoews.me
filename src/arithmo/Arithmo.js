import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Masthead from '../Masthead';
import '../App.css';


const Arithmo = () => (
  <div>
    <Masthead id="arithmophile" />
    <article>
    <Typography variant="body1" gutterBottom>I'm into numbers, and the intent of this area is to showcase some cool things about them, using both information and examples.</Typography>

    <ul>
      <li><Link to="./decimal">Decimals</Link></li>
      <li><Link to="./pythag">Pythagorean Stuff</Link></li>
    </ul>
    </article>
  </div>
);

export default Arithmo;
