import React from 'react';
import Main from './Main';

const App = (props) => {
// Third commit for experiment branch
console.log('App, props', props.content);
	return (
	<div>
      <Main content={props.content}/>
    </div>
	);
}

export default App;
