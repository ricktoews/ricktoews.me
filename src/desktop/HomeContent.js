import React, { useContext } from 'react';
import { Context } from '../Store';
import HomePost from './HomePost';

function HomeContent({ content }) {
  const [ state, dispatch ] = useContext(Context);

  var filter = state.filter || '';
  return (
    <div className="home-container">
      { content.filter(item => !filter || item.category === filter).map((post, key) => <HomePost key={key} post={post}/>)}
    </div>
  );
}

export default HomeContent;
