import homeArticlesReducer from './home_articles';
import { combineReducers } from 'redux';

export default combineReducers({
  homeArticles: homeArticlesReducer
});
