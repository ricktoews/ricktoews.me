import { cards, homeCardTheme } from '../cards';

const BASE = '//rest.toewsweb.net/';
const API = {
  'getAll': BASE + 'home-content.php/getall'
};

export function detectPost(loc, content) {
    var path = loc.pathname;
    var categories = Object.keys(content);
    var post = [];
    categories.forEach(category => {
        if (post.length === 0) {
            post = content[category].filter(p => path === '/article/' + p.title);
        }
    });

    return post;
}

const definitionStyle = `
  font-style: italic; padding-bottom: 5px; margin-bottom: 5px; border-bottom: 1px dotted black
`;

const etymologyStyle = `
  font-size: .75rem; padding-bottom: 10px;
`;

const citationsStyle = `
  font-size: .75rem;
`;

const contentStyle = `
  margin: 10px;
  line-height: 1.5em;
  font-size: .75rem;
`;

const articleHTML = {
  logophile: 
    `<article class="logophile">
       <header style="__headerStyle__">
         <div class="title" data-link="__linkTitle__">__title__</div>
         <div class="date">__date__</div>
       </header>
       <div style="${contentStyle}">
         <div class="entry">__word__</div>
         <div style="${definitionStyle}" class="definition">__definition__</div>
         <div style="${etymologyStyle}" class="etymology">__etymology__</div>
         <div style="${citationsStyle}" class="citations">__citations__</div>
       </div>
     </article>`,

  default: 
    `<article class="__category__">
       <header style="__headerStyle__">
         <div class="title" data-link="__linkTitle__">__title__</div>
         <div class="date">__date__</div>
       </header>
       <div style="${contentStyle}" class="content">
         __text__
       </div>
     </article>`,
};

const fillInRe = /__(\w+)__/;

function getMatch(post, m) {
  var item = m[1]
  var value = post.content[item] || post[item] || '';
  if (item === 'citations') {
    let lines = value.split('\n');
    value = '<ul style="list-style-type: none; margin: 0; padding: 0"><li style="margin-bottom: 5px">' + lines.join('</li><li style="margin-bottom: 5px">') + '</li></ul>';
    //console.log('citations', value.split('\n'));
  }
  return value;
}

function addTheme(post) {
  var category = post.category;
  var card = cards[category] || {};
  var primaryColor = card.primaryColor || '#000';
  const cardTheme = homeCardTheme({ primaryColor });
  const colors = cardTheme.palette.primary;
  const headerStyle = `background-color: ${colors.main}; color: ${colors.contrastText}`;
  return headerStyle;
}

function generateHtml(post) {
  var template = articleHTML[post.category] || articleHTML['default'];
  var match;
  while (match = fillInRe.exec(template)) {
    let value = getMatch(post, match);
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

function makeText(post) {
  var text = (post.content && post.content.text) ? post.content.text : null;
  if (text) {
    let pEls = text.split(/\n+/);
    text = '<p>' + pEls.join('</p>\n<p>') + '</p>';
  }
  return text;
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


export function getAll() {
  var url = API.getAll;
  return fetch(url)
    .then(res => res.json())
    .then(res => {
      res.data = res.data.map(d => { 
        d.linkTitle = generateTitle(d);
        d.headerStyle = addTheme(d);
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
//        fullArticle.appendChild(linkToHome);

        d.homeArticle = homeArticle.outerHTML;
        d.fullArticle = fullArticle.outerHTML;
        d.path = '/article/' + d.title; return d; 
      });
      return res.data;
    })
}

