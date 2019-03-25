import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function fetchContent() {
  var url = 'https://rest.toewsweb.net/index.php/content';
  return fetch(url)
    .then(res => {
      return res.json();
    })
    .then(res => {
      return res.data;
    })
}

fetchContent().then(data => {
console.log('Fetched content; now rendering.');
  ReactDOM.render(<BrowserRouter><App content={data} /></BrowserRouter>, document.getElementById('root'));
});
registerServiceWorker();
