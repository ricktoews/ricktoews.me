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


function formatContent(content) {
  var p = content.split("\n");
  return p;
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
    var title = post.topic;
    var paragraphs = post.content || '';
	var p = formatContent(paragraphs);
	var topic = post.topic;
	var primaryColor = cards[topic].primaryColor;
	var topicTheme = homeCardTheme({ primaryColor });
	var primary = topicTheme.palette.primary;

    return (
	  <div>
        <div style={{ padding: "5px", color: primary.contrastText, backgroundColor: primary.light }}>
          <div style={{ float: "left" }}>{ title }</div>
          <div style={{ float: "right", fontSize: ".75rem"}}>{ date }</div>
          <div style={{ clear: "both"}}></div>
        </div>
        { p.map((para, n) => <Typography key={n} variant="body1" gutterBottom>{para}</Typography>) }
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
