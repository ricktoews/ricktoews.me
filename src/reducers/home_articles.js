function homeArticleReducer(state = [], action) {
  if (action.type === 'HOME_ARTICLES') {
    state = action.payload;
  }
  return state;
}

export default homeArticleReducer;
