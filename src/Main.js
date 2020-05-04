import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './Home';
import Article from './Article';
import MakePost from './manage-posts/MakePost';
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
    const callback = (id) => { this.setState({ id: id }); };
    const id = this.state && this.state.id ? this.state.id : 'home';
    return (
      <div id="router">
        <MediaQuery query="(max-width:4096px) and (min-width:481px)">
          <Masthead id={id}/>
          <div className={classes.root}>
            <Switch>
              <Route exact path='/' render={(props) => <Home callback={callback} content={this.content}/>}/>
              <Route path='/article' render={(props) => <Article callback={callback} content={this.posts}/>}/>
              <Route path='/makepost' render={(props) => <MakePost />} />
            </Switch>
          </div>
        </MediaQuery>

        <MediaQuery query="(max-width:480px)">
          { id !== 'home' ? <Masthead id={id}/> : <span /> }
          <Switch>
            <Route exact path='/' render={(props) => <Home callback={callback} content={this.content}/>}/>
            <Route path='/article' render={(props) => <Article callback={callback} content={this.posts}/>}/>
            <Route path='/makepost' component={MakePost}/>
          </Switch>
        </MediaQuery>
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Main));

