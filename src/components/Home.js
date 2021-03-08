import React from 'react';
import HomePost from './HomePost';

const Home = props => {
	const { content, categoryFilter } = props;

	return (
	<div className="container">
		{	content.filter(post => !categoryFilter || post.category === categoryFilter).map((item, key) => {
				return <HomePost key={key} post={item} />;
			})
		}
	</div>
	);
	
};

export default Home;
