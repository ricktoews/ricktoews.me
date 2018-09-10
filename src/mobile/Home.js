import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import MobileNav from './MobileNav';
import HomeContent from '../HomeContent';
import './Home.css';

class Masthead extends Component {
  render() {
    return (
      <div style={{ marginBottom: "5px", borderBottom: "1px solid #999", background: "#ccc", paddingTop: "5px", paddingLeft: "10px", fontSize: "2.25em", color: "#fff", clear: "both", height: "50px" }}>
      ricktoews.me
      </div>
    );
  }
}

class Home extends Component {

  render() {
    return (
      <div>
        <MobileNav />
        <Masthead />

        <HomeContent />
      </div>
    );
  }
}

export default Home;
