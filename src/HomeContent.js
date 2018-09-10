import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import HomeContentItem from './HomeContentItem';
import HomeCard from './HomeCard';

const homeContent = {};
const blurbs = ['reading', 'learning', 'travel'];
blurbs.forEach(b => {
  let blurb = require('./home-content/' + b + '.json');
  homeContent[b] = blurb;
});

console.log('homeContent', homeContent);

class HomeContent extends Component {
  render() {

    return (
      <div>
        <HomeCard id="bookshelf">
          <p>What books I'm on, and any thoughts I might have so far.</p>
        </HomeCard>
        <HomeCard id="travel">
          <p>Where I'm going.</p>
        </HomeCard>
      </div>
    );
  }
}

export default HomeContent;
