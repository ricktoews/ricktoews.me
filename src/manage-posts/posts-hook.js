import { useState, useEffect } from 'react';

function safeJsonParse(str) {
  var obj = { };
  try {
    obj = JSON.parse(str);
  } catch (e) {
    console.log('Problem parsing string to JSON:', str);
    console.log('--- error', e);
  }
  return obj;
}

function formatPostContent(contentStr) {
  var obj = safeJsonParse(contentStr);
  return obj;
}

function formatPosts(allPosts) {
  allPosts.forEach(p => {
    console.log('post to format', p);
    let contentObj = formatPostContent(p.content);
    console.log('contentObj', contentObj);
    p.content = contentObj;
  });
}

export const useFetchPosts = () => {
  const [ posts, setPosts ] = useState([]);

  useEffect(() => {

    fetch('http://rest.toewsweb.net/home-content.php/getall')
      .then(res => res.json())
      .then(res => {
        if (res.data) {
          console.log('refreshing posts', JSON.parse(JSON.stringify(res.data)));
          setPosts(res.data);
        } else {
          setPosts([]);
        }
      })
      .catch(err => {
        console.log('error loading posts', err);
      });
  }, []);
  return { posts };
}

