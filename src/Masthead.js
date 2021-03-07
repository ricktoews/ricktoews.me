import React, { useRef, useState } from 'react';
import { useOnClickOutside } from './hooks';
import { Burger, Menu } from './components/nav';
import styled from 'styled-components';
import selfie from './ricktoews.me.jpg';
import SVGFunnel from './funnel.svg';
import SVGFunnelFill from './funnel-fill.svg';
import { theme } from './theme';

const TopBand = styled.div`
	position: absolute;
	top: 0;
	width: 100%;
	height: 6px;
	background-color: #666;
`;

const SiteHeader = styled.header`
	position: fixed;
	z-index: 100;
	top: 0;
	left: 0;
	width: 100vw;
	height: 80px;
	background: white;

`;

const SiteHeaderBackground = styled.header`
	position: relative;
	top: 0;
	left: 0;
	width: 100vw;
	height: 50px;

	background: ${({ theme }) => theme.mastheadBg};
`;

const SiteHeaderOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;

	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100%;

	color: ${({ theme }) => theme.mastheadColor};
	font-size: 20px;
`;

const Funnel = styled.div`
	display: inline-block;
`;

const Filter = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	font-size: 10px;

	ul {
		padding: 0;
	}

	li {
		display: inline;
		list-style-type: none;
		margin: 0;
		padding: 10px;
		cursor: pointer;
	}

	li: hover {
		color: black;
	}
`;

const Selfie = styled.div`
	width: 46px;
	height: 46px;
	margin-right: 10px;

	img {
		width: 100%;
		border-radius: 50%;
		border: 1px solid white;
	}
`;


const CategoryFilter = props => {
	const exclude = ['home', 'perambulations', 'bookshelf', 'autodidact', 'quote', 'travel'];

	return (
				<Filter>
					<ul>
						<li onClick={() => { props.setCategoryFilter('') } }>Clear</li>
						<li><Funnel><img src={SVGFunnel} /></Funnel></li>
						{ Object.keys(theme.categories).filter(cat => exclude.indexOf(cat) === -1).map((category, key) => (
							<li key={key} onClick={() => { props.setCategoryFilter(category) } }>{category}</li>
						))}
					</ul>
				</Filter>
	);
}

function Masthead(props) {
	const { title, setCategoryFilter, children } = props;
	const [open, setOpen] = useState(false);

	const node = useRef(); 
	useOnClickOutside(node, () => setOpen(false));

	return (
		<SiteHeader>
			{/* Colored background for site header. */}
			<SiteHeaderBackground>
				<TopBand />

				{/* Site header content: Menu button, Title, Photo */}
				<SiteHeaderOverlay>
					<div ref={node}>
						<Burger open={open} setOpen={setOpen}/>
						<Menu open={open} setOpen={setOpen}/>
					</div>
					{children}
					<div className="title">{title}</div>
					<Selfie><img src={selfie} /></Selfie>
				</SiteHeaderOverlay>

			</SiteHeaderBackground>

			{/* Category filter for home page items */}
			<CategoryFilter setCategoryFilter={setCategoryFilter} />
		</SiteHeader>
	);
}

export default Masthead;
