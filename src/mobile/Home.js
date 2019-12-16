import React, { Component } from 'react';
import MobileNav from './MobileNav';
import HomeContent from './HomeContent';
import './Home.css';

class Masthead extends Component {
  render() {
    return (
      <div style={{ marginBottom: "5px", borderBottom: "1px solid #999", background: "#ccc", paddingTop: "5px", paddingLeft: "60px", fontSize: "2.25em", color: "#fff", clear: "both", height: "50px" }}>
      ricktoews.me
      </div>
    );
  }
}

class Home extends Component {
  constructor(props) {
    super(props);
	this.state = { content: props.content };
  }


  render() {
    let content = this.state.content || [];

    return (
      <div>
        <MobileNav />
        <Masthead />

        <HomeContent content={content}/>
      </div>
    );
  }
}

export default Home;
