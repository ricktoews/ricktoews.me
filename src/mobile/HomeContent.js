import React from 'react';
import HomePost from './HomePost';
//import './css/HomeContent.css';
//import './css/Header.css';
//import './css/Logophile.css';
//import './css/Professional.css';


function HomeContent({ content }) {
  return (
    <div className="home-container">
      { content.map((post, key) => <HomePost key={key} post={post}/>)}
    </div>
  );
}

export default HomeContent;
