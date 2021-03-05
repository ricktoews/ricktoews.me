import { useState, useEffect } from 'react';
import axios from 'axios';

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
    const fetchData = async () => {
      const result = await axios('http://rest.toewsweb.net/home-content.php/getall');
      var payload = result.data;
      console.log('fetchData; Result from axios', payload.data);
      setPosts(payload.data);
    };
    fetchData();
  }, []);
  return { posts };
}

