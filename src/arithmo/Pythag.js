import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Pythagorean from './Pythagorean';
import Masthead from '../Masthead';

const Pythag = () => (
  <div>
    <Masthead id="arithmophile" />
    <Switch>
      <Route path="/arithmo/pythagorean" component={Pythagorean} />
    </Switch>
  </div>
);

export default Pythag;
