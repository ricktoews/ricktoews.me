import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import HomeContentItem from './HomeContentItem';
import HomeCard from './HomeCard';

const homeContent = {};
const topics = ['reading', 'learning', 'travel'];
topics.forEach(t => {
  let item = require('./home-content/' + t + '.json');
  homeContent[t] = item;
});

console.log('homeContent', homeContent);

class Topic extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    let item = this.props.id;
    let date = homeContent[item].date || 'Today';
    let title = homeContent[item].title;
    let paragraphs = homeContent[item].blurb;

    return <div>
      <div>
        <div style={{"float": "left", "fontWeight": "bold"}}>{ title }</div>
        <div style={{"float": "right", "fontSize": ".75rem"}}>{ date }</div>
        <div style={{"borderTop": "1px dotted gray","clear": "both"}}></div>
      </div>

      <div>
      { paragraphs.map((p, key) => <p key={key}>{p}</p>) }
      </div>
    </div>
  }
}


class HomeContent extends Component {
  render() {

    return (
      <div>
        { topics.map((item, key) => <Topic id={item}></Topic>) }
      </div>
    );
  }
}

export default HomeContent;
