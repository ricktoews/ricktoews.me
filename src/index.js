import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const articleHTML = {

  logophile: 
    `<article class="logophile">
       <header>
         <div class="title" data-link="__linkTitle__">__title__</div>
         <div class="date">__date__</div>
       </header>
       <div class="entry">__word__</div>
       <div class="etymology">__etymology__</div>
       <div class="definition">__definition__</div>
       <div class="citations">__citations__</div>
     </article>`,

  default: 
    `<article class="__category__">
       <header>
         <div class="title" data-link="__linkTitle__">__title__</div>
         <div class="date">__date__</div>
       </header>
       <div class="content">
         __text__
       </div>
     </article>`,
};

var fillInRe = /__(\w+)__/;
function generateHtml(post) {
  var template = articleHTML[post.category] || articleHTML['default'];
  var match;
  while (match = fillInRe.exec(template)) {
    let value = post.content[match[1]] || post[match[1]] || 'no content for ' + match[1];
    template = template.replace(fillInRe, value);
  }
  return template;
}

function generateTitle(post) {
  var titleStr = post.title.replace(/\W+/g, ' ')
                           .trim()
                           .replace(/\s/g, '-').toLowerCase();
  return titleStr;
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

function makeText(post) {
  var text = (post.content && post.content.text) ? post.content.text : null;
  if (text) {
    let pEls = text.split(/\n+/);
    text = '<p>' + pEls.join('</p>\n<p>') + '</p>';
  }
  return text;
}


function fetchContent() {
  var url = 'http://rest.toewsweb.net/index.php/content';
  url = 'http://rest.toewsweb.net/home-content.php/getall';
  return fetch(url)
    .then(res => {
      return res.json();
    })
    .then(res => {
      res.data = res.data.map(d => { 
        d.linkTitle = generateTitle(d);
        if (d.content && d.content.text) d.text = makeText(d);
        let homeArticleContent = generateHtml(d);
        let fullArticleContent = generateHtml(d);

        let homeArticleEl = document.createElement('div');
        let fullArticleEl = document.createElement('div');
        homeArticleEl.innerHTML = homeArticleContent;
        fullArticleEl.innerHTML = fullArticleContent;
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
  console.log('fetchContent store', store);
  ReactDOM.render(<Provider store={store}><BrowserRouter><App content={data}/></BrowserRouter></Provider>, document.getElementById('root'));
});
registerServiceWorker();
