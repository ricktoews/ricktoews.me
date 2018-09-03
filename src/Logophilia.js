import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import wordlist from './wordlist';
import { MastheadWrapped } from './cards.js';

const styles = {
	root: {
	}
};

function createWordList(data) {
	return (
		<table>
          <thead><tr><td>Word</td><td>Definition</td></tr></thead>
          <tbody>
			{ 
				data.map(item => {
					return <tr key={item.word}><td>{item.word}</td><td>{item.definition}</td></tr>
				})
			}
          </tbody>
        </table>
	);
}

class Logophilia extends Component {

	constructor(props) {
		super(props);
		this.state = {
			wordlist: createWordList(wordlist.data)
		};
	}

	render() {
		return (
            <div>
			<MastheadWrapped id="quote" />
            {this.state.wordlist}
            </div>
		);
	}
}

export default withStyles(styles)(Logophilia);
