import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { getAll } from './helpers/content-helpers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

getAll().then(function(data) {
  ReactDOM.render(<BrowserRouter><App content={data}/></BrowserRouter>, document.getElementById('root'));
});
registerServiceWorker();
