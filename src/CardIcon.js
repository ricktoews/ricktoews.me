import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { cards } from './cards';

function CardIcon(props) {
	const defaultPath = 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z';
	const { id } = props;
	var path = cards[id] ? cards[id].iconPath : defaultPath;
	if (typeof path === 'string') path = [path];

	return (
		<SvgIcon {...props} style={{ marginRight: "10px" }}>
		  { path.map((d, key) => (<path key={key} d={d}/>)) }
		</SvgIcon>
	)
}

export default CardIcon;
