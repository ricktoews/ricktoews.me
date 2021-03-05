import React, { Component } from 'react';
import MobileNav from './MobileNav';
import HomeContent from './HomeContent';
import Filter from '../Filter';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
	this.state = { content: props.content };
  }


  render() {
    let content = this.state.content || [];

    return (
      <div>
        <HomeContent content={content}/>
      </div>
    );
  }
}

export default Home;
