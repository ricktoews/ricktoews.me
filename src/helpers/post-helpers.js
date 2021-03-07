export const makePostDateObj = (post) => {
  var { date, category } = post;
  // Cool! This is allowed.
  var [yr, mo, dt] = date.split('-');
  var dateObj = new Date(yr, mo, 0);
  var daysInMonth = dateObj.getDate();
  var dateObjB = new Date(yr, mo-1, dt);
  var dow = dateObjB.getDay() + 36; // 1 + multiple of 7 that will exceed any calendar date
  var blanks = (dow - dt) % 7;
  return {
    year: yr,
    month: mo,
    date: parseInt(dt, 10),
    days: daysInMonth,
    category: category,
    blanks: blanks
  };
}

function createTextFadeEl() {
  let el = document.createElement('div');
  el.className = 'fade-text';
  return el;
}

export const extractContent = (post) => {
  // these are the data items to be extracted.
  var title, articleLink, category, content;

  // create temporary element for use in parsing, and put article's HTML in it.
  var domEl = document.createElement('div');
  // apparently, insertAdjacentHTML isn't supported from createDocumentFragment. Investigate.
  domEl.insertAdjacentHTML('afterBegin', post.homeArticle);
  var titleEl = domEl.querySelector('.title');
  if (titleEl) {
    let articleEl = domEl.querySelector('article');
    category = articleEl.className;
    articleLink = titleEl.dataset.link;
    title = titleEl.innerHTML;

  // Remove header from article.
    var headerEl = articleEl.querySelector('header');
    articleEl.removeChild(headerEl);
    if (category !== 'logophile') {
      articleEl.appendChild(createTextFadeEl());
    }
    content = articleEl.innerHTML;
  } else {
    console.log('weird homeArticle', headerEl);
  }
  return {
    title,
    articleLink,
    category,
    content
  };
}
