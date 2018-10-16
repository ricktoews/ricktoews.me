import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CornerInput from './CornerInput';
import Masthead from '../Masthead';

const Pythag = () => (
  <div>
    <Masthead id="arithmophile" />
    <Switch>
      <Route path="/pythag/:corner?" component={CornerInput} />
    </Switch>
  </div>
);

export default Pythag;

