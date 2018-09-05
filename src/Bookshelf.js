import React, { Component } from 'react';
import Book, { fetchBooks } from './Book.js';
import Masthead from './Masthead';



class Bookshelf extends Component {

	constructor(props) {
		super(props);
		this.state = {
			books: []
		};
	}

	componentDidMount() {
		fetchBooks().then(books => {
			this.setState({ books });
		});
	}

	render() {
		return (
            <div>
			  <Masthead id="bookshelf"/>
			  { this.state.books.map((item, ndx) => {
			  	return <Book key={ndx} bookData={item} />
			  }) }
            </div>
		);
	}
}

export default Bookshelf;

