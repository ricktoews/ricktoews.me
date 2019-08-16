import React from 'react';
import MediaQuery from 'react-responsive';
import { withRouter } from 'react-router-dom';
import SideCalendar from './SideCalendar';
import { makePostDateObj, extractContent } from './post-helpers';

function HomePost(props) {

  var postDateObj = makePostDateObj(props.post.date);
  var { category, articleLink, title, content } = extractContent(props.post);
  var contentHtml = { __html: content };

  function handleClick(e) {
    let link = e.target.dataset.link;
    props.history.push(link);
  }

  return (
    <div className="post">
     <MediaQuery query="(max-width:4096px) and (min-width:481px)">
       <div className="post-side"><SideCalendar postDate={postDateObj}></SideCalendar></div>
     </MediaQuery>
     <div className="post-content">
       <article className={category}>
         <header onClick={handleClick}>
           <div className="title" data-link={articleLink}>{title}</div>
           <div className="date"></div>
         </header>
         <div className="content" dangerouslySetInnerHTML={contentHtml}></div>
       </article>
     </div>
   </div>
  );
}

export default withRouter(HomePost);
