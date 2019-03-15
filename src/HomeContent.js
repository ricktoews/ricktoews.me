import React, { Component } from 'react';
import './css/HomeContent.css';
import './css/Header.css';
import './css/Logophile.css';


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
    var html = { __html: post.content };

    return <div dangerouslySetInnerHTML={html}></div>
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
