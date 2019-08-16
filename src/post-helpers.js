export const makePostDateObj = (date) => {
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
    blanks: blanks
  };
}

export const extractContent = (post) => {
  var domEl = document.createElement('div');
  domEl.innerHTML = post.homeArticle;
        console.log('domEl', domEl);
  var header = domEl.getElementsByTagName('header')[0];
  var titleEl = domEl.getElementsByClassName('title')[0];
  var title, articleLink, category, content;

  if (titleEl) {
    let articleEl = domEl.getElementsByTagName('article')[0];
    category = articleEl.className;
    articleLink = titleEl.dataset.link;
    title = titleEl.innerHTML;
    if (category !== 'logophile') {
      let contentEl = domEl.getElementsByClassName('content')[0];
      content = contentEl.innerHTML;
    } else {
      header.remove();
      content = articleEl.innerHTML;
    }
  } else {
    console.log('weird homeArticle', header);
  }
  return {
    title,
    articleLink,
    category,
    content
  };
}
