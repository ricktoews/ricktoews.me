import React, { Component } from 'react';
import { cards, homeCardTheme } from './cards';

const homeContent = [];
const topics = ['bookshelf', 'autodidact', 'travel'];
topics.forEach(t => {
  let item = require('./home-content/' + t + '.json');
  console.log('content', item);
  if (item.items) {
    item.items.forEach(i => { i.topic = t; homeContent.push(i); });
  } else {
    item.topic = t;
    homeContent.push(item);
  }
});

homeContent.sort((a, b) => { 
  var dateA = new Date(a.date);
  var dateB = new Date(b.date);
  if (dateA < dateB) return 1;
  else return -1;
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
    var ndx = this.props.ndx;
    var date = homeContent[ndx].date ? formatDate(homeContent[ndx].date) : 'Today';
    var title = homeContent[ndx].title;
    var paragraphs = homeContent[ndx].blurb || [];
	console.log('Topic', ndx, homeContent[ndx]);
	var item = homeContent[ndx].topic;
    var primaryColor = cards[item].primaryColor;
    var cardTheme = homeCardTheme({ primaryColor });
    var palette = cardTheme.palette.primary;
    var text = cardTheme.palette.text;

    return <div>
      <div style={{ padding: "5px", color: palette.contrastText, backgroundColor: palette.light }}>
        <div style={{ float: "left" }}>{ title }</div>
        <div style={{ float: "right", fontSize: ".75rem"}}>{ date }</div>
        <div style={{ clear: "both"}}></div>
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
        {/* topics.map((item, key) => <Topic key={key} id={item}></Topic>) */}
		{ homeContent.map((item, key) => <Topic key={key} ndx={key}></Topic>) }
      </div>
    );
  }
}

export default HomeContent;
