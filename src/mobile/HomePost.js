import React from 'react';
import MediaQuery from 'react-responsive';
import { withRouter } from 'react-router-dom';
import { makePostDateObj, extractContent } from '../post-helpers';
import { cards, homeCardTheme } from '../cards';

function HomePost(props) {

  var postDateObj = makePostDateObj(props.post);
  var { category, articleLink, title, content } = extractContent(props.post);
  var primaryColor = cards[category] && cards[category].primaryColor || '#000';
  var theme = homeCardTheme({ primaryColor });
  var color = theme.palette.primary;
  var contentHtml = { __html: content };

  function handleClick(e) {
    let link = e.target.dataset.link;
    props.history.push(link);
  }

  const postStyle = {
    margin: '10px',
    border: '1px solid gray',
    borderRadius: '5px'
  }

  const contentWrapper = {
    padding: '10px'
  }

  const headerStyle = {
    backgroundColor: color.light,
    color: color.contrastText,
  }

  return (
    <div style={postStyle} className="post">
     <div className="post-content">
       <article className={category}>
         <header style={headerStyle} onClick={handleClick}>
           <div className="category-tag"><span>{category}</span></div>
           <div className="title" data-link={articleLink}>{title}</div>
           <div className="date"></div>
         </header>
         <div style={contentWrapper} className="content-wrapper" dangerouslySetInnerHTML={contentHtml}></div>
       </article>
     </div>
   </div>
  );
}

export default withRouter(HomePost);
