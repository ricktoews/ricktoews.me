import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DenomInput from './DenomInput';

const Decimal = () => (
  <div>
    <Switch>
      <Route path="/arithmo/decimal/:denom?" component={DenomInput} />
    </Switch>
  </div>
);

export default Decimal;
