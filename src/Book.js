import React, { Component } from 'react';
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

function upArrow() {
  return (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M7 14l5-5 5 5z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>
  );
}

function dnArrow() {
  return (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M7 10l5 5 5-5z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>
  );
}

class Book extends Component {
	constructor(props) {
		super(props);
		this.toggleExpand = this.toggleExpand.bind(this);
	}

	toggleExpand() {
		const { props } = this;
        props.clearExpanded();
        props.bookData.expanded = true;
	}

	render() {
		const { bookData } = this.props;
		var review = bookData.review;
		var authors = bookData.authors.join(', ');
		return (
			<div className="book-item">
			  <div className="book-image"><img src={bookData.image} alt={bookData.title} /></div>
			  <div className={bookData.expanded ? 'book-info-expanded' : 'book-info'}>
			    <div className="book-title">{bookData.title}</div>
			    <div className="book-author">{authors}</div>
			    <div className="book-review" dangerouslySetInnerHTML={{ __html: review }}></div>
			  </div>
              <div className="expansion-toggle" onClick={this.toggleExpand}>
                { bookData.expanded ? upArrow() : dnArrow() }
              </div>
			  <br style={{clear:"both"}}/>
			</div>
		);
	}
}

export default Book;
