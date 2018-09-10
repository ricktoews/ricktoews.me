import React, { Component } from 'react';
import Book, { fetchBooks } from './Book.js';
import Masthead from './Masthead';

class Bookshelf extends Component {

	constructor(props) {
		super(props);
		this.state = {
			books: []
		};
        this.clearExpanded = this.clearExpanded.bind(this);
	}

	componentDidMount() {
		fetchBooks().then(books => {
			this.setState({ books });
		});
	}

    clearExpanded() {
        let books = [];
        this.state.books.forEach(b => {
            b.expanded = false;
            books.push(b);
        });
        this.setState({ books });
    }

	render() {
		return (
            <div>
			  <Masthead id="bookshelf"/>
			  { this.state.books.map((item, ndx) => {
			  	return <Book key={ndx} bookData={item} clearExpanded={this.clearExpanded} />
			  }) }
            </div>
		);
	}
}

export default Bookshelf;

