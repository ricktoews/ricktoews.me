import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DenomInput from './DenomInput';
import Masthead from '../Masthead';

const Decimal = () => (
  <div>
    <Masthead id="arithmophile" />
    <Switch>
      <Route path="/arithmo/decimal/:denom?" component={DenomInput} />
    </Switch>
  </div>
);

export default Decimal;