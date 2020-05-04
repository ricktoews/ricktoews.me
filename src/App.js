import React from 'react';
import Main from './Main';
import Store from './Store';

const App = ({ content }) => {
  var categories = Array.from(new Set(content.map(item => item.category)));
  categories.sort();

  return (
    <Store categories={categories}>
      <Main content={content}/>
    </Store>
  );
}

export default App;
