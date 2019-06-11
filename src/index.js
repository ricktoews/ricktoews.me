import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function makeLinks(post) {
  let linkEl = document.createElement('button');
  linkEl.className = 'post-article-link';
  linkEl.dataset.link = '/article/' + post.title;
  linkEl.innerHTML = 'Link to article';

  let homeLinkEl = document.createElement('button');
  homeLinkEl.className = 'home-article-link';
  homeLinkEl.innerHTML = 'Home';

  return {
    linkToArticle: linkEl,
    linkToHome: homeLinkEl
  };
}

function fetchContent() {
  var url = 'http://rest.toewsweb.net/index.php/content';
  return fetch(url)
    .then(res => {
      return res.json();
    })
    .then(res => {
      res.data = res.data.map(d => { 
        let homeArticleEl = document.createElement('div');
        let fullArticleEl = document.createElement('div');
        homeArticleEl.innerHTML = d.content;
        fullArticleEl.innerHTML = d.content;

        let { linkToArticle, linkToHome } = makeLinks(d);

        let homeArticle = homeArticleEl.firstChild;
        let fullArticle = fullArticleEl.firstChild;
        homeArticle.appendChild(linkToArticle);
        fullArticle.appendChild(linkToHome);

        d.homeArticle = homeArticle.outerHTML;
        d.fullArticle = fullArticle.outerHTML;
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
