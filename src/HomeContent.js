import React, { Component } from 'react';
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
    var html = { __html: post.content };

    return <div className="post">
             <div className="post-side"><SideCalendar postDate={postDateObj}></SideCalendar></div>
             <div className="post-content">
               <div dangerouslySetInnerHTML={html}></div>
               <div className="post-article-link"><Link to={post.path}>Link to Article</Link></div>
             </div>
           </div>
  }
}


class HomeContent extends Component {
  constructor(props) {
    super(props);
	this.state = { content: props.content };
console.log('HomeContent content', props.content);
  }

  render() {
    
    return (
      <div className="home-container">
		{ this.state.content.map((post, key) => <Post key={key} post={post}/>)}
      </div>
    );
  }
}

export default HomeContent;
