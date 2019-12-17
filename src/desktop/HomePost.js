import React from 'react';
import MediaQuery from 'react-responsive';
import { withRouter } from 'react-router-dom';
import SideCalendar from './SideCalendar';
import { makePostDateObj, extractContent } from '../post-helpers';

function HomePost(props) {

  var postDateObj = makePostDateObj(props.post.date);
  var { category, articleLink, title, content } = extractContent(props.post);
  var contentHtml = { __html: content };

  function handleClick(e) {
    let link = e.target.dataset.link;
    props.history.push(link);
  }

  const postStyle = {
    display: 'flex',
  }

  const postHeader = {
    padding: '10px',
    backgroundColor: '#e8e8e8',
    borderTop: '1px solid #ccc',
    borderBottom: '1px solid #ccc',
  }

  const contentWrapper = {
    padding: '10px'
  }

  return (
    <div>
      <header style={postHeader} onClick={handleClick}>
        <div className="title" data-link={articleLink}>{title}</div>
        <div className="date"></div>
      </header>
      <div style={postStyle}>
        <div><SideCalendar postDate={postDateObj}></SideCalendar></div>
        <div className="post-content">
          <article className={category}>
            <div style={contentWrapper} className="content-wrapper" dangerouslySetInnerHTML={contentHtml}></div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default withRouter(HomePost);
