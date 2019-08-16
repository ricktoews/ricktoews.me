import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Phi from './arithmo/Phi';
import FibonacciRatios from './arithmo/FibonacciRatios';
import Decimal from './arithmo/Decimal';
import Pythag from './arithmo/Pythag';
import Arithmo from './arithmo/Arithmo';
import Logophilia from './Logophilia';
import Bookshelf from './Bookshelf';
import Travel from './Travel';
import Professional from './Professional';
import Article from './Article';
import Autodidact from './Autodidact';
import Masthead from './Masthead';

const styles = theme => ({
  root: {
    paddingBottom: theme.spacing.unit * 2,
    minHeight: '100vh',
    width: 'calc(60% - 40px)',
    borderRadius: '3px',
    background: 'rgba(255,255,255)',
    margin: 'auto',
  },
});

class Main extends Component {
  constructor(props) {
    super(props);
    this.content = props.content;
    this.posts = this.organizeContent();
  }

  organizeContent() {
    var posts = {};
    this.content.forEach(post => {
        var topic = post.topic;
        if (!posts[topic]) posts[topic] = [];
        posts[topic].push(post);
    });
    return posts;
  }

  render() {
    const { classes } = this.props;
	const callback = (id) => { console.log('Main callback function', id); this.setState({ id: id }); };

	const id = this.state && this.state.id ? this.state.id : 'home';

    return (
      <div id="router">
        <MediaQuery query="(max-width:4096px) and (min-width:481px)">
          <Masthead id={id}/>
          <div className={classes.root}>
            <Switch>
              <Route exact path='/' render={(props) => <Home callback={callback} content={this.content}/>}/>
              <Route path='/arithmo/phi' render={(props) => <Phi callback={callback}/>}/>
              <Route path='/arithmo/decimal' render={(props) => <Decimal callback={callback}/>}/>
              <Route path='/arithmo/pythagorean' render={(props) => <Pythag callback={callback}/>}/>
              <Route path='/arithmo/fibratios' render={(props) => <FibonacciRatios callback={callback}/>}/>
              <Route path='/arithmo' render={(props) => <Arithmo callback={callback}/>} content={this.posts.arithmophile}/>
              <Route path='/logophilia' render={(props) => <Logophilia callback={callback} content={this.posts.logophile}/>}/>
              <Route path='/books' render={(props) => <Bookshelf callback={callback} content={this.posts.bookshelf}/>}/>
              <Route path='/travel' render={(props) => <Travel callback={callback} content={this.posts.travel}/>}/>
              <Route path='/professional' render={(props) => <Professional callback={callback} content={this.posts.professional}/>}/>
              <Route path='/learning' render={(props) => <Autodidact callback={callback} content={this.posts.autodidact}/>}/>
              <Route path='/article' render={(props) => <Article callback={callback} content={this.posts}/>}/>
            </Switch>
          </div>
        </MediaQuery>

        <MediaQuery query="(max-width:480px)">
          { id !== 'home' ? <Masthead id={id}/> : <span /> }
          <Switch>
            <Route exact path='/' render={(props) => <Home callback={callback} content={this.content}/>}/>
            <Route path='/arithmo/phi' render={(props) => <Phi callback={callback} content={this.content}/>}/>
            <Route path='/arithmo/decimal' render={(props) => <Decimal callback={callback} content={this.content}/>}/>
            <Route path='/arithmo/pythagorean' render={(props) => <Pythag callback={callback} content={this.content}/>}/>
            <Route path='/arithmo/fibratios' render={(props) => <FibonacciRatios callback={callback} content={this.content}/>}/>
            <Route exact path='/arithmo' render={(props) => <Arithmo callback={callback} content={this.content}/>}/>
            <Route path='/logophilia' render={(props) => <Logophilia callback={callback} content={this.content}/>}/>
            <Route path='/books' render={(props) => <Bookshelf callback={callback} content={this.content}/>}/>
            <Route path='/travel' render={(props) => <Travel callback={callback} content={this.content}/>}/>
            <Route path='/professional' render={(props) => <Professional callback={callback} content={this.content}/>}/>
            <Route path='/learning' render={(props) => <Autodidact callback={callback} content={this.content}/>}/>
          </Switch>
        </MediaQuery>
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);

