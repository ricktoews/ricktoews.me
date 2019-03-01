import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PhiInput from './PhiInput';

const Phi = () => (
  <div>
    <Switch>
      <Route path="/arithmo/phi/:nth?" component={PhiInput} />
    </Switch>
  </div>
);

export default Phi;
