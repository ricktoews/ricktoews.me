import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function generateTitle(post) {
  // create temporary element for use in parsing, and put article's HTML in it.
  var domEl = document.createElement('div');
  // apparently, insertAdjacentHTML isn't supported from createDocumentFragment. Investigate.
  domEl.insertAdjacentHTML('afterBegin', post.content);
  var titleEl = domEl.querySelector('.title');
  var titleText = titleEl.childNodes ? titleEl.childNodes[0].nodeValue : '';
  titleText = titleText.replace(/\W+/g, ' ')
                       .trim()
                       .replace(/\s/g, '-').toLowerCase();
  return titleText;
}

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
        d.title = generateTitle(d);
        let homeArticleEl = document.createElement('div');
        let fullArticleEl = document.createElement('div');
        homeArticleEl.innerHTML = d.content;
        fullArticleEl.innerHTML = d.content;
        let { linkToHome } = makeLinks(d);

        let homeArticle = homeArticleEl.firstChild;
        let fullArticle = fullArticleEl.firstChild;
        let titleEl = homeArticle.querySelector('.title');
        if (titleEl) titleEl.dataset.link = '/article/' + d.title;
        fullArticle.appendChild(linkToHome);

        d.homeArticle = homeArticle.outerHTML;
        d.fullArticle = fullArticle.outerHTML;
        d.path = '/article/' + d.title; return d; 
      });
      return res.data;
    })
}

fetchContent().then(function(data) {
  const store = createStore(allReducers, { homeArticles: data });
  ReactDOM.render(<Provider store={store}><BrowserRouter><App content={data}/></BrowserRouter></Provider>, document.getElementById('root'));
});
registerServiceWorker();
