import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';
import { getAll } from './helpers/content-helpers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

getAll().then(function(data) {
  const store = createStore(allReducers, { homeArticles: data });
  console.log('fetchContent store', store);
  ReactDOM.render(<Provider store={store}><BrowserRouter><App content={data}/></BrowserRouter></Provider>, document.getElementById('root'));
});
registerServiceWorker();
