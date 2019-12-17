import React from 'react';
import { useSelector } from 'react-redux';
import HomePost from './HomePost';

function HomeContent(props) {
  const content = useSelector(state => state.homeArticles);

  return (
    <div className="home-container">
      { content.map((post, key) => <HomePost key={key} post={post}/>)}
    </div>
  );
}

export default HomeContent;
