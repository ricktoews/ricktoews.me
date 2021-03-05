import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors/red';
import { getAll } from './helpers/content-helpers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const mainTheme = createMuiTheme({
  typography: {
    useNextVariants: true
  },        
  palette: {
    primary: { main: '#0099ff' },
    secondary: { main: '#ff9900' }
  }
});

getAll().then(function(data) {
  ReactDOM.render(<ThemeProvider theme={mainTheme}><BrowserRouter><App content={data}/></BrowserRouter></ThemeProvider>, document.getElementById('root'));
});
registerServiceWorker();
