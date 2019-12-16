import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { detectPost } from './helpers/content-helpers.js';
import './App.css';

const styles = {
	root: {
	}
};

class Article extends Component {
    constructor(props) {
        super(props);
        this.props = props;
console.log('Article props', props);
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
        this.props.callback('professional');
        let homeLinkEl = document.querySelector('.home-article-link');
        homeLinkEl.addEventListener('click', this.handleClick);
	}

	render() {
        var post = { __html: this.post.fullArticle };
		var defaultPost = (
            <div className="article-wrapper">
            </div>
		);

        if (this.post) {
            return <div className="article-wrapper" dangerouslySetInnerHTML={post}></div>
        } else {
            return defaultPost;
        }
	}
}

export default withRouter(withStyles(styles)(Article));

