import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import './bookshelf.css';

const styles = {
	root: {
	}
};

function fetchBooks() {
		var url = 'https://rest.toewsweb.net/index.php/bookshelf/favorites';
		return fetch(url)
			.then(res => {
				return res.json();
			})
			.then(res => {
				return res.data;
			})
	}
export { fetchBooks };


class Book extends Component {
	render() {
		const { bookData } = this.props;
		var description = bookData.description;
		var authors = bookData.authors.join(', ');
		console.log('Book description', description);
		return (
			<div className="book-item">
			  <div className="book-image"><img src={bookData.image}/></div>
			  <div className="book-info">
			    <div className="book-title">{bookData.title}</div>
			    <div className="book-author">{authors}</div>
			    <div className="book-description">{description}</div>
			  </div>
			  <br style={{clear:"both"}}/>
			</div>
		);
	}
}

export default Book;
