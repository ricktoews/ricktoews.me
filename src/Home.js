import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import './Home.css';
import HomeContent from './desktop/HomeContent';
import MobileHome from './mobile/Home.js';

class Home extends Component {
    constructor(props) {
        super(props);
        this.content = props.content;
    }

    componentDidMount() {
        this.props.callback('home');
	}

	render() {
		return (
            <div>

            <MediaQuery query="(min-width:481px) and (max-width:4096px)">
              <HomeContent content={this.content}/>
            </MediaQuery>

            <MediaQuery query="(max-width: 480px)">
              <MobileHome content={this.content}/>
            </MediaQuery>

            </div>
		)
	}
}

export default Home;
