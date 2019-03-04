import React, { Component } from 'react';
import { cards, homeCardTheme } from './cards';
import Typography from '@material-ui/core/Typography';


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


var re = {
  title: /^_title_ (.*)/,
  image: /^_img_ (.*)/,
  imageFloat: /^_img-float_ (.*)/
};

function formatContent(content) {
  var lines = content.split("\n\n");
  var item = {};
  var contentRows = [];
  lines.forEach(l => {
    var hasTitle = l.match(re.title);
    var hasImage = l.match(re.image);
    var hasImageFloat = l.match(re.imageFloat);
    if (hasTitle) {
      item.title = hasTitle[1];
    } else if (hasImage) {
      item.image = { __html: hasImage[1] };
    } else if (hasImageFloat) {
      item.imageFloat = hasImageFloat[1];
    } else {
      contentRows.push(l);
    }
  });
  item.text = contentRows;
  return item;
}


function fetchContent() {
  var url = 'https://rest.toewsweb.net/index.php/content';
  return fetch(url)
    .then(res => {
      return res.json();
    })
    .then(res => {
      return res.data;
    })
}


class Post extends Component {
  constructor(props) {
    super(props);
	this.props = props;
  }

  render() {
    var post = this.props.post;
    var date = post.date ? formatDate(post.date) : 'Today';
    var paragraphs = post.content || '';
	var item = formatContent(paragraphs);
	var topic = post.topic;
	var primaryColor = cards[topic].primaryColor;
	var topicTheme = homeCardTheme({ primaryColor });
	var primary = topicTheme.palette.primary;
    var photoClass = item.imageFloat ? 'photo-' + item.imageFloat : 'photo-left';
    var topicClass = topic === 'logophile' ? 'logophile-style' : '';

    return (
	  <div className={topicClass}>
        <div className="home-topic-banner" style={{ color: primary.contrastText, backgroundColor: primary.dark }}>
          <div className="home-topic-title">{ item.title }</div>
          <div className="home-topic-date">{ date }</div>
          <div style={{ clear: "both"}}></div>
        </div>
        { item.image ? (
        <div className={photoClass} dangerouslySetInnerHTML={ item.image } />
        ) : <span /> }
        <div className="home-topic-text">
        { item.text.map((para, n) => <p>{para}</p>) }
        </div>
        <br clear="both"/>
	  </div>
	);
  }
}


class HomeContent extends Component {
  constructor(props) {
    super(props);
	this.state = { content: [] };
	fetchContent().then(data => {
	  this.setState({ content: data });
	});
  }

  render() {
    
    return (
      <div>
		{/* homeContent.map((item, key) => <Topic key={key} ndx={key}></Topic>) */}
		{ this.state.content.map((post, key) => <Post key={key} post={post}/>)}
      </div>
    );
  }
}

export default HomeContent;
