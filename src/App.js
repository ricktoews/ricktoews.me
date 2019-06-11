import React from 'react';
import Main from './Main';

const App = (props) => {
	return (
	<div>
      <Main content={props.content}/>
    </div>
	);
}

export default App;
