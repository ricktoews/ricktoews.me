import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Pythagorean from './Pythagorean';

const Pythag = () => (
  <div>
    <Switch>
      <Route path="/arithmo/pythagorean" component={Pythagorean} />
    </Switch>
  </div>
);

export default Pythag;
