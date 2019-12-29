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

  const postHeader = {
    padding: '10px',
    backgroundColor: '#e8e8e8',
    borderBottom: '1px solid #666'
  }

  const contentWrapper = {
    padding: '10px'
  }

  return (
    <div style={postStyle} className="post">
     <div className="post-content">
       <article className={category}>
         <header style={postHeader} onClick={handleClick}>
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
