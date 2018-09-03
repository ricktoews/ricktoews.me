import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DenomInput from './DenomInput';
import { MastheadWrapped } from './cards.js';

const Decimal = () => (
  <div>
    <MastheadWrapped id="arithmophile" />
    <Switch>
      <Route path="/decimal/:denom?" component={DenomInput} />
    </Switch>
  </div>
);

export default Decimal;
