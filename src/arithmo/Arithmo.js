import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { detectPost } from './../helpers/content-helpers.js';
import '../App.css';


class Arithmo extends Component {

  componentDidMount() {
    this.props.callback('arithmophile');
  }

  render() {
    return (
	<div>
      <article>
        <Typography variant="body1" gutterBottom>I'm into numbers, and the intent of this area is to showcase some cool things about them, using both information and examples.</Typography>

        <ul>
          <li><Link to="/arithmo/decimal">Decimals</Link></li>
          <li><Link to="/arithmo/phi">Phi</Link></li>
          <li><Link to="/arithmo/pythagorean">Pythagorean</Link></li>
        </ul>
      </article>
    </div>
  );
  }
}

export default Arithmo;
