import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Pythagorean from './Pythagorean';
import CornerInput from './CornerInput';

const Pythag = () => (
  <div>
    <Switch>
      <Route path="/arithmo/pythagorean" component={CornerInput} />
    </Switch>
  </div>
);

export default Pythag;
