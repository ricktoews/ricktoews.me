import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Masthead from '../Masthead';
import PhiInput from './PhiInput';

const Phi = () => (
  <div>
    <Masthead id="arithmophile" />
    <Switch>
      <Route path="/arithmo/phi/:nth?" component={PhiInput} />
    </Switch>
  </div>
);

export default Phi;
