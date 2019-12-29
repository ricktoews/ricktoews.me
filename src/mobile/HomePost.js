import React from 'react';
import MediaQuery from 'react-responsive';
import { withRouter } from 'react-router-dom';
import { makePostDateObj, extractContent } from '../post-helpers';

function HomePost(props) {

  var postDateObj = makePostDateObj(props.post);
  var { category, articleLink, title, content } = extractContent(props.post);
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

  return (
    <div style={postStyle} className="post">
     <div className="post-content">
       <article className={category}>
         <header onClick={handleClick}>
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
