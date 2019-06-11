import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import SideCalendar from './SideCalendar';
import './css/HomeContent.css';
import './css/Header.css';
import './css/Logophile.css';
import './css/Professional.css';


class Post extends Component {
  constructor(props) {
    super(props);
	this.props = props;
  }

  makePostDateObj(date) {
    // Cool! This is allowed.
    var [yr, mo, dt] = date.split('-');
    var dateObj = new Date(yr, mo, 0);
    var daysInMonth = dateObj.getDate();
    var dateObjB = new Date(yr, mo-1, dt);
    var dow = dateObjB.getDay() + 36; // 1 + multiple of 7 that will exceed any calendar date
    var blanks = (dow - dt) % 7;
    return {
      year: yr,
      month: mo,
      date: parseInt(dt, 10),
      days: daysInMonth,
      blanks: blanks
    };
  }

  render() {
    var postDateObj = this.makePostDateObj(this.props.post.date);
    var post = this.props.post;
    var html = { __html: post.homeArticle };

    return <div className="post">
             <MediaQuery query="(max-width:4096px) and (min-width:481px)">
               <div className="post-side"><SideCalendar postDate={postDateObj}></SideCalendar></div>
             </MediaQuery>
             <div className="post-content">
               <div dangerouslySetInnerHTML={html}></div>
             </div>
           </div>
  }
}


class HomeContent extends Component {
  constructor(props) {
    super(props);
	this.state = { content: props.content };
  }

  componentDidMount() {
/*
    var els = Array.from(document.getElementsByClassName('post-content'));
	els.forEach(el => {
	  if (el.offsetHeight > 350) {
	    el.style.height = '350px';
		el.style.overflowY = 'hidden';
		console.log('long post; need to link', el);
	  } else {
		console.log('short post; need to hide link', el);
	    el.getElementsByClassName('post-article-link')[0].style.display = 'none';
	  }
	});
*/
  }

  render() {
    let content = this.state.content || [];
    return (
      <div className="home-container">
		{ content.map((post, key) => <Post key={key} post={post}/>)}
      </div>
    );
  }
}

export default HomeContent;
