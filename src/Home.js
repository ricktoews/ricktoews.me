import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import './Home.css';
import HomeContent from './HomeContent';
import MobileHome from './mobile/Home.js';

class Home extends Component {
    componentDidMount() {
        console.log('Home component did mount.', this.props);
        this.props.callback('home');
	}

	render() {
		return (
            <div>

            <MediaQuery query="(min-width:481px) and (max-width:4096px)">
              <HomeContent />
            </MediaQuery>

            <MediaQuery query="(max-width: 480px)">
              <MobileHome />
            </MediaQuery>

            </div>
		)
	}
}

export default Home;
