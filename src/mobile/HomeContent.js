import React from 'react';
import { useSelector } from 'react-redux';
import HomePost from './HomePost';
//import './css/HomeContent.css';
//import './css/Header.css';
//import './css/Logophile.css';
//import './css/Professional.css';


function HomeContent(props) {
  const content = useSelector(state => state.homeArticles);

  return (
    <div className="home-container">
      { content.map((post, key) => <HomePost key={key} post={post}/>)}
    </div>
  );
}

export default HomeContent;
