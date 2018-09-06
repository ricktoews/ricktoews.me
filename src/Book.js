import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import './bookshelf.css';

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
		return (
			<div className="book-item">
			  <div className="book-image"><img src={bookData.image} alt={bookData.title} /></div>
              <MediaQuery query="(max-width: 4096px) and (min-width:481px)">
			  <div className="book-info">
			    <div className="book-title">{bookData.title}</div>
			    <div className="book-author">{authors}</div>
			    <div className="book-description">{description}</div>
			  </div>
              </MediaQuery>

              <MediaQuery query="(max-width: 480px)">
			    <div className="book-title">{bookData.title}</div>
			    <div className="book-author">{authors}</div>
			    <div className="book-description" dangerouslySetInnerHTML={{__html: description}} />
              </MediaQuery>
			  <br style={{clear:"both"}}/>
			</div>
		);
	}
}

export default Book;
