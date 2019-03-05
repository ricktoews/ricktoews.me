import React, { Component } from 'react';
import { cards, homeCardTheme } from './cards';


var monthName = ['January', 'February', 'March',
                 'April', 'May', 'June',
                 'July', 'August', 'September',
                 'October', 'November', 'December',
                ];
function formatDate(date) {
  var parts = date.split('-');
  var dt = new Date(parts[0], parts[1] - 1, parts[2]);
  var mo = monthName[dt.getMonth()];
  var da = dt.getDate();
  var yr = dt.getFullYear();
  var fmt = `${mo} ${da}, ${yr}`;
  return fmt;
}


var re = {
  title: /^_title_ (.*)/,
  image: /^_img_ (.*)/,
  imageFloat: /^_img-float_ (.*)/,
  oed: /^_oed_ (.*)/,
  etym: /^_etym_ (.*)/,
  def: /^_def_ (.*)/,
  ex: /^_ex_ (.*)/,
};

function formatContent(content) {
  var lines = content.split("\n\n");
  var item = {};
  var contentRows = [];
  lines.forEach(l => {
    var hasTitle = l.match(re.title);
    var hasImage = l.match(re.image);
    var hasImageFloat = l.match(re.imageFloat);
    var hasOED = l.match(re.oed);
    var hasEtym = l.match(re.etym);
    var hasDef = l.match(re.def);
    var hasEx = l.match(re.ex);
    if (hasTitle) {
      item.title = hasTitle[1];
    } else if (hasImage) {
      item.image = { __html: hasImage[1] };
    } else if (hasImageFloat) {
      item.imageFloat = hasImageFloat[1];
    } else if (hasOED) {
      item.oed = { __html: hasOED[1] };
    } else if (hasEtym) {
      item.etym = { __html: hasEtym[1] };
    } else if (hasDef) {
      item.def = hasDef[1];
    } else if (hasEx) {
	  if (!item.ex) item.ex = [];
      item.ex.push(hasEx[1]);
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


class OEDEntry extends Component {
  constructor(props) {
    super(props);
	this.props = props;
  }

  render() {
    console.log('OEDEntry', this.props.item);
	var item = this.props.item;
    return <div className="general-content" style={{fontFamily: "georgia", padding:"0 10px"}}>
	         <p style={{fontWeight: "bold", color:"#880000"}} dangerouslySetInnerHTML={item.oed}></p>
	         <p style={{lineHeight: 1, fontSize: ".75rem"}} dangerouslySetInnerHTML={item.etym}></p>
	         <p>{item.def}</p>
	         <div style={{marginLeft: "20px", lineHeight: 1, fontSize: ".75rem", fontStyle: "italic"}}>{item.ex.map((ex, key) => <p key={key}>{ex}</p>)}</div>
	       </div>
  }
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
    var card = cards[topic];
	var primaryColor = cards[topic].primaryColor;
	var topicTheme = homeCardTheme({ primaryColor });
	var primary = topicTheme.palette.primary;
    var photoClass = item.imageFloat ? 'photo-' + item.imageFloat : 'photo-left';
    var topicClass = topic === 'logophile' ? 'logophile-style' : '';

    return (
	  <div className={topicClass}>
        <div className="home-topic-banner" style={{ backgroundColor: primary.dark }}>
          <div className="home-topic-title">{ card.title } - { item.title }</div>
          <div className="home-topic-date">{ date }</div>
          <div style={{ clear: "both"}}></div>
        </div>
		{ item.oed ? 
			(<OEDEntry item={item} />) : 
        	(<div>{ item.image ? (
	        <div className={photoClass} dangerouslySetInnerHTML={ item.image } />
			) : <span /> }
			<div className="home-topic-text">
			{ item.text.map((para, n) => <p key={n}>{para}</p>) }
			</div></div>)
		}
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
