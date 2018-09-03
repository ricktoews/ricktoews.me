import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Roster = () => (
  <div>
    <h2>Roster Page</h2>
    <Switch>
      <Route exact path='/roster' component={FullRoster}/>
      <Route path='/roster/:number' component={Player}/>
    </Switch>
  </div>
);

const Player = (props) => {
  const player = props.match.params.number;

  return (
    <div>
      <h2>Player number {player}</h2>
    </div>
  );
}

const FullRoster = () => (
  <div>
    <h2>Full Roster would go here, if we had one.</h2>
  </div>
);

const Schedule = () => (
  <div>
    <h2>Schedule would go here, if we had one.</h2>
  </div>
)

const Home = () => (
  <div>
    <h2>Home would go here, if we had one.</h2>
  </div>
)

export { Roster, Player, FullRoster, Schedule, Home };
