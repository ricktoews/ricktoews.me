import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DenomInput from './DenomInput';

const Decimal = () => (
  <div>
    <h2>Decimals</h2>
    <Switch>
      <Route path="/decimal/:denom?" component={DenomInput} />
    </Switch>
  </div>
);

export default Decimal;
