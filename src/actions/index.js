export const homeArticles = (content = []) => {
        console.log('homeArticles content', content);
  return {
    type: 'HOME_ARTICLES',
    payload: content
  };
};

