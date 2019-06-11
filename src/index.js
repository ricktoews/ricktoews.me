import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function fetchContent() {
  var url = 'http://rest.toewsweb.net/index.php/content';
  return fetch(url)
    .then(res => {
      return res.json();
    })
    .then(res => {
      res.data = res.data.map(d => { 
        let tempEl = document.createElement('div');
        tempEl.innerHTML = d.content;
        let article = tempEl.firstChild;
        let linkEl = document.createElement('a');
        linkEl.className = 'post-article-link';
        linkEl.href = '/article/' + d.title;
        linkEl.innerHTML = 'Link to article';
        article.appendChild(linkEl);
        d.article = article.outerHTML;
        d.path = '/article/' + d.title; return d; 
      });
      return res.data;
    })
}

fetchContent().then(data => {
console.log('Fetched content; now rendering.');
  ReactDOM.render(<BrowserRouter><App content={data} /></BrowserRouter>, document.getElementById('root'));
});
registerServiceWorker();
