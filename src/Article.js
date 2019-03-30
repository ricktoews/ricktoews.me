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
        var request = detectPost(props.location, props.content);
        this.post = { content: '' };
        if (request.length > 0) {
            this.post = request[0];
        } else {
            console.log('Article; unrecognized path');
        }
    }

    componentDidMount() {
        console.log('Article component did mount.', this.props);
        this.props.callback('professional');
	}

	render() {
        var post = { __html: this.post.content };
		var defaultPost = (
            <div>
            </div>
		);

        if (this.post) {
            return <div dangerouslySetInnerHTML={post}></div>
        } else {
            return defaultPost;
        }
	}
}

export default withRouter(withStyles(styles)(Article));

