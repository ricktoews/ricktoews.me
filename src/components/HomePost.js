import React from 'react';
import MediaQuery from 'react-responsive';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import SideCalendar from './SideCalendar';
import { makePostDateObj, extractContent } from '../helpers/post-helpers';
import { theme, createCategoryTheme } from '../theme';

const HomeItemTitle = styled.div`
	position: relative;
	font-size: 1.25em;
	font-weight: bold;
`;

function HomePost(props) {
	const { classes } = props;
	var postDateObj = makePostDateObj(props.post);
	var { category, articleLink, title, content } = extractContent(props.post);
	var primaryColor = theme.categories[category] && theme.categories[category].primaryColor || '#000';
	var categoryTheme = createCategoryTheme({ primaryColor });
	var color = categoryTheme.palette.primary;
	var contentHtml = { __html: content };

	function handleClick(e) {
		let link = e.target.dataset.link;
		props.history.push(link);
	}

	const postStyle = {
		display: 'flex',
	}

	const contentWrapper = {
		padding: '10px 0 10px 20px'
	}

	const headerStyle = {
		paddingLeft: '10px',
		backgroundColor: color.light,
		color: color.contrastText,
		display: 'flex',
		justifyContent: 'space-between',
	}

	return (
	<div>
		<header style={headerStyle} onClick={handleClick}>
			<HomeItemTitle data-link={articleLink}>{title}</HomeItemTitle>
		</header>
        <MediaQuery query="(max-width:4096px) and (min-width:481px)">
		<div style={postStyle}>
			<div><SideCalendar postDate={postDateObj}></SideCalendar></div>
			<div className="post-content">
				<article className={category}>
					<div style={contentWrapper} className="content-wrapper" dangerouslySetInnerHTML={contentHtml}></div>
				</article>
			</div>
		</div>
		</MediaQuery>

        <MediaQuery query="(max-width:480px)">
		<div style={postStyle}>
			<div className="post-content">
				<article className={category}>
					<div style={contentWrapper} className="content-wrapper" dangerouslySetInnerHTML={contentHtml}></div>
				</article>
			</div>
		</div>
		</MediaQuery>
	</div>
	);
}

export default withRouter(HomePost);
