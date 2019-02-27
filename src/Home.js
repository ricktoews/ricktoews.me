import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import indigo from '@material-ui/core/colors/indigo';
import './Home.css';
import HomeContent from './HomeContent';
import MobileHome from './mobile/Home.js';

const theme = createMuiTheme({
	palette: {
		primary: indigo,
		secondary: green
	},
});


class Home extends Component {

	render() {
		return (
            <MuiThemeProvider theme={theme}>

            <MediaQuery query="(min-width:481px) and (max-width:4096px)">
              <div style={{ width: "666px", margin: "auto", paddingTop: "20px" }}>
                <HomeContent />
              </div>
            </MediaQuery>

            <MediaQuery query="(max-width: 480px)">
              <MobileHome />
            </MediaQuery>

            </MuiThemeProvider>
		)
	}
}

export default Home;
