import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import HomeContentItem from './HomeContentItem';
import HomeCard from './HomeCard';
import { cards, homeCardTheme } from './cards';

const homeContent = {};
const topics = ['bookshelf', 'autodidact', 'travel'];
topics.forEach(t => {
  let item = require('./home-content/' + t + '.json');
  homeContent[t] = item;
});

console.log('homeContent', homeContent);

var monthName = ['January', 'February', 'March',
                 'April', 'May', 'June',
                 'July', 'August', 'September',
                 'October', 'November', 'December',
                ];
function formatDate(date) {
  var dt = new Date(date);
  var mo = monthName[dt.getMonth()];
  var da = dt.getDate();
  var yr = dt.getFullYear();
  var fmt = `${mo} ${da}, ${yr}`;
  return fmt;
}


class Topic extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    var item = this.props.id;
    var date = homeContent[item].date ? formatDate(homeContent[item].date) : 'Today';
    var title = homeContent[item].title;
    var paragraphs = homeContent[item].blurb;
    var primaryColor = cards[item].primaryColor;
    var cardTheme = homeCardTheme({ primaryColor });
console.log('cardTheme.palette', cardTheme.palette);
    var palette = cardTheme.palette.primary;
    var text = cardTheme.palette.text;

    return <div>
      <div style={{ padding: "5px", color: palette.contrastText, backgroundColor: palette.light }}>
        <div style={{"float": "left" }}>{ title }</div>
        <div style={{"float": "right", "fontSize": ".75rem"}}>{ date }</div>
        <div style={{"borderTop": "1px dotted gray","clear": "both"}}></div>
      </div>

      <div style={{ fontSize: ".9rem", lineHeight: 1.5, color: text.primary }}>
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
