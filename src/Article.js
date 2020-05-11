import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { detectPost } from './helpers/content-helpers.js';
import Masthead from './Masthead';
import './App.css';

const styles = {
	root: {
	}
};

class Article extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        var request = detectPost(props.location, props.content);
        this.post = { content: '' };
        if (request.length > 0) {
            this.post = request[0];
        } else {
            console.log('Article; unrecognized path');
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      console.log('Got here', this.props);
      this.props.history.push('/');
    }

    componentDidMount() {
        this.props.callback(this.post.category);
    }

    render() {
        var id = this.props.id || 'home';
console.log('Render Article, props', this.props);
        var post = { __html: this.post.fullArticle };
        var defaultPost = (
          <div className="article-wrapper">
          </div>
        );

        if (this.post) {
        return <div><Masthead id={id}/><div className="article-wrapper" dangerouslySetInnerHTML={post}></div></div>
        } else {
        return <div><Masthead id={id}/>{ defaultPost }</div>;
        }
    }
}

export default withRouter(withStyles(styles)(Article));

