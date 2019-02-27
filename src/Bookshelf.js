import React, { Component } from 'react';
import Book, { fetchBooks } from './Book.js';

class Bookshelf extends Component {

	constructor(props) {
		super(props);
		this.state = {
			books: []
		};
        this.clearExpanded = this.clearExpanded.bind(this);
	}

	componentDidMount() {
        console.log('Bookshelf component did mount.', this.props);
        this.props.callback('bookshelf');
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
			  { this.state.books.map((item, ndx) => {
			  	return <Book key={ndx} bookData={item} clearExpanded={this.clearExpanded} />
			  }) }
            </div>
		);
	}
}

export default Bookshelf;

